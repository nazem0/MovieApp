import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MovieComponent } from './Components/movie/movie.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: "", component: HomeComponent },
      { path: "movies", redirectTo: "movies/1/" },
      { path: "movies/:pageNumber", component: MovieListComponent,pathMatch:"full" },
      { path: "movies/:pageNumber/:query", component: MovieListComponent, pathMatch:"full" },
      { path: "movie/:movieId", component: MovieComponent }

    ]
  },
  {
    path: "**", component: NotFoundComponent
  },
  {
    path: "404", component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
