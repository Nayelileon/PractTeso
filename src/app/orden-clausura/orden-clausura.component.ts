import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden-clausura',
  templateUrl: './orden-clausura.component.html',
  styleUrls: ['./orden-clausura.component.css']
})
export class OrdenClausuraComponent {

  data: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.data = [
      {
          "nombre": "OROZCO GARCIA DULCE ANAHY" ,
          "demon": "SALON CANDY LASHES AN NAILS",
          "domicilio": "AV. GARCIA #17601 - FRACC. LOS REYES",
          "cuenta": "262646",
          "acta": "46378",
          "giro": "SALON DE BELLEZA",
          "inspector": "GARCIA GUERRERO MANUEL"
      }      
  ]
  }
  orden(){
    
  }
}
