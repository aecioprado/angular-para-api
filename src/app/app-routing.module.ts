// modulo de rota da aplicacao
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importacao do componente home
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path : 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }