import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpreterListComponent } from './../client-management/interpreter-list/interpreter-list.component';
import { InterpreterAddComponent } from './../client-management/interpreter-add/interpreter-add.component';
import { InterpreterEditComponent } from './../client-management/interpreter-edit/interpreter-edit.component';
import { InterpreterViewComponent } from './../client-management/interpreter-view/interpreter-view.component';
import { InterpreterProfileComponent } from './interpreter-profile/interpreter-profile.component';
import { InterpreterProfileInformationComponent } from './interpreter-profile-information/interpreter-profile-information.component';

const routes: Routes = [
  { path: 'client-list', component: InterpreterListComponent },
  { path: 'client-list/:id/:type', component: InterpreterListComponent },
  { path: 'client-add', component: InterpreterAddComponent }, 
  // { path: 'interpreter-profile/:id', component: InterpreterProfileComponent }, 
  { path: 'client-profile/:id', component: InterpreterProfileInformationComponent }, 
  { path: 'client-edit/:id', component: InterpreterEditComponent }, 
  { path: 'client-view/:id', component: InterpreterViewComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpreterManagementRoutingModule { }
