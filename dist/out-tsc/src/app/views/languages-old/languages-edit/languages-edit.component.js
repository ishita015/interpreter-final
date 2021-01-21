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
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var LanguagesEditComponent = /** @class */ (function () {
    function LanguagesEditComponent(validation, service, fb, toastr, router, route) {
        this.validation = validation;
        this.service = service;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
    }
    LanguagesEditComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.data = JSON.parse(localStorage.getItem('languageData'));
        console.log("data", this.data);
        this.patchValue();
    };
    /*========== Form Value Start Here========*/
    LanguagesEditComponent.prototype.createForm = function () {
        this.langaugeEditForm = this.fb.group({
            name: ['', this.validation.onlyRequired_validator],
            code: ['', this.validation.onlyRequired_validator],
            id: ['']
        });
    };
    /*========== Form Value End Here========*/
    /*========== Edit Input Value Start Here========*/
    LanguagesEditComponent.prototype.patchValue = function () {
        this.langaugeEditForm.get('name').patchValue(this.data.name);
        this.langaugeEditForm.get('code').patchValue(this.data.code);
    };
    /*==========Edit Input Value End Here========*/
    LanguagesEditComponent.prototype.submitEdit = function () {
        var _this = this;
        console.log("formmmmmmmmmmmm", this.langaugeEditForm.value);
        console.log("form value", this.langaugeEditForm.value);
        this.submitted = true;
        if (this.langaugeEditForm.invalid) {
            return;
        }
        this.submitted = false;
        this.langaugeEditForm.value.id = this.data.id;
        this.service.getUserUpadte(this.langaugeEditForm.value)
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.language_Obj = res;
            _this.language_Msg = res;
            console.log("api response", _this.language_Obj);
            _this.toastr.success(_this.language_Msg.message, '', { timeOut: 1000 });
            _this.router.navigate(['/languages/list']);
        });
    };
    LanguagesEditComponent = __decorate([
        Component({
            selector: 'app-languages-edit',
            templateUrl: './languages-edit.component.html',
            styleUrls: ['./languages-edit.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            HttpService, FormBuilder,
            ToastrService, Router,
            ActivatedRoute])
    ], LanguagesEditComponent);
    return LanguagesEditComponent;
}());
export { LanguagesEditComponent };
//# sourceMappingURL=languages-edit.component.js.map