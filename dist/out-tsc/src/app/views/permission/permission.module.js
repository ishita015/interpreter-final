var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { PermissionRoutingModule } from './permission-routing.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoTestComponent } from './demo-test/demo-test.component';
var PermissionModule = /** @class */ (function () {
    function PermissionModule() {
    }
    PermissionModule = __decorate([
        NgModule({
            declarations: [AddRoleComponent, RoleListComponent, RoleEditComponent, ModuleAddComponent, ModuleListComponent, ModuleEditComponent, DemoTestComponent],
            imports: [
                // CommonModule, 
                FormsModule,
                ReactiveFormsModule,
                NgxDatatableModule,
                PermissionRoutingModule
            ]
        })
    ], PermissionModule);
    return PermissionModule;
}());
export { PermissionModule };
//# sourceMappingURL=permission.module.js.map