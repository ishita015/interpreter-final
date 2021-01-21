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
var ModuleAddComponent = /** @class */ (function () {
    function ModuleAddComponent(validation, fb, toastr, router, service) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
    }
    ModuleAddComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    /*========== Form Value Start Here========*/
    ModuleAddComponent.prototype.createForm = function () {
        this.moduleForm = this.fb.group({
            module_name: ['', this.validation.onlyRequired_validator],
        });
    };
    /*========== Form Value End Here========*/
    /*========== Add Api Start Here========*/
    ModuleAddComponent.prototype.addModule = function () {
        var _this = this;
        console.log("form value", this.moduleForm.value);
        this.submitted = true;
        if (this.moduleForm.invalid) {
            return;
        }
        this.submitted = false;
        this.service.moduleAdd(this.moduleForm.value)
            .subscribe(function (res) {
            console.log("api response", res);
            _this.module_Obj = res;
            _this.module_Msg = res;
            _this.toastr.success(_this.module_Msg.message, '', { timeOut: 1000 });
            // this.router.navigate(['/login'])
            _this.router.navigate(['/permission/modulelist']);
        });
    };
    ModuleAddComponent = __decorate([
        Component({
            selector: 'app-module-add',
            templateUrl: './module-add.component.html',
            styleUrls: ['./module-add.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], ModuleAddComponent);
    return ModuleAddComponent;
}());
export { ModuleAddComponent };
//# sourceMappingURL=module-add.component.js.map