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
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { ValidationsService } from "../../../shared/services/validations.service";
import { HttpService } from "../../../shared/services/http.service";
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from './../../../shared/services/permission.service';
var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, auth, router, toastr, validation, service, permission) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.validation = validation;
        this.service = service;
        this.permission = permission;
        this.showHideNew = true;
        this.createForm();
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                _this.loadingText = 'Loading Dashboard Module...';
                _this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                _this.loading = false;
            }
        });
    };
    /*==========Create Form Function Start Here========*/
    SigninComponent.prototype.createForm = function () {
        this.signinForm = this.fb.group({
            email: ['', this.validation.email_validator],
            password: ['', this.validation.password_validator]
        });
    };
    /*==========SigninForm Function End Here========*/
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this.submitted = true;
        this.loadingText = 'Sigining in...';
        console.log('kkkkkkk', this.signinForm.value);
        this.auth.signin(this.signinForm.value)
            .subscribe(function (res) {
            console.log("login api", res);
            _this.log_Obj = res;
            _this.log_Msg = res;
            console.log("log object", _this.log_Obj);
            if (_this.signinForm.value.email === undefined || _this.signinForm.value.email === '' ||
                _this.signinForm.value.password === undefined || _this.signinForm.value.password === '') {
            }
            if (_this.log_Obj.status == 0) {
                _this.log_Msg = res;
                _this.toastr.error(_this.log_Obj.message, '', { timeOut: 2000 });
            }
            else {
                _this.log_Obj = res['data'][0];
                _this.log_Msg = res;
                console.log('log_Obj--', _this.log_Obj);
                localStorage.setItem('loginData', JSON.stringify(_this.log_Obj));
                _this.name = _this.log_Obj.first_name + " " + _this.log_Obj.last_name;
                localStorage.setItem('userId', JSON.stringify(_this.log_Obj.id));
                localStorage.setItem('roleId', JSON.stringify(_this.log_Obj.role_id));
                localStorage.setItem('roleName', JSON.stringify(_this.log_Obj.role_name));
                localStorage.setItem('loggeduser', JSON.stringify(_this.name));
                _this.toastr.success(_this.log_Msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                if (_this.log_Obj.role_id == 1) {
                    _this.router.navigate(['/dashboard/v1']);
                }
                else {
                    _this.router.navigate(['/dashboard/v2']);
                }
                // dashboard-v2
                _this.service.editPemisssion(_this.log_Obj.role_id)
                    .subscribe(function (res) {
                    console.log("apiiiiiiiiii response", res);
                    _this.role_obj = res;
                    console.log("role_obj", _this.role_obj);
                    localStorage.setItem('Allpermission', JSON.stringify(_this.role_obj));
                    // this.router.navigate(['/permission/setpermission',id]);
                });
            }
            _this.loading = false;
        });
    };
    /*==========Password Show/Hide Function Start Here========*/
    SigninComponent.prototype.showHidePassword = function () {
        this.showHideNew = this.showHideNew === false;
    };
    SigninComponent = __decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss'],
            animations: [SharedAnimations]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            AuthService,
            Router,
            ToastrService,
            ValidationsService,
            HttpService,
            PermissionService])
    ], SigninComponent);
    return SigninComponent;
}());
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map