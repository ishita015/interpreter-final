import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRequestListSchedularComponent } from './all-request-list-schedular/all-request-list-schedular.component';
import { AllRequestSchedularComponent } from './all-request-schedular/all-request-schedular.component';
import { RequestListComponent } from './request-list/request-list.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { BroadcastRequestComponent } from './broadcast-request/broadcast-request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';


const routes: Routes = [
  { path: 'create-request', component:AllRequestSchedularComponent },
  { path: 'all-request-list', component:AllRequestListSchedularComponent },
  // { path: 'request-list-schedular', component:RequestListComponent },
  { path: 'progress-request', component: AcceptRequestComponent },
  { path: 'completed-request', component: CompleteRequestComponent },
  { path: 'cancelled-request', component: CancelledRequestComponent },
  // { path: 'broadcast-list-schedular', component: BroadcastRequestComponent },
  { path: 'details/:id', component: RequestDetailComponent },
  // { path: 'interpreter-view/:id', component: InterpreterListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestSchedulerRoutingModule { }
