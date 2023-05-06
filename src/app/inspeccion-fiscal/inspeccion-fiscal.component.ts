import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspeccion-fiscal',
  templateUrl: './inspeccion-fiscal.component.html',
  styleUrls: ['./inspeccion-fiscal.component.css']
})
export class InspeccionFiscalComponent {

  constructor(private router: Router) {}

  nuevo() {
    this.router.navigate(['/firma-if']);
  }

  eliminar() {

  }

  editar() {

  }

}
