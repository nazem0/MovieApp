import { MoviesAPIService } from 'src/app/Services/movies-api.service';
import { Component} from '@angular/core';
import { IMovie } from 'src/app/Models/IMovie';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  Query:string="";

  ResourcesURL: string = this.moviesAPI.ResourcesURL;

  MovieList: IMovie[] = [];

  Page!: number;

  Max:number=500;

  noResult=false;

  ShowMovies: Function = (page: number = this.Page) => {
    if (page > this.Max || page <= 0) {
      console.log(page);
      this.Router.navigate(['/404'])
      return;
    }
    this.moviesAPI.GetAllMovies(page,this.Query).subscribe({
      next: (response) => {
        if (response.results.length > 0) {
          this.MovieList = response.results;
          response.total_pages<500?this.Max=response.total_pages:null;
          console.log(response);
          return;
        }
        this.noResult=true;
      },
      error: (err) => console.error(err),
      complete: () => console.log('Movie List Received'),
    });
  };

  constructor(
    private moviesAPI: MoviesAPIService,
    private CurrentRoute: ActivatedRoute,
    private Router: Router
  ) {
    this.CurrentRoute.paramMap.subscribe({
      next: (params) => {
        this.Page = Number.parseInt(params.get('pageNumber')!);
        this.Query=params.get('query')!;
        console.log(this.Query);
        this.ShowMovies();
        console.log(this.Page);
      },
      error: (error) => console.error(error),
      complete: () => console.log('pageNumber Received'),
    });
  }
}
