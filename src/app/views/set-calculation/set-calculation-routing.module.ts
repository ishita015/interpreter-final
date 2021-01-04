import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetCalculationAddComponent } from './set-calculation-add/set-calculation-add.component';

const routes: Routes = [
  {path:'set-calculation-add',component:SetCalculationAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetCalculationRoutingModule { }
