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
import Swal from 'sweetalert2';
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
            this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
            // this.array_Obj = this.roleData['data'][1];
            // if(this.array_Obj.id){
            //   this.array_Obj = this.roleData['data'][1];
            //   console.log("roleData xxxxxxxxxxxxxx", this.array_Obj);
            // }
        }
        rolePermission() {
            this.service.get('get-user-role-permission/' + localStorage.getItem('roleId')).subscribe(res => {
                for (var i = 0; i < res['data'].length; ++i) {
                    if (res['data'][i].module_id == 11) {
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
            this.service.get('get-lob')
                .subscribe(res => {
                this.list_Obj = res['data'];
                this.languageData = [...res['data']];
                this.filteredLanguage = this.list_Obj;
                this.role_id = this.roleId;
            });
        }
        statusLanguageChange(status, id) {
            if (status == 2) {
                Swal.fire({
                    title: 'Are you sure want to delete?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.chageMethod(status, id);
                    }
                });
            }
            else {
                this.chageMethod(status, id);
            }
        }
        chageMethod(status, id) {
            this.service.post('ChangeStatus', { status, id })
                .subscribe(res => {
                this.toastr.success(res['msg'], '', { timeOut: 1000 });
                this.languageList();
            });
        }
        languageAddEditOpen(type) {
            this.router.navigate(['/lob/' + type]);
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