import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignInterpreterRoutingModule } from './assign-interpreter-routing.module';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';


@NgModule({
  declarations: [InterpreterListComponent],
  imports: [
    CommonModule,
    AssignInterpreterRoutingModule
  ]
})
export class AssignInterpreterModule { }
