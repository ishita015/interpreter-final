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
var InterpreterViewComponent = /** @class */ (function () {
    //-- Calendar variable End --//
    function InterpreterViewComponent(modalService, service, router, calendarService) {
        this.modalService = modalService;
        this.service = service;
        this.router = router;
        this.calendarService = calendarService;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = false;
        this.refresh = new Subject();
        //-- Calendar variable Start --//
        this.pipe = new DatePipe('en-US');
    }
    InterpreterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = window.location.href.split('client/client-view/')[1];
        this.service.get('getClientDetails/' + param).subscribe(function (res) {
            _this.data = res['data'];
        });
        // this.roleName = JSON.parse(localStorage.getItem('roleName'));
        // this.userId = JSON.parse(localStorage.getItem('userId'));
        // this.interpreter_Id = JSON.parse(localStorage.getItem('userViewData'));
        // console.log("calendar_Id",this.interpreter_Id.id);
        // this.loadEvents();
        this.getInterpreterRequestInfo(param);
    };
    //   getInterpreterRequestInfo(){
    // 		this.service.interpreterDashboardData(this.interpreter_Id.id)
    // 		.subscribe(res => {
    // 			if(res['status']=='1'){
    // 				this.cal_data = res['data'];
    // 				this.events = [];
    // 				for(let i=0; i < this.cal_data.length; i++){ 
    // 					var dataArray = this.cal_data[i].date.split(/[ -]/);
    // 					this.new_date = new Date( dataArray[0],dataArray[1]-1,dataArray[2]);
    // 					this.events.push ({
    // 						start: this.new_date,
    // 						title: this.cal_data[i].title
    // 					});
    // 				}
    // 			}else{
    // 				console.log(res)
    // 			}		
    // 		})
    // 	  }
    // get admin assign
    InterpreterViewComponent.prototype.getInterpreterRequestInfo = function (param) {
        var _this = this;
        this.service.interpreterDashboardData(param)
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
    InterpreterViewComponent.prototype.viewEvent = function (e) {
        var _this = this;
        console.log("view all data _id", e);
        this.service
            .interpreterViewEvents(this.interpreter_Id.id, e.event._id)
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
    InterpreterViewComponent.prototype.dayClicked = function (_a) {
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
    InterpreterViewComponent.prototype.initEvents = function (events) {
        var _this = this;
        return events.map(function (event) {
            event.actions = _this.actions;
            return new CalendarAppEvent(event);
        });
    };
    InterpreterViewComponent.prototype.loadEvents = function () {
        var _this = this;
        this.calendarService
            .getEvents()
            .subscribe(function (events) {
            _this.events = _this.initEvents(events);
            console.log("events--", _this.events);
        });
    };
    InterpreterViewComponent.prototype.handleEvent = function (action, event) {
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
    __decorate([
        ViewChild('eventViewConfirm', { static: true }),
        __metadata("design:type", Object)
    ], InterpreterViewComponent.prototype, "eventViewConfirm", void 0);
    __decorate([
        ViewChild('eventDeleteConfirm', { static: true }),
        __metadata("design:type", Object)
    ], InterpreterViewComponent.prototype, "eventDeleteConfirm", void 0);
    InterpreterViewComponent = __decorate([
        Component({
            selector: 'app-interpreter-view',
            templateUrl: './interpreter-view.component.html',
            styleUrls: ['./interpreter-view.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal,
            HttpService,
            Router,
            CalendarAppService])
    ], InterpreterViewComponent);
    return InterpreterViewComponent;
}());
export { InterpreterViewComponent };
//# sourceMappingURL=interpreter-view.component.js.map