var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
let AdminProfileComponent = /** @class */ (() => {
    let AdminProfileComponent = class AdminProfileComponent {
        constructor(validation, fb, toastr, router, service) {
            this.validation = validation;
            this.fb = fb;
            this.toastr = toastr;
            this.router = router;
            this.service = service;
            this.selectedFile = null;
            this.url = '';
        }
        ngOnInit() {
            this.createForm();
            this.editdata = JSON.parse(localStorage.getItem('loginData'));
            console.log("data", this.editdata);
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.patchValue();
            this.CountryList();
        }
        /*========== Form Value Start Here========*/
        createForm() {
            this.adminProfileForm = this.fb.group({
                first_name: ['', this.validation.name_validation],
                last_name: ['', this.validation.name_validation],
                // name: ['',this.validation.name_validation],
                mobile: ['', this.validation.mobile_validator],
                email: [''],
                user_id: [''],
                address: ['', this.validation.onlyRequired_validator],
                image: [''],
                country_code: ['', this.validation.onlyRequired_validator]
            });
        }
        /*========== Form Value End Here========*/
        /*========== Edit Input Value Start Here========*/
        patchValue() {
            this.adminProfileForm.get('first_name').patchValue(this.editdata.first_name);
            this.adminProfileForm.get('last_name').patchValue(this.editdata.last_name);
            this.adminProfileForm.get('mobile').patchValue(this.editdata.mobile);
            this.adminProfileForm.get('email').patchValue(this.editdata.email);
            this.adminProfileForm.get('address').patchValue(this.editdata.address);
            this.adminProfileForm.get('country_code').patchValue(this.editdata.country_code);
        }
        /*==========Edit Input Value End Here========*/
        /*========== Country Code for Mobile Start Here========*/
        CountryList() {
            this.service.getCountryMobileCode().subscribe(res => {
                if (res['status'] == '1') {
                    console.log("api response", res);
                    this.country_Obj = res['data'];
                    console.log("countryyyyyyyyyyyyy", this.country_Obj);
                }
            });
        }
        /*==========  Country Code for Mobile End Here========*/
        /*==========Single Image Function Start Here========*/
        onSingleFileChange(event) {
            // this.selectedFile = <File>event.target.files[0]
            let file = event.target.files[0];
            this.selectedFile = file;
            console.log("imagesss", this.selectedFile);
            //   if (event.target.files && event.target.files[0]) {
            //    var reader = new FileReader();
            //    reader.readAsDataURL(event.target.files[0]); // read file as data url
            //    reader.onload = (event) => { // called once readAsDataURL is completed
            //      this.url = event.target.result;
            //      console.log("lllllllllllllllllllll", this.url);
            //    }
            //  } 
        }
        /*==========Single Image Function End Here========*/
        admin_profile() {
            console.log("form value", this.adminProfileForm.value);
            this.submitted = true;
            if (this.adminProfileForm.invalid) {
                return;
            }
            this.submitted = false;
            const formData = new FormData();
            this.adminProfileForm.value.image = this.selectedFile;
            this.adminProfileForm.value.user_id = this.userId;
            formData.append('first_name', this.adminProfileForm.value.first_name);
            formData.append('last_name', this.adminProfileForm.value.last_name);
            formData.append('user_id', this.adminProfileForm.value.user_id);
            formData.append('mobile', this.adminProfileForm.value.mobile);
            formData.append('address', this.adminProfileForm.value.address);
            formData.append('country_code', this.adminProfileForm.value.country_code);
            formData.append('image', this.selectedFile);
            console.log("oooooooooooooooo", formData);
            this.service.getProfileUpadte(formData)
                .subscribe(res => {
                if (res['status'] == '1') {
                    this.log_Obj = res['data'][0];
                    localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                    this.admin_Obj = res;
                    this.admin_Msg = res;
                    this.toastr.success(this.admin_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                }
                else {
                    this.admin_Msg = res;
                    this.toastr.success(this.admin_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                }
            });
        }
    };
    AdminProfileComponent = __decorate([
        Component({
            selector: 'app-admin-profile',
            templateUrl: './admin-profile.component.html',
            styleUrls: ['./admin-profile.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], AdminProfileComponent);
    return AdminProfileComponent;
})();
export { AdminProfileComponent };
//# sourceMappingURL=admin-profile.component.js.map