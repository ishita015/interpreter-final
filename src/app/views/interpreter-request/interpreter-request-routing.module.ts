import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { InterpreterRequestListComponent } from './interpreter-request-list/interpreter-request-list.component';

const routes: Routes = [
  { path: 'list', component: InterpreterRequestListComponent },
  { path: 'accept-list', component: AcceptRequestComponent },
  { path: 'completed-list', component: CompleteRequestComponent },
  { path: 'cancelled-list', component: CancelledRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpreterRequestRoutingModule { }
