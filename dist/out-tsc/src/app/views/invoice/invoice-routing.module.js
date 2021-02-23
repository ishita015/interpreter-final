var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
const routes = [
    {
        path: '',
        component: InvoiceListComponent
    },
    {
        path: 'new',
        component: InvoiceDetailComponent
    },
    {
        path: 'edit/:id',
        component: InvoiceDetailComponent
    }
];
let InvoiceRoutingModule = /** @class */ (() => {
    let InvoiceRoutingModule = class InvoiceRoutingModule {
    };
    InvoiceRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
})();
export { InvoiceRoutingModule };
//# sourceMappingURL=invoice-routing.module.js.map