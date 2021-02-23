var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
let UserRequestModule = /** @class */ (() => {
    let UserRequestModule = class UserRequestModule {
    };
    UserRequestModule = __decorate([
        NgModule({
            declarations: [
                RequestListComponent,
                InterpreterListComponent,
                RequestDetailComponent,
                PendingRequestComponent
            ],
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
    ], UserRequestModule);
    return UserRequestModule;
})();
export { UserRequestModule };
//# sourceMappingURL=user-request.module.js.map