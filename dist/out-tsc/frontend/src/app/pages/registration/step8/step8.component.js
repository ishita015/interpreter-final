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
var Step8Component = /** @class */ (function () {
    function Step8Component(service, fb, mapsAPILoader, ngZone, toastr, validation) {
        this.service = service;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.toastr = toastr;
        this.validation = validation;
    }
    Step8Component.prototype.ngOnInit = function () {
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
    Step8Component.prototype.setCurrentLocation = function () {
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
    Step8Component.prototype.getAddress = function (latitude, longitude) {
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
    Step8Component.prototype.createForm1 = function () {
        this.stepEightForm = this.fb.group({
            business: ['', this.validation.name_validation],
            requester_name: ['', this.validation.name_validation],
            office_phone: ['', this.validation.mobile_validator],
            email_address: ['', this.validation.email_validator],
            location1: ['', this.validation.name_validation],
            location2: ['', this.validation.onlyRequired_validator],
            location3: ['', this.validation.mobile_validator],
            name_of_provider: ['', this.validation.name_validation],
            interpreter: ['', this.validation.name_validation],
            case: ['', this.validation.name_validation],
            nature_of_appointment: ['', this.validation.name_validation],
            language: ['', this.validation.onlyRequired_validator],
            date: ['', this.validation.onlyRequired_validator],
            start_time: ['', this.validation.onlyRequired_validator],
            end_time: ['', this.validation.onlyRequired_validator],
            notes: ['', this.validation.name_validation],
            latitude: [''],
            longitude: [''],
            type: ['8'],
        });
    };
    /*==========Step Form Value Start Here========*/
    Step8Component.prototype.languageList = function () {
        var _this = this;
        this.service.getLanguage()
            .subscribe(function (res) {
            console.log("api responsee", res);
            _this.languageObj = res['data'];
            console.log("llllllll", _this.languageObj);
        });
    };
    Step8Component.prototype.onChange = function (id) {
        this.newlanguageVal = id.target.value;
        console.log("iddddddddddd", this.newlanguageVal);
    };
    /*==========Today and future date function start here========*/
    Step8Component.prototype.date_func = function () {
        var today = new Date().toISOString().split('T')[0];
        document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
    };
    /*==========Today and future date function end here========*/
    /*==========Start and end time valid function start here========*/
    Step8Component.prototype.start_end_time = function (e) {
        var beginningTime = this.stepEightForm.value.start_time;
        var endTime = this.stepEightForm.value.end_time;
        // var beginningTime = moment(this.stepEightForm.value.start_time, 'h:mma');
        // var endTime = moment(this.stepEightForm.value.end_time, 'h:mma');
        if (beginningTime > endTime) {
            this.stepEightForm.controls['start_time'].setValue('');
            this.stepEightForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime == endTime) {
            this.stepEightForm.controls['start_time'].setValue('');
            this.stepEightForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime < endTime) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    };
    /*==========Start and end time valid function end here========*/
    Step8Component.prototype.submitForm8 = function () {
        var _this = this;
        console.log("form value", this.stepEightForm.value);
        this.submitted = true;
        if (this.stepEightForm.invalid) {
            return;
        }
        this.submitted = false;
        this.stepEightForm.value.language = this.newlanguageVal;
        this.stepEightForm.value.location2 = this.address1;
        this.stepEightForm.value.latitude = this.latitude;
        this.stepEightForm.value.longitude = this.longitude;
        this.service.getStepEightForm(this.stepEightForm.value)
            .subscribe(function (res) {
            console.log("api response", res);
            _this.step8_Obj = res;
            console.log("ressss", _this.step8_Obj);
            _this.toastr.success(_this.step8_Obj.message, '', { timeOut: 2000 });
            // this.reg_Msg = res
        });
    };
    var _a;
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], Step8Component.prototype, "searchElementRef", void 0);
    Step8Component = __decorate([
        Component({
            selector: 'app-step8',
            templateUrl: './step8.component.html',
            styleUrls: ['./step8.component.css']
        }),
        __metadata("design:paramtypes", [CommonService,
            FormBuilder,
            MapsAPILoader,
            NgZone,
            ToastrService, typeof (_a = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _a : Object])
    ], Step8Component);
    return Step8Component;
}());
export { Step8Component };
//# sourceMappingURL=step8.component.js.map