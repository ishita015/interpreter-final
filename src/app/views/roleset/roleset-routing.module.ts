import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesetComponent } from './roleset.component';
const routes: Routes = [
  { path: 'roleset/:id', component: RolesetComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesetRoutingModule { }
