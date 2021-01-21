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
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isSameDay, isSameMonth } from 'date-fns';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
// import { CalendarAppService } from './calendar-app.service'; 
// import { CalendarFormDialogComponent } from '../calendar-form-dialog/calendar-form-dialog.component';
import { Utils } from 'src/app/shared/utils';
import { CalendarAppService } from '../../calendar/calendar-app.service';
import { CalendarFormDialogComponent } from '../../calendar/calendar-form-dialog/calendar-form-dialog.component';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
var ViewCalendarComponent = /** @class */ (function () {
    //-- Calendar variable End --//
    function ViewCalendarComponent(modalService, service, router, calendarService) {
        var _this = this;
        this.modalService = modalService;
        this.service = service;
        this.router = router;
        this.calendarService = calendarService;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.refresh = new Subject();
        //-- Calendar variable Start --//
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
                    _this.removeEvent(event);
                }
            }];
    }
    ViewCalendarComponent.prototype.ngOnInit = function () {
        this.roleName = JSON.parse(localStorage.getItem('roleName'));
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.calendar_Id = JSON.parse(localStorage.getItem('calendarId'));
        // this.loadEvents();
        this.getInterpreterRequestInfo();
    };
    // ================================ Calendar Function Start=============================== //
    ViewCalendarComponent.prototype.getInterpreterRequestInfo = function () {
        var _this = this;
        this.service.interpreterDashboardData(this.calendar_Id)
            .subscribe(function (res) {
            if (res['status'] == '1') {
                _this.cal_data = res['data'];
                _this.events = [];
                for (var i = 0; i < _this.cal_data.length; i++) {
                    var dataArray = _this.cal_data[i].date.split(/[ -]/);
                    _this.new_date = new Date(dataArray[0], dataArray[1] - 1, dataArray[2]);
                    _this.events.push({
                        start: _this.new_date,
                        title: _this.cal_data[i].title
                    });
                }
            }
        });
    };
    // ================================ Calendar Function End=============================== //
    ViewCalendarComponent.prototype.initEvents = function (events) {
        var _this = this;
        return events.map(function (event) {
            event.actions = _this.actions;
            return new CalendarAppEvent(event);
        });
    };
    ViewCalendarComponent.prototype.loadEvents = function () {
        var _this = this;
        this.calendarService
            .getEvents()
            .subscribe(function (events) {
            _this.events = _this.initEvents(events);
        });
    };
    ViewCalendarComponent.prototype.removeEvent = function (event) {
        var _this = this;
        this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.calendarService
                .deleteEvent(event._id)
                .subscribe(function (events) {
                _this.events = _this.initEvents(events);
                _this.refresh.next();
            });
        }, function (reason) {
        });
    };
    ViewCalendarComponent.prototype.addEvent = function () {
        var _this = this;
        var dialogRef = this.modalService.open(CalendarFormDialogComponent, { centered: true });
        dialogRef.componentInstance.data = {
            action: 'add',
            date: new Date()
        };
        dialogRef.result
            .then(function (res) {
            if (!res) {
                return;
            }
            var dialogAction = res.action;
            var responseEvent = res.event;
            responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
            responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
            _this.calendarService
                .addEvent(responseEvent)
                .subscribe(function (events) {
                _this.events = _this.initEvents(events);
                _this.refresh.next(true);
                console.log(_this.events);
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    ViewCalendarComponent.prototype.handleEvent = function (action, event) {
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
                _this.removeEvent(event);
            }
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ViewCalendarComponent.prototype.dayClicked = function (_a) {
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
    ViewCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var _this = this;
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.calendarService
            .updateEvent(event)
            .subscribe(function (events) {
            _this.events = _this.initEvents(events);
            _this.refresh.next();
        });
    };
    __decorate([
        ViewChild('eventDeleteConfirm', { static: true }),
        __metadata("design:type", Object)
    ], ViewCalendarComponent.prototype, "eventDeleteConfirm", void 0);
    ViewCalendarComponent = __decorate([
        Component({
            selector: 'app-view-calendar',
            templateUrl: './view-calendar.component.html',
            styleUrls: ['./view-calendar.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal,
            HttpService,
            Router,
            CalendarAppService])
    ], ViewCalendarComponent);
    return ViewCalendarComponent;
}());
export { ViewCalendarComponent };
//# sourceMappingURL=view-calendar.component.js.map