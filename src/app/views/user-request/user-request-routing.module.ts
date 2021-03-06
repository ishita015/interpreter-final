import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestListComponent } from './request-list/request-list.component';


const routes: Routes = [
  { path: 'list', component: RequestListComponent },
  // { path: 'request-list', component: RequestListComponent },
  { path: 'pending-request', component: PendingRequestComponent },
  { path: 'interpreter-view/:id', component: InterpreterListComponent },
  { path: 'request-view/:id', component: RequestDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRequestRoutingModule { }
