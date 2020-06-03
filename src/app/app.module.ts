import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { UserComponent } from './user/user.component';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    SalidaComponent,
    UserComponent,
    TipoCuentaComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
