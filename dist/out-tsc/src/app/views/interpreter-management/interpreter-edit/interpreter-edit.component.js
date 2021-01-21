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
var InterpreterEditComponent = /** @class */ (function () {
    function InterpreterEditComponent(validation, service, fb, toastr, router, route, dl, mapsAPILoader, ngZone) {
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
        this.editShowOther = false;
        this.selectedFile = null;
    }
    InterpreterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.CountryList();
        this.Id = JSON.parse(localStorage.getItem('rowId'));
        this.data = JSON.parse(localStorage.getItem('editData'));
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
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    InterpreterEditComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is' + item);
    };
    /*========== Form Value Start Here========*/
    InterpreterEditComponent.prototype.createForm = function () {
        this.userEditForm = this.fb.group({
            first_name: ['', this.validation.name_validation],
            last_name: ['', this.validation.name_validation],
            email: [{ value: '', disabled: true }],
            mobile: ['', this.validation.onlyRequired_validator],
            address: ['', this.validation.onlyRequired_validator],
            apartment: ['', this.validation.onlyRequired_validator],
            // street:['', this.validation.onlyRequired_validator],
            gender: ['', this.validation.onlyRequired_validator],
            languageid: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            primary_lang_id: ['', this.validation.onlyRequired_validator],
            // user_role:[{value: '', disabled: true}],
            id: [''],
            rate: [''],
            image: [''],
            other_gender: [''],
            country_code: ['', this.validation.onlyRequired_validator]
        });
    };
    // /*========== Form Value End Here========*/
    /*========== Country Code for Mobile Start Here========*/
    InterpreterEditComponent.prototype.CountryList = function () {
        var _this = this;
        this.service.getCountryMobileCode().subscribe(function (res) {
            if (res['status'] == '1') {
                console.log("api response", res);
                _this.country_Obj = res['data'];
                console.log("countryyyyyyyyyyyyy", _this.country_Obj);
            }
        });
    };
    /*==========  Country Code for Mobile End Here========*/
    /*========== Edit Input Value Start Here========*/
    InterpreterEditComponent.prototype.patchValue = function () {
        // this.userEditForm.get('user_role').patchValue( this.json_Obj.role_id);
        this.userEditForm.get('email').patchValue(this.json_Obj.email);
        this.userEditForm.get('first_name').patchValue(this.json_Obj.first_name);
        this.userEditForm.get('last_name').patchValue(this.json_Obj.last_name);
        this.userEditForm.get('apartment').patchValue(this.json_Obj.apartment);
        // this.userEditForm.get('street').patchValue( this.json_Obj.street);
        this.userEditForm.get('mobile').patchValue(this.json_Obj.mobile);
        this.userEditForm.get('country_code').patchValue(this.json_Obj.country_code);
        this.userEditForm.get('address').patchValue(this.json_Obj.address);
        this.userEditForm.get('latitude').patchValue(this.json_Obj.latitude);
        this.userEditForm.get('longitude').patchValue(this.json_Obj.longitude);
        //let itemsAsObjects = [{id: 0, display: 'Angular'}, {id: 1, display: 'React'}];
        this.userEditForm.get('languageid').patchValue(this.json_Obj.interLanguage);
        this.userEditForm.get('primary_lang_id').patchValue(this.json_Obj.primary_lang_id);
        this.userEditForm.get('gender').patchValue(this.json_Obj.gender);
        if (this.json_Obj.gender == 'Other') {
            this.editShowOther = true;
            this.userEditForm.get('other_gender').patchValue(this.json_Obj.other_gender);
        }
        this.userEditForm.get('rate').patchValue(this.json_Obj.interpreter_rate);
    };
    InterpreterEditComponent.prototype.editUser = function () {
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
    /*==========Single Image Function Start Here========*/
    InterpreterEditComponent.prototype.onSingleFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
    };
    /*==========Single Image Function End Here========*/
    /*==========Edit Input Value End Here========*/
    InterpreterEditComponent.prototype.submitUser = function () {
        var _this = this;
        this.submitted = true;
        if (this.userEditForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        formData.append('first_name', this.userEditForm.value.first_name);
        formData.append('last_name', this.userEditForm.value.last_name);
        formData.append('email', this.userEditForm.value.email);
        formData.append('mobile', this.userEditForm.value.mobile);
        formData.append('address', this.new_address);
        formData.append('apartment', this.userEditForm.value.apartment);
        // formData.append('street', this.userEditForm.value.street);
        formData.append('gender', this.userEditForm.value.gender);
        formData.append('other_gender', this.userEditForm.value.other_gender);
        formData.append('latitude', this.latitude);
        formData.append('longitude', this.longitude);
        formData.append('languageid', this.userEditForm.value.languageid);
        formData.append('id', this.json_Obj.id);
        formData.append('primary_lang_id', this.newlanguageVal);
        formData.append('rate', this.userEditForm.value.rate);
        formData.append('image', this.selectedFile);
        formData.append('country_code', this.userEditForm.value.country_code);
        console.log("user value-", this.userEditForm.value.id);
        this.service.updateInterpreter(formData).subscribe(function (res) {
            _this.useredit_Msg = res;
            if (res['status'] == 1) {
                _this.useredit_Obj = res;
                console.log("api response", _this.useredit_Obj);
                _this.toastr.success(_this.useredit_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.router.navigate(['/interpreter/interpreter-list']);
            }
            else {
                _this.toastr.error(_this.useredit_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.router.navigate(['/interpreter/interpreter-list']);
            }
        });
    };
    InterpreterEditComponent.prototype.LanguageList = function () {
        var _this = this;
        this.service.getLanguageList()
            .subscribe(function (res) {
            if (res['status'] == 1) {
                _this.language_Obj = res['data'];
            }
            else {
                _this.toastr.success(_this.useredit_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.router.navigate(['/interpreter/interpreter-list']);
            }
        });
    };
    InterpreterEditComponent.prototype.userRoleList = function () {
        var _this = this;
        this.service.roleList()
            .subscribe(function (res) {
            _this.role_Obj = res['data'];
        });
    };
    InterpreterEditComponent.prototype.onChange = function (id) {
        this.newlanguageVal = id.target.value;
        console.log("newlanguageVal", this.newlanguageVal);
    };
    // Get Current Location Coordinates
    InterpreterEditComponent.prototype.setCurrentLocation = function () {
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
    InterpreterEditComponent.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    InterpreterEditComponent.prototype.getAddress = function (latitude, longitude) {
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
    // Radio button function
    InterpreterEditComponent.prototype.radioButton1 = function () {
        this.editShowOther = false;
    };
    InterpreterEditComponent.prototype.radioButton2 = function () {
        this.editShowOther = false;
    };
    InterpreterEditComponent.prototype.radioButton3 = function () {
        this.editShowOther = true;
    };
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], InterpreterEditComponent.prototype, "searchElementRef", void 0);
    InterpreterEditComponent = __decorate([
        Component({
            selector: 'app-interpreter-edit',
            templateUrl: './interpreter-edit.component.html',
            styleUrls: ['./interpreter-edit.component.scss']
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
    ], InterpreterEditComponent);
    return InterpreterEditComponent;
}());
export { InterpreterEditComponent };
//# sourceMappingURL=interpreter-edit.component.js.map