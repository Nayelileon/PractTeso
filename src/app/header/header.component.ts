import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input() islogin: boolean = false; 
  @Output() toggleMenu = new EventEmitter<never>();

  constructor(private router: Router) {}

  logout() {
    
    this.router.navigate(['/inicio-sesion']);
  }

  menu() {
    this.toggleMenu.emit();
  }
  

}

