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
import { FormControl, FormGroup } from '@angular/forms';
var CompleteRequestComponent = /** @class */ (function () {
    function CompleteRequestComponent(productService, modalService, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        // searchControl: FormControl = new FormControl();
        //search calendar
        this.search_name = new FormControl();
        this.range = new FormGroup({
            start_date: new FormControl(),
            end_date: new FormControl()
        });
    }
    CompleteRequestComponent.prototype.ngOnInit = function () {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        this.interpreterRequestData('1');
        // this.searchControl.valueChanges
        // .pipe(debounceTime(200))
        // .subscribe(value => {
        //   this.filerData(value);
        // });
    };
    // filerData(val) {
    //   if (val) {
    //     val = val.toLowerCase();
    //   } else {
    //     console.log("xxxxxxx",this.filteredUser);
    //     return this.filteredUser = [... this.userData];
    //   }
    //   const columns = Object.keys( this.userData[0]);
    //   if (!columns.length) {
    //     return;
    //   }
    //   const rows =  this.userData.filter(function(d) {
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
    CompleteRequestComponent.prototype.interpreterRequestData = function (e) {
        var _this = this;
        this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        this.endDate = this.range.value.end_date;
        this.service.interpreterRequestList(this.roleId, this.userId, '4', this.allData, this.startDate, this.endDate)
            .subscribe(function (res) {
            if (res['status'] == '1') {
                console.log("api response", res);
                _this.list_Obj = res['data'];
                _this.userData = __spread(res['data']);
                // console.log("listttttttt", this.list_Obj);
                _this.filteredUser = _this.list_Obj;
            }
        });
    };
    CompleteRequestComponent.prototype.viewDetail = function (request_id) {
        var _this = this;
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(function (res) {
            if (res['status'] == 1) {
                _this.view_obj = res['data'][0];
                console.log("api response", _this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(_this.view_obj));
                _this.router.navigate(['/user-request/request-view', request_id]);
            }
            else {
                _this.resp_msg = res;
                _this.toastr.error(_this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
            }
        });
    };
    CompleteRequestComponent = __decorate([
        Component({
            selector: 'app-complete-request',
            templateUrl: './complete-request.component.html',
            styleUrls: ['./complete-request.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router])
    ], CompleteRequestComponent);
    return CompleteRequestComponent;
}());
export { CompleteRequestComponent };
//# sourceMappingURL=complete-request.component.js.map