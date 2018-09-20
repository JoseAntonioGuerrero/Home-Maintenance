import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  { path: 'buscar', component: BuscarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})


export class AppRoutingModule { }
