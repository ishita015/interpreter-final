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
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
let RoleListComponent = /** @class */ (() => {
    let RoleListComponent = class RoleListComponent {
        constructor(dl, modalService, toastr, validation, service, router) {
            this.dl = dl;
            this.modalService = modalService;
            this.toastr = toastr;
            this.validation = validation;
            this.service = service;
            this.router = router;
        }
        ngOnInit() {
            this.roleList();
        }
        roleList() {
            this.service.getRoleList()
                .subscribe(res => {
                console.log("api response", res);
                this.list_Obj = res['data'];
                console.log("listttttttt", this.list_Obj);
                // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
                // this.router.navigate(['/login'])
            });
        }
        deleteRole(id, modal) {
            console.log("delete idddddddddd", id);
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.getRoleDelete(id)
                    .subscribe(res => {
                    this.language_msg = res;
                    console.log("api", res);
                    this.toastr.success(this.language_msg.message, '', { timeOut: 1000 });
                    this.roleList();
                });
            }, (reason) => {
            });
        }
        roleAddEditOpen(type) {
            console.log("XXXXXXXXXXXXXXX", type);
            this.router.navigate(['/permission/' + type]);
        }
        editRole(id, data) {
            console.log("idd", id);
            console.log("data", data);
            localStorage.setItem('roleData', JSON.stringify(data));
        }
        getPermission(id, data) {
            //this.router.navigate(['/permission/setpermission',id]); 
            console.log(id);
            console.log(data);
            this.service.editPemisssion(id)
                .subscribe(res => {
                console.log("apiiiiiiiiii response", res);
                this.code_obj = res['result'];
                localStorage.setItem('permissionData', JSON.stringify(this.code_obj));
                this.router.navigate(['/permission/setpermission', id]);
            });
        }
        editPemisssion(id) {
            // this.service.editPemisssion(id)
            //   .subscribe(res => {
            //       this.list_Obj = res['data'];
            //       console.log("api response yes",this.list_Obj);
            //       localStorage.setItem('permissionInfo', JSON.stringify(this.list_Obj));
            //       // this.router.navigate(['/permission/setpermission',id]);
            //       this.router.navigate(['/roleset/roleset',id]);
            //   })
            this.router.navigate(['/roleset/roleset', id]);
        }
    };
    RoleListComponent = __decorate([
        Component({
            selector: 'app-role-list',
            templateUrl: './role-list.component.html',
            styleUrls: ['./role-list.component.scss']
        }),
        __metadata("design:paramtypes", [DataLayerService,
            NgbModal,
            ToastrService,
            ValidationsService,
            HttpService,
            Router])
    ], RoleListComponent);
    return RoleListComponent;
})();
export { RoleListComponent };
//# sourceMappingURL=role-list.component.js.map