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
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(validation, fb, toastr, router, service) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
        this.showHideBtn = true;
        this.showHideNew = true;
        this.showHideOld = true;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.userId = JSON.parse(localStorage.getItem('userId'));
    };
    /*========== Form Value Start Here========*/
    ChangePasswordComponent.prototype.createForm = function () {
        this.adminProfileForm = this.fb.group({
            old_password: ['', this.validation.password_validator],
            new_password: ['', this.validation.password_validator],
            user_id: [''],
            confirm_pass: ['', this.validation.onlyRequired_validator],
        }, { validator: this.MustMatch('new_password', 'confirm_pass') });
    };
    /*========== Form Value End Here========*/
    /*==========Match Password and Confirm Password Validation Code Start Here========*/
    ChangePasswordComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    /*==========Match Password and Confirm Password Validation Code End Here========*/
    ChangePasswordComponent.prototype.change_pass = function () {
        var _this = this;
        console.log("form value", this.adminProfileForm.value);
        this.submitted = true;
        if (this.adminProfileForm.invalid) {
            return;
        }
        this.submitted = false;
        this.adminProfileForm.value.user_id = this.userId;
        this.service.changePassword(this.adminProfileForm.value)
            .subscribe(function (res) {
            // if(res['status']=='0'){
            console.log("api response", res);
            _this.admin_Obj = res;
            _this.admin_Msg = res;
            _this.toastr.success(_this.admin_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            _this.adminProfileForm.reset();
            // this.router.navigate(['/languages/list']);  
            // }
            // else{
            //   console.log("api response",res);
            //   this.admin_Obj = res;
            //   this.admin_Msg = res;
            //   this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
            //   // this.router.navigate(['/languages/list']);  
            // }
        });
    };
    /*==========Password Show/Hide Function Start Here========*/
    ChangePasswordComponent.prototype.showHidePassword = function () {
        this.showHideBtn = this.showHideBtn === false;
    };
    /*==========Password Show/Hide Function End Here========*/
    /*==========Password Show/Hide Function Start Here========*/
    ChangePasswordComponent.prototype.showHideNewPassword = function () {
        this.showHideNew = this.showHideNew === false;
    };
    /*==========Password Show/Hide Function End Here========*/
    /*==========Password Show/Hide Function Start Here========*/
    ChangePasswordComponent.prototype.showHideOldPassword = function () {
        this.showHideOld = this.showHideOld === false;
    };
    ChangePasswordComponent = __decorate([
        Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map