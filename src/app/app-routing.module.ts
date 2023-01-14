import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './citas/pages/inicio/inicio.component';
import { ReservasComponent } from './citas/pages/reservas/reservas.component';
import { CitasComponent } from './citas/pages/citas/citas.component';
import { IngresoComponent } from './citas/pages/ingreso/ingreso.component';

/* Una constante que es una matriz de objetos. Cada objeto tiene una ruta y un componente. */
const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {
    path: 'reservas',
    component: ReservasComponent,
  },
  {
    path: 'citas',
    component: CitasComponent,
  },
  {
    path: 'ingreso',
    component: IngresoComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
