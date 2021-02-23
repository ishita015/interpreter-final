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
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
let InterpreterHistoryListComponent = /** @class */ (() => {
    let InterpreterHistoryListComponent = class InterpreterHistoryListComponent {
        constructor(modalService, toastr, service, router) {
            this.modalService = modalService;
            this.toastr = toastr;
            this.service = service;
            this.router = router;
            this.searchControl = new FormControl();
        }
        ngOnInit() {
            this.requestId = JSON.parse(localStorage.getItem('interhistory'));
            this.searchControl.valueChanges
                .pipe(debounceTime(200))
                .subscribe(value => {
                this.filerData(value);
            });
            this.numOfInterpreter();
        }
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
        numOfInterpreter() {
            console.log(this.requestId);
            this.service.getNoOfInterpreter(this.requestId).subscribe(res => {
                if (res['status'] == 1) {
                    this.interpreter_obj = res['data'];
                    this.userData = [...res['data']];
                    this.filteredUser = this.interpreter_obj;
                }
                else {
                    this.resp_msg = res;
                    this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                }
            });
        }
    };
    InterpreterHistoryListComponent = __decorate([
        Component({
            selector: 'app-interpreter-history-list',
            templateUrl: './interpreter-history-list.component.html',
            styleUrls: ['./interpreter-history-list.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal,
            ToastrService,
            HttpService,
            Router])
    ], InterpreterHistoryListComponent);
    return InterpreterHistoryListComponent;
})();
export { InterpreterHistoryListComponent };
//# sourceMappingURL=interpreter-history-list.component.js.map