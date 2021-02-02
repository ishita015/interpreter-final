import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesEditComponent } from './languages-edit/languages-edit.component';
import { LanguagesViewComponent } from './languages-view/languages-view.component';
import { LangimportComponent } from './langimport/langimport.component';
import { InterpreterDetailsComponent } from './interpreter-details/interpreter-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgbModule,
    LanguagesRoutingModule
  ],
  declarations: [
    LanguagesListComponent, 
    LanguagesEditComponent, LanguagesViewComponent, LangimportComponent, InterpreterDetailsComponent]
})
export class LanguagesModule { }
