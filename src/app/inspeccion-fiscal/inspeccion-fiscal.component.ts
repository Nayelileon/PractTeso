import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspeccion-fiscal',
  templateUrl: './inspeccion-fiscal.component.html',
  styleUrls: ['./inspeccion-fiscal.component.css']
})
export class InspeccionFiscalComponent {

  data: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.data = [
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "guadalupe nayeli leon ochoa" ,
          "demon": "kda",
          "domicilio": "lostrigales1695",
          "cuenta": "34234874823",
          "acta": "ACT002",
          "giro": "GIRO002",
          "inspector": "Moonie"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      },
      {
          "nombre": "carlos humberto soto reyes" ,
          "demon": "eldiablo001",
          "domicilio": "praderas de margarita 1416",
          "cuenta": "2810006593",
          "acta": "ACT001",
          "giro": "GIRO001",
          "inspector": "Cruper"
      }
      
  ]
  }

  nuevo() {
    this.router.navigate(['/firma-if']);
  }

  eliminar() {

  }

  editar() {

  }

}
