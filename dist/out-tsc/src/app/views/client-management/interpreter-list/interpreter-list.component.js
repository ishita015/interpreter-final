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
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
let InterpreterListComponent = /** @class */ (() => {
    let InterpreterListComponent = class InterpreterListComponent {
        constructor(productService, modalService, toastr, service, router, route) {
            this.productService = productService;
            this.modalService = modalService;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
            this.route = route;
            this.searchControl = new FormControl();
            //search calendar
            this.search_name = new FormControl();
            this.range = new FormGroup({
                start_date: new FormControl(),
                end_date: new FormControl()
            });
        }
        ngOnInit() {
            this.id = this.route.snapshot.params.id ? this.route.snapshot.params.id : '0';
            console.log("iddddddd", this.id);
            this.type = this.route.snapshot.params.type ? this.route.snapshot.params.type : '0';
            console.log("qqqqq", this.type);
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.roleId = JSON.parse(localStorage.getItem('roleId'));
            this.interpreterList('1');
            this.rolePermission();
            // this.searchControl.valueChanges
            //   .pipe(debounceTime(200))
            //   .subscribe(value => {
            //     this.filerData(value);
            //   });
            this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
            // this.array_Obj = this.roleData['data'][3]; 
            // if(this.array_Obj.id){
            //   this.array_Obj = this.roleData['data'][3];
            //   // console.log("roleData", this.array_Obj);
        }
        rolePermission() {
            this.service.get('get-user-role-permission/' + localStorage.getItem('roleId')).subscribe(res => {
                for (var i = 0; i < res['data'].length; ++i) {
                    if (res['data'][i].module_id == 10) {
                        this.array_Obj = res['data'][i];
                    }
                }
            });
        }
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
        interpreterList(e) {
            this.allData = this.search_name.value;
            this.startDate = this.range.value.start_date;
            this.endDate = this.range.value.end_date;
            this.service.post('getAllClient', { search_info: this.allData, start_date: this.startDate, end_date: this.endDate })
                .subscribe(res => {
                if (res['status'] == true) {
                    this.list_Obj = res['data'];
                    this.userData = [...res['data']];
                    this.filteredUser = this.list_Obj;
                    this.role_id = this.roleId;
                }
                else {
                    this.list_Obj = [];
                    this.userData = [];
                    this.filteredUser = [];
                    this.router.navigate(['/client/client-list']);
                }
            });
        }
        clearAll() {
            this.search_name.setValue('');
            this.range.setValue({ start_date: '', end_date: '' });
            this.toastr.success('Filter cleared successfully');
            this.ngOnInit();
        }
        deleteInterpreter(id, modal) {
            console.log("delete idddddddddd", id);
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.getUserDelete(id)
                    .subscribe(res => {
                    this.userdelete_msg = res;
                    console.log("api", res);
                    this.toastr.success(this.userdelete_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                    // this.languageList();
                });
            }, (reason) => {
            });
        }
        addInterpreter() {
            this.router.navigate(['/client/client-add']);
        }
        profileInterpreter(id) {
            console.log("iddddd", id);
            localStorage.setItem('userId', JSON.stringify(id));
            this.router.navigate(['/client/client-profile', id]);
        }
        editInterpreter(id, data) {
            this.router.navigate(['/client/client-edit', id]);
            console.log("permission idddddddddd", id);
            console.log("data", data);
            localStorage.setItem('editData', JSON.stringify(data));
            localStorage.setItem('rowId', JSON.stringify(id));
            this.service.getInterpreterDetail(id)
                .subscribe(res => {
                this.user_Obj = res['data'];
                this.json_Obj = res['data']['0'];
                console.log("edit api", this.json_Obj.id);
                // localStorage.setItem('editData', JSON.stringify(this.json_Obj));
                // localStorage.setItem('interpreterInfo', JSON.stringify(this.user_Obj));
                // this.router.navigate(['/permission/setpermission',id]);
                // location.reload();
            });
        }
        statusChange(target, status, id) {
            console.log("permission target", target);
            console.log("permission status", status);
            console.log("permission id", id);
            this.service.statusUpdate(status, id)
                .subscribe(res => {
                this.status_msg = res;
                this.toastr.success(this.status_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                this.interpreterList('1');
            });
        }
        userView(id) {
            this.router.navigate(['/client/client-view/' + id]);
        }
        EditInterpreter(id) {
            this.router.navigate(['/client/client-edit/' + id]);
        }
        userInterpreter(id) {
            this.router.navigate(['/client/client-view/' + id]);
        }
    };
    InterpreterListComponent = __decorate([
        Component({
            selector: 'app-interpreter-list',
            templateUrl: './interpreter-list.component.html',
            styleUrls: ['./interpreter-list.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService,
            NgbModal,
            ToastrService,
            HttpService,
            Router,
            ActivatedRoute])
    ], InterpreterListComponent);
    return InterpreterListComponent;
})();
export { InterpreterListComponent };
//# sourceMappingURL=interpreter-list.component.js.map