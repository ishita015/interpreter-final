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
let ViewCalendarComponent = /** @class */ (() => {
    let ViewCalendarComponent = class ViewCalendarComponent {
        //-- Calendar variable End --//
        constructor(modalService, service, router, calendarService) {
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
                    onClick: ({ event }) => {
                        this.handleEvent('edit', event);
                    }
                }, {
                    label: '<i class="i-Close m-1 text-danger"></i>',
                    onClick: ({ event }) => {
                        this.removeEvent(event);
                    }
                }];
        }
        ngOnInit() {
            this.roleName = JSON.parse(localStorage.getItem('roleName'));
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.calendar_Id = JSON.parse(localStorage.getItem('calendarId'));
            // this.loadEvents();
            this.getInterpreterRequestInfo();
        }
        // ================================ Calendar Function Start=============================== //
        getInterpreterRequestInfo() {
            this.service.interpreterDashboardData(this.calendar_Id)
                .subscribe(res => {
                if (res['status'] == '1') {
                    this.cal_data = res['data'];
                    this.events = [];
                    for (let i = 0; i < this.cal_data.length; i++) {
                        var dataArray = this.cal_data[i].date.split(/[ -]/);
                        this.new_date = new Date(dataArray[0], dataArray[1] - 1, dataArray[2]);
                        this.events.push({
                            start: this.new_date,
                            title: this.cal_data[i].title
                        });
                    }
                }
            });
        }
        // ================================ Calendar Function End=============================== //
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
            });
        }
        removeEvent(event) {
            this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.calendarService
                    .deleteEvent(event._id)
                    .subscribe(events => {
                    this.events = this.initEvents(events);
                    this.refresh.next();
                });
            }, (reason) => {
            });
        }
        addEvent() {
            const dialogRef = this.modalService.open(CalendarFormDialogComponent, { centered: true });
            dialogRef.componentInstance.data = {
                action: 'add',
                date: new Date()
            };
            dialogRef.result
                .then((res) => {
                if (!res) {
                    return;
                }
                const dialogAction = res.action;
                const responseEvent = res.event;
                responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
                responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
                this.calendarService
                    .addEvent(responseEvent)
                    .subscribe(events => {
                    this.events = this.initEvents(events);
                    this.refresh.next(true);
                    console.log(this.events);
                });
            }).catch(e => {
                console.log(e);
            });
        }
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
                    this.removeEvent(event);
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
        eventTimesChanged({ event, newStart, newEnd }) {
            event.start = newStart;
            event.end = newEnd;
            this.calendarService
                .updateEvent(event)
                .subscribe(events => {
                this.events = this.initEvents(events);
                this.refresh.next();
            });
        }
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
})();
export { ViewCalendarComponent };
//# sourceMappingURL=view-calendar.component.js.map