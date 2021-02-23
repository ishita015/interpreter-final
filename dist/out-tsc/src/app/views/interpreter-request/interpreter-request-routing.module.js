var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { CompleteRequestComponent } from './complete-request/complete-request.component';
import { CancelledRequestComponent } from './cancelled-request/cancelled-request.component';
import { InterpreterRequestListComponent } from './interpreter-request-list/interpreter-request-list.component';
import { RejectRequestComponent } from './reject-reques/reject-request.component';
import { AllRequestComponent } from './all-request/all-request.component';
import { InterpreterHistoryListComponent } from './interpreter-history-list/interpreter-history-list.component';
import { StepFormsComponent } from './step-forms/step-forms.component';
const routes = [
    { path: 'all-request-list', component: AllRequestComponent },
    { path: 'all-request-list/:id', component: AllRequestComponent },
    { path: 'list', component: InterpreterRequestListComponent },
    { path: 'accept-list', component: AcceptRequestComponent },
    { path: 'completed-list', component: CompleteRequestComponent },
    { path: 'cancelled-list', component: CancelledRequestComponent },
    { path: 'reject-list', component: RejectRequestComponent },
    { path: 'interpreter-history', component: InterpreterHistoryListComponent },
    { path: 'step-form', component: StepFormsComponent },
];
let InterpreterRequestRoutingModule = /** @class */ (() => {
    let InterpreterRequestRoutingModule = class InterpreterRequestRoutingModule {
    };
    InterpreterRequestRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], InterpreterRequestRoutingModule);
    return InterpreterRequestRoutingModule;
})();
export { InterpreterRequestRoutingModule };
//# sourceMappingURL=interpreter-request-routing.module.js.map