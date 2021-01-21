var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterpreterListComponent } from './../interpreter-management/interpreter-list/interpreter-list.component';
import { InterpreterAddComponent } from './../interpreter-management/interpreter-add/interpreter-add.component';
import { InterpreterEditComponent } from './../interpreter-management/interpreter-edit/interpreter-edit.component';
import { InterpreterViewComponent } from './../interpreter-management/interpreter-view/interpreter-view.component';
import { InterpreterProfileInformationComponent } from './interpreter-profile-information/interpreter-profile-information.component';
var routes = [
    { path: 'interpreter-list', component: InterpreterListComponent },
    { path: 'interpreter-list/:id/:type', component: InterpreterListComponent },
    { path: 'interpreter-add', component: InterpreterAddComponent },
    // { path: 'interpreter-profile/:id', component: InterpreterProfileComponent }, 
    { path: 'interpreter-profile/:id', component: InterpreterProfileInformationComponent },
    { path: 'interpreter-edit/:id', component: InterpreterEditComponent },
    { path: 'interpreter-view/:id', component: InterpreterViewComponent },
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