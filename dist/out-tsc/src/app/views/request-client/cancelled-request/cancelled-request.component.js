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
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
let CancelledRequestComponent = /** @class */ (() => {
    let CancelledRequestComponent = class CancelledRequestComponent {
        constructor(router, service, toastr) {
            this.router = router;
            this.service = service;
            this.toastr = toastr;
        }
        ngOnInit() {
        }
        viewDetail(request_id) {
            console.log("id--", request_id);
            this.service.getRequestDetail(request_id).subscribe(res => {
                if (res['status'] == 1) {
                    this.view_obj = res['data'][0];
                    console.log("view object apiii", this.view_obj);
                    localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                    this.router.navigate(['/user-request/request-view', request_id]);
                }
                else {
                    this.resp_msg = res;
                    this.toastr.error(this.resp_msg.message, '', { timeOut: 2000 });
                }
            });
        }
    };
    CancelledRequestComponent = __decorate([
        Component({
            selector: 'app-cancelled-request',
            templateUrl: './cancelled-request.component.html',
            styleUrls: ['./cancelled-request.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            HttpService,
            ToastrService])
    ], CancelledRequestComponent);
    return CancelledRequestComponent;
})();
export { CancelledRequestComponent };
//# sourceMappingURL=cancelled-request.component.js.map