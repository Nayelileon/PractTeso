import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InspeccionFiscalComponent } from './inspeccion-fiscal/inspeccion-fiscal.component';
import { RequerimientosComponent } from './requerimientos/requerimientos.component';
import { OrdenClausuraComponent } from './orden-clausura/orden-clausura.component';
import { FirmaIFComponent } from './firma-if/firma-if.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [

  { path: 'app.component', component: AppComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'requerimientos', component: RequerimientosComponent},
  { path: 'inspeccion-fiscal', component: InspeccionFiscalComponent},
  { path: 'orden-clausura', component: OrdenClausuraComponent},
  { path: 'firma-if', component: FirmaIFComponent},
  
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    InicioSesionComponent,
    InspeccionFiscalComponent,
    RequerimientosComponent,
    OrdenClausuraComponent,
    FirmaIFComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    [BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
