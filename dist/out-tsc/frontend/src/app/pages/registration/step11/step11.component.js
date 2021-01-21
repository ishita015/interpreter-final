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
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader } from '@agm/core';
var Step11Component = /** @class */ (function () {
    function Step11Component(service, fb, mapsAPILoader, ngZone, toastr, validation) {
        this.service = service;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.toastr = toastr;
        this.validation = validation;
    }
    Step11Component.prototype.ngOnInit = function () {
        var _this = this;
        this.languageList();
        this.createForm1();
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
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.lat_value = _this.latitude;
                    _this.long_value = _this.longitude;
                    console.log("latitude 1--", _this.lat_value);
                    console.log("longitude 2--", _this.long_value);
                    _this.zoom = 12;
                });
            });
        });
    };
    Step11Component.prototype.setCurrentLocation = function () {
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
    Step11Component.prototype.getAddress = function (latitude, longitude) {
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
    Step11Component.prototype.createForm1 = function () {
        this.stepElevenForm = this.fb.group({
            caseworker_name: ['', this.validation.name_validation],
            requester_name: [''],
            community_services: ['', this.validation.name_validation],
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
            service_requested: ['', this.validation.onlyRequired_validator],
            virtual_meeting: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            type: ['11'],
        });
    };
    /*==========Step Form Value Start Here========*/
    Step11Component.prototype.languageList = function () {
        var _this = this;
        this.service.getLanguage()
            .subscribe(function (res) {
            console.log("api responsee", res);
            _this.languageObj = res['data'];
            console.log("llllllll", _this.languageObj);
        });
    };
    Step11Component.prototype.onChange = function (id) {
        this.newlanguageVal = id.target.value;
        console.log("iddddddddddd", this.newlanguageVal);
    };
    /*==========Today and future date function start here========*/
    Step11Component.prototype.date_func = function () {
        var today = new Date().toISOString().split('T')[0];
        document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
    };
    /*==========Today and future date function end here========*/
    /*==========Start and end time valid function start here========*/
    Step11Component.prototype.start_end_time = function (e) {
        var beginningTime = this.stepElevenForm.value.start_time;
        var endTime = this.stepElevenForm.value.end_time;
        // var beginningTime = moment(this.stepElevenForm.value.start_time, 'h:mma');
        // var endTime = moment(this.stepElevenForm.value.end_time, 'h:mma');
        if (beginningTime > endTime) {
            this.stepElevenForm.controls['start_time'].setValue('');
            this.stepElevenForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime == endTime) {
            this.stepElevenForm.controls['start_time'].setValue('');
            this.stepElevenForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime < endTime) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    };
    /*==========Start and end time valid function end here========*/
    Step11Component.prototype.submitForm11 = function () {
        var _this = this;
        console.log("form value", this.stepElevenForm.value);
        this.submitted = true;
        if (this.stepElevenForm.invalid) {
            return;
        }
        this.submitted = false;
        this.stepElevenForm.value.language = this.newlanguageVal;
        this.stepElevenForm.value.virtual_meeting = this.address1;
        this.stepElevenForm.value.latitude = this.latitude;
        this.stepElevenForm.value.longitude = this.longitude;
        this.service.getStepElevenForm(this.stepElevenForm.value)
            .subscribe(function (res) {
            console.log("api response", res);
            _this.step11_Obj = res;
            console.log("ressss", _this.step11_Obj);
            _this.toastr.success(_this.step11_Obj.message, '', { timeOut: 2000 });
            // this.reg_Msg = res
        });
    };
    var _a;
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], Step11Component.prototype, "searchElementRef", void 0);
    Step11Component = __decorate([
        Component({
            selector: 'app-step11',
            templateUrl: './step11.component.html',
            styleUrls: ['./step11.component.css']
        }),
        __metadata("design:paramtypes", [CommonService,
            FormBuilder,
            MapsAPILoader,
            NgZone,
            ToastrService, typeof (_a = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _a : Object])
    ], Step11Component);
    return Step11Component;
}());
export { Step11Component };
//# sourceMappingURL=step11.component.js.map