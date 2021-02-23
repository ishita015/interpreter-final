var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
let InvoiceModule = /** @class */ (() => {
    let InvoiceModule = class InvoiceModule {
    };
    InvoiceModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                NgxDatatableModule,
                ReactiveFormsModule,
                SharedComponentsModule,
                NgbModule,
                InvoiceRoutingModule
            ],
            declarations: [InvoiceDetailComponent, InvoiceListComponent]
        })
    ], InvoiceModule);
    return InvoiceModule;
})();
export { InvoiceModule };
//# sourceMappingURL=invoice.module.js.map