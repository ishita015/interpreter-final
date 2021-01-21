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
//import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader } from '@agm/core';
// import { MouseEvent } from '@agm/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(validation, service, fb, toastr, router, route, dl, mapsAPILoader, ngZone) {
        this.validation = validation;
        this.service = service;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.dl = dl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.items = [];
        this.tagsCtrl1 = new FormControl(this.items);
        this.tagsCtrl2 = new FormControl([]);
        this.latlong = '';
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.Id = JSON.parse(localStorage.getItem('rowId'));
        this.data = JSON.parse(localStorage.getItem('editData'));
        console.log("edit data", this.data);
        this.LanguageList();
        this.userRoleList();
        this.editUser();
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
    UsersEditComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is' + item);
    };
    /*========== Form Value Start Here========*/
    UsersEditComponent.prototype.createForm = function () {
        this.userEditForm = this.fb.group({
            first_name: ['', this.validation.name_validation],
            last_name: ['', this.validation.name_validation],
            email: [{ value: '', disabled: true }],
            // password: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            address: ['', this.validation.onlyRequired_validator],
            apartment: ['', this.validation.onlyRequired_validator],
            street: ['', this.validation.onlyRequired_validator],
            gender: ['', this.validation.onlyRequired_validator],
            languageid: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            primary_lang_id: ['', this.validation.onlyRequired_validator],
            user_role: [{ value: '', disabled: true }],
            id: [''],
            rate: [''],
        });
    };
    // /*========== Form Value End Here========*/
    /*========== Edit Input Value Start Here========*/
    UsersEditComponent.prototype.patchValue = function () {
        this.userEditForm.get('user_role').patchValue(this.json_Obj.role_id);
        this.userEditForm.get('email').patchValue(this.json_Obj.email);
        this.userEditForm.get('first_name').patchValue(this.json_Obj.first_name);
        this.userEditForm.get('last_name').patchValue(this.json_Obj.last_name);
        this.userEditForm.get('apartment').patchValue(this.json_Obj.apartment);
        this.userEditForm.get('street').patchValue(this.json_Obj.street);
        this.userEditForm.get('mobile').patchValue(this.json_Obj.mobile);
        this.userEditForm.get('address').patchValue(this.json_Obj.address);
        this.userEditForm.get('latitude').patchValue(this.json_Obj.latitude);
        this.userEditForm.get('longitude').patchValue(this.json_Obj.longitude);
        //let itemsAsObjects = [{id: 0, display: 'Angular'}, {id: 1, display: 'React'}];
        this.userEditForm.get('languageid').patchValue(this.json_Obj.interLanguage);
        this.userEditForm.get('primary_lang_id').patchValue(this.json_Obj.primary_lang_id);
        // this.userEditForm.patchValue({ primary_lang_id:   this.json_Obj.primary_lang_id});
        this.userEditForm.get('gender').patchValue(this.json_Obj.gender);
        if (this.json_Obj.role_id == '2') {
            this.userEditForm.get('rate').patchValue(this.json_Obj.interpreter_rate);
        }
    };
    UsersEditComponent.prototype.editUser = function () {
        var _this = this;
        console.log("edit id", this.Id);
        this.service.getInterpreterDetail(this.Id)
            .subscribe(function (res) {
            _this.json_Obj = res['data']['0'];
            _this.patchValue();
            console.log("edit api", _this.json_Obj);
            localStorage.setItem('editData', JSON.stringify(_this.json_Obj));
        });
    };
    /*==========Edit Input Value End Here========*/
    UsersEditComponent.prototype.submitUser = function () {
        var _this = this;
        console.log("formmmmmmmmmmmm", this.userEditForm.value);
        // console.log("form value",this.userEditForm.value);
        this.submitted = true;
        if (this.userEditForm.invalid) {
            return;
        }
        this.submitted = false;
        this.userEditForm.value.latitude = this.latitude;
        this.userEditForm.value.longitude = this.longitude;
        this.userEditForm.value.address = this.new_address;
        this.userEditForm.value.language = this.newlanguageVal;
        this.userEditForm.value.id = this.json_Obj.id;
        console.log("user value-", this.userEditForm.value.id);
        // console.log("api response",res);
        this.service.updateInterpreter(this.userEditForm.value).subscribe(function (res) {
            if (res['status'] == 1) {
                _this.useredit_Obj = res;
                _this.useredit_Msg = res;
                console.log("api response", _this.useredit_Obj);
                _this.toastr.success(_this.useredit_Msg.message, '', { timeOut: 1000 });
                _this.router.navigate(['/users/user-list']);
            }
            // else{
            //   this.toastr.success( this.useredit_Msg.message,'', { timeOut: 1000 });
            //   this.router.navigate(['/users/user-list']);  
            // }                        
        });
    };
    UsersEditComponent.prototype.LanguageList = function () {
        var _this = this;
        this.service.getLanguageList()
            .subscribe(function (res) {
            if (res['status'] == 1) {
                _this.language_Obj = res['data'];
            }
            else {
                _this.toastr.success(_this.useredit_Msg.message, '', { timeOut: 1000 });
                _this.router.navigate(['/users/user-list']);
            }
        });
    };
    UsersEditComponent.prototype.userRoleList = function () {
        var _this = this;
        this.service.roleList()
            .subscribe(function (res) {
            // console.log("api response testing",res);
            _this.role_Obj = res['data'];
        });
    };
    UsersEditComponent.prototype.onChange = function (id) {
        this.newlanguageVal = id.target.value;
        // console.log("iddddddddddd", this.newlanguageVal);
    };
    // Get Current Location Coordinates
    UsersEditComponent.prototype.setCurrentLocation = function () {
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
    UsersEditComponent.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        console.log("latitude-", this.latitude);
        console.log("longitude-", this.longitude);
        this.getAddress(this.latitude, this.longitude);
    };
    UsersEditComponent.prototype.getAddress = function (latitude, longitude) {
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
    ], UsersEditComponent.prototype, "searchElementRef", void 0);
    UsersEditComponent = __decorate([
        Component({
            selector: 'app-users-edit',
            templateUrl: './users-edit.component.html',
            styleUrls: ['./users-edit.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            HttpService,
            FormBuilder,
            ToastrService,
            Router,
            ActivatedRoute,
            DataLayerService,
            MapsAPILoader,
            NgZone])
    ], UsersEditComponent);
    return UsersEditComponent;
}());
export { UsersEditComponent };
//# sourceMappingURL=users-edit.component.js.map