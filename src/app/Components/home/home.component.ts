import { Component, OnInit } from '@angular/core';
import { IMoviesList } from 'src/app/Models/IMoviesList';
import { MoviesAPIService } from 'src/app/Services/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resourcesURL = this.moviesAPI.ResourcesURL;
  movieList!: IMoviesList;  
  constructor(private moviesAPI: MoviesAPIService) {
    this.moviesAPI.GetAllMovies().subscribe((response) => {
      this.movieList = response;
      console.log(this.movieList);
    })
  }
  
}
