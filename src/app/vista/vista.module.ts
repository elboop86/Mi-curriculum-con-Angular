import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DatosComponent } from './datos/datos.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    DatosComponent,
    ExperienciaComponent,
    
  ],
  imports: [
    CommonModule,
    
  ]
})
export class VistaModule { }
