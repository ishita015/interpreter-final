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
let Step10Component = /** @class */ (() => {
    var _a;
    let Step10Component = class Step10Component {
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
            this.stepTenForm = this.fb.group({
                business: ['', this.validation.name_validation],
                requester_name: ['', this.validation.name_validation],
                office_phone: ['', this.validation.mobile_validator],
                cell_phone: ['', this.validation.mobile_validator],
                email_address: ['', this.validation.email_validator],
                interpreter: ['', this.validation.name_validation],
                location1: ['', this.validation.name_validation],
                contact_assignment: ['', this.validation.mobile_validator],
                name_assignment: ['', this.validation.name_validation],
                location2: ['', this.validation.onlyRequired_validator],
                language: ['', this.validation.onlyRequired_validator],
                nature_of_appointment: ['', this.validation.name_validation],
                date: ['', this.validation.onlyRequired_validator],
                equipment: ['', this.validation.name_validation],
                start_time: ['', this.validation.onlyRequired_validator],
                end_time: ['', this.validation.onlyRequired_validator],
                notes: ['', this.validation.name_validation],
                latitude: [''],
                longitude: [''],
                type: ['10'],
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
            var beginningTime = this.stepTenForm.value.start_time;
            var endTime = this.stepTenForm.value.end_time;
            // var beginningTime = moment(this.stepTenForm.value.start_time, 'h:mma');
            // var endTime = moment(this.stepTenForm.value.end_time, 'h:mma');
            if (beginningTime > endTime) {
                this.stepTenForm.controls['start_time'].setValue('');
                this.stepTenForm.controls['end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTime == endTime) {
                this.stepTenForm.controls['start_time'].setValue('');
                this.stepTenForm.controls['end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTime < endTime) {
                // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
            }
        }
        /*==========Start and end time valid function end here========*/
        submitForm10() {
            console.log("form value", this.stepTenForm.value);
            this.submitted = true;
            if (this.stepTenForm.invalid) {
                return;
            }
            this.submitted = false;
            this.stepTenForm.value.language = this.newlanguageVal;
            this.stepTenForm.value.location2 = this.address1;
            this.stepTenForm.value.latitude = this.latitude;
            this.stepTenForm.value.longitude = this.longitude;
            this.service.getStepTenForm(this.stepTenForm.value)
                .subscribe(res => {
                console.log("api response", res);
                this.step10_Obj = res;
                console.log("ressss", this.step10_Obj);
                this.toastr.success(this.step10_Obj.message, '', { timeOut: 2000 });
                // this.reg_Msg = res
            });
        }
    };
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], Step10Component.prototype, "searchElementRef", void 0);
    Step10Component = __decorate([
        Component({
            selector: 'app-step10',
            templateUrl: './step10.component.html',
            styleUrls: ['./step10.component.css']
        }),
        __metadata("design:paramtypes", [CommonService,
            FormBuilder,
            MapsAPILoader,
            NgZone,
            ToastrService, typeof (_a = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _a : Object])
    ], Step10Component);
    return Step10Component;
})();
export { Step10Component };
//# sourceMappingURL=step10.component.js.map