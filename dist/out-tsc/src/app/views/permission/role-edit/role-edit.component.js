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
let RoleEditComponent = /** @class */ (() => {
    let RoleEditComponent = class RoleEditComponent {
        constructor(validation, service, fb, toastr, router, route) {
            this.validation = validation;
            this.service = service;
            this.fb = fb;
            this.toastr = toastr;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.createForm();
            this.data = JSON.parse(localStorage.getItem('roleData'));
            console.log("data", this.data);
            this.patchValue();
        }
        /*========== Form Value Start Here========*/
        createForm() {
            this.roleEditForm = this.fb.group({
                role_name: ['', this.validation.onlyRequired_validator],
                id: ['']
            });
        }
        /*========== Form Value End Here========*/
        /*========== Edit Input Value Start Here========*/
        patchValue() {
            this.roleEditForm.get('role_name').patchValue(this.data.role_name);
        }
        /*==========Edit Input Value End Here========*/
        submitEdit() {
            // console.log("formmmmmmmmmmmm",this.roleEditForm.value);
            // console.log("form value",this.roleEditForm.value);
            this.submitted = true;
            if (this.roleEditForm.invalid) {
                return;
            }
            this.submitted = false;
            this.roleEditForm.value.id = this.data.id;
            this.service.getRoleUpadte(this.roleEditForm.value)
                .subscribe(res => {
                // console.log("api response",res);
                this.role_Obj = res;
                this.role_Msg = res;
                console.log("api response", this.role_Obj);
                this.toastr.success(this.role_Msg.message, '', { timeOut: 1000 });
                this.router.navigate(['/permission/rolelist']);
            });
        }
    };
    RoleEditComponent = __decorate([
        Component({
            selector: 'app-role-edit',
            templateUrl: './role-edit.component.html',
            styleUrls: ['./role-edit.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            HttpService, FormBuilder,
            ToastrService, Router,
            ActivatedRoute])
    ], RoleEditComponent);
    return RoleEditComponent;
})();
export { RoleEditComponent };
//# sourceMappingURL=role-edit.component.js.map