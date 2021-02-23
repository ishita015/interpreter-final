var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
let SearchModule = /** @class */ (() => {
    let SearchModule = class SearchModule {
    };
    SearchModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                NgxPaginationModule,
                PerfectScrollbarModule
            ],
            declarations: [SearchComponent],
            exports: [SearchComponent]
        })
    ], SearchModule);
    return SearchModule;
})();
export { SearchModule };
//# sourceMappingURL=search.module.js.map