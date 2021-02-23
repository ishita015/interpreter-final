var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarAppService } from '../../calendar/calendar-app.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
let UsersViewComponent = /** @class */ (() => {
    let UsersViewComponent = class UsersViewComponent {
        //-- Calendar variable End --//
        constructor(modalService, service, router, calendarService, activatedRoute, toastr) {
            this.modalService = modalService;
            this.service = service;
            this.router = router;
            this.calendarService = calendarService;
            this.activatedRoute = activatedRoute;
            this.toastr = toastr;
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
        ngOnInit() {
            return __awaiter(this, void 0, void 0, function* () {
                this.activatedRoute.params.subscribe(params => {
                    this.param = params['id'];
                });
                try {
                    var result = yield this.service.get('get-user-detail/' + this.param).toPromise();
                    this.data = result['data'][0];
                }
                catch (e) {
                    this.toastr.warning(environment.serverError);
                }
                // this.data = JSON.parse(localStorage.getItem('userViewData'));
                this.roleName = JSON.parse(localStorage.getItem('roleName'));
                this.userId = JSON.parse(localStorage.getItem('userId'));
                this.calendar_Id = JSON.parse(localStorage.getItem('calendarId'));
                // this.loadEvents();
                this.getInterpreterRequestInfo();
            });
        }
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
            CalendarAppService,
            ActivatedRoute,
            ToastrService])
    ], UsersViewComponent);
    return UsersViewComponent;
})();
export { UsersViewComponent };
//# sourceMappingURL=users-view.component.js.map