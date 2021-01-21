var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterpreterListComponent } from './../client-management/interpreter-list/interpreter-list.component';
import { InterpreterAddComponent } from './../client-management/interpreter-add/interpreter-add.component';
import { InterpreterEditComponent } from './../client-management/interpreter-edit/interpreter-edit.component';
import { InterpreterViewComponent } from './../client-management/interpreter-view/interpreter-view.component';
import { InterpreterProfileInformationComponent } from './interpreter-profile-information/interpreter-profile-information.component';
var routes = [
    { path: 'client-list', component: InterpreterListComponent },
    { path: 'client-list/:id/:type', component: InterpreterListComponent },
    { path: 'client-add', component: InterpreterAddComponent },
    { path: 'client-edit/:id', component: InterpreterAddComponent },
    // { path: 'interpreter-profile/:id', component: InterpreterProfileComponent }, 
    { path: 'client-profile/:id', component: InterpreterProfileInformationComponent },
    { path: 'client-edit/:id', component: InterpreterEditComponent },
    { path: 'client-view/:id', component: InterpreterViewComponent },
];
var InterpreterManagementRoutingModule = /** @class */ (function () {
    function InterpreterManagementRoutingModule() {
    }
    InterpreterManagementRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], InterpreterManagementRoutingModule);
    return InterpreterManagementRoutingModule;
}());
export { InterpreterManagementRoutingModule };
//# sourceMappingURL=interpreter-management-routing.module.js.map