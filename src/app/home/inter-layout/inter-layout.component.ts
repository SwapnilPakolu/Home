import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-inter-layout',
  templateUrl: './inter-layout.component.html',
  styleUrls: ['./inter-layout.component.css']
})
export class InterLayoutComponent implements OnInit {
  title:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout()
  {
   this.router.navigate(['login']); 
  }
  changeToolbarTitle(title:string)
  {
    this.title = title;
  }

}
