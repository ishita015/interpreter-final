var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllRequestListSchedularComponent } from './all-request-list-schedular/all-request-list-schedular.component';
import { AllRequestSchedularComponent } from './all-request-schedular/all-request-schedular.component';
import { RequestListComponent } from './request-list/request-list.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { BroadcastRequestComponent } from './broadcast-request/broadcast-request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
const routes = [
    { path: 'all-request-schedular', component: AllRequestSchedularComponent },
    { path: 'all-request-list-schedular', component: AllRequestListSchedularComponent },
    { path: 'request-list-schedular', component: RequestListComponent },
    { path: 'progress-list-schedular', component: AcceptRequestComponent },
    { path: 'completed-list-schedular', component: CompleteRequestComponent },
    { path: 'cancelled-list-schedular', component: CancelledRequestComponent },
    { path: 'broadcast-list-schedular', component: BroadcastRequestComponent },
    { path: 'details/:id', component: RequestDetailComponent },
    { path: 'interpreter-view/:id', component: InterpreterListComponent },
];
let RequestSchedulerRoutingModule = /** @class */ (() => {
    let RequestSchedulerRoutingModule = class RequestSchedulerRoutingModule {
    };
    RequestSchedulerRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], RequestSchedulerRoutingModule);
    return RequestSchedulerRoutingModule;
})();
export { RequestSchedulerRoutingModule };
//# sourceMappingURL=request-scheduler-routing.module.js.map