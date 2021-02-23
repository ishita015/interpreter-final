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
let CommonService = /** @class */ (() => {
    let CommonService = class CommonService {
        constructor(http, router, socket) {
            this.http = http;
            this.router = router;
            this.socket = socket;
            this.url = environment.apiUrl;
            this.getNewLocation = () => {
                return Observable.create((observer) => {
                    this.socket.on('responce_location', (message) => {
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
        updatelocation(unique_code) {
            this.socket.emit('updateLatLong', unique_code);
        }
        interpreterTracking(unique_code) {
            return this.http.post(this.url + '/cesco/interpreterCurrentLocation', { unique_code: unique_code }, this.httpOptions);
        }
        //--------------------------------socket end------------------------------//
        getLanguage() {
            return this.http.get(this.url + '/cesco/getlanguages');
        }
        getStepOneForm(step1Info) {
            return this.http.post(this.url + '/cesco/addServiceOne', step1Info);
        }
        getStepTwoForm(step2Info) {
            return this.http.post(this.url + '/cesco/addServiceTwo', step2Info);
        }
        getStepThreeForm(step3Info) {
            return this.http.post(this.url + '/cesco/addServiceThree', step3Info);
        }
        getStepFourForm(step4Info) {
            return this.http.post(this.url + '/cesco/addServiceFour', step4Info);
        }
        getStepFiveForm(step5Info) {
            return this.http.post(this.url + '/cesco/addServiceFive', step5Info);
        }
        getStepSixForm(step6Info) {
            return this.http.post(this.url + '/cesco/addServiceSix', step6Info);
        }
        getStepSevenForm(step7Info) {
            return this.http.post(this.url + '/cesco/addServiceSeven', step7Info);
        }
        getStepEightForm(step8Info) {
            return this.http.post(this.url + '/cesco/addServiceEight', step8Info);
        }
        getStepNineForm(step9Info) {
            return this.http.post(this.url + '/cesco/addServiceNine', step9Info);
        }
        getStepTenForm(step10Info) {
            return this.http.post(this.url + '/cesco/addServiceTen', step10Info);
        }
        getStepElevenForm(step11Info) {
            return this.http.post(this.url + '/cesco/addServiceEleven', step11Info);
        }
        getStepTwelveForm(step12Info) {
            return this.http.post(this.url + '/cesco/addServiceTwelve', step12Info);
        }
        //--------------------------------rating and review start------------------------------//
        getRating(ratingInfo) {
            return this.http.post(this.url + '/cesco/addRateReview', ratingInfo);
        }
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
})();
export { CommonService };
//# sourceMappingURL=common.service.js.map