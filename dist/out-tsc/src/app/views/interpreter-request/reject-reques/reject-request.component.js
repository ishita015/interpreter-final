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
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
let RejectRequestComponent = /** @class */ (() => {
    let RejectRequestComponent = class RejectRequestComponent {
        constructor(productService, modalService, toastr, service, router) {
            this.productService = productService;
            this.modalService = modalService;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
            this.searchControl = new FormControl();
        }
        ngOnInit() {
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.roleId = JSON.parse(localStorage.getItem('roleId'));
            this.interpreterRequestData();
            this.searchControl.valueChanges
                .pipe(debounceTime(200))
                .subscribe(value => {
                this.filerData(value);
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
        interpreterRequestData() {
            this.service.interpreterRejectList(this.roleId, this.userId, '3')
                .subscribe(res => {
                console.log("api response", res);
                if (res['status'] == '1') {
                    this.list_Obj = res['data'];
                    this.userData = [...res['data']];
                    this.filteredUser = this.list_Obj;
                }
            });
        }
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
})();
export { RejectRequestComponent };
//# sourceMappingURL=reject-request.component.js.map