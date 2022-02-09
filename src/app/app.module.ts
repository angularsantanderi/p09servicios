import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaClientesComponent,
    CrearClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
