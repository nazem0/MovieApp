import {  Router } from '@angular/router';
import { Component, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('SearchInput') searchInput!: ElementRef;
  constructor(private Router:Router){

  }
  search(){
    this.Router.navigate([`/movies/1/${this.searchInput.nativeElement.value}`])
  }
}
