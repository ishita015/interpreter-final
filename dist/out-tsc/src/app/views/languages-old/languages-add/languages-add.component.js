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
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
let LanguagesAddComponent = /** @class */ (() => {
    let LanguagesAddComponent = class LanguagesAddComponent {
        constructor(validation, fb, toastr, router, service) {
            this.validation = validation;
            this.fb = fb;
            this.toastr = toastr;
            this.router = router;
            this.service = service;
        }
        ngOnInit() {
            this.createForm();
        }
        /*========== Form Value Start Here========*/
        createForm() {
            this.langaugeForm = this.fb.group({
                name: ['', this.validation.onlyRequired_validator],
                code: ['', this.validation.onlyRequired_validator],
            });
        }
        /*========== Form Value End Here========*/
        /*========== Add Api Start Here========*/
        addLanguage() {
            console.log("form value", this.langaugeForm.value);
            this.submitted = true;
            if (this.langaugeForm.invalid) {
                return;
            }
            this.submitted = false;
            this.service.getLanguagAdd(this.langaugeForm.value)
                .subscribe(res => {
                console.log("api response", res);
                this.language_Obj = res;
                this.language_Msg = res;
                this.toastr.success(this.language_Msg.message, '', { timeOut: 1000 });
                // this.router.navigate(['/login'])
                this.router.navigate(['/languages/list']);
            });
        }
    };
    LanguagesAddComponent = __decorate([
        Component({
            selector: 'app-languages-add',
            templateUrl: './languages-add.component.html',
            styleUrls: ['./languages-add.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], LanguagesAddComponent);
    return LanguagesAddComponent;
})();
export { LanguagesAddComponent };
//# sourceMappingURL=languages-add.component.js.map