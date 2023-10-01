import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails } from 'src/app/Models/IMovieDetails';
import { MoviesAPIService } from 'src/app/Services/movies-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  constructor(private moviesAPI: MoviesAPIService, private currentRoute: ActivatedRoute) {
    this.currentRoute.paramMap.subscribe({
      next: (params) => {
        this.movieId = Number.parseInt(params.get('movieId')!);
        this.moviesAPI.GetWatchProviders(this.movieId).subscribe(response=>console.log(response))
        this.showMovieDetails();
      },
      error: (error) => console.error(error),
      complete: () => console.log('Movie Details Received'),
    });
  }
  movieId!: number;
  movieDetails!: IMovieDetails;
  ResourcesURL: string = this.moviesAPI.ResourcesURL;
  trailers: string[] = [];
  trailer: string = "";
  trailersIndexer: number = 0;
  showMovieDetails(page: number = this.movieId) {
    this.moviesAPI.GetMovie(page).subscribe({
      next: (response) => {
        console.log(response);
        this.movieDetails = response;
        this.getMovieTrailers();
      },
      error: (err) => console.error(err),
      complete: () => console.log('Movie List Received'),
    });
  };
  getMovieTrailers(movieId: number = this.movieId) {
    this.moviesAPI.GetMovieTrailers(movieId).subscribe({
      next: (response) => {
        response.results.forEach(element => {
          this.trailers.push(`https://www.${element.site}.com/embed/${element.key}`)
        });
        this.trailer = this.trailers[0];
        console.log(this.trailers);
      },
      error: (err) => console.error(err),
      complete: () => console.log('Movie Trailers Received'),
    })
  }
  firstTrailer() {
    this.trailersIndexer = 0;
    this.trailer = this.trailers[this.trailersIndexer]
  }
  lastTrailer() {
    this.trailersIndexer = this.trailers.length - 1
    this.trailer = this.trailers[this.trailersIndexer]
  }
  nextTrailer() {
    if (this.trailersIndexer < this.trailers.length - 1)
      this.trailersIndexer++;
    else
      this.firstTrailer();

    this.trailer = this.trailers[this.trailersIndexer]

  }
  previousTrailer() {
    if (this.trailersIndexer > 0)
      this.trailersIndexer--;

    else
      this.lastTrailer();

    this.trailer = this.trailers[this.trailersIndexer]

  }

}
