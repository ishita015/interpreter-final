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
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
var InterpreterListComponent = /** @class */ (function () {
    function InterpreterListComponent(productService, modalService, toastr, service, router, route) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.route = route;
        this.searchControl = new FormControl();
        //search calendar
        this.search_name = new FormControl();
        this.range = new FormGroup({
            start_date: new FormControl(),
            end_date: new FormControl()
        });
    }
    InterpreterListComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params.id ? this.route.snapshot.params.id : '0';
        console.log("iddddddd", this.id);
        this.type = this.route.snapshot.params.type ? this.route.snapshot.params.type : '0';
        console.log("qqqqq", this.type);
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        this.interpreterList('1');
        // this.searchControl.valueChanges
        //   .pipe(debounceTime(200))
        //   .subscribe(value => {
        //     this.filerData(value);
        //   });
        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        // this.array_Obj = this.roleData['data'][3]; 
        // if(this.array_Obj.id){
        //   this.array_Obj = this.roleData['data'][3];
        //   // console.log("roleData", this.array_Obj);
    };
    // filerData(val) {
    //   if (val) {
    //     val = val.toLowerCase();
    //   } else {
    //     console.log("xxxxxxx", this.filteredUser);
    //     return this.filteredUser = [... this.userData];
    //   }
    //   const columns = Object.keys(this.userData[0]);
    //   if (!columns.length) {
    //     return;
    //   }
    //   const rows = this.userData.filter(function (d) {
    //     for (let i = 0; i <= columns.length; i++) {
    //       const column = columns[i];
    //       // console.log(d[column]);
    //       if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
    //         return true;
    //       }
    //     }
    //   });
    //   this.filteredUser = rows;
    // }
    InterpreterListComponent.prototype.interpreterList = function (e) {
        var _this = this;
        this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        this.endDate = this.range.value.end_date;
        this.service.post('getAllClient', { search_info: this.allData, start_date: this.startDate, end_date: this.endDate })
            .subscribe(function (res) {
            if (res['status'] == true) {
                _this.list_Obj = res['data'];
                _this.userData = __spread(res['data']);
                _this.filteredUser = _this.list_Obj;
                _this.role_id = _this.roleId;
            }
            else {
                _this.list_Obj = [];
                _this.userData = [];
                _this.filteredUser = [];
                _this.router.navigate(['/client/client-list']);
            }
        });
    };
    InterpreterListComponent.prototype.clearAll = function () {
        this.search_name.setValue('');
        this.range.value.start_date.;
        this.endDate = this.range.value.end_date;
    };
    InterpreterListComponent.prototype.deleteInterpreter = function (id, modal) {
        var _this = this;
        console.log("delete idddddddddd", id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.service.getUserDelete(id)
                .subscribe(function (res) {
                _this.userdelete_msg = res;
                console.log("api", res);
                _this.toastr.success(_this.userdelete_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                // this.languageList();
            });
        }, function (reason) {
        });
    };
    InterpreterListComponent.prototype.addInterpreter = function () {
        this.router.navigate(['/client/client-add']);
    };
    InterpreterListComponent.prototype.profileInterpreter = function (id) {
        console.log("iddddd", id);
        localStorage.setItem('userId', JSON.stringify(id));
        this.router.navigate(['/client/client-profile', id]);
    };
    InterpreterListComponent.prototype.editInterpreter = function (id, data) {
        var _this = this;
        this.router.navigate(['/client/client-edit', id]);
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
            // location.reload();
        });
    };
    InterpreterListComponent.prototype.statusChange = function (target, status, id) {
        var _this = this;
        console.log("permission target", target);
        console.log("permission status", status);
        console.log("permission id", id);
        this.service.statusUpdate(status, id)
            .subscribe(function (res) {
            _this.status_msg = res;
            _this.toastr.success(_this.status_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            _this.interpreterList('1');
        });
    };
    InterpreterListComponent.prototype.userView = function (id) {
        this.router.navigate(['/client/client-view/' + id]);
    };
    InterpreterListComponent.prototype.EditInterpreter = function (id) {
        this.router.navigate(['/client/client-edit/' + id]);
    };
    InterpreterListComponent.prototype.userInterpreter = function (id) {
        this.router.navigate(['/client/client-view/' + id]);
    };
    InterpreterListComponent = __decorate([
        Component({
            selector: 'app-interpreter-list',
            templateUrl: './interpreter-list.component.html',
            styleUrls: ['./interpreter-list.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router,
            ActivatedRoute])
    ], InterpreterListComponent);
    return InterpreterListComponent;
}());
export { InterpreterListComponent };
//# sourceMappingURL=interpreter-list.component.js.map