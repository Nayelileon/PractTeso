import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input()
    set islogin(islogin: boolean){
      this.isSidebarOpen = islogin;
  }

  isSidebarOpen = false;
  constructor(private router: Router) {}

  menu() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  inspeccion() {
    this.isSidebarOpen = false;
    this.router.navigate(['/inspeccion-fiscal']);
  
  }

  requerimiento() {
    this.isSidebarOpen = false;
    this.router.navigate(['/requerimientos']);
  }

  orden() {
    this.isSidebarOpen = false;
    this.router.navigate(['/orden-clausura']);

  }
}
