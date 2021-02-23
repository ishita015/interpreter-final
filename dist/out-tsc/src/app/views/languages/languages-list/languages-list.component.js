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
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
let LanguagesListComponent = /** @class */ (() => {
    let LanguagesListComponent = class LanguagesListComponent {
        constructor(dl, modalService, toastr, validation, service, router) {
            this.dl = dl;
            this.modalService = modalService;
            this.toastr = toastr;
            this.validation = validation;
            this.service = service;
            this.router = router;
            this.searchControl = new FormControl();
        }
        ngOnInit() {
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.roleId = JSON.parse(localStorage.getItem('roleId'));
            this.rolePermission();
            this.languageList();
            this.searchControl.valueChanges
                .pipe(debounceTime(200))
                .subscribe(value => {
                this.filerData(value);
            });
            // this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
            // this.array_Obj = this.roleData['data'][1];
            // if(this.array_Obj.id){
            //   this.array_Obj = this.roleData['data'][1];
            // }
        }
        rolePermission() {
            this.service.get('get-user-role-permission/' + localStorage.getItem('roleId')).subscribe(res => {
                for (var i = 0; i < res['data'].length; ++i) {
                    if (res['data'][i].module_id == 2) {
                        this.array_Obj = res['data'][i];
                    }
                }
            });
        }
        filerData(val) {
            if (val) {
                val = val.toLowerCase();
            }
            else {
                console.log("xxxxxxx", this.filteredLanguage);
                return this.filteredLanguage = [...this.languageData];
            }
            const columns = Object.keys(this.languageData[0]);
            if (!columns.length) {
                return;
            }
            const rows = this.languageData.filter(function (d) {
                for (let i = 0; i <= columns.length; i++) {
                    const column = columns[i];
                    // console.log(d[column]);
                    if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                        return true;
                    }
                }
            });
            this.filteredLanguage = rows;
        }
        languageList() {
            this.service.getLanguageList()
                .subscribe(res => {
                console.log("api response", res);
                this.list_Obj = res['data'];
                this.languageData = [...res['data']];
                console.log("listttttttt", this.list_Obj);
                this.filteredLanguage = this.list_Obj;
                this.role_id = this.roleId;
                console.log("role_id---", this.role_id);
                // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
                // this.router.navigate(['/login'])
            });
        }
        deleteLanguage(id, modal) {
            console.log("delete idddddddddd", id);
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.getLanguagDelete(id)
                    .subscribe(res => {
                    this.language_msg = res;
                    console.log("api", res);
                    this.toastr.success(this.language_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                    this.languageList();
                });
            }, (reason) => {
            });
        }
        statusLanguageChange(target, status, id) {
            // console.log("permission target",target);
            // console.log("permission status",status);
            // console.log("permission id",id);
            this.service.langStatusUpdate(status, id)
                .subscribe(res => {
                this.language_msg = res;
                console.log("api", res);
                this.toastr.success(this.language_msg.message, '', { timeOut: 1000 });
                this.languageList();
            });
        }
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
        languageAddEditOpen(type) {
            console.log("XXXXXXXXXXXXXXX", type);
            this.router.navigate(['/languages/' + type]);
        }
        Edit(id, data) {
            console.log("idd", id);
            console.log("data", data);
            localStorage.setItem('languageData', JSON.stringify(data));
        }
        // ViewInterpreter(row.id,row.Interpreter
        viewInterpreter(id, totalInterpreter, modal) {
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
        }
        viewAssignment(id, totalAssignment, modals) {
            if (totalAssignment == 0) {
                this.modalService.open(modals, { ariaLabelledBy: 'modal-basic-title', centered: true });
            }
            else {
                // this.router.navigate(['/languages/interpreter-detail']);
                this.router.navigate(['/interpreter-request/all-request-list', id]);
            }
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
})();
export { LanguagesListComponent };
//# sourceMappingURL=languages-list.component.js.map