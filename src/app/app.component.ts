import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bk-news';
  str;
  constructor( private router: Router){}
  clickSearch(){
    this.router.navigate(['/search/' + this.str])
  }
}
