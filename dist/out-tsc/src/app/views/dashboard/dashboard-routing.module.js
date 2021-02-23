var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { AddCalenderComponent } from './add-calender/add-calender.component';
import { EditCalenderComponent } from './edit-calender/edit-calender.component';
const routes = [
    {
        path: 'v1',
        component: DashboadDefaultComponent
    },
    {
        path: 'v2',
        component: DashboardV2Component
    }, {
        path: 'v3',
        component: DashboardV2Component
    },
    {
        path: 'add',
        component: AddCalenderComponent
    },
    {
        path: 'edit',
        component: EditCalenderComponent
    },
];
let DashboardRoutingModule = /** @class */ (() => {
    let DashboardRoutingModule = class DashboardRoutingModule {
    };
    DashboardRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
})();
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map