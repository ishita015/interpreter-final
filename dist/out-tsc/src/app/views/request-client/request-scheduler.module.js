var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { AgmCoreModule } from '@agm/core';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { RequestListComponent } from './request-list/request-list.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { BroadcastRequestComponent } from './broadcast-request/broadcast-request.component';
import { MaterialModule } from '../../material.module';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
let RequestSchedulerModule = /** @class */ (() => {
    let RequestSchedulerModule = class RequestSchedulerModule {
    };
    RequestSchedulerModule = __decorate([
        NgModule({
            declarations: [
                AllRequestSchedularComponent,
                AllRequestListSchedularComponent,
                RequestListComponent,
                CompleteRequestComponent,
                CancelledRequestComponent,
                AcceptRequestComponent,
                BroadcastRequestComponent,
                RequestDetailComponent,
                InterpreterListComponent
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
                TimePickerModule,
                MatInputModule,
                MatAutocompleteModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',
                    libraries: ['places']
                }),
                NgxMaskModule.forRoot(),
            ]
        })
    ], RequestSchedulerModule);
    return RequestSchedulerModule;
})();
export { RequestSchedulerModule };
//# sourceMappingURL=request-scheduler.module.js.map