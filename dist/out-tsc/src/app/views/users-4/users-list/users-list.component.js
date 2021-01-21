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
var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(productService, modalService, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProducts();
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
    UsersListComponent.prototype.editUser = function (id, data) {
        console.log("idd", id);
        console.log("data", data);
        localStorage.setItem('userData', JSON.stringify(data));
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
            Router])
    ], UsersListComponent);
    return UsersListComponent;
}());
export { UsersListComponent };
//# sourceMappingURL=users-list.component.js.map