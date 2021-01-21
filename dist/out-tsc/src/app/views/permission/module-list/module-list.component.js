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
var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(dl, modalService, toastr, validation, service, router) {
        this.dl = dl;
        this.modalService = modalService;
        this.toastr = toastr;
        this.validation = validation;
        this.service = service;
        this.router = router;
    }
    ModuleListComponent.prototype.ngOnInit = function () {
        this.moduleList();
    };
    ModuleListComponent.prototype.moduleList = function () {
        var _this = this;
        this.service.getModuleList()
            .subscribe(function (res) {
            console.log("api response", res);
            _this.list_Obj = res['data'];
            console.log("listttttttt", _this.list_Obj);
            // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
            // this.router.navigate(['/login'])
        });
    };
    ModuleListComponent.prototype.deleteModule = function (id, modal) {
        var _this = this;
        console.log("delete idddddddddd", id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.service.moduleDelete(id)
                .subscribe(function (res) {
                _this.language_msg = res;
                console.log("api", res);
                _this.toastr.success(_this.language_msg.message, '', { timeOut: 1000 });
                _this.moduleList();
            });
        }, function (reason) {
        });
    };
    ModuleListComponent.prototype.moduleAddEditOpen = function (type) {
        console.log("XXXXXXXXXXXXXXX", type);
        this.router.navigate(['/permission/' + type]);
    };
    ModuleListComponent.prototype.editModel = function (id, data) {
        console.log("idd", id);
        console.log("data", data);
        localStorage.setItem('moduleData', JSON.stringify(data));
    };
    ModuleListComponent = __decorate([
        Component({
            selector: 'app-module-list',
            templateUrl: './module-list.component.html',
            styleUrls: ['./module-list.component.scss']
        }),
        __metadata("design:paramtypes", [DataLayerService,
            NgbModal,
            ToastrService,
            ValidationsService,
            HttpService,
            Router])
    ], ModuleListComponent);
    return ModuleListComponent;
}());
export { ModuleListComponent };
//# sourceMappingURL=module-list.component.js.map