import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  { path: 'list', component: RequestListComponent },
  { path: 'interpreter-view/:id', component: InterpreterListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRequestRoutingModule { }
