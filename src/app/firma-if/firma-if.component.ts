import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-firma-if',
  templateUrl: './firma-if.component.html',
  styleUrls: ['./firma-if.component.css']
})
export class FirmaIFComponent {

  constructor(private router: Router) {}

  showAlert() {
    this.router.navigate
  }

  cancelar() {
    this.router.navigate(['/inspeccion-fiscal'])
  }
}


