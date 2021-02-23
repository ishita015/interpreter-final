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
let AddRoleComponent = /** @class */ (() => {
    let AddRoleComponent = class AddRoleComponent {
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
            this.roleForm = this.fb.group({
                role_name: ['', this.validation.onlyRequired_validator],
            });
        }
        /*========== Form Value End Here========*/
        /*========== Add Api Start Here========*/
        addRole() {
            console.log("form value", this.roleForm.value);
            this.submitted = true;
            if (this.roleForm.invalid) {
                return;
            }
            this.submitted = false;
            this.service.getRoleAdd(this.roleForm.value)
                .subscribe(res => {
                console.log("api response", res);
                this.role_Obj = res;
                this.role_Msg = res;
                this.toastr.success(this.role_Msg.message, '', { timeOut: 1000 });
                // this.router.navigate(['/login'])
                this.router.navigateByUrl('/sessions/signin', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/permission/rolelist']);
                });
            });
        }
    };
    AddRoleComponent = __decorate([
        Component({
            selector: 'app-add-role',
            templateUrl: './add-role.component.html',
            styleUrls: ['./add-role.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], AddRoleComponent);
    return AddRoleComponent;
})();
export { AddRoleComponent };
//# sourceMappingURL=add-role.component.js.map