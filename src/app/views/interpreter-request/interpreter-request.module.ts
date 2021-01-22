import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpreterRequestRoutingModule } from './interpreter-request-routing.module';
import { InterpreterRequestListComponent } from './interpreter-request-list/interpreter-request-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { RejectRequestComponent } from './reject-reques/reject-request.component';
import { NgxMaskModule } from 'ngx-mask';

import { AllRequestComponent } from './all-request/all-request.component';
import { InterpreterHistoryListComponent } from './interpreter-history-list/interpreter-history-list.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { StepFormsComponent } from './step-forms/step-forms.component';

@NgModule({
  declarations: [InterpreterRequestListComponent, 
    AcceptRequestComponent, 
    CompleteRequestComponent, 
    CancelledRequestComponent, 
    RejectRequestComponent, 
    AllRequestComponent, InterpreterHistoryListComponent, StepFormsComponent],
  imports: [
    CommonModule,
    InterpreterRequestRoutingModule,
    FormsModule,
    NgxDatatableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    SharedComponentsModule,
    TagInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',//'AIzaSyBkH1R6_PO7fNY5L0z6CvV00oeNX8Vn0iE', 
      libraries: ['places']
    }),
    NgbModule,
  ]
})
export class InterpreterRequestModule { }
