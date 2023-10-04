import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { OverviewLengthPipe } from './Pipes/overview-length.pipe';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MovieComponent } from './Components/movie/movie.component';
import { SafeURLPipe } from './Pipes/SafeURL.pipe';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LayoutComponent } from './Components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    OverviewLengthPipe,
    NotFoundComponent,
    MovieComponent,
    SafeURLPipe,
    HomeComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
