import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent{

  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/app.component']);
  }
}

