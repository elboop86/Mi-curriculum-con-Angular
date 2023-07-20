import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './vista/cabecera/cabecera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosComponent } from './vista/datos/datos.component';
import { CompetenciasComponent } from './vista/competencias/competencias.component';
import { ExperienciaComponent } from './vista/experiencia/experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    DatosComponent,
    CompetenciasComponent,
    ExperienciaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
