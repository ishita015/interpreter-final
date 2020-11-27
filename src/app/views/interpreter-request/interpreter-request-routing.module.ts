import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpreterRequestListComponent } from './interpreter-request-list/interpreter-request-list.component';

const routes: Routes = [
  { path: 'list', component: InterpreterRequestListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpreterRequestRoutingModule { }
