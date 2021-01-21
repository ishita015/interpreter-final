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
import { CalendarAppService } from '../../calendar/calendar-app.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
var UsersViewComponent = /** @class */ (function () {
    //-- Calendar variable End --//
    function UsersViewComponent(modalService, service, router, calendarService) {
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
        // this.actions = [{
        // 	label: '<i class="i-Edit m-1 text-secondary"></i>',
        // 	onClick: ({ event }: { event: CalendarEvent }): void => {
        // 		this.handleEvent('edit', event);
        // 	}
        // }, {
        // 	label: '<i class="i-Close m-1 text-danger"></i>',
        // 	onClick: ({ event }: { event: CalendarEvent }): void => {
        // 		this.removeEvent(event);
        // 	}
        // }];
    }
    UsersViewComponent.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem('userViewData'));
        this.roleName = JSON.parse(localStorage.getItem('roleName'));
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.calendar_Id = JSON.parse(localStorage.getItem('calendarId'));
        // this.loadEvents();
        this.getInterpreterRequestInfo();
    };
    UsersViewComponent.prototype.getInterpreterRequestInfo = function () {
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
    __decorate([
        ViewChild('eventDeleteConfirm', { static: true }),
        __metadata("design:type", Object)
    ], UsersViewComponent.prototype, "eventDeleteConfirm", void 0);
    UsersViewComponent = __decorate([
        Component({
            selector: 'app-users-view',
            templateUrl: './users-view.component.html',
            styleUrls: ['./users-view.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal,
            HttpService,
            Router,
            CalendarAppService])
    ], UsersViewComponent);
    return UsersViewComponent;
}());
export { UsersViewComponent };
//# sourceMappingURL=users-view.component.js.map