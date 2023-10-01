import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MovieComponent } from './Components/movie/movie.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  {path:"", component:AppComponent, children:[
    {path:"", component:HomeComponent},
    {path:"movies/:pageNumber", component:MovieListComponent},
    {path:"movie/:movieId", component:MovieComponent}

  ]},
  {
    path:"**", component:NotFoundComponent
  },
  {
    path:"404", component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
