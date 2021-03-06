import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRequestRoutingModule } from './user-request-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { AgmCoreModule } from '@agm/core';
import { NgxMaskModule } from 'ngx-mask';
import { PendingRequestComponent } from './pending-request/pending-request.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    RequestListComponent, 
    InterpreterListComponent, 
    RequestDetailComponent, 
    PendingRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38'
    }),
    SharedComponentsModule,
    TagInputModule,
    NgbModule,
    UserRequestRoutingModule
  ]
})
export class UserRequestModule { }
