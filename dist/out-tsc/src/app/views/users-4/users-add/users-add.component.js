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
var UsersAddComponent = /** @class */ (function () {
    function UsersAddComponent(validation, fb, toastr, router, service) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
    }
    UsersAddComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    /*========== Form Value Start Here========*/
    UsersAddComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            name: ['', this.validation.onlyRequired_validator],
            email: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
        });
    };
    /*========== Form Value End Here========*/
    UsersAddComponent.prototype.addUser = function () {
        var _this = this;
        console.log("form value", this.userForm.value);
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.submitted = false;
        this.service.getUserAdd(this.userForm.value)
            .subscribe(function (res) {
            console.log("api response", res);
            _this.user_Obj = res;
            _this.user_Msg = res;
            _this.toastr.success(_this.user_Msg.message, '', { timeOut: 1000 });
            _this.router.navigate(['/users/user-list']);
        });
    };
    UsersAddComponent = __decorate([
        Component({
            selector: 'app-users-add',
            templateUrl: './users-add.component.html',
            styleUrls: ['./users-add.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], UsersAddComponent);
    return UsersAddComponent;
}());
export { UsersAddComponent };
//# sourceMappingURL=users-add.component.js.map