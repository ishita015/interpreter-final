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
let CompleteRequestComponent = /** @class */ (() => {
    let CompleteRequestComponent = class CompleteRequestComponent {
        constructor(productService, modalService, toastr, service, router) {
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
        ngOnInit() {
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.roleId = JSON.parse(localStorage.getItem('roleId'));
            this.interpreterRequestData('1');
            // this.searchControl.valueChanges
            // .pipe(debounceTime(200))
            // .subscribe(value => {
            //   this.filerData(value);
            // });
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
        interpreterRequestData(e) {
            this.allData = this.search_name.value;
            this.startDate = this.range.value.start_date;
            this.endDate = this.range.value.end_date;
            this.service.interpreterRequestList(this.roleId, this.userId, 3, this.allData, this.startDate, this.endDate)
                .subscribe(res => {
                if (res['status'] == '1') {
                    console.log("api response", res);
                    this.list_Obj = res['data'];
                    this.userData = [...res['data']];
                    // console.log("listttttttt", this.list_Obj);
                    this.filteredUser = this.list_Obj;
                }
            });
        }
        viewDetail(request_id) {
            console.log("id--", request_id);
            this.service.getRequestDetail(request_id).subscribe(res => {
                if (res['status'] == 1) {
                    this.view_obj = res['data'][0];
                    console.log("api response", this.view_obj);
                    localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                    this.router.navigate(['/request-scheduler/details', request_id]);
                    // this.router.navigate(['/user-request/request-view',request_id])
                }
                else {
                    this.resp_msg = res;
                    this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                }
            });
        }
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
})();
export { CompleteRequestComponent };
//# sourceMappingURL=complete-request.component.js.map