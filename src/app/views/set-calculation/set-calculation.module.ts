import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetCalculationRoutingModule } from './set-calculation-routing.module';
import { SetCalculationAddComponent } from './set-calculation-add/set-calculation-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SetCalculationAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SetCalculationRoutingModule
  ]
})
export class SetCalculationModule { }
