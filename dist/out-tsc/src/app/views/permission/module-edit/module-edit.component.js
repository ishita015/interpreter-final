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
var ModuleEditComponent = /** @class */ (function () {
    function ModuleEditComponent(validation, service, fb, toastr, router, route) {
        this.validation = validation;
        this.service = service;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
    }
    ModuleEditComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.data = JSON.parse(localStorage.getItem('moduleData'));
        console.log("data", this.data);
        this.patchValue();
    };
    /*========== Form Value Start Here========*/
    ModuleEditComponent.prototype.createForm = function () {
        this.moduleEditForm = this.fb.group({
            module_name: ['', this.validation.onlyRequired_validator],
            id: ['']
        });
    };
    /*========== Form Value End Here========*/
    /*========== Edit Input Value Start Here========*/
    ModuleEditComponent.prototype.patchValue = function () {
        this.moduleEditForm.get('module_name').patchValue(this.data.module_name);
    };
    /*==========Edit Input Value End Here========*/
    ModuleEditComponent.prototype.submitEdit = function () {
        var _this = this;
        console.log("formmmmmmmmmmmm", this.moduleEditForm.value);
        console.log("form value", this.moduleEditForm.value);
        this.submitted = true;
        if (this.moduleEditForm.invalid) {
            return;
        }
        this.submitted = false;
        this.moduleEditForm.value.id = this.data.id;
        this.service.moduleUpadte(this.moduleEditForm.value)
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.module_Obj = res;
            _this.module_Msg = res;
            // console.log("api response", this.module_Obj);
            _this.toastr.success(_this.module_Msg.message, '', { timeOut: 1000 });
            _this.router.navigate(['/permission/modulelist']);
        });
    };
    ModuleEditComponent = __decorate([
        Component({
            selector: 'app-module-edit',
            templateUrl: './module-edit.component.html',
            styleUrls: ['./module-edit.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            HttpService, FormBuilder,
            ToastrService, Router,
            ActivatedRoute])
    ], ModuleEditComponent);
    return ModuleEditComponent;
}());
export { ModuleEditComponent };
//# sourceMappingURL=module-edit.component.js.map