var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetCalculationRoutingModule } from './set-calculation-routing.module';
import { SetCalculationAddComponent } from './set-calculation-add/set-calculation-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var SetCalculationModule = /** @class */ (function () {
    function SetCalculationModule() {
    }
    SetCalculationModule = __decorate([
        NgModule({
            declarations: [SetCalculationAddComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SetCalculationRoutingModule
            ]
        })
    ], SetCalculationModule);
    return SetCalculationModule;
}());
export { SetCalculationModule };
//# sourceMappingURL=set-calculation.module.js.map