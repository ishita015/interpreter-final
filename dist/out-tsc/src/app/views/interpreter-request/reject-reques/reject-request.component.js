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
var RejectRequestComponent = /** @class */ (function () {
    function RejectRequestComponent(productService, modalService, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.searchControl = new FormControl();
    }
    RejectRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        // console.log("userId-",this.userId)
        // console.log("roleId-",this.roleId)
        this.interpreterRequestData();
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(function (value) {
            _this.filerData(value);
        });
    };
    RejectRequestComponent.prototype.filerData = function (val) {
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
    RejectRequestComponent.prototype.interpreterRequestData = function () {
        var _this = this;
        this.service.interpreterRejectList(this.roleId, this.userId, '3')
            .subscribe(function (res) {
            console.log("api response", res);
            _this.list_Obj = res['data'];
            _this.userData = __spread(res['data']);
            // console.log("listttttttt", this.list_Obj);
            _this.filteredUser = _this.list_Obj;
        });
    };
    RejectRequestComponent = __decorate([
        Component({
            selector: 'app-reject-request',
            templateUrl: './reject-request.component.html',
            styleUrls: ['./reject-request.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router])
    ], RejectRequestComponent);
    return RejectRequestComponent;
}());
export { RejectRequestComponent };
//# sourceMappingURL=reject-request.component.js.map