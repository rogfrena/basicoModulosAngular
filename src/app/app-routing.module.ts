import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UserComponent } from './user/user.component';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { IngresarComponent } from './ingresar/ingresar.component';


const routes: Routes = [
  {path: 'entrada', component: EntradaComponent},
  {path: 'salida', component: SalidaComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'usuario', component: UserComponent},
  {path: 'tipocuenta', component: TipoCuentaComponent},
  {path: 'ingresar', component: IngresarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
