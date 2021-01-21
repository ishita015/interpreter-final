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
import { FormControl, FormGroup } from '@angular/forms';
var InterpreterRequestListComponent = /** @class */ (function () {
    function InterpreterRequestListComponent(productService, modalService, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        //search calendar
        this.search_name = new FormControl();
        this.range = new FormGroup({
            start_date: new FormControl(),
            end_date: new FormControl()
        });
    }
    InterpreterRequestListComponent.prototype.ngOnInit = function () {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        console.log("userId-", this.userId);
        // console.log("roleId-",this.roleId)
        this.PendingRequestData('1');
        // this.interpreterRequestData();
        // this.searchControl.valueChanges
        // .pipe(debounceTime(200))
        // .subscribe(value => {
        //   this.filerData(value);
        // });
        /*this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        this.array_Obj = this.roleData['data'][0];
        if(this.array_Obj.id){
          this.array_Obj = this.roleData['data'][0];
          console.log("roleData", this.array_Obj);
        }
        */
    };
    /*========== Search Filter For Table Start Here========*/
    InterpreterRequestListComponent.prototype.filerData = function (val) {
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
    /*========== Search Filter For Table End Here========*/
    /*========== Pending Request Start Here========*/
    InterpreterRequestListComponent.prototype.PendingRequestData = function (e) {
        var _this = this;
        this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        this.endDate = this.range.value.end_date;
        this.service.AllPendingRequest(this.allData, this.startDate, this.endDate)
            .subscribe(function (res) {
            if (res['status'] == '1') {
                console.log("api response", res);
                _this.list_Obj = res['data'];
                _this.userData = __spread(res['data']);
                // console.log("listttttttt", this.list_Obj);
                _this.filteredUser = _this.list_Obj;
            }
        });
    };
    /*========== Pending Request End Here========*/
    //   interpreterRequestData(){
    //     this.service.interpreterRequestList(this.roleId,this.userId,'1')
    //     .subscribe(res => {
    //       if(res['status']=='1'){
    //         console.log("api response",res);
    //         this.list_Obj = res['data'];
    //         this.userData = [...res['data']];
    //         // console.log("listttttttt", this.list_Obj);
    //         this.filteredUser = this.list_Obj;
    //       }
    //     });
    // }
    /*========== Accept/Denay Through Interpreter Start Here========*/
    // requestComplete(id, modal) {
    InterpreterRequestListComponent.prototype.interpreterReply = function (ris_id, res_type, modal) {
        var _this = this;
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.service.interpreterReqReply(_this.userId, ris_id, res_type)
                .subscribe(function (res) {
                console.log("res---", res);
                _this.status_msg = res;
                if (res['status'] == '1') {
                    _this.toastr.success(_this.status_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                    // location.reload();
                    if (res_type == '2') {
                        _this.router.navigate(['/interpreter-request/accept-list']);
                    }
                    else {
                        _this.router.navigate(['/interpreter-request/reject-list']);
                    }
                    // this.interpreterRequestData();
                }
                else {
                    _this.toastr.success(_this.status_msg.message, '', { timeOut: 1000 });
                    _this.router.navigate(['/interpreter-request/list']);
                }
            });
        }, function (reason) {
        });
    };
    /*========== Accept/Declined Through Interpreter End Here========*/
    /*========== Show Details Start Here========*/
    InterpreterRequestListComponent.prototype.viewDetail = function (request_id) {
        var _this = this;
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(function (res) {
            if (res['status'] == 1) {
                _this.view_obj = res['data'][0];
                console.log("view object", _this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(_this.view_obj));
                _this.router.navigate(['/user-request/request-view', request_id]);
            }
            else {
                _this.resp_msg = res;
                _this.toastr.error(_this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
            }
        });
    };
    /*========== Show Details End Here========*/
    /*
      interpreterReply_old(user_id,ris_id,res_type,modal){
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        this.service.interpreterReqReply(user_id,ris_id,res_type).subscribe(res => {
          this.status_msg = res;
            if (res['status'] == '1') {
              this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
              // location.reload();
              this.router.navigate(['/interpreter-request/reject-list']);
              // this.interpreterRequestData();
            }else{
              this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
              this.router.navigate(['/interpreter-request/list']);
            }
        })
        });
      }
    */
    /*========== Number of Interpreter Popup Open Start Here========*/
    InterpreterRequestListComponent.prototype.numOfInterpreter = function (id, totalInterpreter, modal) {
        // this.router.navigate(['/interpreter-request/interpreter-history']);
        // console.log("iddddddddddd",id);
        // localStorage.setItem('interhistory', JSON.stringify(id));
        console.log("totalInterpreter", totalInterpreter);
        if (totalInterpreter == 0) {
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
        }
        else {
            // this.router.navigate(['/languages/interpreter-detail']);
            this.router.navigate(['/interpreter/interpreter-list/', id, 2]);
            // interpreter-list/:id/:type
        }
    };
    InterpreterRequestListComponent = __decorate([
        Component({
            selector: 'app-interpreter-request-list',
            templateUrl: './interpreter-request-list.component.html',
            styleUrls: ['./interpreter-request-list.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router])
    ], InterpreterRequestListComponent);
    return InterpreterRequestListComponent;
}());
export { InterpreterRequestListComponent };
//# sourceMappingURL=interpreter-request-list.component.js.map