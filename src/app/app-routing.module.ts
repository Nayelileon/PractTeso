import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';


@NgModule({
  imports: [BrowserModule],
  exports: [RouterModule],
  providers: [],

})
export class AppRoutingModule { }
