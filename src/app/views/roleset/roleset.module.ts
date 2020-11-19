import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesetRoutingModule } from './roleset-routing.module';
import { RolesetComponent } from './roleset.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RolesetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RolesetRoutingModule
  ]
})
export class RolesetModule { }
