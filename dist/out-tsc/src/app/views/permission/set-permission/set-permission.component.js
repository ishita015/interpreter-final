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
let SetPermissionComponent = /** @class */ (() => {
    let SetPermissionComponent = class SetPermissionComponent {
        //d={id:1,name:'Dev'}
        constructor(productService, modalService, toastr, service, router) {
            this.productService = productService;
            this.modalService = modalService;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
        }
        ngOnInit() {
            this.dataRe = JSON.parse(localStorage.getItem('permissionInfo'));
            console.log("yes is working", this.dataRe[0]);
        }
    };
    SetPermissionComponent = __decorate([
        Component({
            selector: 'app-set-permission',
            templateUrl: './set-permission.component.html',
            styleUrls: ['./set-permission.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router])
    ], SetPermissionComponent);
    return SetPermissionComponent;
})();
export { SetPermissionComponent };
//# sourceMappingURL=set-permission.component.js.map