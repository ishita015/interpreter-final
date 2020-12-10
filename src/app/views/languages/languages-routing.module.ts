import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesAddComponent } from './languages-add/languages-add.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { LanguagesEditComponent } from './languages-edit/languages-edit.component';
import { LanguagesViewComponent } from './languages-view/languages-view.component';
import { LanguagesAddEditComponent } from './languages-add-edit/languages-add-edit.component';
import { LangimportComponent } from './langimport/langimport.component';
import { InterpreterDetailsComponent } from './interpreter-details/interpreter-details.component';

const routes: Routes = [
  { path: 'list', component: LanguagesListComponent },
  { path: 'add', component: LanguagesAddComponent }, 
  { path: 'edit/:id', component: LanguagesEditComponent }, 
  { path: 'view/:id', component: LanguagesViewComponent }, 
  { path: 'excelImport', component: LangimportComponent }, 
  { path: 'interpreter-detail', component: InterpreterDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguagesRoutingModule { }
