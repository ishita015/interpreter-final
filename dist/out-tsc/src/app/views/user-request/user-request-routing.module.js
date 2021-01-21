var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestListComponent } from './request-list/request-list.component';
var routes = [
    { path: 'list', component: RequestListComponent },
    // { path: 'request-list', component: RequestListComponent },
    { path: 'pending-request', component: PendingRequestComponent },
    { path: 'interpreter-view/:id', component: InterpreterListComponent },
    { path: 'request-view/:id', component: RequestDetailComponent },
];
var UserRequestRoutingModule = /** @class */ (function () {
    function UserRequestRoutingModule() {
    }
    UserRequestRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UserRequestRoutingModule);
    return UserRequestRoutingModule;
}());
export { UserRequestRoutingModule };
//# sourceMappingURL=user-request-routing.module.js.map