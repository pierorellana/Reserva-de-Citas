import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { CitasComponent } from './pages/citas/citas.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    ReservasComponent,
    CitasComponent,
    IngresoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class CitasModule { }
