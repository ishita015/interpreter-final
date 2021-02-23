var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let DashboardModule = /** @class */ (() => {
    let DashboardModule = class DashboardModule {
    };
    DashboardModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                SharedComponentsModule,
                NgxEchartsModule,
                NgxDatatableModule,
                NgbModule,
                FormsModule,
                ReactiveFormsModule,
                ColorPickerModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }),
                DashboardRoutingModule
            ],
            declarations: [DashboadDefaultComponent, DashboardV2Component, DashboardV3Component, DashboardV4Component, AddCalenderComponent, EditCalenderComponent]
        })
    ], DashboardModule);
    return DashboardModule;
})();
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map