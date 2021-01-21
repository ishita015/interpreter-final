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
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {} from 'googlemaps';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
var InterpreterAddComponent = /** @class */ (function () {
    function InterpreterAddComponent(validation, fb, toastr, router, dl, service, mapsAPILoader, ngZone, http) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.dl = dl;
        this.service = service;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.latlong = '';
        this.items = ['Javascript', 'Typescript'];
        this.title1 = 'AGM project';
        this.tagsCtrl1 = new FormControl(this.items);
        this.tagsCtrl2 = new FormControl([]);
        this.list1 = [];
        // languageid = [];
        this.selectedFile = null;
        // @ViewChild('content1', {static: false}) content1 !: TemplateRef<any>;
        // name = 'Angular';
        // gender variable 
        this.showOther = false;
        // ein/ssn radio button variable
        this.einshowInput = false;
        this.ssnshowInput = false;
        this.client_image = '';
    }
    InterpreterAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.location.href.split('client/client-edit/') != undefined) {
            if (window.location.href.split('client/client-edit/')[1] != undefined) {
                var param = window.location.href.split('client/client-edit/')[1];
                this.service.get('getClientDetails/' + param).subscribe(function (res) {
                    _this.userForm.patchValue({
                        id: res['data'][0].id,
                        password: res['data'][0].password,
                        company_name: res['data'][0].name,
                        company_email: res['data'][0].email,
                        country_code: res['data'][0].country_code,
                        mobile: res['data'][0].mobile,
                        phone_no: res['data'][0].phone_no,
                        address: res['data'][0].address,
                        country: res['data'][0].country,
                        state: res['data'][0].state,
                        zipCode: res['data'][0].zipCode,
                        timezone: res['data'][0].timezone,
                        city: res['data'][0].city,
                        contact_person_name: res['data'][0].contact_person_name,
                        contact_mobile_no: res['data'][0].contact_mobile_no,
                        ssn: res['data'][0].ssn_no,
                        contact_country_code: res['data'][0].contact_country_code,
                    });
                    _this.new_address = res['data'][0].address,
                        _this.latitude = res['data'][0].latitude,
                        _this.longitude = res['data'][0].longitude,
                        _this.client_image = res['data'][0].profile_img;
                    _this.StateList1(res['data'][0].country);
                    _this.CityList1(res['data'][0].state);
                });
            }
        }
        this.createForm();
        this.LanguageList();
        this.userRoleList();
        this.CountryList();
        //   this.StateList();
        //   this.CityList();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            // this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    _this.new_address = place['formatted_address'];
                    _this.sec_address = place['formatted_address'];
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                    _this.geocodeLatLng(_this.latitude, _this.longitude);
                });
            });
        });
    };
    InterpreterAddComponent.prototype.onChange = function (id) {
        this.newlanguageVal = id.target.value;
        //   console.log("iddddddddddd", this.newlanguageVal);
    };
    //   onChangeRole(id) {
    //       this.newrole = id.target.value;
    //       console.log("iddddddddddd", this.newrole);
    //   }
    InterpreterAddComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is' + item);
    };
    /*========== Form Value Start Here========*/
    InterpreterAddComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            id: [''],
            company_name: ['', this.validation.onlyRequired_validator],
            company_email: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            country_code: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            phone_no: ['', this.validation.onlyRequired_validator],
            address: ['', this.validation.onlyRequired_validator],
            country: ['', this.validation.onlyRequired_validator],
            state: ['', this.validation.onlyRequired_validator],
            zipCode: ['', this.validation.onlyRequired_validator],
            timezone: ['', this.validation.onlyRequired_validator],
            image: [''],
            city: ['',],
            latitude: [''],
            longitude: [''],
            contact_person_name: ['', this.validation.onlyRequired_validator],
            contact_mobile_no: ['', this.validation.onlyRequired_validator],
            ssn: ['', this.validation.onlyRequired_validator],
            contact_country_code: ['', this.validation.onlyRequired_validator],
        });
    };
    /*========== Form Value End Here========*/
    InterpreterAddComponent.prototype.onCountryChange = function (id) {
        this.country_id = id.target.value;
        // this.userForm.patchValue({state:this.country_id})
        this.StateList();
    };
    InterpreterAddComponent.prototype.onStateChange = function (id) {
        this.state_id = id.target.value;
        this.CityList();
    };
    InterpreterAddComponent.prototype.onCityChange = function (id) {
        this.city_id = id.target.value;
    };
    /*========== Country Code for Mobile Start Here========*/
    InterpreterAddComponent.prototype.CountryList = function () {
        var _this = this;
        this.service.getCountryMobileCode().subscribe(function (res) {
            if (res['status'] == '1') {
                console.log("api response", res);
                _this.country_Obj = res['data'];
            }
        });
    };
    /*==========  Country Code for Mobile End Here========*/
    /*========== State Code for Mobile Start Here========*/
    InterpreterAddComponent.prototype.StateList = function () {
        var _this = this;
        console.log(this.country_id);
        this.service.getStateCode(this.country_id).subscribe(function (res) {
            console.log("state api res", res);
            if (res['status'] == '1') {
                console.log("api response", res);
                _this.state_Obj = res['data'];
                _this.timezone_Obj = res['timeZoneData']['timezones'];
            }
        });
    };
    /*==========  State Code for Mobile End Here========*/
    /*========== City Code for Mobile Start Here========*/
    InterpreterAddComponent.prototype.CityList = function () {
        var _this = this;
        this.service.getCityCode(this.state_id).subscribe(function (res) {
            if (res['status'] == '1') {
                console.log("api response", res);
                _this.city_Obj = res['data'];
            }
        });
    };
    /*==========  City Code for Mobile End Here========*/
    InterpreterAddComponent.prototype.StateList1 = function (id) {
        var _this = this;
        this.service.getStateCode(id).subscribe(function (res) {
            if (res['status'] == '1') {
                _this.state_Obj = res['data'];
                _this.timezone_Obj = res['timeZoneData']['timezones'];
            }
        });
    };
    InterpreterAddComponent.prototype.CityList1 = function (id) {
        var _this = this;
        this.service.getCityCode(id).subscribe(function (res) {
            if (res['status'] == '1') {
                _this.city_Obj = res['data'];
            }
        });
    };
    InterpreterAddComponent.prototype.username = function () {
        var _this = this;
        this.fullnameVal = this.userForm.value.first_name + this.userForm.value.last_name;
        this.firstnameVal = this.userForm.value.first_name;
        this.lastnameVal = this.userForm.value.last_name;
        this.service.userName(this.firstnameVal, this.lastnameVal).subscribe(function (res) {
            if (res['status'] == '1') {
                _this.username_Obj = res['data'];
                _this.username_msg = res;
                _this.userForm.get('username').patchValue(_this.username_Obj);
            }
            else {
                _this.toastr.success(res['message'], '', { timeOut: 2000, positionClass: 'toast-top-center' });
            }
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterAddComponent.prototype.onSingleFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
    };
    /*==========Single Image Function End Here========*/
    InterpreterAddComponent.prototype.check_dob = function (e) {
        var d = new Date(e);
        var check = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
        if (d <= check) {
        }
        else {
            this.toastr.error("Date should be valid and atleast 18 year old.", '', { timeOut: 1000, positionClass: 'toast-top-center' });
            this.userForm.controls['dob'].setValue('');
        }
    };
    InterpreterAddComponent.prototype.saveUser = function () {
        var _this = this;
        console.log('in', this.userForm.value);
        console.log('incheck', this.userForm);
        if (this.userForm.value.id == '') {
            this.submitted = true;
            if (this.userForm.invalid) {
                return;
            }
            console.log(this.userForm.value);
            this.submitted = false;
        }
        this.userForm.value.address = this.new_address;
        this.userForm.value.latitude = this.latitude;
        this.userForm.value.longitude = this.longitude;
        var formData = new FormData();
        formData.append('id', this.userForm.value.id);
        formData.append('company_name', this.userForm.value.company_name);
        formData.append('company_email', this.userForm.value.company_email);
        formData.append('country_code', this.userForm.value.country_code);
        formData.append('password', this.userForm.value.password);
        formData.append('mobile', this.userForm.value.mobile);
        formData.append('phone_no', this.userForm.value.phone_no);
        formData.append('address', this.new_address);
        formData.append('country', this.userForm.value.country);
        formData.append('state', this.userForm.value.state);
        formData.append('city', this.userForm.value.city); //this.city_id
        formData.append('latitude', this.latitude);
        formData.append('longitude', this.longitude);
        formData.append('timezone', this.userForm.value.timezone);
        formData.append('zipCode', this.userForm.value.zipCode);
        formData.append('ssn', this.userForm.value.ssn);
        formData.append('contact_person_name', this.userForm.value.contact_person_name);
        formData.append('contact_mobile_no', this.userForm.value.contact_mobile_no);
        formData.append('contact_country_code', this.userForm.value.contact_country_code);
        formData.append('image', this.selectedFile);
        this.http.post(environment.apiUrl + '/cesco/saveClient', formData).subscribe(function (res) {
            if (res['status'] == '1') {
                _this.toastr.success(res['msg'], '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.router.navigate(['/client/client-list']);
            }
        });
    };
    InterpreterAddComponent.prototype.LanguageList = function () {
        var _this = this;
        this.service.getLanguageList()
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.language_Obj = res['data'];
        });
    };
    InterpreterAddComponent.prototype.userRoleList = function () {
        var _this = this;
        this.service.roleList()
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.role_Obj = res['data'];
        });
    };
    InterpreterAddComponent.prototype.checkEmail = function ($event, email) {
        if (this.userForm.value.id == '') {
            this.service.checkUserEmail(email)
                .subscribe(function (res) {
                if (res['status'] == '1') {
                    alert(res['message']);
                    $event.target.value = "";
                }
            });
        }
    };
    // Get Current Location Coordinates
    InterpreterAddComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 8;
                _this.getAddress(_this.latitude, _this.longitude);
                _this.geocodeLatLng(_this.latitude, _this.longitude);
            });
        }
    };
    InterpreterAddComponent.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
        this.geocodeLatLng(this.latitude, this.longitude);
    };
    InterpreterAddComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                    _this.sec_address = results[0].formatted_address;
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
    //------------ get country, city, state  ----------------------------//
    InterpreterAddComponent.prototype.geocodeLatLng = function (latitude, longitude) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    var street = "";
                    var city = "";
                    var state = "";
                    var country = "";
                    var zipcode = "";
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].types[0] === "locality") {
                            city = results[i].address_components[0].long_name;
                            state = results[i].address_components[2].long_name;
                        }
                        if (results[i].types[0] === "postal_code" && zipcode == "") {
                            zipcode = results[i].address_components[0].long_name;
                        }
                        if (results[i].types[0] === "country") {
                            country = results[i].address_components[0].long_name;
                        }
                        if (results[i].types[0] === "route" && street == "") {
                            for (var j = 0; j < 4; j++) {
                                if (j == 0) {
                                    street = results[i].address_components[j].long_name;
                                }
                                else {
                                    street += ", " + results[i].address_components[j].long_name;
                                }
                            }
                        }
                        if (results[i].types[0] === "street_address") {
                            for (var j = 0; j < 4; j++) {
                                if (j == 0) {
                                    street = results[i].address_components[j].long_name;
                                }
                                else {
                                    street += ", " + results[i].address_components[j].long_name;
                                }
                            }
                        }
                    }
                    if (zipcode == "") {
                        if (typeof results[0].address_components[8] !== 'undefined') {
                            zipcode = results[0].address_components[8].long_name;
                        }
                    }
                    if (country == "") {
                        if (typeof results[0].address_components[7] !== 'undefined') {
                            country = results[0].address_components[7].long_name;
                        }
                    }
                    if (state == "") {
                        if (typeof results[0].address_components[6] !== 'undefined') {
                            state = results[0].address_components[6].long_name;
                        }
                    }
                    if (city == "") {
                        if (typeof results[0].address_components[5] !== 'undefined') {
                            city = results[0].address_components[5].long_name;
                        }
                    }
                    _this.map_address = {
                        "street": street,
                        "city": city,
                        "state": state,
                        "country": country,
                        "zipcode": zipcode,
                    };
                    _this.userForm.get('zipCode').patchValue(zipcode);
                    console.log('map_address', _this.map_address);
                    _this.service.getCountryMobileCode().subscribe(function (res) {
                        if (res['status'] == '1') {
                            _this.country_Json = res['data'];
                            var contHash = _this.country_Json.find(function (cont) { return cont.name == country; });
                            _this.userForm.patchValue({ country: contHash.id });
                            _this.service.getStateCode(contHash.id).subscribe(function (contryRes) {
                                if (contryRes['status'] == '1') {
                                    _this.state_Obj = contryRes["data"];
                                    _this.timezone_Obj = contryRes['timeZoneData']['timezones'];
                                    var stateHash = _this.state_Obj.find(function (st) { return st.name == state; });
                                    _this.stateData = _this.state_Obj.find(function (st) { return st.name == state; });
                                    // setTimeout(()=>{
                                    console.log('state_Obj', stateHash);
                                    if (stateHash.id != undefined) {
                                        _this.userForm.patchValue({ state: stateHash.id });
                                        _this.service.getCityCode(stateHash.id).subscribe(function (cityRes) {
                                            if (cityRes['status'] == '1') {
                                                _this.city_Obj = cityRes["data"];
                                                var cityHash = _this.city_Obj.find(function (ct) { return ct.name == city; });
                                                _this.cityData = _this.city_Obj.find(function (ct) { return ct.name == city; });
                                                _this.userForm.patchValue({ city: cityHash.id });
                                            }
                                        });
                                        console.log('yes-------------------------------------', _this.userForm.value);
                                    }
                                    // }, 500);
                                }
                            });
                        }
                    });
                    // this.generalForm.get('country').patchValue(country); 
                    //this.patchValue()
                }
                else {
                    alert('No results found');
                }
            }
            else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    };
    // Radio button gender function
    InterpreterAddComponent.prototype.radioButton1 = function () {
        this.showOther = false;
    };
    InterpreterAddComponent.prototype.radioButton2 = function () {
        this.showOther = false;
    };
    InterpreterAddComponent.prototype.radioButton3 = function () {
        this.showOther = true;
    };
    // Radio button ssn and ein function
    InterpreterAddComponent.prototype.ssnRadioBtn = function () {
        this.einshowInput = false;
        this.ssnshowInput = true;
        this.userForm.controls['ein'].setValue('');
    };
    InterpreterAddComponent.prototype.einRadioBtn = function () {
        this.einshowInput = true;
        this.ssnshowInput = false;
        this.userForm.controls['ssn'].setValue('');
    };
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], InterpreterAddComponent.prototype, "searchElementRef", void 0);
    InterpreterAddComponent = __decorate([
        Component({
            selector: 'app-interpreter-add',
            templateUrl: './interpreter-add.component.html',
            styleUrls: ['./interpreter-add.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            DataLayerService,
            HttpService,
            MapsAPILoader,
            NgZone, HttpClient])
    ], InterpreterAddComponent);
    return InterpreterAddComponent;
}());
export { InterpreterAddComponent };
//# sourceMappingURL=interpreter-add.component.js.map