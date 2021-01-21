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
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
var DashboadDefaultComponent = /** @class */ (function () {
    function DashboadDefaultComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    DashboadDefaultComponent.prototype.ngOnInit = function () {
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
    };
    DashboadDefaultComponent.prototype.totalUserList = function (id) {
        var _this = this;
        this.service.getdashboardUsers()
            .subscribe(function (res) {
            console.log("apiiiiiiiiii response user", res);
            _this.totaluser_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.total_interpreter = function () {
        var _this = this;
        this.service.getdashboardInterpreter()
            .subscribe(function (res) {
            //   console.log("apiiiiiiiiii response service", res);
            _this.totalinter_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.totalLanguageList = function () {
        var _this = this;
        this.service.getdashboardLanguage()
            .subscribe(function (res) {
            console.log("apiiiiiiiiii response service", res);
            _this.totallanguage_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.getallRequest = function () {
        var _this = this;
        this.service.allRequest()
            .subscribe(function (res) {
            //   console.log("apiiiiiiiiii response service", res);
            _this.allreq_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.totalNewRequest = function () {
        var _this = this;
        this.service.totalRequest()
            .subscribe(function (res) {
            //   console.log("apiiiiiiiiii response service", res);
            _this.totalrequest_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.total_assign = function () {
        var _this = this;
        this.service.totalAssign()
            .subscribe(function (res) {
            console.log("apiiiiiiiiii response service", res);
            _this.totalassign_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.total_inprogress = function () {
        var _this = this;
        this.service.totalInprogress()
            .subscribe(function (res) {
            console.log("apiiiiiiiiii response service", res);
            _this.totalinprogress_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.total_complete = function () {
        var _this = this;
        this.service.totalComplete()
            .subscribe(function (res) {
            console.log("apiiiiiiiiii response service", res);
            _this.totalcomplete_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.total_cancelled = function () {
        var _this = this;
        this.service.totalCancelled()
            .subscribe(function (res) {
            console.log("apiiiiiiiiii response service", res);
            _this.totalcancel_obj = res['data'][0];
        });
    };
    DashboadDefaultComponent.prototype.users = function () {
        this.router.navigate(['/users/user-list']);
    };
    DashboadDefaultComponent.prototype.interpreter = function () {
        this.router.navigate(['/interpreter/interpreter-list']);
    };
    DashboadDefaultComponent.prototype.language = function () {
        this.router.navigate(['/languages/list']);
    };
    DashboadDefaultComponent.prototype.all_requ = function () {
        this.router.navigate(['/interpreter-request/all-request-list']);
    };
    DashboadDefaultComponent.prototype.new_request = function () {
        this.router.navigate(['/user-request/list']);
    };
    DashboadDefaultComponent.prototype.assign_request = function () {
        this.router.navigate(['/interpreter-request/list']);
    };
    DashboadDefaultComponent.prototype.accept_request = function () {
        this.router.navigate(['/interpreter-request/accept-list']);
    };
    DashboadDefaultComponent.prototype.complete_request = function () {
        this.router.navigate(['/interpreter-request/completed-list']);
    };
    DashboadDefaultComponent.prototype.cancel_request = function () {
        this.router.navigate(['/interpreter-request/cancelled-list']);
    };
    DashboadDefaultComponent = __decorate([
        Component({
            selector: 'app-dashboad-default',
            templateUrl: './dashboad-default.component.html',
            styleUrls: ['./dashboad-default.component.css']
        }),
        __metadata("design:paramtypes", [HttpService, Router])
    ], DashboadDefaultComponent);
    return DashboadDefaultComponent;
}());
export { DashboadDefaultComponent };
//# sourceMappingURL=dashboad-default.component.js.map