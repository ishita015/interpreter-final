var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesRoutingModule } from './data-tables-routing.module';
import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgxPaginationModule,
                NgxDatatableModule,
                NgbModule,
                DataTablesRoutingModule
            ],
            declarations: [FullscreenTableComponent, PagingTableComponent, FilterTableComponent, ListPaginationComponent]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());
export { DataTablesModule };
//# sourceMappingURL=data-tables.module.js.map