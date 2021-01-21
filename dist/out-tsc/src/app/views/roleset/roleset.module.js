var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesetRoutingModule } from './roleset-routing.module';
import { RolesetComponent } from './roleset.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var RolesetModule = /** @class */ (function () {
    function RolesetModule() {
    }
    RolesetModule = __decorate([
        NgModule({
            declarations: [RolesetComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgxDatatableModule,
                RolesetRoutingModule
            ]
        })
    ], RolesetModule);
    return RolesetModule;
}());
export { RolesetModule };
//# sourceMappingURL=roleset.module.js.map