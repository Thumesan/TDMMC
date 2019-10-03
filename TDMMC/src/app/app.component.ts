import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class AppComponent {
  title = 'TDM MANAGEMENT CONSULTING';
  router: string;

  constructor(private _router: Router){

          this.router = _router.url; 
    }
}
