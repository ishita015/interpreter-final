var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { enableRipple } from '@syncfusion/ej2-base';
import * as moment from 'moment';
import { MapsAPILoader } from '@agm/core';
import { map, startWith } from 'rxjs/operators';
//enable ripple style
enableRipple(true);
let AllRequestSchedularComponent = /** @class */ (() => {
    let AllRequestSchedularComponent = class AllRequestSchedularComponent {
        // form name end here
        constructor(validation, fb, toastr, router, dl, service, http, ngZone, mapsAPILoader) {
            this.validation = validation;
            this.fb = fb;
            this.toastr = toastr;
            this.router = router;
            this.dl = dl;
            this.service = service;
            this.http = http;
            this.ngZone = ngZone;
            this.mapsAPILoader = mapsAPILoader;
            this.clientObj = [];
            this.simultaneous_var = false;
            this.assignment_var = false;
            this.days = false;
            this.start_end = true;
            this.every_show_hide = true;
            this.formatString = 'HH:mm';
            this.interval = 5;
            // maps the local data column to fields property
            this.localFields = { value: 'name' };
            this.data1 = [];
            this.myControl = new FormControl();
            // show hide variable start
            this.showEductionForm = false;
            this.showMedicalForm = false;
            this.showLegalForm = false;
            this.showCommunityForm = false;
            this.showOtherForm = false;
        }
        ngOnInit() {
            this.createForm1();
            this.createForm2();
            this.createForm3();
            this.createForm4();
            this.createForm5();
            this.createForm6();
            this.allClientList();
            // this.allAssignmentTypeList();
            this.allPlatformList();
            this.allLanguageList();
            this.CountryList();
            this.allDayList();
            this.date_func();
            this.assign_date_func();
            this.getIRList();
            this.allLobList();
            this.scheduler_id = JSON.parse(localStorage.getItem('userId'));
            this.entry_By_data = JSON.parse(localStorage.getItem('loginData'));
            this.newRequestForm.get('entered_by').patchValue(this.entry_By_data.first_name);
            this.editId = JSON.parse(localStorage.getItem('rowId'));
        }
        /*==========google api load Places Autocomplete function start here========*/
        getGooleAddress() {
            this.mapsAPILoader.load().then(() => {
                this.setCurrentLocation();
                this.geoCoder = new google.maps.Geocoder;
                let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        //get the place result
                        let place = autocomplete.getPlace();
                        this.new_address = place['formatted_address'];
                        console.log("address", this.new_address);
                        this.sec_address = place['formatted_address'];
                        //verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        // console.log("place-",place[0].formatted_address);
                        //set latitude, longitude and zoom
                        this.latitude = place.geometry.location.lat();
                        this.longitude = place.geometry.location.lng();
                        console.log("latitude-", this.latitude);
                        console.log("longitude-", this.longitude);
                        this.zoom = 12;
                    });
                });
            });
        }
        /*==========google api load Places Autocomplete function end here========*/
        /*==========Step Form Value Start Here========*/
        createForm1() {
            this.newRequestForm = this.fb.group({
                ir: ['', this.validation.onlyRequired_validator],
                entered_by: ['', this.validation.onlyRequired_validator],
                client_name: ['', this.validation.onlyRequired_validator],
                // requested_by:['', this.validation.onlyRequired_validator],
                request_date: ['', this.validation.onlyRequired_validator],
                platform: ['', this.validation.onlyRequired_validator],
                assignment_type: ['', this.validation.onlyRequired_validator],
                // simultaneous:[''],
                receivers_required: ['', this.validation.onlyRequired_validator],
                language: ['', this.validation.onlyRequired_validator],
                assignment_date: ['', this.validation.onlyRequired_validator],
                from_time: ['', this.validation.onlyRequired_validator],
                to_time: ['', this.validation.onlyRequired_validator],
                recurrent_assignment: [''],
                // name_of_contact_person: ['', this.validation.onlyRequired_validator],
                // cell_phone: ['', this.validation.onlyRequired_validator],
                // building_name: ['', this.validation.onlyRequired_validator],
                // building_address: ['', this.validation.onlyRequired_validator],
                // room: ['', this.validation.onlyRequired_validator],
                // notes: ['', this.validation.onlyRequired_validator],
                // phone_code: ['', this.validation.onlyRequired_validator],
                //  name_of_contact_person: [''],
                // cell_phone: [''],
                // building_name: [''],
                // building_address: [''],
                // room: [''],
                // notes: [''],
                // phone_code: [''],
                // caseworker_name:[''],
                // caseworker_lastname:[''],
                // position:[''],
                // contact_person_cellphone:[''],
                // case_name:[''],
                // client_firstname:[''],
                // client_lastname:[''],
                // trails:[''],
                // home_visit:[''],
                // apt:[''],
                how_many_receivers: [''],
                event_start_time: [''],
                event_end_time: [''],
                event_start_date: [''],
                event_end_date: [''],
                repeats: [''],
                every: [''],
                event_duration: [''],
                event_at: [''],
                scheduler_id: [''],
                requested_by: [''],
                lob: ['', this.validation.onlyRequired_validator],
            });
        }
        createForm2() {
            this.educationRequestForm = this.fb.group({
                name_of_contact_person: ['', this.validation.onlyRequired_validator],
                cell_phone: ['', this.validation.onlyRequired_validator],
                building_name: ['', this.validation.onlyRequired_validator],
                building_address: ['', this.validation.onlyRequired_validator],
                room: ['', this.validation.onlyRequired_validator],
                notes: ['', this.validation.onlyRequired_validator],
                phone_code: ['', this.validation.onlyRequired_validator],
                email: ['', this.validation.onlyRequired_validator],
            });
        }
        createForm3() {
            this.communityRequestForm = this.fb.group({
                caseworker_firstname: ['', this.validation.onlyRequired_validator],
                caseworker_lastname: ['', this.validation.onlyRequired_validator],
                position: ['', this.validation.onlyRequired_validator],
                contact_person_phone_code: ['', this.validation.onlyRequired_validator],
                contact_person_cellphone: ['', this.validation.onlyRequired_validator],
                phone_code: ['', this.validation.onlyRequired_validator],
                name_of_contact_person: ['', this.validation.onlyRequired_validator],
                cell_phone: ['', this.validation.onlyRequired_validator],
                case_name: ['', this.validation.onlyRequired_validator],
                client_firstname: ['', this.validation.onlyRequired_validator],
                client_lastname: ['', this.validation.onlyRequired_validator],
                trails: ['', this.validation.onlyRequired_validator],
                home_visit: ['', this.validation.onlyRequired_validator],
                apt: [''],
                address: [''],
                practice_name: [''],
                provider_name: [''],
                provider_address: [''],
                room: [''],
                notes: ['', this.validation.onlyRequired_validator],
                latitude: [''],
                longitude: [''],
                provider_latitude: [''],
                provider_longitude: [''],
            });
        }
        createForm4() {
            this.medicalRequestForm = this.fb.group({
                practice_name: ['', this.validation.onlyRequired_validator],
                provider_name: ['', this.validation.onlyRequired_validator],
                phone_code: ['', this.validation.onlyRequired_validator],
                cell_phone: ['', this.validation.onlyRequired_validator],
                address: [''],
                room: ['', this.validation.onlyRequired_validator],
                notes: ['', this.validation.onlyRequired_validator],
                latitude: [''],
                longitude: [''],
            });
        }
        createForm5() {
            this.legalRequestForm = this.fb.group({
                name_of_contact_person: ['', this.validation.onlyRequired_validator],
                cell_phone: ['', this.validation.onlyRequired_validator],
                building_name: ['', this.validation.onlyRequired_validator],
                building_address: ['', this.validation.onlyRequired_validator],
                room: ['', this.validation.onlyRequired_validator],
                notes: ['', this.validation.onlyRequired_validator],
                phone_code: ['', this.validation.onlyRequired_validator],
                email: ['', this.validation.onlyRequired_validator],
            });
        }
        createForm6() {
            this.otherRequestForm = this.fb.group({
                name_of_contact_person: ['', this.validation.onlyRequired_validator],
                cell_phone: ['', this.validation.onlyRequired_validator],
                building_name: ['', this.validation.onlyRequired_validator],
                building_address: ['', this.validation.onlyRequired_validator],
                room: ['', this.validation.onlyRequired_validator],
                notes: ['', this.validation.onlyRequired_validator],
                phone_code: ['', this.validation.onlyRequired_validator],
                email: ['', this.validation.onlyRequired_validator],
            });
        }
        /*==========Step Form Value End Here========*/
        /*========== IR Start Here========*/
        getIRList() {
            this.service.get('getLastRISEntry')
                .subscribe(res => {
                this.ir_Obj = res['data'];
                this.newRequestForm.get('ir').patchValue(this.ir_Obj.req);
            });
        }
        /*========== IR end Here========*/
        /*========== Country Code for Mobile Start Here========*/
        CountryList() {
            this.service.getCountryMobileCode().subscribe(res => {
                if (res['status'] == '1') {
                    this.country_Obj = res['data'];
                }
            });
        }
        /*==========  Country Code for Mobile End Here========*/
        /*==========Client name list start Here========*/
        allClientList() {
            this.service.get('getAllClients').subscribe(res => { this.clientObj = res['data']; });
            this.filterRegions = this.newRequestForm.get('client_name').valueChanges.pipe(startWith(''), map(value => this.getRegions(value)));
        }
        getRegions(name) {
            return this.clientObj.filter((x) => x.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1);
        }
        /*==========Client name list end Here========*/
        /*==========LOB list start Here========*/
        allLobList() {
            this.service.get('getAllLOB')
                .subscribe(res => {
                this.lob_Obj = res['data'];
            });
        }
        /*==========LOB list end Here========*/
        /*==========Assignment Type list start Here========*/
        // allAssignmentTypeList() {
        //   this.service.get('getAllAssignmentTypes')
        //     .subscribe(res => {
        //       this.assignment_Obj = res['data'];
        //     });
        // }
        /*==========Assignment Type list end Here========*/
        /*==========Platform start Here========*/
        allPlatformList() {
            this.service.get('getAllPlatforms').subscribe(res => { this.platform_Obj = res['data']; });
        }
        /*==========Platform end Here========*/
        /*==========Language start Here========*/
        allLanguageList() {
            this.service.get('getAllLanguages').subscribe(res => { this.language_Obj = res['data']; });
        }
        /*==========Language end Here========*/
        /*==========Days api start Here========*/
        allDayList() {
            this.service.get('getDays')
                .subscribe(res => {
                this.days_Obj = res['data'];
            });
        }
        /*==========Days api end Here========*/
        onChangeRequest($event) {
        }
        onChangeClient(e) {
        }
        onChangeAssign($event) {
        }
        onChangeLanguage($event) {
        }
        /*==========Home visit function start Here========*/
        homevisit(e) {
            if (this.communityRequestForm.value.home_visit == '1' || this.communityRequestForm.value.home_visit == '0') {
                setTimeout(() => {
                    console.log("=====", this.searchElementRef);
                    this.getGooleAddress();
                }, 500);
            }
            if (e.target.value == '1') {
                this.communityRequestForm.controls['address'].setValue('');
                this.communityRequestForm.controls['apt'].setValue('');
            }
            if (e.target.value == '0') {
                this.communityRequestForm.controls['practice_name'].setValue('');
                this.communityRequestForm.controls['provider_name'].setValue('');
                this.communityRequestForm.controls['room'].setValue('');
                this.communityRequestForm.controls['provider_address'].setValue('');
            }
        }
        /*==========Home visit function end Here========*/
        /*==========LOB function start Here========*/
        onChangeLob(e) {
            this.service.get('getAllAssignmentTypes/' + this.newRequestForm.value.lob).subscribe(res => { this.assignment_Obj = res['data']; });
            if (e.target.value == '8') {
                this.showEductionForm = true;
                this.showMedicalForm = false;
                this.showLegalForm = false;
                this.showCommunityForm = false;
                this.showOtherForm = false;
            }
            if (e.target.value == '3') {
                this.showMedicalForm = true;
                this.showEductionForm = false;
                this.showLegalForm = false;
                this.showCommunityForm = false;
                this.showOtherForm = false;
                setTimeout(() => {
                    console.log("=====", this.searchElementRef);
                    this.getGooleAddress();
                }, 500);
            }
            if (e.target.value == '2') {
                this.showMedicalForm = false;
                this.showEductionForm = false;
                this.showLegalForm = false;
                this.showCommunityForm = true;
                this.showOtherForm = false;
            }
            if (e.target.value == '1') {
                this.showMedicalForm = false;
                this.showEductionForm = false;
                this.showLegalForm = true;
                this.showCommunityForm = false;
                this.showOtherForm = false;
            }
            if (e.target.value == '9') {
                this.showMedicalForm = false;
                this.showEductionForm = false;
                this.showCommunityForm = false;
                this.showLegalForm = false;
                this.showOtherForm = true;
            }
        }
        /*==========LOB function end Here========*/
        /*========== Recurrent Assignment function start here ========*/
        newRecurrent(ev) {
            this.recurrent = ev.target.value;
            if (this.recurrent == '1') {
                this.assignment_var = true;
            }
            else {
                this.assignment_var = false;
            }
        }
        /*========== Recurrent Assignment function end here ========*/
        /*==========Repeats Function start here ========*/
        newRepeat(event) {
            this.dailyData = event.target.value;
            if (this.dailyData == '1') {
                this.event_at = [0, 1, 2, 3, 4, 5, 6];
                this.days = true;
                this.start_end = false;
                this.every_show_hide = false;
                this.days2 = false;
            }
            else if (this.dailyData == '2') {
                this.every_show_hide = true;
                this.days = false;
                this.start_end = true;
                this.days2 = true;
            }
            else if (this.dailyData == '3') {
                this.every_show_hide = false;
            }
            else if (this.dailyData == '4') {
                this.every_show_hide = false;
            }
            else {
                this.days = false;
                this.start_end = true;
                this.every_show_hide = true;
            }
        }
        /*==========Repeats Function end here ========*/
        /*==========Platform Function start here ========*/
        newSimultaneous(e) {
            console.log(e.target.value);
            this.myvar = e.target.value;
            if (this.myvar == 1 && this.newRequestForm.value.platform == 'On-Site') {
                this.simultaneous_var = true;
            }
            else {
                this.simultaneous_var = false;
            }
        }
        /*==========platform Function end here ========*/
        /*==========Client Name Function start here ========*/
        changeClient(data, e) {
            this.newRequestForm.get('requested_by').patchValue(data.contact_person_name);
        }
        /*==========Client Name Function end here ========*/
        changeCheckbox(i) {
        }
        /*==========Today and future date function start here========*/
        date_func() {
            if (document.getElementsByName("setTodaysDate") != null) {
                var today = new Date().toISOString().split('T')[0];
                if (document.getElementsByName("setTodaysDate")[0] != undefined) {
                    document.getElementsByName("setTodaysDate")[0].setAttribute('max', today);
                }
            }
        }
        assign_date_func() {
            if (document.getElementsByName("assignDate") != null) {
                var date = new Date().toISOString().split('T')[0];
                if (document.getElementsByName("assignDate")[0] != undefined) {
                    document.getElementsByName("assignDate")[0].setAttribute('min', date);
                }
            }
        }
        startWithAssignment(e) {
            if (this.newRequestForm.value.assignment_date == '' || this.newRequestForm.value.assignment_date == 'undefined') {
                this.toastr.error("Select Assignment Date", '', { timeOut: 2000 });
                return false;
            }
            if (document.getElementsByName("event_start_d") != null) {
                var date = new Date().toISOString().split('T')[0];
                if (document.getElementsByName("event_start_d")[0] != undefined) {
                    document.getElementsByName("event_start_d")[0].setAttribute('min', this.newRequestForm.value.assignment_date);
                }
            }
        }
        endWithAssignment(e) {
            if (this.newRequestForm.value.event_start_date == '' || this.newRequestForm.value.event_start_date == 'undefined') {
                this.toastr.error("Select Start Date", '', { timeOut: 2000 });
                return false;
            }
            if (document.getElementsByName("event_end_d") != null) {
                var date = new Date().toISOString().split('T')[0];
                if (document.getElementsByName("event_end_d")[0] != undefined) {
                    document.getElementsByName("event_end_d")[0].setAttribute('min', this.newRequestForm.value.event_start_date);
                }
            }
        }
        /*==========Today and future date function end here========*/
        /*==========Start and end time valid function start here========*/
        start_end_date($eve) {
            var beginningDate = this.newRequestForm.value.event_start_date;
            var endDate = this.newRequestForm.value.event_end_date;
            if (beginningDate > endDate) {
                this.newRequestForm.controls['event_start_date'].setValue('');
                this.newRequestForm.controls['event_end_date'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningDate == endDate) {
                this.newRequestForm.controls['event_start_date'].setValue('');
                this.newRequestForm.controls['event_end_date'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningDate < endDate) {
                // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
            }
        }
        start_end_time_repeats(e) {
            var beginningTimeRep = this.newRequestForm.value.event_start_time;
            var endTimeRep = this.newRequestForm.value.event_end_time;
            if (beginningTimeRep > endTimeRep) {
                this.newRequestForm.controls['event_start_time'].setValue('');
                this.newRequestForm.controls['event_end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTimeRep == endTimeRep) {
                this.newRequestForm.controls['event_start_time'].setValue('');
                this.newRequestForm.controls['event_end_time'].setValue('');
                this.toastr.error("Invalid Time", '', { timeOut: 2000 });
            }
            if (beginningTimeRep < endTimeRep) {
                // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
            }
        }
        /*==========Start and end time valid function end here========*/
        /*======================All Form submitted function start here==============================*/
        saveUser() {
            this.submitted = true;
            if (this.showEductionForm) {
                this.submittedEdu = true;
            }
            if (this.showMedicalForm == true) {
                this.submittedMed = true;
            }
            if (this.showCommunityForm) {
                this.submittedComm = true;
            }
            if (this.showLegalForm) {
                this.submittedLeg = true;
            }
            if (this.showOtherForm) {
                this.submittedOther = true;
            }
            if ((this.showEductionForm && this.educationRequestForm.invalid && this.newRequestForm.invalid) ||
                (this.showMedicalForm && this.medicalRequestForm.invalid && this.newRequestForm.invalid) ||
                (this.showCommunityForm && this.communityRequestForm.invalid && this.newRequestForm.invalid) ||
                (this.showLegalForm && this.legalRequestForm.invalid && this.newRequestForm.invalid) ||
                (this.showOtherForm && this.otherRequestForm.invalid && this.newRequestForm.invalid)) {
                return;
            }
            else {
                if (this.newRequestForm.invalid) {
                    return;
                }
            }
            this.newRequestForm.value.from_time = moment(this.newRequestForm.value.from_time).format("HH:mm");
            ;
            this.newRequestForm.value.to_time = moment(this.newRequestForm.value.to_time).format("HH:mm");
            this.newRequestForm.value.event_start_time = moment(this.newRequestForm.value.event_start_date).format("HH:mm");
            this.newRequestForm.value.event_end_time = moment(this.newRequestForm.value.event_end_time).format("HH:mm");
            this.newRequestForm.value.event_at = this.event_at;
            this.newRequestForm.value.scheduler_id = this.scheduler_id;
            if (this.showEductionForm) {
                this.newRequestForm.value.education = this.educationRequestForm.value;
            }
            if (this.showLegalForm) {
                this.newRequestForm.value.legal = this.legalRequestForm.value;
            }
            if (this.showOtherForm) {
                this.newRequestForm.value.others = this.otherRequestForm.value;
            }
            if (this.showMedicalForm) {
                this.medicalRequestForm.value.latitude = this.latitude;
                this.medicalRequestForm.value.longitude = this.longitude;
                this.medicalRequestForm.value.address = this.new_address;
                this.newRequestForm.value.medical = this.medicalRequestForm.value;
            }
            if (this.showCommunityForm) {
                this.communityRequestForm.value.latitude = this.latitude;
                this.communityRequestForm.value.longitude = this.longitude;
                this.communityRequestForm.value.address = this.new_address;
                this.newRequestForm.value.community = this.communityRequestForm.value;
            }
            console.log("formccc", this.newRequestForm.value);
            this.service.post('enterNewInterpreterRequestBasicTab', this.newRequestForm.value).subscribe(res => {
                if (res['status'] == true) {
                    this.save_obj = res;
                    this.save_Msg = res;
                    this.toastr.success(this.save_Msg.msg, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                    this.router.navigate(['/request-scheduler/all-request-list-schedular']);
                }
            });
        }
        /*==========================All Form submitted function end here==========================*/
        /*==========================Google Api function start here==========================*/
        // Get Current Location Coordinates
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
        markerDragEnd($event) {
            console.log($event);
            this.latitude = $event.coords.lat;
            this.longitude = $event.coords.lng;
            console.log("latitude-", this.latitude);
            console.log("longitude-", this.longitude);
            this.getAddress(this.latitude, this.longitude);
        }
        getAddress(latitude, longitude) {
            this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
                console.log(results);
                console.log(status);
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
        /*==========================Google Api function end here==========================*/
        selectEvent(item) {
            // do something with selected item
        }
        onChangeSearch(search) {
            // fetch remote data from here
            // And reassign the 'data' which is binded to 'data' property.
        }
        onFocused(e) {
            // do something
        }
    };
    __decorate([
        ViewChild('search', { static: false }),
        __metadata("design:type", ElementRef)
    ], AllRequestSchedularComponent.prototype, "searchElementRef", void 0);
    AllRequestSchedularComponent = __decorate([
        Component({
            selector: 'app-all-request-schedular',
            templateUrl: './all-request-schedular.component.html',
            styleUrls: ['./all-request-schedular.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            DataLayerService,
            HttpService,
            HttpClient,
            NgZone,
            MapsAPILoader])
    ], AllRequestSchedularComponent);
    return AllRequestSchedularComponent;
})();
export { AllRequestSchedularComponent };
//# sourceMappingURL=all-request-schedular.component.js.map