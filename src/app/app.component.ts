import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public islogin: boolean = false;

  constructor(private router: Router){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.islogin = this.router.url !== '/inicio-sesion';
      }
    }) 
  }
  
}
