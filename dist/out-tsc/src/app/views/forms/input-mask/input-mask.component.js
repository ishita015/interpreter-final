var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
let InputMaskComponent = /** @class */ (() => {
    let InputMaskComponent = class InputMaskComponent {
        constructor(fb) {
            this.fb = fb;
            this.isbnMask1 = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/];
            this.isbnMask2 = [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/];
            this.isbnMask3 = [/\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '/', /\d/];
            this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            this.cardMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
            this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        }
        ngOnInit() {
            this.formMask = this.fb.group({
                experience: [],
                phone: []
            });
        }
        submit() {
            console.log(this.formMask.value);
        }
    };
    InputMaskComponent = __decorate([
        Component({
            selector: 'app-input-mask',
            templateUrl: './input-mask.component.html',
            styleUrls: ['./input-mask.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], InputMaskComponent);
    return InputMaskComponent;
})();
export { InputMaskComponent };
//# sourceMappingURL=input-mask.component.js.map