var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
var CommonService = /** @class */ (function () {
    function CommonService(http, router, socket) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.socket = socket;
        this.url = environment.apiUrl;
        this.getNewLocation = function () {
            return Observable.create(function (observer) {
                _this.socket.on('responce_location', function (message) {
                    observer.next(message);
                });
            });
        };
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    //--------------------------------socket start------------------------------//
    CommonService.prototype.updatelocation = function (unique_code) {
        this.socket.emit('updateLatLong', unique_code);
    };
    CommonService.prototype.interpreterTracking = function (unique_code) {
        return this.http.post(this.url + '/cesco/interpreterCurrentLocation', { unique_code: unique_code }, this.httpOptions);
    };
    //--------------------------------socket end------------------------------//
    CommonService.prototype.getLanguage = function () {
        return this.http.get(this.url + '/cesco/getlanguages');
    };
    CommonService.prototype.getStepOneForm = function (step1Info) {
        return this.http.post(this.url + '/cesco/addServiceOne', step1Info);
    };
    CommonService.prototype.getStepTwoForm = function (step2Info) {
        return this.http.post(this.url + '/cesco/addServiceTwo', step2Info);
    };
    CommonService.prototype.getStepThreeForm = function (step3Info) {
        return this.http.post(this.url + '/cesco/addServiceThree', step3Info);
    };
    CommonService.prototype.getStepFourForm = function (step4Info) {
        return this.http.post(this.url + '/cesco/addServiceFour', step4Info);
    };
    CommonService.prototype.getStepFiveForm = function (step5Info) {
        return this.http.post(this.url + '/cesco/addServiceFive', step5Info);
    };
    CommonService.prototype.getStepSixForm = function (step6Info) {
        return this.http.post(this.url + '/cesco/addServiceSix', step6Info);
    };
    CommonService.prototype.getStepSevenForm = function (step7Info) {
        return this.http.post(this.url + '/cesco/addServiceSeven', step7Info);
    };
    CommonService.prototype.getStepEightForm = function (step8Info) {
        return this.http.post(this.url + '/cesco/addServiceEight', step8Info);
    };
    CommonService.prototype.getStepNineForm = function (step9Info) {
        return this.http.post(this.url + '/cesco/addServiceNine', step9Info);
    };
    CommonService.prototype.getStepTenForm = function (step10Info) {
        return this.http.post(this.url + '/cesco/addServiceTen', step10Info);
    };
    CommonService.prototype.getStepElevenForm = function (step11Info) {
        return this.http.post(this.url + '/cesco/addServiceEleven', step11Info);
    };
    CommonService.prototype.getStepTwelveForm = function (step12Info) {
        return this.http.post(this.url + '/cesco/addServiceTwelve', step12Info);
    };
    //--------------------------------rating and review start------------------------------//
    CommonService.prototype.getRating = function (ratingInfo) {
        return this.http.post(this.url + '/cesco/addRateReview', ratingInfo);
    };
    CommonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            Router,
            Socket])
    ], CommonService);
    return CommonService;
}());
export { CommonService };
//# sourceMappingURL=common.service.js.map