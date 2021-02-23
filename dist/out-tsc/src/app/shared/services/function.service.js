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
let FunctionService = /** @class */ (() => {
    let FunctionService = class FunctionService {
        constructor() { }
        // ---------------------------- US date formate start----------------------------//
        dateFormate() {
            let today = new Date('dd/MM/yyyy');
            console.log(today);
            today.toLocaleDateString("en-US");
        }
        // ---------------------------- US date formate end----------------------------//
        // ---------------------------- US mobile formate start----------------------------//
        formatPhoneNumber(phoneNumberString) {
            var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
            var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                var intlCode = (match[1] ? '+1 ' : '');
                return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
            }
            return null;
        }
    };
    FunctionService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FunctionService);
    return FunctionService;
})();
export { FunctionService };
//# sourceMappingURL=function.service.js.map