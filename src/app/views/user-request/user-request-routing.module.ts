import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  { path: 'list', component: RequestListComponent },
  { path: 'interpreter-view/:id', component: InterpreterListComponent },
  { path: 'request-view/:id', component: RequestDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRequestRoutingModule { }
