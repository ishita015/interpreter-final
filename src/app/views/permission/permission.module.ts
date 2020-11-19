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

@NgModule({
  declarations: [AddRoleComponent, RoleListComponent, RoleEditComponent, ModuleAddComponent, ModuleListComponent, ModuleEditComponent, DemoTestComponent],
  imports: [
    // CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    PermissionRoutingModule
  ]
})
export class PermissionModule { }
