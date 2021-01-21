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
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FunctionService } from './../../../shared/services/function.service';
var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(productService, modalService, toastr, service, router, func) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.func = func;
        this.searchControl = new FormControl();
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        this.userList();
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(function (value) {
            _this.filerData(value);
        });
        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        // this.array_Obj = this.roleData['data'][3]; 
        // if(this.array_Obj.id){
        //   this.array_Obj = this.roleData['data'][3];
        //   // console.log("roleData", this.array_Obj);
        // }
    };
    UsersListComponent.prototype.filerData = function (val) {
        if (val) {
            val = val.toLowerCase();
        }
        else {
            console.log("xxxxxxx", this.filteredUser);
            return this.filteredUser = __spread(this.userData);
        }
        var columns = Object.keys(this.userData[0]);
        if (!columns.length) {
            return;
        }
        var rows = this.userData.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredUser = rows;
    };
    UsersListComponent.prototype.userList = function () {
        var _this = this;
        this.service.getAllUserList()
            .subscribe(function (res) {
            if (res['status'] == 1) {
                _this.list_Obj = res['data'];
                _this.userData = __spread(res['data']);
                _this.filteredUser = _this.list_Obj;
                _this.role_id = _this.roleId;
            }
            else {
                // this.response_msg=res;
                // this.toastr.success(this.response_msg.msg,'', { timeOut: 2000 });
                _this.router.navigate(['/users/user-list']);
            }
        });
    };
    UsersListComponent.prototype.deleteUser = function (id, modal) {
        var _this = this;
        console.log("delete idddddddddd", id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.service.getUserDelete(id)
                .subscribe(function (res) {
                _this.userdelete_msg = res;
                console.log("api", res);
                _this.toastr.success(_this.userdelete_msg.message, '', { timeOut: 1000 });
                // this.languageList();
            });
        }, function (reason) {
        });
    };
    UsersListComponent.prototype.addUser = function () {
        this.router.navigate(['/users/user-add']);
    };
    // userView(id) {
    //   this.router.navigate(['/users/user-view']);
    // }
    UsersListComponent.prototype.editUser = function (id, data) {
        var _this = this;
        console.log("permission idddddddddd", id);
        console.log("data", data);
        localStorage.setItem('editData', JSON.stringify(data));
        localStorage.setItem('rowId', JSON.stringify(id));
        this.service.getInterpreterDetail(id)
            .subscribe(function (res) {
            _this.user_Obj = res['data'];
            _this.json_Obj = res['data']['0'];
            console.log("edit api", _this.json_Obj.id);
            // localStorage.setItem('editData', JSON.stringify(this.json_Obj));
            // localStorage.setItem('interpreterInfo', JSON.stringify(this.user_Obj));
            // this.router.navigate(['/permission/setpermission',id]);
            _this.router.navigate(['/users/user-edit', id]);
            // location.reload();
        });
    };
    UsersListComponent.prototype.statusChange = function (target, status, id) {
        var _this = this;
        console.log("permission target", target);
        console.log("permission status", status);
        console.log("permission id", id);
        this.service.statusUpdate(status, id)
            .subscribe(function (res) {
            _this.status_msg = res;
            _this.toastr.success(_this.status_msg.message, '', { timeOut: 1000 });
            _this.userList();
        });
    };
    UsersListComponent.prototype.userView = function (id) {
        var _this = this;
        // localStorage.setItem('Id', JSON.stringify(id));
        this.service.getInterpreterDetail(id).subscribe(function (res) {
            // console.log("apiii", res);
            _this.viewUser_obj = res['data'][0];
            console.log("view object", _this.viewUser_obj);
            localStorage.setItem('userViewData', JSON.stringify(_this.viewUser_obj));
            _this.router.navigate(['/users/user-view', id]);
        });
    };
    UsersListComponent.prototype.viewCalendar = function (id) {
        console.log("calendarId", id);
        localStorage.setItem('calendarId', JSON.stringify(id));
        this.router.navigate(['/users/view-calendar']);
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
            FunctionService])
    ], UsersListComponent);
    return UsersListComponent;
}());
export { UsersListComponent };
//# sourceMappingURL=users-list.component.js.map