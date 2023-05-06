import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';

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
