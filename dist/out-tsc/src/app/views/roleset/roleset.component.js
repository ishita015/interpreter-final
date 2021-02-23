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
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
let RolesetComponent = /** @class */ (() => {
    let RolesetComponent = class RolesetComponent {
        // arr=[1]
        constructor(
        // public validation: ValidationsService,
        fb, toastr, router, service, activatedRoute) {
            this.fb = fb;
            this.toastr = toastr;
            this.router = router;
            this.service = service;
            this.activatedRoute = activatedRoute;
        }
        ngOnInit() {
            this.activatedRoute.params.subscribe(params => {
                this.param = params['id'];
            });
            this.service.editPemisssion(this.param)
                .subscribe(res => {
                this.dataResult = res['data'];
                for (var i = 0; i < this.dataResult.length; ++i) {
                    if (this.dataResult[i].status == 1) {
                        this.dataResult[i].status = 'false';
                    }
                }
            });
            // console.log("yes is working",this.dataResult);
            // this.createForm();
        }
        setCheck(event, eve_key, i) {
            if (event.target.checked) {
                this.dataResult[i][eve_key] = 'true';
            }
            else {
                this.dataResult[i][eve_key] = 'false';
            }
        }
        saveRole() {
            console.log(this.dataResult);
            // return
            var count = 0;
            var count1 = 0;
            for (var i = 0; i < this.dataResult.length; ++i) {
                this.dataResult[i].roleId = this.param;
                if (this.dataResult[i].status == true || this.dataResult[i].status == 'true') {
                    if (this.dataResult[i].add_permission == undefined && this.dataResult[i].delete_permission == undefined && this.dataResult[i].edit_permission == undefined && this.dataResult[i].status_permission == undefined && this.dataResult[i].view_permission == undefined) {
                        count = count + 1;
                    }
                }
            }
            if (count > 0) {
                this.toastr.warning('Please select permission if module is selected');
                return;
            }
            else {
                for (var i = 0; i < this.dataResult.length; ++i) {
                    if (this.dataResult[i].add_permission == 'true' || this.dataResult[i].delete_permission == 'true' || this.dataResult[i].edit_permission == 'true' || this.dataResult[i].status_permission == 'true' || this.dataResult[i].view_permission == 'true') {
                        if (this.dataResult[i].status == false || this.dataResult[i].status == 'false') {
                            count1 = count1 + 1;
                        }
                    }
                }
                if (count1 > 0) {
                    this.toastr.warning('Please select  module');
                    return;
                }
                else {
                    this.service.userRoleadd(this.dataResult)
                        .subscribe(res => {
                        this.role_Msg = res;
                        this.toastr.success(this.role_Msg.message, '', { timeOut: 1000 });
                        this.router.navigate(['/permission/rolelist']);
                    });
                }
            }
        }
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
            HttpService,
            ActivatedRoute])
    ], RolesetComponent);
    return RolesetComponent;
})();
export { RolesetComponent };
//# sourceMappingURL=roleset.component.js.map