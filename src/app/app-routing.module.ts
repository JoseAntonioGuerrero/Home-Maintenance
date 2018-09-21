import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ChecklistComponent } from './components/checklist/checklist.component';

const routes: Routes = [
  { path: 'buscar', component: BuscarComponent },
  { path: 'CheckList', component: ChecklistComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})


export class AppRoutingModule { }
