var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { InterpreterTrackingComponent } from './interpreter-tracking/interpreter-tracking.component';
import { RateReviewComponent } from './rate-review/rate-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
let PagesModule = /** @class */ (() => {
    let PagesModule = class PagesModule {
    };
    PagesModule = __decorate([
        NgModule({
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
                Step12Component,
                InterpreterTrackingComponent,
                RateReviewComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                NgbModule,
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
    ], PagesModule);
    return PagesModule;
})();
export { PagesModule };
//# sourceMappingURL=pages.module.js.map