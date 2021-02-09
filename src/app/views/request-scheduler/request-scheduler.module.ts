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
@NgModule({
  declarations: [AllRequestSchedularComponent, AllRequestListSchedularComponent],
  imports: [
    CommonModule,
    RequestSchedulerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    SharedComponentsModule,
    NgbModule,
    NgxMaskModule
  ]
})
export class RequestSchedulerModule { }
