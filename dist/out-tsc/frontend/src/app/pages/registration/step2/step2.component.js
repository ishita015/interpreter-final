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
let Step2Component = /** @class */ (() => {
    var _a;
    let Step2Component = class Step2Component {
        constructor(service, fb, toastr, validation, mapsAPILoader, ngZone) {
            this.service = service;
            this.fb = fb;
            this.toastr = toastr;
            this.validation = validation;
            this.mapsAPILoader = mapsAPILoader;
            this.ngZone = ngZone;
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
            this.stepTwoForm = this.fb.group({
                caseworker_name: ['', this.validation.name_validation],
                requester_name: [''],
                ahs_department: ['', this.validation.name_validation],
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
                service_requested: ['', this.validation.onlyRequired_validator],
                latitude: [''],
                longitude: [''],
                type: ['2'],
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
            var beginningTime = this.stepTwoForm.value.start_time;
            var endTime = this.stepTwoForm.value.end_time;
            // var beginningTime = moment(this.stepTwoForm.value.start_time, 'h:mma');
            // var endTime = moment(this.stepTwoForm.value.end_time, 'h:mma');
            if (beginningTime > endTime) {
                this.stepTwoForm.controls['start_time'].setValue('');
                this.stepTwoForm.controls['end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTime == endTime) {
                this.stepTwoForm.controls['start_time'].setValue('');
                this.stepTwoForm.controls['end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTime < endTime) {
                // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
            }
        }
        /*==========Start and end time valid function end here========*/
        submitForm2() {
            console.log("form value", this.stepTwoForm.value);
            console.log("address1--", this.address1);
            console.log("lat_value--", this.latitude);
            console.log("long_value--", this.longitude);
            this.stepTwoForm.value.language = this.newlanguageVal;
            this.stepTwoForm.value.address = this.address1;
            this.stepTwoForm.value.latitude = this.latitude;
            this.stepTwoForm.value.longitude = this.longitude;
            this.submitted = true;
            if (this.stepTwoForm.invalid) {
                return;
            }
            this.submitted = false;
            this.stepTwoForm.value.language = this.newlanguageVal;
            this.service.getStepTwelveForm(this.stepTwoForm.value)
                .subscribe(res => {
                console.log("api response", res);
                this.step2_Obj = res;
                console.log("ressss", this.step2_Obj);
                this.toastr.success(this.step2_Obj.message, '', { timeOut: 2000 });
                // this.reg_Msg = res
            });
        }
    };
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], Step2Component.prototype, "searchElementRef", void 0);
    Step2Component = __decorate([
        Component({
            selector: 'app-step2',
            templateUrl: './step2.component.html',
            styleUrls: ['./step2.component.css']
        }),
        __metadata("design:paramtypes", [CommonService,
            FormBuilder,
            ToastrService, typeof (_a = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _a : Object, MapsAPILoader,
            NgZone])
    ], Step2Component);
    return Step2Component;
})();
export { Step2Component };
//# sourceMappingURL=step2.component.js.map