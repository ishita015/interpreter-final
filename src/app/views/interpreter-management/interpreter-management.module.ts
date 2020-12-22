import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpreterManagementRoutingModule } from './interpreter-management-routing.module';
import { InterpreterAddComponent } from './interpreter-add/interpreter-add.component';
import { InterpreterEditComponent } from './interpreter-edit/interpreter-edit.component';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
import { InterpreterViewComponent } from './interpreter-view/interpreter-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { GooglePlaceModule } from "ngx-google-places-autocomplete";
// import { BrowserModule } from '@angular/platform-browser';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';


//calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule } from 'ngx-mask';
import { InterpreterProfileComponent } from './interpreter-profile/interpreter-profile.component';
@NgModule({
  declarations: [InterpreterAddComponent, InterpreterEditComponent, InterpreterListComponent, InterpreterViewComponent, InterpreterProfileComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    NgxDatatableModule,
    SharedComponentsModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    TagInputModule,
    ColorPickerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',//'AIzaSyBkH1R6_PO7fNY5L0z6CvV00oeNX8Vn0iE', 
      libraries: ['places']
    }),
    InterpreterManagementRoutingModule
  ]
})
export class InterpreterManagementModule { }
