import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRequestListSchedularComponent } from './all-request-list-schedular/all-request-list-schedular.component';
import { AllRequestSchedularComponent } from './all-request-schedular/all-request-schedular.component';

const routes: Routes = [
  { path: 'all-request-schedular', component:AllRequestSchedularComponent },
  { path: 'all-request-list-schedular', component:AllRequestListSchedularComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestSchedulerRoutingModule { }
