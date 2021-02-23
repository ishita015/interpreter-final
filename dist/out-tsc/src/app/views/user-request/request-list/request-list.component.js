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
import { FormControl, FormGroup } from '@angular/forms';
let RequestListComponent = /** @class */ (() => {
    let RequestListComponent = class RequestListComponent {
        constructor(productService, modalService, toastr, service, router) {
            this.productService = productService;
            this.modalService = modalService;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
            this.searchNameEmail = '';
            this.distance = '';
            this.rate = '';
            this.rating = '';
            this.search_name = new FormControl();
            this.range = new FormGroup({
                start_date: new FormControl(),
                end_date: new FormControl()
            });
        }
        ngOnInit() {
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.roleId = JSON.parse(localStorage.getItem('roleId'));
            console.log("userId-", this.userId);
            console.log("roleId-", this.roleId);
            this.userRequestList('1');
            // this.searchControl.valueChanges
            // .pipe(debounceTime(200))
            // .subscribe(value => {
            //   this.filerData(value);
            // });
            // this.products$ = this.productService.getProducts();
        }
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
        userRequestList(e) {
            console.log("startDateaaaaaaaaaa", this.range.value.start_date);
            this.allData = this.search_name.value;
            this.startDate = this.range.value.start_date;
            console.log("startDate", this.startDate);
            this.endDate = this.range.value.end_date;
            console.log("all", this.allData, this.startDate, this.endDate);
            this.service.getUserRequest(this.allData, this.startDate, this.endDate)
                .subscribe(res => {
                console.log("==============================res", res);
                if (res['status'] == 1) {
                    this.list_Obj = res['data'];
                    this.userData = [...res['data']];
                    console.log("listttttttt", this.list_Obj);
                    this.filteredUser = this.list_Obj;
                }
                else {
                    this.list_Obj = [];
                    this.userData = [];
                    this.filteredUser = [];
                    // this.resp_msg = res;
                    // this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
                }
            });
        }
        viewDetail(request_id) {
            console.log("id--", request_id);
            this.service.getRequestDetail(request_id).subscribe(res => {
                if (res['status'] == 1) {
                    this.view_obj = res['data'][0];
                    console.log("view object", this.view_obj);
                    localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                    this.router.navigate(['/user-request/request-view', request_id]);
                }
                else {
                    this.resp_msg = res;
                    this.toastr.error(this.resp_msg.message, '', { timeOut: 2000 });
                }
            });
        }
        //assign
        assignMyNearbyInterpreter(service_id, info) {
            console.log("id assign", service_id);
            console.log("Infoooooooooooo lang", info.language);
            localStorage.setItem('assignData', JSON.stringify(info));
            localStorage.setItem('serviceId', JSON.stringify(service_id));
            this.service.myNearbyInterpreter(service_id, info.language, this.searchNameEmail, this.distance, this.rate, this.rating).subscribe(res => {
                this.interpreter_obj = res['data'];
                console.log("interpreter_obj", this.interpreter_obj);
                localStorage.setItem('viewDatainMap', JSON.stringify(this.view_interpreter));
                this.router.navigate(['/user-request/interpreter-view', service_id]);
            });
        }
    };
    RequestListComponent = __decorate([
        Component({
            selector: 'app-request-list',
            templateUrl: './request-list.component.html',
            styleUrls: ['./request-list.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router])
    ], RequestListComponent);
    return RequestListComponent;
})();
export { RequestListComponent };
//# sourceMappingURL=request-list.component.js.map