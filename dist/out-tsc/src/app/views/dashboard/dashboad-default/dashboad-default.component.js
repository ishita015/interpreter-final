var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { isSameDay, isSameMonth } from 'date-fns';
import { DatePipe } from '@angular/common';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
import { CalendarAppService } from './../../calendar/calendar-app.service';
import { CalendarFormDialogComponent } from '../../calendar/calendar-form-dialog/calendar-form-dialog.component';
import { Utils } from 'src/app/shared/utils';
import { FormBuilder } from '@angular/forms';
let DashboadDefaultComponent = /** @class */ (() => {
    let DashboadDefaultComponent = class DashboadDefaultComponent {
        /////v2/////
        constructor(productService, service, router, fb, modalService, calendarService, toastr) {
            this.productService = productService;
            this.service = service;
            this.router = router;
            this.fb = fb;
            this.modalService = modalService;
            this.calendarService = calendarService;
            this.toastr = toastr;
            this.roleId = localStorage.getItem('roleId');
            /////v2/////
            this.view = 'month';
            this.viewDate = new Date();
            this.activeDayIsOpen = false;
            this.refresh = new Subject();
            this.pipe = new DatePipe('en-US');
            this.actions = [{
                    label: '<i class="i-Edit m-1 text-secondary"></i>',
                    onClick: ({ event }) => {
                        this.handleEvent('edit', event);
                    }
                }, {
                    label: '<i class="i-Close m-1 text-danger"></i>',
                    onClick: ({ event }) => {
                        // this.removeEvent(event);
                    }
                }];
        }
        ngOnInit() {
            // alert(this.roleId)
            this.totalUserList(1);
            this.totalLanguageList();
            this.totalNewRequest();
            this.total_assign();
            this.total_inprogress();
            this.total_complete();
            this.total_cancelled();
            this.total_interpreter();
            this.getallRequest();
            this.roleName = JSON.parse(localStorage.getItem('roleName'));
            this.roleName = JSON.parse(localStorage.getItem('roleName'));
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.new_request();
            this.accept_request();
            this.reject_request();
            this.complete_request();
            this.cancelled_request();
            // this.loadEvents();
            //get admin assign
            this.getInterpreterRequestInfo();
        }
        totalUserList(id) {
            this.service.getdashboardUsers()
                .subscribe(res => {
                console.log("apiiiiiiiiii response user", res);
                this.totaluser_obj = res['data'][0];
            });
        }
        total_interpreter() {
            this.service.getdashboardInterpreter()
                .subscribe(res => {
                //   console.log("apiiiiiiiiii response service", res);
                this.totalinter_obj = res['data'][0];
            });
        }
        totalLanguageList() {
            this.service.getdashboardLanguage()
                .subscribe(res => {
                console.log("apiiiiiiiiii response service", res);
                this.totallanguage_obj = res['data'][0];
            });
        }
        getallRequest() {
            this.service.allRequest()
                .subscribe(res => {
                //   console.log("apiiiiiiiiii response service", res);
                this.allreq_obj = res['data'][0];
            });
        }
        totalNewRequest() {
            this.service.totalRequest()
                .subscribe(res => {
                //   console.log("apiiiiiiiiii response service", res);
                this.totalrequest_obj = res['data'][0];
            });
        }
        total_assign() {
            this.service.totalAssign()
                .subscribe(res => {
                console.log("apiiiiiiiiii response service", res);
                this.totalassign_obj = res['data'][0];
            });
        }
        total_inprogress() {
            this.service.totalInprogress()
                .subscribe(res => {
                console.log("apiiiiiiiiii response service", res);
                this.totalinprogress_obj = res['data'][0];
            });
        }
        total_complete() {
            this.service.totalComplete()
                .subscribe(res => {
                console.log("apiiiiiiiiii response service", res);
                this.totalcomplete_obj = res['data'][0];
            });
        }
        total_cancelled() {
            this.service.totalCancelled()
                .subscribe(res => {
                console.log("apiiiiiiiiii response service", res);
                this.totalcancel_obj = res['data'][0];
            });
        }
        users() {
            this.router.navigate(['/users/user-list']);
        }
        interpreter() {
            this.router.navigate(['/interpreter/interpreter-list']);
        }
        language() {
            this.router.navigate(['/languages/list']);
        }
        all_requ() {
            this.router.navigate(['/interpreter-request/all-request-list']);
        }
        // new_request(){
        //     this.router.navigate(['/user-request/list']);
        // }
        assign_request() {
            this.router.navigate(['/interpreter-request/list']);
        }
        // accept_request(){
        //     this.router.navigate(['/interpreter-request/accept-list']);
        // }
        // complete_request(){
        //     this.router.navigate(['/interpreter-request/completed-list']);
        // }
        cancel_request() {
            this.router.navigate(['/interpreter-request/cancelled-list']);
        }
        ////////////////v2///////////////////
        // get admin assign
        getInterpreterRequestInfo() {
            this.service.interpreterDashboardData(this.userId)
                .subscribe(res => {
                if (res['status'] == '1') {
                    this.cal_data = res['data'];
                    console.log("cal_data", this.cal_data);
                    this.events = [];
                    for (let i = 0; i < this.cal_data.length; i++) {
                        var dataArray = this.cal_data[i].date.split(/[ -]/);
                        this.new_date = new Date(dataArray[0], dataArray[1] - 1, dataArray[2]);
                        this.events.push({
                            start: this.new_date,
                            title: this.cal_data[i].title,
                            _id: this.cal_data[i].id,
                            request_id: this.cal_data[i].request_id,
                            color: {
                                primary: this.cal_data[i].id == "0" ? "#77a024" : "#1153e3",
                                secondary: this.cal_data[i].id == "0" ? "#11e3ad" : "#9c24a0",
                            }
                        });
                    }
                }
            });
        }
        viewEvent(e) {
            console.log("view all data _id", e);
            this.service
                .interpreterViewEvents(this.userId, e.event._id)
                .subscribe(result => {
                if (result['status'] == '1') {
                    console.log("result", result);
                    this.viewObj = result;
                    console.log("response ", this.viewObj);
                    this.modalService.open(this.eventViewConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
                        .result.then((result) => {
                    });
                }
                else {
                    this.router.navigate(['/user-request/request-view/' + e.event.request_id]);
                    // this.modalService.open(this.requestViewConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
                    //     .result.then((result) => {
                    // });
                }
            });
        }
        editCalender(data, id) {
            console.log("idddddddddddddd", data, id);
            localStorage.setItem('editData', JSON.stringify(data));
            this.router.navigate(['/dashboard/edit']);
        }
        removeEvent(e) {
            console.log("idddddddd", e);
            this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.interpreterLocalEvents(this.userId);
                this.service.removeLocalEvents(this.userId, e)
                    .subscribe(res => {
                    // this.events = this.initEvents(events);
                    console.log("resp", res);
                    this.toastr.success(res.message, '', { timeOut: 1000 });
                    // this.refresh.next();
                    this.getInterpreterRequestInfo();
                });
            }, (reason) => {
            });
        }
        new_request() {
            this.service.newRequestCount(this.userId)
                .subscribe(res => {
                this.newrequest_obj = res['data'][0];
            });
        }
        accept_request() {
            this.service.acceptRequestCount(this.userId)
                .subscribe(res => {
                this.accept_obj = res['data'][0];
            });
        }
        reject_request() {
            this.service.rejectRequestCount(this.userId)
                .subscribe(res => {
                this.reject_obj = res['data'][0];
            });
        }
        complete_request() {
            this.service.completeRequestCount(this.userId)
                .subscribe(res => {
                this.totalcomplete_obj = res['data'][0];
            });
        }
        cancelled_request() {
            this.service.cancelledRequestCount(this.userId)
                .subscribe(res => {
                this.totalcancel_obj = res['data'][0];
            });
        }
        newRequest() {
            this.router.navigate(['/interpreter-request/list']);
        }
        acceptRquest() {
            this.router.navigate(['/interpreter-request/accept-list']);
        }
        RejectRequest() {
            this.router.navigate(['/interpreter-request/reject-list']);
        }
        completeRequest() {
            this.router.navigate(['/interpreter-request/completed-list']);
        }
        cancelRequest() {
            this.router.navigate(['/interpreter-request/cancelled-list']);
        }
        // ================================ calendar =============================== //
        initEvents(events) {
            return events.map(event => {
                event.actions = this.actions;
                return new CalendarAppEvent(event);
            });
        }
        loadEvents() {
            this.calendarService
                .getEvents()
                .subscribe((events) => {
                this.events = this.initEvents(events);
                console.log("events--", this.events);
            });
        }
        // public addEvent() {
        //     const dialogRef = this.modalService.open(CalendarFormDialogComponent, {centered: true});
        //     dialogRef.componentInstance.data = {
        //         action: 'add',
        //         date: new Date()
        //     };
        //     dialogRef.result
        //         .then((res) => {
        //             if (!res) {
        //                 return;
        //             }
        //             const dialogAction = res.action;
        //             const responseEvent = res.event;
        //             responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
        //             responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
        //             this.calendarService
        //                 .addEvent(responseEvent)
        //                 .subscribe(events => {
        //                     this.events = this.initEvents(events);
        //                     this.refresh.next(true);
        //                     console.log(this.events);
        //                 });
        //         }).catch(e => {
        //             console.log(e);
        //         });
        // }
        handleEvent(action, event) {
            const dialogRef = this.modalService.open(CalendarFormDialogComponent, { centered: true });
            dialogRef.componentInstance.data = { event, action };
            dialogRef
                .result
                .then(res => {
                if (!res) {
                    return;
                }
                const dialogAction = res.action;
                const responseEvent = res.event;
                responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
                responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
                console.log(res);
                if (dialogAction === 'save') {
                    this.calendarService
                        .updateEvent(responseEvent)
                        .subscribe(events => {
                        this.events = this.initEvents(events);
                        this.refresh.next();
                        console.log(this.events);
                    });
                }
                else if (dialogAction === 'delete') {
                    // this.removeEvent(event);
                }
            })
                .catch(e => {
                console.log(e);
            });
        }
        dayClicked({ date, events }) {
            if (isSameMonth(date, this.viewDate)) {
                if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                    events.length === 0) {
                    this.activeDayIsOpen = false;
                }
                else {
                    this.activeDayIsOpen = true;
                    this.viewDate = date;
                }
            }
        }
        // public eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
        //     event.start = newStart;
        //     event.end = newEnd;
        //     this.calendarService
        //         .updateEvent(event)
        //         .subscribe(events => {
        //             this.events = this.initEvents(events);
        //             this.refresh.next();
        //         });
        // }
        // ================================ Add Calendar Start =============================== //
        addEvent() {
            this.router.navigate(['/dashboard/add']);
        }
    };
    __decorate([
        ViewChild('eventDeleteConfirm', { static: true }),
        __metadata("design:type", Object)
    ], DashboadDefaultComponent.prototype, "eventDeleteConfirm", void 0);
    __decorate([
        ViewChild('eventViewConfirm', { static: true }),
        __metadata("design:type", Object)
    ], DashboadDefaultComponent.prototype, "eventViewConfirm", void 0);
    __decorate([
        ViewChild('requestViewConfirm', { static: true }),
        __metadata("design:type", Object)
    ], DashboadDefaultComponent.prototype, "requestViewConfirm", void 0);
    DashboadDefaultComponent = __decorate([
        Component({
            selector: 'app-dashboad-default',
            templateUrl: './dashboad-default.component.html',
            styleUrls: ['./dashboad-default.component.css']
        }),
        __metadata("design:paramtypes", [ProductService,
            HttpService,
            Router,
            FormBuilder,
            NgbModal,
            CalendarAppService,
            ToastrService])
    ], DashboadDefaultComponent);
    return DashboadDefaultComponent;
})();
export { DashboadDefaultComponent };
//# sourceMappingURL=dashboad-default.component.js.map