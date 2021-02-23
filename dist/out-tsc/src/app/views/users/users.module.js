var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { GooglePlaceModule } from "ngx-google-places-autocomplete";
// import { BrowserModule } from '@angular/platform-browser';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';
//calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule } from 'ngx-mask';
//ViewCalendarComponent
let UsersModule = /** @class */ (() => {
    let UsersModule = class UsersModule {
    };
    UsersModule = __decorate([
        NgModule({
            declarations: [UsersAddComponent, UsersEditComponent, ViewCalendarComponent, UsersListComponent, UsersViewComponent],
            imports: [
                CommonModule,
                FormsModule,
                NgxDatatableModule,
                ReactiveFormsModule,
                NgxMaskModule.forRoot(),
                SharedComponentsModule,
                TagInputModule,
                NgbModule,
                ColorPickerModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }),
                UsersRoutingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',
                    libraries: ['places']
                })
                // GooglePlaceModule,
                // BrowserModule
            ]
        })
    ], UsersModule);
    return UsersModule;
})();
export { UsersModule };
//# sourceMappingURL=users.module.js.map