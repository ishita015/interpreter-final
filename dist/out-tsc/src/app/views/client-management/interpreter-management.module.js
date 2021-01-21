var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { InterpreterProfileInformationComponent } from './interpreter-profile-information/interpreter-profile-information.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
var InterpreterManagementModule = /** @class */ (function () {
    function InterpreterManagementModule() {
    }
    InterpreterManagementModule = __decorate([
        NgModule({
            declarations: [InterpreterAddComponent, InterpreterEditComponent, InterpreterListComponent, InterpreterViewComponent, InterpreterProfileComponent, InterpreterProfileInformationComponent],
            imports: [
                CommonModule,
                FormsModule, ReactiveFormsModule,
                NgxDatatableModule,
                SharedComponentsModule,
                NgbModule,
                NgxMaskModule.forRoot(),
                TagInputModule,
                ColorPickerModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatInputModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }),
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',
                    libraries: ['places']
                }),
                InterpreterManagementRoutingModule
            ]
        })
    ], InterpreterManagementModule);
    return InterpreterManagementModule;
}());
export { InterpreterManagementModule };
//# sourceMappingURL=interpreter-management.module.js.map