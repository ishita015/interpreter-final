import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpreterRequestRoutingModule } from './interpreter-request-routing.module';
import { InterpreterRequestListComponent } from './interpreter-request-list/interpreter-request-list.component';


@NgModule({
  declarations: [InterpreterRequestListComponent],
  imports: [
    CommonModule,
    InterpreterRequestRoutingModule
  ]
})
export class InterpreterRequestModule { }
