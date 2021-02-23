var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Validators } from "@angular/forms";
let ValidationsService = /** @class */ (() => {
    let ValidationsService = class ValidationsService {
        constructor() {
            /*===========Validations Expression Start here ===========*/
            this.notRequired_validator = [];
            this.onlyRequired_validator = [Validators.required];
            this.email_validator = [Validators.required, Validators.minLength(6), Validators.maxLength(150),
                Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,25}$')];
            this.password_validator = [Validators.required, Validators.minLength(8), Validators.maxLength(20),
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,15}$')];
        }
    };
    ValidationsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationsService);
    return ValidationsService;
})();
export { ValidationsService };
//# sourceMappingURL=validations.service.js.map