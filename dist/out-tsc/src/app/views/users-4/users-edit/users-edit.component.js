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
var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(validation, service, fb, toastr, router, route) {
        this.validation = validation;
        this.service = service;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.data = JSON.parse(localStorage.getItem('userData'));
        console.log("data", this.data);
        this.patchValue();
    };
    /*========== Form Value Start Here========*/
    UsersEditComponent.prototype.createForm = function () {
        this.userEditForm = this.fb.group({
            email: ['', this.validation.onlyRequired_validator],
            name: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            id: ['']
        });
    };
    /*========== Form Value End Here========*/
    /*========== Edit Input Value Start Here========*/
    UsersEditComponent.prototype.patchValue = function () {
        this.userEditForm.get('email').patchValue(this.data.email);
        this.userEditForm.get('name').patchValue(this.data.name);
        this.userEditForm.get('mobile').patchValue(this.data.mobile);
        this.userEditForm.get('password').patchValue(this.data.password);
    };
    /*==========Edit Input Value End Here========*/
    UsersEditComponent.prototype.submitUser = function () {
        var _this = this;
        console.log("formmmmmmmmmmmm", this.userEditForm.value);
        console.log("form value", this.userEditForm.value);
        this.submitted = true;
        if (this.userEditForm.invalid) {
            return;
        }
        this.submitted = false;
        this.userEditForm.value.id = this.data.id;
        this.service.getUserUpadte(this.userEditForm.value)
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.useredit_Obj = res;
            _this.useredit_Msg = res;
            console.log("api response", _this.useredit_Obj);
            _this.toastr.success(_this.useredit_Msg.message, '', { timeOut: 1000 });
            _this.router.navigate(['/users/user-list']);
        });
    };
    UsersEditComponent = __decorate([
        Component({
            selector: 'app-users-edit',
            templateUrl: './users-edit.component.html',
            styleUrls: ['./users-edit.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            HttpService, FormBuilder,
            ToastrService, Router,
            ActivatedRoute])
    ], UsersEditComponent);
    return UsersEditComponent;
}());
export { UsersEditComponent };
//# sourceMappingURL=users-edit.component.js.map