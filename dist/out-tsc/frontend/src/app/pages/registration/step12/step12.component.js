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
let Step12Component = /** @class */ (() => {
    var _a;
    let Step12Component = class Step12Component {
        constructor(service, fb, mapsAPILoader, ngZone, toastr, validation) {
            this.service = service;
            this.fb = fb;
            this.mapsAPILoader = mapsAPILoader;
            this.ngZone = ngZone;
            this.toastr = toastr;
            this.validation = validation;
        }
        ngOnInit() {
            this.languageList();
            this.createForm1();
            this.date_func();
            this.mapsAPILoader.load().then(() => {
                this.setCurrentLocation();
                this.geoCoder = new google.maps.Geocoder;
                let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {});
                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place = autocomplete.getPlace();
                        // console.log("latitude--",this.latitude)
                        console.log("address--", place.formatted_address);
                        this.address1 = place.formatted_address;
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        this.latitude = place.geometry.location.lat();
                        this.longitude = place.geometry.location.lng();
                        this.lat_value = this.latitude;
                        this.long_value = this.longitude;
                        console.log("latitude 1--", this.lat_value);
                        console.log("longitude 2--", this.long_value);
                        this.zoom = 12;
                    });
                });
            });
        }
        setCurrentLocation() {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    this.zoom = 8;
                    this.getAddress(this.latitude, this.longitude);
                });
            }
        }
        getAddress(latitude, longitude) {
            this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
                if (status === 'OK') {
                    if (results[0]) {
                        this.zoom = 12;
                        this.address = results[0].formatted_address;
                    }
                    else {
                        window.alert('No results found');
                    }
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
        /*==========Step Form Value Start Here========*/
        createForm1() {
            this.stepTwelveForm = this.fb.group({
                school_district: ['', this.validation.name_validation],
                requester_name: ['', this.validation.name_validation],
                office_phone: ['', this.validation.mobile_validator],
                cell_phone: ['', this.validation.mobile_validator],
                email_address: ['', this.validation.email_validator],
                location1: ['', this.validation.name_validation],
                location2: ['', this.validation.onlyRequired_validator],
                contact_assignment: ['', this.validation.mobile_validator],
                name_assignment: ['', this.validation.name_validation],
                language: ['', this.validation.onlyRequired_validator],
                nature_of_appointment: ['', this.validation.name_validation],
                date: ['', this.validation.onlyRequired_validator],
                start_time: ['', this.validation.onlyRequired_validator],
                end_time: ['', this.validation.onlyRequired_validator],
                equipment: ['', this.validation.onlyRequired_validator],
                notes: ['', this.validation.name_validation],
                name_of_student: [''],
                latitude: [''],
                longitude: [''],
                type: ['12'],
            });
        }
        /*==========Step Form Value Start Here========*/
        languageList() {
            this.service.getLanguage()
                .subscribe(res => {
                console.log("api responsee", res);
                this.languageObj = res['data'];
                console.log("llllllll", this.languageObj);
            });
        }
        onChange(id) {
            this.newlanguageVal = id.target.value;
            console.log("iddddddddddd", this.newlanguageVal);
        }
        /*==========Today and future date function start here========*/
        date_func() {
            var today = new Date().toISOString().split('T')[0];
            document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
        }
        /*==========Today and future date function end here========*/
        /*==========Start and end time valid function start here========*/
        start_end_time(e) {
            var beginningTime = this.stepTwelveForm.value.start_time;
            var endTime = this.stepTwelveForm.value.end_time;
            // var beginningTime = moment(this.stepTwelveForm.value.start_time, 'h:mma');
            // var endTime = moment(this.stepTwelveForm.value.end_time, 'h:mma');
            if (beginningTime > endTime) {
                this.stepTwelveForm.controls['start_time'].setValue('');
                this.stepTwelveForm.controls['end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTime == endTime) {
                this.stepTwelveForm.controls['start_time'].setValue('');
                this.stepTwelveForm.controls['end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTime < endTime) {
                // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
            }
        }
        /*==========Start and end time valid function end here========*/
        submitForm12() {
            console.log("form value", this.stepTwelveForm.value);
            this.submitted = true;
            if (this.stepTwelveForm.invalid) {
                return;
            }
            this.submitted = false;
            this.stepTwelveForm.value.language = this.newlanguageVal;
            this.stepTwelveForm.value.location2 = this.address1;
            this.stepTwelveForm.value.latitude = this.latitude;
            this.stepTwelveForm.value.longitude = this.longitude;
            this.service.getStepTwelveForm(this.stepTwelveForm.value)
                .subscribe(res => {
                console.log("api response", res);
                this.step12_Obj = res;
                console.log("ressss", this.step12_Obj);
                this.toastr.success(this.step12_Obj.message, '', { timeOut: 2000 });
                // this.reg_Msg = res
            });
        }
    };
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], Step12Component.prototype, "searchElementRef", void 0);
    Step12Component = __decorate([
        Component({
            selector: 'app-step12',
            templateUrl: './step12.component.html',
            styleUrls: ['./step12.component.css']
        }),
        __metadata("design:paramtypes", [CommonService,
            FormBuilder,
            MapsAPILoader,
            NgZone,
            ToastrService, typeof (_a = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _a : Object])
    ], Step12Component);
    return Step12Component;
})();
export { Step12Component };
//# sourceMappingURL=step12.component.js.map