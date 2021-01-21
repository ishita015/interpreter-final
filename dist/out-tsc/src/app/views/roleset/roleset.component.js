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
import { HttpService } from "../../shared/services/http.service";
// import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var RolesetComponent = /** @class */ (function () {
    // arr=[1]
    function RolesetComponent(
    // public validation: ValidationsService,
    fb, toastr, router, service) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
    }
    RolesetComponent.prototype.ngOnInit = function () {
        this.dataResult = JSON.parse(localStorage.getItem('permissionInfo'));
        console.log("yes is working", this.dataResult);
        // this.createForm();
    };
    RolesetComponent.prototype.setCheck = function (event, eve_key, i) {
        console.log(event);
        if (event.target.checked) {
            this.dataResult[i][eve_key] = true;
        }
        else {
            this.dataResult[i][eve_key] = false;
        }
    };
    RolesetComponent.prototype.saveRole = function () {
        var _this = this;
        console.log("this is test", this.dataResult);
        this.service.userRoleadd(this.dataResult)
            .subscribe(function (res) {
            console.log("api response", res);
            _this.role_Msg = res;
            _this.toastr.success(_this.role_Msg.message, '', { timeOut: 1000 });
            _this.router.navigate(['/permission/rolelist']);
        });
    };
    RolesetComponent = __decorate([
        Component({
            selector: 'app-roleset',
            templateUrl: './roleset.component.html',
            styleUrls: ['./roleset.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], RolesetComponent);
    return RolesetComponent;
}());
export { RolesetComponent };
//# sourceMappingURL=roleset.component.js.map