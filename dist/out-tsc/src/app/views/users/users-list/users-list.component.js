var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FunctionService } from './../../../shared/services/function.service';
let UsersListComponent = /** @class */ (() => {
    let UsersListComponent = class UsersListComponent {
        constructor(productService, modalService, toastr, service, router, activatedRoute, func) {
            this.productService = productService;
            this.modalService = modalService;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.func = func;
            this.searchControl = new FormControl();
            this.role_name = 'User';
        }
        ngOnInit() {
            return __awaiter(this, void 0, void 0, function* () {
                this.activatedRoute.params.subscribe(params => {
                    this.param = params['id'];
                });
                try {
                    var result = yield this.service.get('role-detail/' + this.param).toPromise();
                    if (result['data'].length > 0) {
                        this.role_name = result['data'][0].role_name;
                    }
                }
                catch (e) {
                }
                this.userId = JSON.parse(localStorage.getItem('userId'));
                this.roleId = JSON.parse(localStorage.getItem('roleId'));
                this.userList();
                this.rolePermission();
                this.searchControl.valueChanges
                    .pipe(debounceTime(200))
                    .subscribe(value => {
                    this.filerData(value);
                });
                this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
                // this.array_Obj = this.roleData['data'][3]; 
                // if(this.array_Obj.id){
                //   this.array_Obj = this.roleData['data'][3];
                //   // console.log("roleData", this.array_Obj);
                // }
            });
        }
        rolePermission() {
            this.service.get('get-user-role-permission/' + localStorage.getItem('roleId')).subscribe(res => {
                for (var i = 0; i < res['data'].length; ++i) {
                    if (res['data'][i].module_id == 8) {
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
                return this.filteredUser = [...this.userData];
            }
            const columns = Object.keys(this.userData[0]);
            if (!columns.length) {
                return;
            }
            const rows = this.userData.filter(function (d) {
                for (let i = 0; i <= columns.length; i++) {
                    const column = columns[i];
                    // console.log(d[column]);
                    if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                        return true;
                    }
                }
            });
            this.filteredUser = rows;
        }
        userList() {
            this.service.get('getAllUser/' + this.param)
                .subscribe(res => {
                if (res['status'] == 1) {
                    this.list_Obj = res['data'];
                    this.userData = [...res['data']];
                    this.filteredUser = this.list_Obj;
                    this.role_id = this.roleId;
                }
                else {
                    // this.response_msg=res;
                    // this.toastr.success(this.response_msg.msg,'', { timeOut: 2000 });
                    // this.router.navigate(['/users/user-list'])
                }
            });
        }
        deleteUser(id, modal) {
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.getUserDelete(id)
                    .subscribe(res => {
                    this.userdelete_msg = res;
                    this.toastr.success(this.userdelete_msg.message, '', { timeOut: 1000 });
                    // this.languageList();
                });
            }, (reason) => {
            });
        }
        addUser() {
            this.router.navigate(['/users/user-add']);
        }
        // userView(id) {
        //   this.router.navigate(['/users/user-view']);
        // }
        editUser(id, data) {
            localStorage.setItem('editData', JSON.stringify(data));
            localStorage.setItem('rowId', JSON.stringify(id));
            this.service.getInterpreterDetail(id)
                .subscribe(res => {
                this.user_Obj = res['data'];
                this.json_Obj = res['data']['0'];
                // localStorage.setItem('editData', JSON.stringify(this.json_Obj));
                // localStorage.setItem('interpreterInfo', JSON.stringify(this.user_Obj));
                // this.router.navigate(['/permission/setpermission',id]);
                this.router.navigate(['/users/user-edit', id]);
                // location.reload();
            });
        }
        statusChange(target, status, id) {
            this.service.statusUpdate(status, id)
                .subscribe(res => {
                this.status_msg = res;
                this.toastr.success(this.status_msg.message, '', { timeOut: 1000 });
                this.userList();
            });
        }
        userView(id) {
            // localStorage.setItem('Id', JSON.stringify(id));
            this.service.getInterpreterDetail(id).subscribe(res => {
                // console.log("apiii", res);
                this.viewUser_obj = res['data'][0];
                localStorage.setItem('userViewData', JSON.stringify(this.viewUser_obj));
                this.router.navigate(['/users/user-view', id]);
            });
        }
        viewCalendar(id) {
            localStorage.setItem('calendarId', JSON.stringify(id));
            this.router.navigate(['/users/view-calendar']);
        }
        profileOpen(row) {
            if (row.role_id == 2) {
                this.router.navigate(['interpreter/interpreter-profile/' + row.id]);
            }
            else if (row.role_id == 3) {
                this.router.navigate(['client/client-edit/' + row.id]);
            }
            else {
                this.toastr.warning('Profile is Pending');
            }
        }
    };
    UsersListComponent = __decorate([
        Component({
            selector: 'app-users-list',
            templateUrl: './users-list.component.html',
            styleUrls: ['./users-list.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router,
            ActivatedRoute,
            FunctionService])
    ], UsersListComponent);
    return UsersListComponent;
})();
export { UsersListComponent };
//# sourceMappingURL=users-list.component.js.map