import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulo de rota
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';


@NgModule({
  declarations: [ClientesFormComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
