import { MoviesAPIService } from 'src/app/Services/movies-api.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { IMovie } from 'src/app/Models/IMovie';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  ResourcesURL: string = this.moviesAPI.ResourcesURL;

  MovieList: IMovie[] = [];

  Page!: number;

  PagesCount!: number;

  ShowMovies: Function = (page: number = this.Page) => {
    if (page > 500 || page <= 0) {
      console.log(page);
      this.Router.navigate(['/404'])
      return;
    }
    this.moviesAPI.GetAllMovies(page).subscribe({
      next: (response) => {
        this.MovieList = response.results;
        this.PagesCount = response.total_pages;
        console.log(response);
      },
      error: (err) => console.error(err),
      complete: () => console.log('Movie List Received'),
    });
  };

  TrackByID(index:number, movie:IMovie) {
    return movie.id;
  }
  constructor(
    private moviesAPI: MoviesAPIService,
    private CurrentRoute: ActivatedRoute,
    private Router: Router
  ) {
    this.CurrentRoute.paramMap.subscribe({
      next: (params) => {
        this.Page = Number.parseInt(params.get('pageNumber')!);
        this.ShowMovies();
        console.log(this.Page);
      },
      error: (error) => console.error(error),
      complete: () => console.log('pageNumber Received'),
    });
  }
  ngOnInit(): void {
    this.ShowMovies(this.Page);
  }
}
