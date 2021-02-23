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
let AcceptRequestComponent = /** @class */ (() => {
    let AcceptRequestComponent = class AcceptRequestComponent {
        constructor(productService, modalService, fb, toastr, service, router) {
            this.productService = productService;
            this.modalService = modalService;
            this.fb = fb;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
            this.ReadOnlyStyleGuideNotes = false;
            this.call_check = false;
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
            // console.log("userId-",this.userId)
            // console.log("roleId-",this.roleId)
            this.interpreterRequestData('1');
            // this.searchControl.valueChanges
            //   .pipe(debounceTime(200))
            //   .subscribe(value => {
            //     this.filerData(value);
            //   });
            this.createForm();
            /*this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
            this.array_Obj = this.roleData['data'][0];
            if(this.array_Obj.id){
              this.array_Obj = this.roleData['data'][0];
              console.log("roleData", this.array_Obj);
            }
            */
        }
        /*========== Form Value Start Here========*/
        createForm() {
            this.noteForm = this.fb.group({
                notes: ['']
            });
        }
        /*========== Form Value End Here========*/
        // filerData(val) {
        //   if (val) {
        //     val = val.toLowerCase();
        //   } else {
        //     console.log("xxxxxxx", this.filteredUser);
        //     return this.filteredUser = [... this.userData];
        //   }
        //   const columns = Object.keys(this.userData[0]);
        //   if (!columns.length) {
        //     return;
        //   }
        //   const rows = this.userData.filter(function (d) {
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
            // this.service.interpreterRequestList(this.roleId, this.userId, '2', this.allData,
            this.service.interpreterRequestList(this.roleId, this.userId, '1', this.allData, this.startDate, this.endDate)
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
        // request completed by interpreter
        requestComplete(id, modal) {
            console.log("idddddddddd", id);
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.interpreterReqCompleted(id, this.userId)
                    .subscribe(res => {
                    this.msg = res;
                    if (res['status'] == '1') {
                        this.toastr.success(this.msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                        this.router.navigate(['/interpreter-request/completed-list']);
                    }
                    // else{
                    //   this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
                    //   this.router.navigate(['/interpreter-request/list']);
                    // }
                });
            }, (reason) => {
            });
        }
        //send reminder
        reminder_popup_open(id, risId, modal) {
            console.log("iddddddd", id, risId);
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.getReminderRequest(id, risId, this.noteForm.value.notes)
                    .subscribe(res => {
                    this.reminder = res;
                    // this.msg.message = res;
                    console.log("reminder form", this.reminder);
                    if (res['status'] == 1) {
                        this.toastr.success(this.reminder.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                        this.router.navigate(['/interpreter-request/accept-list']);
                    }
                });
            }, (reason) => {
            });
        }
        // trackingLinkSend(row.ris_id, linkConfirmModal)
        trackingLinkSend(id, risId, modal) {
            console.log("iddddddd", id, risId);
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.interpreterTrackingLinkSend(id, risId).subscribe(res => {
                    this.resp_msg = res;
                    // this.msg.message = res;
                    console.log("reminder form", this.reminder);
                    if (res['status'] == 1) {
                        this.toastr.success(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                        this.router.navigate(['/interpreter-request/accept-list']);
                    }
                    else {
                        this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                        this.router.navigate(['/interpreter-request/accept-list']);
                    }
                });
            }, (reason) => {
            });
        }
        call_Check() {
            if (this.ReadOnlyStyleGuideNotes) {
                this.ReadOnlyStyleGuideNotes = false;
            }
            else {
                this.ReadOnlyStyleGuideNotes = true;
            }
        }
        email_check() {
            if (this.call_check) {
                this.call_check = false;
            }
            else {
                this.call_check = true;
            }
        }
        sms_check() {
            if (this.call_check) {
                this.call_check = true;
            }
            else {
                this.call_check = false;
            }
        }
        push_check() {
            if (this.call_check) {
                this.call_check = true;
            }
            else {
                this.call_check = false;
            }
        }
        viewDetail(request_id) {
            console.log("id--", request_id);
            this.service.getRequestDetail(request_id).subscribe(res => {
                if (res['status'] == 1) {
                    this.view_obj = res['data'][0];
                    console.log("api data", this.view_obj);
                    localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                    this.router.navigate(['/user-request/request-view', request_id]);
                }
                else {
                    this.resp_msg = res;
                    this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                }
            });
        }
    };
    AcceptRequestComponent = __decorate([
        Component({
            selector: 'app-accept-request',
            templateUrl: './accept-request.component.html',
            styleUrls: ['./accept-request.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            FormBuilder,
            ToastrService,
            HttpService,
            Router])
    ], AcceptRequestComponent);
    return AcceptRequestComponent;
})();
export { AcceptRequestComponent };
//# sourceMappingURL=accept-request.component.js.map