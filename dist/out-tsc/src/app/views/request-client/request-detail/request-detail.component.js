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
import { HttpService } from "../../../shared/services/http.service";
import { Router, ActivatedRoute } from '@angular/router';
let RequestDetailComponent = /** @class */ (() => {
    let RequestDetailComponent = class RequestDetailComponent {
        constructor(service, router, route) {
            this.service = service;
            this.router = router;
            this.route = route;
            this.id = route.snapshot.params['id'];
        }
        ngOnInit() {
            this.getRequestDetails();
        }
        GetAllPagesPermission() {
            this.service.get('getClientRoleMenusForPages/' + JSON.parse(localStorage.getItem('roleId'))).subscribe(res => {
                var count = 0;
                for (var i = 0; i < res['data'].length; ++i) {
                    if (res['data'][i].module_id == 7) {
                        if (res['data'][i].view_permission == 'false') {
                            this.router.navigate(['/client-request/all-request-list']);
                        }
                        else {
                            count = count + 1;
                            alert(count);
                        }
                    }
                    else {
                        let obj = res['data'].find(o => o.module_id === 7);
                        alert(JSON.stringify(obj));
                        if (count == 0) {
                            this.router.navigate(['/client-request/all-request-list']);
                        }
                    }
                }
            });
        }
        getRequestDetails() {
            this.service.get("getRequestDetails/" + this.id).subscribe((res) => {
                this.data = res['data'][0];
                console.log("==================this.data", this.data);
            });
        }
    };
    RequestDetailComponent = __decorate([
        Component({
            selector: 'app-request-detail',
            templateUrl: './request-detail.component.html',
            styleUrls: ['./request-detail.component.scss']
        }),
        __metadata("design:paramtypes", [HttpService, Router, ActivatedRoute])
    ], RequestDetailComponent);
    return RequestDetailComponent;
})();
export { RequestDetailComponent };
//# sourceMappingURL=request-detail.component.js.map