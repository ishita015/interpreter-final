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
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
let AllRequestListSchedularComponent = /** @class */ (() => {
    let AllRequestListSchedularComponent = class AllRequestListSchedularComponent {
        constructor(productService, modalService, fb, toastr, service, router) {
            this.productService = productService;
            this.modalService = modalService;
            this.fb = fb;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
            this.searchEmail = '';
            this.searchStatus = '';
            this.request_status = new FormControl();
            this.searchControl = new FormControl();
            this.search_email = new FormControl();
            //search calendar
            this.search_name = new FormControl();
            this.range = new FormGroup({
                start_date: new FormControl(),
                end_date: new FormControl()
            });
            this.PermissionData = [];
        }
        ngOnInit() {
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.roleId = JSON.parse(localStorage.getItem('roleId'));
            this.interpreterAllRequest('1');
            this.GetAllPagesPermission();
            this.searchControl.valueChanges
                .pipe(debounceTime(200))
                .subscribe(value => {
                this.filerData(value);
            });
        }
        /*========== Filter Start Here========*/
        filerData(val) {
            if (val) {
                val = val.toLowerCase();
            }
            else {
                console.log("xxxxxxx", this.filteredUser);
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
        /*========== Filter End Here========*/
        /*========== All Request List Start Here========*/
        interpreterAllRequest(e) {
            // this.allData = this.search_name.value;
            this.startDate = this.range.value.start_date;
            this.endDate = this.range.value.end_date;
            this.status = this.request_status.value;
            this.searchStatus = this.status;
            // console.log("statusssss",this.searchStatus );
            this.email_formdata = this.search_email.value;
            this.searchEmail = this.email_formdata;
            //  alert(this.status);
            this.service.post('getAllClientRequest', { roleId: localStorage.getItem('roleId'), userId: localStorage.getItem('userId'), status: this.searchStatus, search_email: this.searchEmail, start_date: this.startDate, end_date: this.endDate })
                .subscribe(res => {
                if (res['status'] == '1') {
                    console.log("api response", res);
                    this.list_Obj = res['data'];
                    this.userData = [...res['data']];
                    this.filteredUser = this.list_Obj;
                }
                else {
                    this.list_Obj = [];
                    this.userData = [];
                    this.filteredUser = [];
                }
            });
        }
        /*========== All Request List End Here========*/
        /*========== Detail Start Here========*/
        viewDetail(request_id) {
            console.log("id--", request_id);
            this.service.getRequestDetail(request_id).subscribe(res => {
                if (res['status'] == 1) {
                    this.view_obj = res['data'][0];
                    console.log("api data", this.view_obj);
                    localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                    this.router.navigate(['/request-scheduler/details', request_id]);
                }
                else {
                    this.resp_msg = res;
                    this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                }
            });
        }
        GetAllPagesPermission() {
            this.service.get('getClientRoleMenusForPages/' + JSON.parse(localStorage.getItem('roleId'))).subscribe(res => {
                this.PermissionData = res['data'];
                console.log('PermissionData', this.PermissionData);
                // for (var i = 0; i < this.PermissionData.length; ++i) {
                //                    var aa= document.getElementsByClassName('ClientViewId');
                //    if(this.PermissionData[i].module_id == 7){
                //        if(this.PermissionData[i].add_permission == 'true'){
                //          document.getElementById('ClientAddId').classList.remove('displayNone')
                //        }else{
                //          document.getElementById('ClientAddId').classList.add('displayNone')
                //       }
                //        if(this.PermissionData[i].view_permission == 'true'){
                //          for (var nk = 0; nk < aa.length; ++nk) {
                //          document.getElementsByClassName('ClientViewId')[nk].classList.remove('displayNone')
                //          }
                //        }else{
                //          for (var nk = 0; nk < aa.length; ++nk) {
                //          document.getElementsByClassName('ClientViewId')[nk].classList.add('displayNone')
                //          }
                //       }
                //    }else{
                //                 document.getElementById('ClientAddId').classList.add('displayNone')
                //         for (var nk = 0; nk < aa.length; ++nk) {
                //          document.getElementsByClassName('ClientViewId')[nk].classList.add('displayNone')
                //          }
                //    }
                //  } 
            });
        }
        /*========== Detail End Here========*/
        newRequest() {
            this.router.navigate(['/client-request/create-request']);
        }
    };
    AllRequestListSchedularComponent = __decorate([
        Component({
            selector: 'app-all-request-list-schedular',
            templateUrl: './all-request-list-schedular.component.html',
            styleUrls: ['./all-request-list-schedular.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            FormBuilder,
            ToastrService,
            HttpService,
            Router])
    ], AllRequestListSchedularComponent);
    return AllRequestListSchedularComponent;
})();
export { AllRequestListSchedularComponent };
//# sourceMappingURL=all-request-list-schedular.component.js.map