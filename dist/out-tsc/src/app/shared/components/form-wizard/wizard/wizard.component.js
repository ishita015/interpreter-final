var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
let WizardComponent = /** @class */ (() => {
    let WizardComponent = class WizardComponent {
        constructor() {
            this._steps = [];
            this._isCompleted = false;
            this.onStepChanged = new EventEmitter();
        }
        ngAfterContentInit() {
            this.wizardSteps.forEach(step => this._steps.push(step));
            this.steps[0].isActive = true;
        }
        get steps() {
            return this._steps.filter(step => !step.hidden);
        }
        get isCompleted() {
            return this._isCompleted;
        }
        get activeStep() {
            return this.steps.find(step => step.isActive);
        }
        set activeStep(step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        }
        get activeStepIndex() {
            return this.steps.indexOf(this.activeStep);
        }
        get hasNextStep() {
            return this.activeStepIndex < this.steps.length - 1;
        }
        get hasPrevStep() {
            return this.activeStepIndex > 0;
        }
        goToStep(step) {
            if (!this.isCompleted) {
                this.activeStep = step;
            }
        }
        next() {
            if (this.hasNextStep) {
                const nextStep = this.steps[this.activeStepIndex + 1];
                this.activeStep.onNext.emit();
                nextStep.isDisabled = false;
                this.activeStep = nextStep;
            }
        }
        previous() {
            if (this.hasPrevStep) {
                const prevStep = this.steps[this.activeStepIndex - 1];
                this.activeStep.onPrev.emit();
                prevStep.isDisabled = false;
                this.activeStep = prevStep;
            }
        }
        complete() {
            this.activeStep.onComplete.emit();
            this._isCompleted = true;
        }
    };
    __decorate([
        ContentChildren(WizardStepComponent),
        __metadata("design:type", QueryList)
    ], WizardComponent.prototype, "wizardSteps", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], WizardComponent.prototype, "onStepChanged", void 0);
    WizardComponent = __decorate([
        Component({
            selector: 'form-wizard',
            templateUrl: './wizard.component.html',
            styleUrls: ['./wizard.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], WizardComponent);
    return WizardComponent;
})();
export { WizardComponent };
//# sourceMappingURL=wizard.component.js.map