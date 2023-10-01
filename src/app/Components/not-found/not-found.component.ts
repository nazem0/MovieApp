import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  
  back:Function=()=>{
    history.back();
  }
  home:Function=()=>{
    this.router.navigate([""]);
  }

  constructor(private router:Router){

  }
}
