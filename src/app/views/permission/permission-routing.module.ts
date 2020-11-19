import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleListComponent } from './role-list/role-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { SetPermissionComponent } from './set-permission/set-permission.component';
import { CommonModule } from '@angular/common';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';

const routes: Routes = [
	{ path: 'rolelist', component: RoleListComponent },
	{ path: 'modulelist', component: ModuleListComponent },
	{ path: 'role-add', component: AddRoleComponent }, 
	{ path: 'module-add', component: ModuleAddComponent }, 
	{ path: 'setpermission/:id', component: SetPermissionComponent }, 
	{ path: 'demo/:id', component: DemoTestComponent }, 
	{ path: 'editRole/:id', component: RoleEditComponent }, 
	{ path: 'editModel/:id', component: ModuleEditComponent }, 
    //{ path: 'view/:id', component: LanguagesViewComponent }, 	
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
