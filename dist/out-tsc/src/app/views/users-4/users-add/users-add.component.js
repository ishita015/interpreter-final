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
let UsersAddComponent = /** @class */ (() => {
    let UsersAddComponent = class UsersAddComponent {
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
            this.userForm = this.fb.group({
                name: ['', this.validation.onlyRequired_validator],
                email: ['', this.validation.onlyRequired_validator],
                password: ['', this.validation.onlyRequired_validator],
                mobile: ['', this.validation.onlyRequired_validator],
            });
        }
        /*========== Form Value End Here========*/
        addUser() {
            console.log("form value", this.userForm.value);
            this.submitted = true;
            if (this.userForm.invalid) {
                return;
            }
            this.submitted = false;
            this.service.getUserAdd(this.userForm.value)
                .subscribe(res => {
                console.log("api response", res);
                this.user_Obj = res;
                this.user_Msg = res;
                this.toastr.success(this.user_Msg.message, '', { timeOut: 1000 });
                this.router.navigate(['/users/user-list']);
            });
        }
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
})();
export { UsersAddComponent };
//# sourceMappingURL=users-add.component.js.map