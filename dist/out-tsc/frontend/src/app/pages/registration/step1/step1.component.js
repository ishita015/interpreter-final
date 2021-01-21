var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader } from '@agm/core';
var Step1Component = /** @class */ (function () {
    function Step1Component(service, fb, mapsAPILoader, ngZone, router, toastr, validation) {
        this.service = service;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.toastr = toastr;
        this.validation = validation;
    }
    Step1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm1();
        this.languageList();
        this.date_func();
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {});
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    // console.log("latitude--",this.latitude)
                    console.log("address--", place.formatted_address);
                    _this.address1 = place.formatted_address;
                    console.log("address are coming--", _this.address1);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    // this.lat_value =  this.latitude;
                    // this.long_value =  this.longitude;
                    console.log("latitude 1--", _this.latitude);
                    console.log("longitude 2--", _this.longitude);
                    _this.zoom = 12;
                });
            });
        });
    };
    Step1Component.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 8;
                _this.getAddress(_this.latitude, _this.longitude);
            });
        }
    };
    Step1Component.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    /*==========Step Form Value Start Here========*/
    Step1Component.prototype.createForm1 = function () {
        this.stepOneForm = this.fb.group({
            caseworker_name: ['', this.validation.name_validation],
            requester_name: [''],
            adams_county: ['', this.validation.name_validation],
            office_phone: ['', this.validation.mobile_validator],
            cell_phone: ['', this.validation.mobile_validator],
            email_address: ['', this.validation.email_validator],
            site_contact: [''],
            case_name: ['', this.validation.name_validation],
            client_name: ['', this.validation.name_validation],
            trails: ['', this.validation.name_validation],
            language: ['', this.validation.onlyRequired_validator],
            nature_of_appointment: ['', this.validation.name_validation],
            date: ['', this.validation.onlyRequired_validator],
            start_time: ['', this.validation.onlyRequired_validator],
            end_time: ['', this.validation.onlyRequired_validator],
            simultaneous: ['', this.validation.onlyRequired_validator],
            address: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            type: ['1'],
            service_requested: ['', this.validation.onlyRequired_validator],
        });
    };
    /*==========Step Form Value Start Here========*/
    /*==========Today and future date function start here========*/
    Step1Component.prototype.date_func = function () {
        var today = new Date().toISOString().split('T')[0];
        document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
    };
    /*==========Today and future date function end here========*/
    Step1Component.prototype.languageList = function () {
        var _this = this;
        this.service.getLanguage()
            .subscribe(function (res) {
            console.log("api responsee list", res);
            _this.languageObj = res['data'];
            console.log("lllllllllllllll", _this.languageObj);
        });
    };
    Step1Component.prototype.onChange = function (id) {
        this.newlanguageVal = id.target.value;
        console.log("iddddddddddd", this.newlanguageVal);
    };
    /*==========Start and end time valid function start here========*/
    Step1Component.prototype.start_end_time = function (e) {
        var beginningTime = this.stepOneForm.value.start_time;
        var endTime = this.stepOneForm.value.end_time;
        // var beginningTime = moment(this.stepOneForm.value.start_time, 'h:mma');
        // var endTime = moment(this.stepOneForm.value.end_time, 'h:mma');
        if (beginningTime > endTime) {
            this.stepOneForm.controls['start_time'].setValue('');
            this.stepOneForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime == endTime) {
            this.stepOneForm.controls['start_time'].setValue('');
            this.stepOneForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime < endTime) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    };
    /*==========Start and end time valid function end here========*/
    Step1Component.prototype.submitForm1 = function () {
        var _this = this;
        // console.log("latitude 1--", this.latitude)
        // console.log("longitude 2--", this.longitude)
        console.log("address1--", this.address1);
        console.log("lat_value--", this.latitude);
        console.log("long_value--", this.longitude);
        this.stepOneForm.value.language = this.newlanguageVal;
        this.stepOneForm.value.address = this.address1;
        this.stepOneForm.value.latitude = this.latitude;
        this.stepOneForm.value.longitude = this.longitude;
        // if(beginningTime && endTime){
        //   alert(1)
        //   console.log(beginningTime.isBefore(endTime)); // true
        //   return beginningTime.isBefore(endTime);
        // }
        this.submitted = true;
        if (this.stepOneForm.invalid) {
            return;
        }
        this.submitted = false;
        console.log("all val in form", this.stepOneForm.value);
        // this.service.getStepOneForm(this.stepOneForm.value)
        this.service.getStepTwelveForm(this.stepOneForm.value)
            .subscribe(function (res) {
            console.log("api response", res);
            _this.step1_Obj = res;
            console.log("ressss", _this.step1_Obj);
            _this.toastr.success(_this.step1_Obj.message, '', { timeOut: 2000 });
            // this.step_Msg = res
        });
    };
    var _a;
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], Step1Component.prototype, "searchElementRef", void 0);
    Step1Component = __decorate([
        Component({
            selector: 'app-step1',
            templateUrl: './step1.component.html',
            styleUrls: ['./step1.component.css']
        }),
        __metadata("design:paramtypes", [CommonService,
            FormBuilder,
            MapsAPILoader,
            NgZone,
            Router,
            ToastrService, typeof (_a = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _a : Object])
    ], Step1Component);
    return Step1Component;
}());
export { Step1Component };
//# sourceMappingURL=step1.component.js.map