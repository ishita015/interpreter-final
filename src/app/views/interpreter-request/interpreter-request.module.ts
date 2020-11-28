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



@NgModule({
  declarations: [InterpreterRequestListComponent, AcceptRequestComponent],
  imports: [
    CommonModule,
    InterpreterRequestRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    TagInputModule,
    NgbModule,
  ]
})
export class InterpreterRequestModule { }