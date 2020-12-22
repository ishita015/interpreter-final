import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpreterListComponent } from './../interpreter-management/interpreter-list/interpreter-list.component';
import { InterpreterAddComponent } from './../interpreter-management/interpreter-add/interpreter-add.component';
import { InterpreterEditComponent } from './../interpreter-management/interpreter-edit/interpreter-edit.component';
import { InterpreterViewComponent } from './../interpreter-management/interpreter-view/interpreter-view.component';
import { InterpreterProfileComponent } from './interpreter-profile/interpreter-profile.component';

const routes: Routes = [
  { path: 'interpreter-list', component: InterpreterListComponent },
  { path: 'interpreter-list/:id/:type', component: InterpreterListComponent },
  { path: 'interpreter-add', component: InterpreterAddComponent }, 
  { path: 'interpreter-profile/:id', component: InterpreterProfileComponent }, 
  { path: 'interpreter-edit/:id', component: InterpreterEditComponent }, 
  { path: 'interpreter-view/:id', component: InterpreterViewComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpreterManagementRoutingModule { }
