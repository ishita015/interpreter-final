import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestSchedulerRoutingModule } from './request-scheduler-routing.module';
import { AllRequestSchedularComponent } from './all-request-schedular/all-request-schedular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllRequestListSchedularComponent } from './all-request-list-schedular/all-request-list-schedular.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { RequestListComponent } from './request-list/request-list.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { BroadcastRequestComponent } from './broadcast-request/broadcast-request.component';
import { MaterialModule } from '../..//material.module';
@NgModule({
  declarations: [
    AllRequestSchedularComponent,
    AllRequestListSchedularComponent,
    RequestListComponent,
    CompleteRequestComponent,
    CancelledRequestComponent,
    AcceptRequestComponent,
    BroadcastRequestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RequestSchedulerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    SharedComponentsModule,
    NgbModule,
    NgxMaskModule.forRoot(),
  ]
})
export class RequestSchedulerModule { }
