var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
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
var DashboardV2Component = /** @class */ (function () {
    function DashboardV2Component(productService, service, router, fb, modalService, calendarService, toastr) {
        var _this = this;
        this.productService = productService;
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.modalService = modalService;
        this.calendarService = calendarService;
        this.toastr = toastr;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = false;
        this.refresh = new Subject();
        this.pipe = new DatePipe('en-US');
        this.actions = [{
                label: '<i class="i-Edit m-1 text-secondary"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('edit', event);
                }
            }, {
                label: '<i class="i-Close m-1 text-danger"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    // this.removeEvent(event);
                }
            }];
    }
    DashboardV2Component.prototype.ngOnInit = function () {
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
    };
    // get admin assign
    DashboardV2Component.prototype.getInterpreterRequestInfo = function () {
        var _this = this;
        this.service.interpreterDashboardData(this.userId)
            .subscribe(function (res) {
            if (res['status'] == '1') {
                _this.cal_data = res['data'];
                console.log("cal_data", _this.cal_data);
                _this.events = [];
                for (var i = 0; i < _this.cal_data.length; i++) {
                    var dataArray = _this.cal_data[i].date.split(/[ -]/);
                    _this.new_date = new Date(dataArray[0], dataArray[1] - 1, dataArray[2]);
                    _this.events.push({
                        start: _this.new_date,
                        title: _this.cal_data[i].title,
                        _id: _this.cal_data[i].id,
                        request_id: _this.cal_data[i].request_id,
                        color: {
                            primary: _this.cal_data[i].id == "0" ? "#77a024" : "#1153e3",
                            secondary: _this.cal_data[i].id == "0" ? "#11e3ad" : "#9c24a0",
                        }
                    });
                }
            }
        });
    };
    DashboardV2Component.prototype.viewEvent = function (e) {
        var _this = this;
        console.log("view all data _id", e);
        this.service
            .interpreterViewEvents(this.userId, e.event._id)
            .subscribe(function (result) {
            if (result['status'] == '1') {
                console.log("result", result);
                _this.viewObj = result;
                console.log("response ", _this.viewObj);
                _this.modalService.open(_this.eventViewConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
                    .result.then(function (result) {
                });
            }
            else {
                _this.router.navigate(['/user-request/request-view/' + e.event.request_id]);
                // this.modalService.open(this.requestViewConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
                // 	.result.then((result) => {
                // });
            }
        });
    };
    DashboardV2Component.prototype.editCalender = function (data, id) {
        console.log("idddddddddddddd", data, id);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/dashboard/edit']);
    };
    DashboardV2Component.prototype.removeEvent = function (e) {
        var _this = this;
        console.log("idddddddd", e);
        this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.service.interpreterLocalEvents(_this.userId);
            _this.service.removeLocalEvents(_this.userId, e)
                .subscribe(function (res) {
                // this.events = this.initEvents(events);
                console.log("resp", res);
                _this.toastr.success(res.message, '', { timeOut: 1000 });
                // this.refresh.next();
                _this.getInterpreterRequestInfo();
            });
        }, function (reason) {
        });
    };
    DashboardV2Component.prototype.new_request = function () {
        var _this = this;
        this.service.newRequestCount(this.userId)
            .subscribe(function (res) {
            _this.newrequest_obj = res['data'][0];
        });
    };
    DashboardV2Component.prototype.accept_request = function () {
        var _this = this;
        this.service.acceptRequestCount(this.userId)
            .subscribe(function (res) {
            _this.accept_obj = res['data'][0];
        });
    };
    DashboardV2Component.prototype.reject_request = function () {
        var _this = this;
        this.service.rejectRequestCount(this.userId)
            .subscribe(function (res) {
            _this.reject_obj = res['data'][0];
        });
    };
    DashboardV2Component.prototype.complete_request = function () {
        var _this = this;
        this.service.completeRequestCount(this.userId)
            .subscribe(function (res) {
            _this.totalcomplete_obj = res['data'][0];
        });
    };
    DashboardV2Component.prototype.cancelled_request = function () {
        var _this = this;
        this.service.cancelledRequestCount(this.userId)
            .subscribe(function (res) {
            _this.totalcancel_obj = res['data'][0];
        });
    };
    DashboardV2Component.prototype.newRequest = function () {
        this.router.navigate(['/interpreter-request/list']);
    };
    DashboardV2Component.prototype.acceptRquest = function () {
        this.router.navigate(['/interpreter-request/accept-list']);
    };
    DashboardV2Component.prototype.RejectRequest = function () {
        this.router.navigate(['/interpreter-request/reject-list']);
    };
    DashboardV2Component.prototype.completeRequest = function () {
        this.router.navigate(['/interpreter-request/completed-list']);
    };
    DashboardV2Component.prototype.cancelRequest = function () {
        this.router.navigate(['/interpreter-request/cancelled-list']);
    };
    // ================================ calendar =============================== //
    DashboardV2Component.prototype.initEvents = function (events) {
        var _this = this;
        return events.map(function (event) {
            event.actions = _this.actions;
            return new CalendarAppEvent(event);
        });
    };
    DashboardV2Component.prototype.loadEvents = function () {
        var _this = this;
        this.calendarService
            .getEvents()
            .subscribe(function (events) {
            _this.events = _this.initEvents(events);
            console.log("events--", _this.events);
        });
    };
    // public addEvent() {
    // 	const dialogRef = this.modalService.open(CalendarFormDialogComponent, {centered: true});
    // 	dialogRef.componentInstance.data = {
    // 		action: 'add',
    // 		date: new Date()
    // 	};
    // 	dialogRef.result
    // 		.then((res) => {
    // 			if (!res) {
    // 				return;
    // 			}
    // 			const dialogAction = res.action;
    // 			const responseEvent = res.event;
    // 			responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
    // 			responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
    // 			this.calendarService
    // 				.addEvent(responseEvent)
    // 				.subscribe(events => {
    // 					this.events = this.initEvents(events);
    // 					this.refresh.next(true);
    // 					console.log(this.events);
    // 				});
    // 		}).catch(e => {
    // 			console.log(e);
    // 		});
    // }
    DashboardV2Component.prototype.handleEvent = function (action, event) {
        var _this = this;
        var dialogRef = this.modalService.open(CalendarFormDialogComponent, { centered: true });
        dialogRef.componentInstance.data = { event: event, action: action };
        dialogRef
            .result
            .then(function (res) {
            if (!res) {
                return;
            }
            var dialogAction = res.action;
            var responseEvent = res.event;
            responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
            responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
            console.log(res);
            if (dialogAction === 'save') {
                _this.calendarService
                    .updateEvent(responseEvent)
                    .subscribe(function (events) {
                    _this.events = _this.initEvents(events);
                    _this.refresh.next();
                    console.log(_this.events);
                });
            }
            else if (dialogAction === 'delete') {
                // this.removeEvent(event);
            }
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    DashboardV2Component.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
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
    };
    // public eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    // 	event.start = newStart;
    // 	event.end = newEnd;
    // 	this.calendarService
    // 		.updateEvent(event)
    // 		.subscribe(events => {
    // 			this.events = this.initEvents(events);
    // 			this.refresh.next();
    // 		});
    // }
    // ================================ Add Calendar Start =============================== //
    DashboardV2Component.prototype.addEvent = function () {
        this.router.navigate(['/dashboard/add']);
    };
    __decorate([
        ViewChild('eventDeleteConfirm', { static: true }),
        __metadata("design:type", Object)
    ], DashboardV2Component.prototype, "eventDeleteConfirm", void 0);
    __decorate([
        ViewChild('eventViewConfirm', { static: true }),
        __metadata("design:type", Object)
    ], DashboardV2Component.prototype, "eventViewConfirm", void 0);
    __decorate([
        ViewChild('requestViewConfirm', { static: true }),
        __metadata("design:type", Object)
    ], DashboardV2Component.prototype, "requestViewConfirm", void 0);
    DashboardV2Component = __decorate([
        Component({
            selector: 'app-dashboard-v2',
            templateUrl: './dashboard-v2.component.html',
            styleUrls: ['./dashboard-v2.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService, HttpService,
            Router,
            FormBuilder,
            NgbModal,
            CalendarAppService,
            ToastrService])
    ], DashboardV2Component);
    return DashboardV2Component;
}());
export { DashboardV2Component };
//# sourceMappingURL=dashboard-v2.component.js.map