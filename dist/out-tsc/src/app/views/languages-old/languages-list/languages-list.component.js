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
var LanguagesListComponent = /** @class */ (function () {
    function LanguagesListComponent(dl, modalService, toastr, validation, service, router) {
        this.dl = dl;
        this.modalService = modalService;
        this.toastr = toastr;
        this.validation = validation;
        this.service = service;
        this.router = router;
    }
    LanguagesListComponent.prototype.ngOnInit = function () {
        this.languageList();
    };
    LanguagesListComponent.prototype.languageList = function () {
        var _this = this;
        this.service.getLanguageList()
            .subscribe(function (res) {
            console.log("api response", res);
            _this.list_Obj = res['data'];
            console.log("listttttttt", _this.list_Obj);
            // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
            // this.router.navigate(['/login'])
        });
    };
    LanguagesListComponent.prototype.deleteLanguage = function (id, modal) {
        var _this = this;
        console.log("delete idddddddddd", id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.service.getLanguagDelete(id)
                .subscribe(function (res) {
                _this.language_msg = res;
                console.log("api", res);
                _this.toastr.success(_this.language_msg.message, '', { timeOut: 1000 });
                _this.languageList();
            });
        }, function (reason) {
        });
    };
    LanguagesListComponent.prototype.statusLanguageChange = function (ev, status, id) {
        console.log("statussss", status, id);
        if (status == 1) {
            // this.toastr.success('Status Change Successfully!','' ,{ timeOut: 1000 });
            this.user_status = 0;
        }
        else {
            // this.toastr.success('Status Change Successfully!','' ,{ timeOut: 1000 }); 
            this.user_status = 1;
        }
    };
    LanguagesListComponent.prototype.languageAddEditOpen = function (type) {
        console.log("XXXXXXXXXXXXXXX", type);
        this.router.navigate(['/languages/' + type]);
    };
    LanguagesListComponent.prototype.Edit = function (id, data) {
        console.log("idd", id);
        console.log("data", data);
        localStorage.setItem('languageData', JSON.stringify(data));
    };
    LanguagesListComponent = __decorate([
        Component({
            selector: 'app-languages-list',
            templateUrl: './languages-list.component.html',
            styleUrls: ['./languages-list.component.scss']
        }),
        __metadata("design:paramtypes", [DataLayerService,
            NgbModal,
            ToastrService,
            ValidationsService,
            HttpService,
            Router])
    ], LanguagesListComponent);
    return LanguagesListComponent;
}());
export { LanguagesListComponent };
//# sourceMappingURL=languages-list.component.js.map