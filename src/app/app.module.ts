import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { UserComponent } from './user/user.component';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeaderComponent } from './shared/header/header.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './shared/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    SalidaComponent,
    UserComponent,
    TipoCuentaComponent,
    ServiciosComponent,
    HeaderComponent,
    IngresarComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
