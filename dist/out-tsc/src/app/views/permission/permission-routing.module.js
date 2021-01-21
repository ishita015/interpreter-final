var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoleListComponent } from './role-list/role-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { SetPermissionComponent } from './set-permission/set-permission.component';
import { CommonModule } from '@angular/common';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
var routes = [
    { path: 'rolelist', component: RoleListComponent },
    { path: 'modulelist', component: ModuleListComponent },
    { path: 'role-add', component: AddRoleComponent },
    { path: 'module-add', component: ModuleAddComponent },
    { path: 'setpermission/:id', component: SetPermissionComponent },
    { path: 'demo/:id', component: DemoTestComponent },
    { path: 'editRole/:id', component: RoleEditComponent },
    { path: 'editModel/:id', component: ModuleEditComponent },
];
var PermissionRoutingModule = /** @class */ (function () {
    function PermissionRoutingModule() {
    }
    PermissionRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes), CommonModule],
            exports: [RouterModule]
        })
    ], PermissionRoutingModule);
    return PermissionRoutingModule;
}());
export { PermissionRoutingModule };
//# sourceMappingURL=permission-routing.module.js.map