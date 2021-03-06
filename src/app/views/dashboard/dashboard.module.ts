import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardV3Component } from './dashboard-v3/dashboard-v3.component';
import { DashboardV4Component } from './dashboard-v4/dashboard-v4.component';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';
import { AddCalenderComponent } from './add-calender/add-calender.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCalenderComponent } from './edit-calender/edit-calender.component';
import { AllRequestListsComponent } from './all-request-lists/all-request-lists.component';

import { NgxMaskModule } from 'ngx-mask';


import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    MatAutocompleteModule,
    MatDatepickerModule,        
    MatNativeDateModule,           
    MatInputModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    TimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DashboardRoutingModule
  ],
  declarations: [DashboadDefaultComponent, DashboardV2Component, DashboardV3Component, DashboardV4Component, AddCalenderComponent, EditCalenderComponent, AllRequestListsComponent]
})
export class DashboardModule { }
