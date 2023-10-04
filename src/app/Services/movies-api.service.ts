import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovieDetails } from '../Models/IMovieDetails';
import { IMoviesList } from '../Models/IMoviesList';
import { ITrailerList } from '../Models/ITrailerList';

@Injectable({
  providedIn: 'root',
})
export class MoviesAPIService {
  ResourcesURL: string = 'https://image.tmdb.org/t/p/original/';
  constructor(private Http: HttpClient) { }
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTIyYzBmZGFiNmI1MjMyZDk4ZmE1ZGIyMGFiM2I2OCIsInN1YiI6IjY0YmMxN2VkZTlkYTY5MDBhZjcwYTE3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X-fdOjfkDIu5R_mO4NSIrhegIWdahKrRspVqZw9cIIk',
    },
  };

  GetAllGenres(){
    return this.Http.get('https://api.themoviedb.org/3/genre/movie/list',this.options);
  }

  GetAllMovies(page: number = 1, query: string = '') {
    if (query)
      return this.Http.get<IMoviesList>(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,this.options
      );
    return this.Http.get<IMoviesList>(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&page=${page}&sort_by=popularity.desc`,
      this.options
    );
  }

  GetMovie(movieId: number) {
    return this.Http.get<IMovieDetails>(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      this.options
    );
  }

  GetMovieTrailers(movieId: number) {
    return this.Http.get<ITrailerList>(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      this.options
    );
  }

  GetWatchProviders(movieId: number) {
    return this.Http.get<any>(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
      this.options
    );
  }
}