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
import { MapsAPILoader } from '@agm/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
var InterpreterAddComponent = /** @class */ (function () {
    function InterpreterAddComponent(validation, fb, toastr, router, dl, service, mapsAPILoader, ngZone) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.dl = dl;
        this.service = service;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
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
    }
    InterpreterAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.LanguageList();
        this.userRoleList();
        this.CountryList();
        //   this.StateList();
        //   this.CityList();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    _this.new_address = place['formatted_address'];
                    console.log("address", _this.new_address);
                    _this.sec_address = place['formatted_address'];
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // console.log("place-",place[0].formatted_address);
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    console.log("latitude-", _this.latitude);
                    console.log("longitude-", _this.longitude);
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
            title: ['', this.validation.onlyRequired_validator],
            first_name: ['', this.validation.onlyRequired_validator],
            last_name: ['', this.validation.onlyRequired_validator],
            email: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            // phone_no: [''],
            international_phone_no: ['', this.validation.onlyRequired_validator],
            // username: [''],
            dob: ['', this.validation.onlyRequired_validator],
            country_code: ['', this.validation.onlyRequired_validator],
            // address: ['', this.validation.onlyRequired_validator],
            address: [''],
            company_name: ['', this.validation.onlyRequired_validator],
            social_security_no: ['', this.validation.onlyRequired_validator],
            // apartment:['', this.validation.onlyRequired_validator],
            gender: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            nick_name: ['',],
            // middle_name: ['', this.validation.onlyRequired_validator],
            country: ['', this.validation.onlyRequired_validator],
            city: ['', this.validation.onlyRequired_validator],
            state: ['', this.validation.onlyRequired_validator],
            zipCode: ['', this.validation.onlyRequired_validator],
            timezone: ['', this.validation.onlyRequired_validator],
            other_gender: [''],
            image: ['', this.validation.onlyRequired_validator],
            ssn: [''],
            ein: [''],
        });
    };
    /*========== Form Value End Here========*/
    InterpreterAddComponent.prototype.onCountryChange = function (id) {
        this.country_id = id.target.value;
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
    // saveUser() {
    //     this.submitted = true;
    //     if (this.userForm.invalid) {
    //         return;
    //     }
    //     this.submitted = false;
    //     this.userForm.value.latitude = this.latitude;
    //     this.userForm.value.longitude = this.longitude;
    //     this.userForm.value.address = this.new_address;
    //     this.userForm.value.language = this.newlanguageVal;
    //     // this.userForm.value.role = this.newrole;
    //     console.log("form value", this.userForm.value);
    //     this.service.interpreterAdd(this.userForm.value)
    //         .subscribe(res => {
    //             // console.log("api response",res);
    //             this.user_Obj = res
    //             this.user_Msg = res
    //             this.toastr.success(this.user_Msg.message, '', { timeOut: 1000 });
    //             this.router.navigate(['/interpreter/interpreter-list']);
    //         });
    // }
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
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.submitted = false;
        this.userForm.value.address = this.new_address;
        this.userForm.value.latitude = this.latitude;
        this.userForm.value.longitude = this.longitude;
        // this.userForm.value.title
        var formData = new FormData();
        this.userForm.value.image = this.selectedFile;
        formData.append('title', this.userForm.value.title);
        formData.append('first_name', this.userForm.value.first_name);
        // formData.append('middle_name', this.userForm.value.middle_name);
        formData.append('last_name', this.userForm.value.last_name);
        formData.append('email', this.userForm.value.email);
        formData.append('nick_name', this.userForm.value.nick_name);
        formData.append('mobile', this.userForm.value.mobile);
        formData.append('international_phone_no', this.userForm.value.international_phone_no);
        formData.append('company_name', this.userForm.value.company_name);
        formData.append('social_security_no', this.userForm.value.social_security_no);
        formData.append('dob', this.userForm.value.dob);
        formData.append('address', this.userForm.value.address);
        formData.append('country', this.userForm.value.country);
        formData.append('password', this.userForm.value.password);
        // formData.append('apartment', this.userForm.value.apartment);
        formData.append('state', this.state_id);
        formData.append('city', this.userForm.value.city); //this.city_id
        formData.append('gender', this.userForm.value.gender);
        formData.append('other_gender', this.userForm.value.other_gender);
        formData.append('latitude', this.userForm.value.latitude);
        formData.append('longitude', this.userForm.value.longitude);
        formData.append('timezone', this.userForm.value.timezone);
        formData.append('zipCode', this.userForm.value.zipCode);
        formData.append('country_code', this.userForm.value.country_code);
        formData.append('ein', this.userForm.value.ein);
        formData.append('ssn', this.userForm.value.ssn);
        formData.append('image', this.selectedFile);
        console.log("final form value", this.userForm.value);
        this.service.interpreterAdd(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                _this.user_Obj = res;
                _this.user_Msg = res;
                _this.toastr.success(_this.user_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.router.navigate(['/interpreter/interpreter-list']);
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
        console.log("email-", email);
        // console.log("event-",$event)
        this.service.checkUserEmail(email)
            .subscribe(function (res) {
            if (res['status'] == '1') {
                alert(res['message']);
                // this.userForm.value.email = '';
                $event.target.value = "";
            }
        });
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
                    //------------ Country api call ----------------------------//
                    _this.service.getCountryMobileCode().subscribe(function (res) {
                        if (res['status'] == '1') {
                            _this.country_Json = res['data'];
                            var contHash = _this.country_Json.find(function (cont) { return cont.name == country; });
                            _this.userForm.get('country').patchValue(contHash.id);
                            //------------ State api call ----------------------------//
                            _this.service.getStateCode(contHash.id).subscribe(function (contryRes) {
                                if (contryRes['status'] == '1') {
                                    _this.state_Obj = contryRes["data"];
                                    _this.timezone_Obj = contryRes['timeZoneData']['timezones'];
                                    var stateHash = _this.state_Obj.find(function (st) { return st.name == state; });
                                    if (stateHash) {
                                        _this.userForm.get('state').patchValue(stateHash.id);
                                        //------------ City api call ----------------------------//
                                        _this.service.getCityCode(stateHash.id).subscribe(function (cityRes) {
                                            if (cityRes['status'] == '1') {
                                                _this.city_Obj = cityRes["data"];
                                                var cityHash = _this.city_Obj.find(function (ct) { return ct.name == city; });
                                                _this.userForm.get('city').patchValue(cityHash.id);
                                            }
                                        });
                                    }
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
            NgZone])
    ], InterpreterAddComponent);
    return InterpreterAddComponent;
}());
export { InterpreterAddComponent };
//# sourceMappingURL=interpreter-add.component.js.map