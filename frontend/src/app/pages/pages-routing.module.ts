import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Step1Component } from './registration/step1/step1.component';
import { Step2Component } from './registration/step2/step2.component';
import { Step3Component } from './registration/step3/step3.component';
import { Step4Component } from './registration/step4/step4.component';
import { Step5Component } from './registration/step5/step5.component';
import { Step6Component } from './registration/step6/step6.component';
import { Step7Component } from './registration/step7/step7.component';
import { Step8Component } from './registration/step8/step8.component';
import { Step9Component } from './registration/step9/step9.component';
import { Step10Component } from './registration/step10/step10.component';
import { Step11Component } from './registration/step11/step11.component';
import { Step12Component } from './registration/step12/step12.component';
const routes: Routes = [
  { path: '',component: Step1Component },
  { path: 'step2',component: Step2Component },
  { path: 'step3',component: Step3Component },
  { path: 'step4',component: Step4Component },
  { path: 'step5',component: Step5Component },
  { path: 'step6',component: Step6Component },
  { path: 'step7',component: Step7Component },
  { path: 'step8',component: Step8Component },
  { path: 'step9',component: Step9Component },
  { path: 'step10',component: Step10Component },
  { path: 'step11',component: Step11Component },
  { path: 'step12',component: Step12Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
