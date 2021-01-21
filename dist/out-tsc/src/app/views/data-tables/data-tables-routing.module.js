var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
var routes = [
    {
        path: 'list',
        component: ListPaginationComponent
    },
    {
        path: 'full',
        component: FullscreenTableComponent
    },
    {
        path: 'paging',
        component: PagingTableComponent
    },
    {
        path: 'filter',
        component: FilterTableComponent
    }
];
var DataTablesRoutingModule = /** @class */ (function () {
    function DataTablesRoutingModule() {
    }
    DataTablesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DataTablesRoutingModule);
    return DataTablesRoutingModule;
}());
export { DataTablesRoutingModule };
//# sourceMappingURL=data-tables-routing.module.js.map