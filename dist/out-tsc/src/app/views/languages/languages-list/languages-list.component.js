var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { Component } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
var LanguagesListComponent = /** @class */ (function () {
    function LanguagesListComponent(dl, modalService, toastr, validation, service, router) {
        this.dl = dl;
        this.modalService = modalService;
        this.toastr = toastr;
        this.validation = validation;
        this.service = service;
        this.router = router;
        this.searchControl = new FormControl();
    }
    LanguagesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        this.languageList();
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(function (value) {
            _this.filerData(value);
        });
        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        this.array_Obj = this.roleData['data'][1];
        if (this.array_Obj.id) {
            this.array_Obj = this.roleData['data'][1];
            console.log("roleData xxxxxxxxxxxxxx", this.array_Obj);
        }
    };
    LanguagesListComponent.prototype.filerData = function (val) {
        if (val) {
            val = val.toLowerCase();
        }
        else {
            console.log("xxxxxxx", this.filteredLanguage);
            return this.filteredLanguage = __spread(this.languageData);
        }
        var columns = Object.keys(this.languageData[0]);
        if (!columns.length) {
            return;
        }
        var rows = this.languageData.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredLanguage = rows;
    };
    LanguagesListComponent.prototype.languageList = function () {
        var _this = this;
        this.service.getLanguageList()
            .subscribe(function (res) {
            console.log("api response", res);
            _this.list_Obj = res['data'];
            _this.languageData = __spread(res['data']);
            console.log("listttttttt", _this.list_Obj);
            _this.filteredLanguage = _this.list_Obj;
            _this.role_id = _this.roleId;
            console.log("role_id---", _this.role_id);
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
                _this.toastr.success(_this.language_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.languageList();
            });
        }, function (reason) {
        });
    };
    LanguagesListComponent.prototype.statusLanguageChange = function (target, status, id) {
        var _this = this;
        // console.log("permission target",target);
        // console.log("permission status",status);
        // console.log("permission id",id);
        this.service.langStatusUpdate(status, id)
            .subscribe(function (res) {
            _this.language_msg = res;
            console.log("api", res);
            _this.toastr.success(_this.language_msg.message, '', { timeOut: 1000 });
            _this.languageList();
        });
    };
    // statusLanguageChange(ev,status,id){
    //     console.log("statussss",status,id);
    //     if(status == 1){
    //         // this.toastr.success('Status Change Successfully!','' ,{ timeOut: 1000 });
    //         this.user_status= 0;
    //       }
    //       else {
    //         // this.toastr.success('Status Change Successfully!','' ,{ timeOut: 1000 }); 
    //         this.user_status= 1;
    //       }
    // }
    LanguagesListComponent.prototype.languageAddEditOpen = function (type) {
        console.log("XXXXXXXXXXXXXXX", type);
        this.router.navigate(['/languages/' + type]);
    };
    LanguagesListComponent.prototype.Edit = function (id, data) {
        console.log("idd", id);
        console.log("data", data);
        localStorage.setItem('languageData', JSON.stringify(data));
    };
    // ViewInterpreter(row.id,row.Interpreter
    LanguagesListComponent.prototype.viewInterpreter = function (id, totalInterpreter, modal) {
        localStorage.setItem('lang_id', JSON.stringify(id));
        console.log("totalInterpreter", totalInterpreter);
        if (totalInterpreter == 0) {
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
        }
        else {
            // this.router.navigate(['/languages/interpreter-detail']);
            this.router.navigate(['/interpreter/interpreter-list/', id, 1]);
            // interpreter-list/:id/:type
        }
    };
    LanguagesListComponent.prototype.viewAssignment = function (id, totalAssignment, modals) {
        if (totalAssignment == 0) {
            this.modalService.open(modals, { ariaLabelledBy: 'modal-basic-title', centered: true });
        }
        else {
            // this.router.navigate(['/languages/interpreter-detail']);
            this.router.navigate(['/interpreter-request/all-request-list', id]);
        }
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