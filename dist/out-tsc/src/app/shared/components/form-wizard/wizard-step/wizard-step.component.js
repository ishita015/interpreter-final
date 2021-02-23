var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let WizardStepComponent = /** @class */ (() => {
    let WizardStepComponent = class WizardStepComponent {
        constructor() {
            this.hidden = false;
            this.isValid = true;
            this.showNext = true;
            this.showPrev = true;
            this.onNext = new EventEmitter();
            this.onPrev = new EventEmitter();
            this.onComplete = new EventEmitter();
            this._isActive = false;
            this.isDisabled = true;
        }
        set isActive(isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        }
        get isActive() {
            return this._isActive;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], WizardStepComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "hidden", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "isValid", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "showNext", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "showPrev", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], WizardStepComponent.prototype, "onNext", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], WizardStepComponent.prototype, "onPrev", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], WizardStepComponent.prototype, "onComplete", void 0);
    __decorate([
        Input('isActive'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], WizardStepComponent.prototype, "isActive", null);
    WizardStepComponent = __decorate([
        Component({
            selector: 'wizard-step',
            template: `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
        }),
        __metadata("design:paramtypes", [])
    ], WizardStepComponent);
    return WizardStepComponent;
})();
export { WizardStepComponent };
//# sourceMappingURL=wizard-step.component.js.map