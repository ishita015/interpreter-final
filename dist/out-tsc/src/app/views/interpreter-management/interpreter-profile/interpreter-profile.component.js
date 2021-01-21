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
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
var InterpreterProfileComponent = /** @class */ (function () {
    function InterpreterProfileComponent(validation, fb, toastr, router, service) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
        this.items = ['Javascript', 'Typescript'];
        this.tagsCtrl1 = new FormControl(this.items);
        this.tagsCtrl2 = new FormControl([]);
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = false;
        this.selectedFile = null;
        this.communityinter = false;
        this.conferenceinter = false;
        this.courtcertified = false;
        this.court_open = false;
        this.credent_open = false;
        this.equipment_open = false;
        this.legal_open = false;
        this.simult_open = false;
        this.other_open = false;
    }
    InterpreterProfileComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.createForm2();
        this.commForm();
        this.languageForm();
        this.conForm();
        this.couForm();
        this.creForm();
        this.eqpForm();
        this.legForm();
        this.simForm();
        this.othForm();
        this.LanguageList();
        this.interId = JSON.parse(localStorage.getItem('interpreterId'));
        console.log("iddd", this.interId);
        this.detailProfile();
    };
    /*========== Form Value Start Here========*/
    InterpreterProfileComponent.prototype.createForm = function () {
        this.bankingForm = this.fb.group({
            account_no: ['', this.validation.onlyRequired_validator],
            country: ['', this.validation.onlyRequired_validator],
            financial_institution: ['', this.validation.onlyRequired_validator],
            payment_benificiary: ['', this.validation.onlyRequired_validator],
            payment_method: ['', this.validation.onlyRequired_validator],
            routing_number: ['', this.validation.onlyRequired_validator],
            SWIFT_code: ['', this.validation.onlyRequired_validator],
            fusion_id: ['', this.validation.onlyRequired_validator],
            site_code: ['', this.validation.onlyRequired_validator],
            site_id: ['', this.validation.onlyRequired_validator],
            user_id: []
        });
    };
    /*========== Form Value End Here========*/
    /*========== Form2 Value Start Here========*/
    InterpreterProfileComponent.prototype.createForm2 = function () {
        this.Profile = this.fb.group({
            payment_mode: ['', this.validation.onlyRequired_validator],
            service_type: ['', this.validation.onlyRequired_validator],
            duration: ['', this.validation.onlyRequired_validator],
            cases: ['', this.validation.onlyRequired_validator],
            subcases: ['', this.validation.onlyRequired_validator],
            minimum_paid: ['', this.validation.onlyRequired_validator],
            pay_increment: ['', this.validation.onlyRequired_validator],
        });
    };
    /*========== Form2 Value End Here========*/
    /*==========assignment setting Form2 start Here========*/
    InterpreterProfileComponent.prototype.submit_form1 = function () {
        console.log("form value", this.Profile.value);
        this.submitted = true;
        if (this.Profile.invalid) {
            return;
        }
        this.submitted = false;
        // this.service.getInterpreterProfileAdd(this.Profile.value)
        // .subscribe(res => {
        //   if(res['status']== 1){
        //     console.log("api response",res);
        //     this.ass_Obj = res
        //   }else{
        //     console.log("api response",res);
        //     this.ass_Obj = res
        //   }
        //  });
    };
    /*==========assignment setting Form2 end Here========*/
    /*========== Add Api Start Here========*/
    InterpreterProfileComponent.prototype.addProfile = function () {
        var _this = this;
        console.log("form value", this.bankingForm.value);
        this.submitted = true;
        if (this.bankingForm.invalid) {
            return;
        }
        this.submitted = false;
        this.bankingForm.value.user_id = this.interId;
        this.service.getBankingAdd(this.bankingForm.value)
            .subscribe(function (res) {
            if (res['status'] == 1) {
                console.log("api response", res);
                _this.banking_Obj = res;
                _this.banking_Msg = res;
                _this.toastr.success(_this.banking_Msg.message, '', { timeOut: 1000 });
                // this.router.navigate(['/languages/list']);  
            }
            else {
                console.log("api response", res);
                _this.banking_Obj = res;
                _this.banking_Msg = res;
                _this.toastr.success(_this.banking_Msg.message, '', { timeOut: 1000 });
                // this.router.navigate(['/login'])
                // this.router.navigate(['/languages/list']);  
            }
        });
    };
    InterpreterProfileComponent.prototype.detailProfile = function () {
        var _this = this;
        this.service.getProfileDetail(this.interId)
            .subscribe(function (res) {
            if (res['status'] == 1) {
                _this.detail_Obj = res['data'][0];
            }
            else {
                console.log("api response", res);
                _this.detail_Obj = res;
            }
        });
    };
    InterpreterProfileComponent.prototype.check1 = function () {
        this.check_form1 = true;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = false;
    };
    InterpreterProfileComponent.prototype.check2 = function () {
        this.check_form1 = false;
        this.check_form2 = true;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = false;
    };
    InterpreterProfileComponent.prototype.check3 = function () {
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = true;
        this.check_form4 = false;
        this.check_form5 = false;
    };
    InterpreterProfileComponent.prototype.check4 = function () {
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = true;
        this.check_form5 = false;
    };
    InterpreterProfileComponent.prototype.check5 = function () {
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = true;
    };
    //gokul code start  -------interpreter skills---------
    //get language list
    InterpreterProfileComponent.prototype.LanguageList = function () {
        var _this = this;
        this.service.getLanguageList().subscribe(function (res) {
            if (res['status'] == '1') {
                _this.language_Obj = res['data'];
                console.log("my testing", _this.language_Obj);
            }
        });
    };
    //get primary language id
    InterpreterProfileComponent.prototype.onChange = function (id) {
        this.priLanguageId = id.target.value;
        console.log("pri-lang", this.priLanguageId);
    };
    InterpreterProfileComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is' + item);
    };
    InterpreterProfileComponent.prototype.communityShow = function () {
        this.communityinter = true;
    };
    InterpreterProfileComponent.prototype.conferenceShow = function () {
        this.conferenceinter = true;
    };
    InterpreterProfileComponent.prototype.certifiedShow = function () {
        this.court_open = true;
    };
    InterpreterProfileComponent.prototype.courtShow = function () {
        this.credent_open = true;
    };
    InterpreterProfileComponent.prototype.qualifiedShow = function () {
        this.equipment_open = true;
    };
    InterpreterProfileComponent.prototype.legalShow = function () {
        this.legal_open = true;
    };
    InterpreterProfileComponent.prototype.simultShow = function () {
        this.simult_open = true;
    };
    InterpreterProfileComponent.prototype.othShow = function () {
        this.other_open = true;
    };
    InterpreterProfileComponent.prototype.setCheck = function (event, eve_key) {
        //Community Interpreting
        if (eve_key == '1') {
            if (event.target.checked) {
                this.communityinter = true;
            }
            else {
                this.communityinter = false;
            }
        }
        if (eve_key == '2') {
            if (event.target.checked) {
                this.conferenceinter = true;
            }
            else {
                this.conferenceinter = false;
            }
        }
        if (eve_key == '3') {
            if (event.target.checked) {
                this.court_open = true;
            }
            else {
                this.court_open = false;
            }
        }
        if (eve_key == '4') {
            if (event.target.checked) {
                this.credent_open = true;
            }
            else {
                this.credent_open = false;
            }
        }
        if (eve_key == '5') {
            if (event.target.checked) {
                this.equipment_open = true;
            }
            else {
                this.equipment_open = false;
            }
        }
        if (eve_key == '6') {
            if (event.target.checked) {
                this.legal_open = true;
            }
            else {
                this.legal_open = false;
            }
        }
        if (eve_key == '7') {
            if (event.target.checked) {
                this.simult_open = true;
            }
            else {
                this.simult_open = false;
            }
        }
        if (eve_key == '8') {
            if (event.target.checked) {
                this.other_open = true;
            }
            else {
                this.other_open = false;
            }
        }
    };
    InterpreterProfileComponent.prototype.languageForm = function () {
        this.langForm = this.fb.group({
            interpreter_id: [''],
            primary_language: [''],
            secondary_language: [''],
        });
    };
    InterpreterProfileComponent.prototype.add_language = function () {
        console.log("form value", this.langForm.value);
        this.submitted = true;
        if (this.langForm.invalid) {
            return;
        }
        this.submitted = false;
        this.langForm.value.interpreter_id = this.interId;
        this.service.interpreterLanguage(this.langForm.value)
            .subscribe(function (res) {
            if (res['status'] == '1') {
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                // this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
                // this.adminProfileForm.reset();
            }
            // else{
            //   console.log("api response",res);
            //   this.admin_Obj = res;
            //   this.admin_Msg = res;
            //   this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
            //   // this.router.navigate(['/languages/list']);  
            // }
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.onSingleFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_community();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_community = function () {
        var _this = this;
        console.log("form value", this.communityForm.value);
        this.submitted = true;
        if (this.communityForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.communityForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '1');
        formData.append('documents', this.selectedFile);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.commForm = function () {
        this.communityForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.selectFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_conference();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_conference = function () {
        var _this = this;
        console.log("form value", this.conferenceForm.value);
        this.submitted = true;
        if (this.conferenceForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.conferenceForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '2');
        formData.append('documents', this.selectedFile);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.conForm = function () {
        this.conferenceForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.selectcourtFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_court();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_court = function () {
        var _this = this;
        console.log("form value", this.courtForm.value);
        this.submitted = true;
        if (this.courtForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.courtForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '3');
        formData.append('documents', this.selectedFile);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.couForm = function () {
        this.courtForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.selectcredentialedFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_credentialed();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_credentialed = function () {
        var _this = this;
        console.log("form value", this.credentialedForm.value);
        this.submitted = true;
        if (this.credentialedForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.credentialedForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '4');
        formData.append('documents', this.selectedFile);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.creForm = function () {
        this.credentialedForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.qualifiedFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_qualified();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_qualified = function () {
        var _this = this;
        console.log("form value", this.equipmentForm.value);
        this.submitted = true;
        if (this.equipmentForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.equipmentForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '5');
        formData.append('documents', this.selectedFile);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.eqpForm = function () {
        this.equipmentForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.legalFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_legal();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_legal = function () {
        var _this = this;
        console.log("form value", this.legalForm.value);
        this.submitted = true;
        if (this.legalForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.legalForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '6');
        formData.append('documents', this.selectedFile);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.legForm = function () {
        this.legalForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.simultFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_simultaneous();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_simultaneous = function () {
        var _this = this;
        console.log("form value", this.simultaneousForm.value);
        this.submitted = true;
        if (this.simultaneousForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.simultaneousForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '7');
        formData.append('documents', this.selectedFile);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.simForm = function () {
        this.simultaneousForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
        });
    };
    /*==========Single Image Function Start Here========*/
    InterpreterProfileComponent.prototype.otherFileChange = function (event) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.upload_other();
    };
    /*==========Single Image Function End Here========*/
    InterpreterProfileComponent.prototype.upload_other = function () {
        var _this = this;
        console.log("form value", this.otherForm.value);
        this.submitted = true;
        if (this.otherForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.otherForm.value.documents = this.selectedFile;
        // this.communityForm.value.interpreter_id = this.interId; 
        formData.append('interpreter_id', this.interId);
        formData.append('doc_type', '8');
        formData.append('documents', this.selectedFile);
        formData.append('other_doc_title', this.otherForm.value.other);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            if (res['status'] == '1') {
                // this.log_Obj = res['data'][0];
                // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                // this.admin_Obj = res;
                // this.admin_Msg = res;
                _this.toastr.success(res['message'].message, '', { timeOut: 1000 });
            }
            else {
                // this.admin_Msg = res;
                _this.toastr.error(res['message'].message, '', { timeOut: 1000 });
            }
        });
    };
    InterpreterProfileComponent.prototype.othForm = function () {
        this.otherForm = this.fb.group({
            interpreter_id: [''],
            documents: [''],
            other: [''],
        });
    };
    InterpreterProfileComponent = __decorate([
        Component({
            selector: 'app-interpreter-profile',
            templateUrl: './interpreter-profile.component.html',
            styleUrls: ['./interpreter-profile.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], InterpreterProfileComponent);
    return InterpreterProfileComponent;
}());
export { InterpreterProfileComponent };
//# sourceMappingURL=interpreter-profile.component.js.map