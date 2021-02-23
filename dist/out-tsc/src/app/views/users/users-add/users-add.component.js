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
let UsersAddComponent = /** @class */ (() => {
    let UsersAddComponent = class UsersAddComponent {
        constructor(validation, fb, toastr, router, func, dl, service, mapsAPILoader, ngZone) {
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
        ngOnInit() {
            this.createForm();
            this.LanguageList();
            this.userRoleList();
            //load Places Autocomplete
            // this.mapsAPILoader.load().then(() => {
            //     this.setCurrentLocation();
            //     this.geoCoder = new google.maps.Geocoder;
            //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
            //     autocomplete.addListener("place_changed", () => {
            //         this.ngZone.run(() => {
            //             //get the place result
            //             let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            //             this.new_address = place['formatted_address'];
            //             //verify result
            //             if (place.geometry === undefined || place.geometry === null) {
            //                 return;
            //             }
            //             // console.log("place-",place[0].formatted_address);
            //             //set latitude, longitude and zoom
            //             this.latitude = place.geometry.location.lat();
            //             this.longitude = place.geometry.location.lng();
            //             // console.log("latitude-",this.latitude);
            //             // console.log("longitude-",this.longitude);
            //             this.zoom = 12;
            //         });
            //     });
            // });
        }
        onChange(id) {
            this.newlanguageVal = id.target.value;
            console.log("iddddddddddd", this.newlanguageVal);
        }
        onChangeRole(id) {
            this.newrole = id.target.value;
            console.log("iddddddddddd", this.newrole);
        }
        onSelect(item) {
            console.log('tag selected: value is' + item);
        }
        /*========== Form Value Start Here========*/
        createForm() {
            this.userForm = this.fb.group({
                id: [''],
                first_name: ['', this.validation.name_validation],
                last_name: ['', this.validation.name_validation],
                email: ['', this.validation.onlyRequired_validator],
                password: ['', this.validation.onlyRequired_validator],
                mobile: ['', this.validation.onlyRequired_validator],
                // address: ['', this.validation.onlyRequired_validator],
                // apartment:['', this.validation.onlyRequired_validator],
                // street:['', this.validation.onlyRequired_validator],
                // gender: ['', this.validation.onlyRequired_validator],
                // languageid: [''],
                // latitude: [''],
                // longitude: [''],
                // primary_language: ['', this.validation.onlyRequired_validator],
                user_role: ['', this.validation.onlyRequired_validator],
            });
        }
        /*========== Form Value End Here========*/
        saveUser() {
            this.submitted = true;
            if (this.userForm.invalid) {
                return;
            }
            this.submitted = false;
            this.service.post('add-edit-user', this.userForm.value)
                .subscribe(res => {
                if (res['status'] == true) {
                    this.toastr.success(res['msg'], '', { timeOut: 1000 });
                    this.router.navigateByUrl('/sessions/signin', { skipLocationChange: true }).then(() => {
                        this.router.navigate(['/users/user-list/' + this.userForm.value.user_role]);
                    });
                    // location.reload();
                }
                else {
                    this.toastr.warning(res['msg'], '', { timeOut: 1000 });
                }
            });
        }
        LanguageList() {
            this.service.getLanguageList()
                .subscribe(res => {
                // console.log("api response",res);
                this.language_Obj = res['data'];
                console.log("my testing", this.language_Obj);
            });
        }
        userRoleList() {
            this.service.roleList()
                .subscribe(res => {
                // console.log("api response",res);
                this.role_Obj = res['data'];
                console.log("my testing", this.role_Obj);
            });
        }
        checkEmail($event, email) {
            console.log("email-", email);
            // console.log("event-",$event)
            this.service.checkUserEmail(email)
                .subscribe(res => {
                if (res['status'] == '1') {
                    this.toastr.warning(res['message']);
                    // this.userForm.value.email = '';
                    $event.target.value = "";
                }
            });
        }
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
})();
export { UsersAddComponent };
//# sourceMappingURL=users-add.component.js.map