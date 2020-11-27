import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step9Component,
    Step10Component,
    Step11Component,
    Step12Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',
      libraries: ['places']
    }),
    PagesRoutingModule
  ]
})
export class PagesModule { }
