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


const routes: Routes = [

  { path: 'app.component', component: AppComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'requerimientos', component: RequerimientosComponent},
  { path: 'inspeccion-fiscal', component: InspeccionFiscalComponent},
  { path: 'orden-clausura', component: OrdenClausuraComponent},
  
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
    OrdenClausuraComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
