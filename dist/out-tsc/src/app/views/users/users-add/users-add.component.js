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
// import { MouseEvent } from '@agm/core';
// import { MouseEvent as AGMMouseEvent } from '@agm/core';
// import { MapsAPILoader, MouseEvent } from '@agm/core';
//
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { FunctionService } from './../../../shared/services/function.service';
var UsersAddComponent = /** @class */ (function () {
    function UsersAddComponent(validation, fb, toastr, router, func, dl, service, mapsAPILoader, ngZone) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.func = func;
        this.dl = dl;
        this.service = service;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.latlong = '';
        this.items = ['Javascript', 'Typescript'];
        this.title = 'AGM project';
        this.tagsCtrl1 = new FormControl(this.items);
        this.tagsCtrl2 = new FormControl([]);
    }
    UsersAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.LanguageList();
        this.userRoleList();
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
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // console.log("place-",place[0].formatted_address);
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    // console.log("latitude-",this.latitude);
                    // console.log("longitude-",this.longitude);
                    _this.zoom = 12;
                });
            });
        });
    };
    UsersAddComponent.prototype.onChange = function (id) {
        this.newlanguageVal = id.target.value;
        console.log("iddddddddddd", this.newlanguageVal);
    };
    UsersAddComponent.prototype.onChangeRole = function (id) {
        this.newrole = id.target.value;
        console.log("iddddddddddd", this.newrole);
    };
    UsersAddComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is' + item);
    };
    /*========== Form Value Start Here========*/
    UsersAddComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            first_name: ['', this.validation.name_validation],
            last_name: ['', this.validation.name_validation],
            email: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            address: ['', this.validation.onlyRequired_validator],
            apartment: ['', this.validation.onlyRequired_validator],
            street: ['', this.validation.onlyRequired_validator],
            gender: ['', this.validation.onlyRequired_validator],
            languageid: [''],
            latitude: [''],
            longitude: [''],
            primary_language: ['', this.validation.onlyRequired_validator],
            user_role: ['', this.validation.onlyRequired_validator],
            rate: [''],
        });
    };
    /*========== Form Value End Here========*/
    UsersAddComponent.prototype.saveUser = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.submitted = false;
        this.userForm.value.latitude = this.latitude;
        this.userForm.value.longitude = this.longitude;
        this.userForm.value.address = this.new_address;
        this.userForm.value.language = this.newlanguageVal;
        this.userForm.value.role = this.newrole;
        // this.func.formatPhoneNumber(this.userForm.value.mobile);
        console.log("form value", this.userForm.value);
        this.service.interpreterAdd(this.userForm.value)
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.user_Obj = res;
            _this.user_Msg = res;
            _this.toastr.success(_this.user_Msg.message, '', { timeOut: 1000 });
            _this.router.navigate(['/users/user-list']);
        });
    };
    UsersAddComponent.prototype.LanguageList = function () {
        var _this = this;
        this.service.getLanguageList()
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.language_Obj = res['data'];
            console.log("my testing", _this.language_Obj);
        });
    };
    UsersAddComponent.prototype.userRoleList = function () {
        var _this = this;
        this.service.roleList()
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.role_Obj = res['data'];
            console.log("my testing", _this.role_Obj);
        });
    };
    UsersAddComponent.prototype.checkEmail = function ($event, email) {
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
    UsersAddComponent.prototype.setCurrentLocation = function () {
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
    UsersAddComponent.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        console.log("latitude-", this.latitude);
        console.log("longitude-", this.longitude);
        this.getAddress(this.latitude, this.longitude);
    };
    UsersAddComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            console.log(results);
            console.log(status);
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
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], UsersAddComponent.prototype, "searchElementRef", void 0);
    UsersAddComponent = __decorate([
        Component({
            selector: 'app-users-add',
            templateUrl: './users-add.component.html',
            styleUrls: ['./users-add.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            FunctionService,
            DataLayerService,
            HttpService,
            MapsAPILoader,
            NgZone])
    ], UsersAddComponent);
    return UsersAddComponent;
}());
export { UsersAddComponent };
//# sourceMappingURL=users-add.component.js.map