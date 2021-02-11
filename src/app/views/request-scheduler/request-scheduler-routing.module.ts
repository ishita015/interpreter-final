import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRequestListSchedularComponent } from './all-request-list-schedular/all-request-list-schedular.component';
import { AllRequestSchedularComponent } from './all-request-schedular/all-request-schedular.component';
import { RequestListComponent } from './request-list/request-list.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { BroadcastRequestComponent } from './broadcast-request/broadcast-request.component';
const routes: Routes = [
  { path: 'all-request-schedular', component:AllRequestSchedularComponent },
  { path: 'all-request-list-schedular', component:AllRequestListSchedularComponent },
  { path: 'request-list-schedular', component:RequestListComponent },
  { path: 'progress-list-schedular', component: AcceptRequestComponent },
  { path: 'completed-list-schedular', component: CompleteRequestComponent },
  { path: 'cancelled-list-schedular', component: CancelledRequestComponent },
  { path: 'broadcast-list-schedular', component: BroadcastRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestSchedulerRoutingModule { }
