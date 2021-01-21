var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader } from '@agm/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var InterpreterProfileInformationComponent = /** @class */ (function () {
    function InterpreterProfileInformationComponent(validation, fb, toastr, router, modalService, ngZone, mapsAPILoader, service, http) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.mapsAPILoader = mapsAPILoader;
        this.service = service;
        this.http = http;
        this.showArroveBtn = 0;
        this.on_site_language_btn = 0;
        this.opi_language_btn = 0;
        this.vri_language_btn = 0;
        this.vci_language_btn = 0;
        this.rsi_language_btn = 0;
        this.vci_opi_language_btn = 0;
        this.documentUrl = environment.documentUrl;
        this.files = [];
        this.doc = [];
        this.lang = [];
        this.selectedFile = null;
        this.items = ['Javascript', 'Typescript'];
        this.tagsCtrl1 = new FormControl(this.items);
        this.tagsCtrl2 = new FormControl([]);
        //assignment form variable declare
        this.onsiteInfo = false;
        this.opiInfo = false;
        this.vriInfo = false;
        this.vclInfo = false;
        this.rsiInfo = false;
        this.vci_opi = false;
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = false;
        this.communityinter = false;
        this.conferenceinter = false;
        this.courtcertified = false;
        this.court_open = false;
        this.credent_open = false;
        this.equipment_open = false;
        this.legal_open = false;
        this.simult_open = false;
        this.other_open = false;
        this.ci = false;
        this.cfi = false;
        this.cc = false;
        this.co = false;
        this.cto = false;
        this.eo = false;
        this.lo = false;
        this.so = false;
        this.oo = false;
        // show/hide form
        this.general_form = true; //bydefault set
        this.skills_form = false;
        this.assignment_form = false;
        this.banking_form = false;
        this.showOther = false;
        // ein radio button variable
        this.einshowInput = false;
        this.ssnshowInput = false;
        /*==========  City Code for Mobile End Here========*/
        this.UserLangData = [];
        this.on_site_language = 0;
        this.opi_language = 0;
        this.vri_language = 0;
        this.vci_language = 0;
        this.rsi_language = 0;
        this.vci_opi_language = 0;
        this.assignmentForm = this.fb.group({
            assignment: this.fb.array([this.assignmentGroup()]),
            assignment_opi: this.fb.array([this.opiAssignmentGroup()]),
            assignment_vri: this.fb.array([this.vriAssignmentGroup()]),
            assignment_vcl: this.fb.array([this.vclAssignmentGroup()]),
            assignment_rsi: this.fb.array([this.rsiAssignmentGroup()]),
            assignment_vci_opi: this.fb.array([this.vci_opiAssignmentGroup()])
        });
        this.role_id = JSON.parse(localStorage.getItem('roleId'));
    }
    InterpreterProfileInformationComponent.prototype.ngOnInit = function () {
        // this.addBankInfo(); // add bank details
        var _this = this;
        this.skillsForm();
        this.updateGeneralInfo();
        this.countryList();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log('place', place);
                    _this.new_address = place['formatted_address'];
                    _this.sec_address = place['formatted_address'];
                    console.log("addresss", _this.new_address);
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
        this.LanguageList();
        this.interId = JSON.parse(localStorage.getItem('userId')); //interpreter id
        this.detailProfile();
        this.createForm2();
        this.getUserLanguage();
    };
    /*========== Bank Routing Value Start Here========*/
    InterpreterProfileInformationComponent.prototype.createForm2 = function () {
        this.bankingRoutingForm = this.fb.group({
            // customer_name: [''],
            // address: [''],
            // routing_number:[''],
            bank_name: ['', this.validation.onlyRequired_validator],
            account_type: ['', this.validation.onlyRequired_validator],
            bank_country: ['', this.validation.onlyRequired_validator],
            account_no: ['', this.validation.onlyRequired_validator],
            bank_routing_no: ['', this.validation.onlyRequired_validator],
            payment_method: ['', this.validation.onlyRequired_validator],
            electronic: ['', this.validation.onlyRequired_validator],
            SWIFT_code: ['', this.validation.onlyRequired_validator],
            bank_address: ['', this.validation.onlyRequired_validator],
            paypal_id: ['', this.validation.onlyRequired_validator]
        });
    };
    /*========== Bank Routing Value End Here========*/
    /*========== Add Api Start Here========*/
    InterpreterProfileInformationComponent.prototype.onCountryChange = function (id) {
        this.country_id = id.target.value;
        this.StateList(this.country_id);
    };
    InterpreterProfileInformationComponent.prototype.onStateChange = function (id) {
        this.state_id = id.target.value;
        this.CityList(this.state_id);
    };
    InterpreterProfileInformationComponent.prototype.onCityChange = function (id) {
        this.city_id = id.target.value;
        this.CityList(id.target.value);
    };
    /*========== Country Code for Mobile Start Here========*/
    InterpreterProfileInformationComponent.prototype.countryList = function () {
        var _this = this;
        this.service.getCountryMobileCode().subscribe(function (res) {
            if (res['status'] == '1') {
                _this.country_Obj = res['data'];
            }
        });
    };
    /*==========  Country Code for Mobile End Here========*/
    /*========== State Code for Mobile Start Here========*/
    InterpreterProfileInformationComponent.prototype.StateList = function (country_id) {
        var _this = this;
        if (this.country_id) {
            this.service.getStateCode(this.country_id).subscribe(function (res) {
                if (res['status'] == '1') {
                    _this.state_Obj = res['data'];
                    _this.timezone_Obj = res['timeZoneData']['timezones'];
                }
            });
        }
        else {
            this.service.getStateCode(country_id).subscribe(function (res) {
                if (res['status'] == '1') {
                    _this.state_Obj = res['data'];
                    _this.timezone_Obj = res['timeZoneData']['timezones'];
                }
            });
        }
    };
    /*==========  State Code for Mobile End Here========*/
    /*========== City Code for Mobile Start Here========*/
    InterpreterProfileInformationComponent.prototype.CityList = function (state_id) {
        var _this = this;
        if (this.state_id) {
            this.service.getCityCode(this.state_id).subscribe(function (res) {
                if (res['status'] == '1') {
                    _this.city_Obj = res['data'];
                }
            });
        }
        else {
            this.service.getCityCode(state_id).subscribe(function (res) {
                if (res['status'] == '1') {
                    _this.city_Obj = res['data'];
                }
            });
        }
    };
    InterpreterProfileInformationComponent.prototype.getUserLanguage = function () {
        var _this = this;
        this.service.getUserLanguage(this.interId).subscribe(function (res) {
            _this.UserLangData = res['data'];
        });
    };
    InterpreterProfileInformationComponent.prototype.addLanguageOnAssignment = function (type, val) {
        if (type == 'on_site') {
            this.on_site_language = val;
        }
        if (type == 'opi') {
            this.opi_language = val;
        }
        if (type == 'vri') {
            this.vri_language = val;
        }
        if (type == 'vci') {
            this.vci_language = val;
        }
        if (type == 'rsi') {
            this.rsi_language = val;
        }
        if (type == 'vci_opi') {
            this.vci_opi_language = val;
        }
    };
    InterpreterProfileInformationComponent.prototype.check1 = function () {
        this.check_form1 = true;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = false;
    };
    InterpreterProfileInformationComponent.prototype.check2 = function () {
        this.check_form1 = false;
        this.check_form2 = true;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = false;
    };
    InterpreterProfileInformationComponent.prototype.check3 = function () {
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = true;
        this.check_form4 = false;
        this.check_form5 = false;
    };
    InterpreterProfileInformationComponent.prototype.check4 = function () {
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = true;
        this.check_form5 = false;
    };
    InterpreterProfileInformationComponent.prototype.check5 = function () {
        this.check_form1 = false;
        this.check_form2 = false;
        this.check_form3 = false;
        this.check_form4 = false;
        this.check_form5 = true;
    };
    //gokul code start  ------interpreter skills-------
    // ==============================get language list============================ //
    InterpreterProfileInformationComponent.prototype.LanguageList = function () {
        var _this = this;
        this.service.getLanguageList().subscribe(function (res) {
            if (res['status'] == '1') {
                _this.language_Obj = res['data'];
            }
        });
    };
    //get primary language id
    InterpreterProfileInformationComponent.prototype.onChange = function (id) {
        this.priLanguageId = id.target.value;
    };
    InterpreterProfileInformationComponent.prototype.onSelect = function (item) {
        for (var i = 0; i < item; i++) {
            this.lang.push(item[i]);
        }
    };
    InterpreterProfileInformationComponent.prototype.communityShow = function () {
        this.communityinter = true;
    };
    InterpreterProfileInformationComponent.prototype.conferenceShow = function () {
        this.conferenceinter = true;
    };
    InterpreterProfileInformationComponent.prototype.certifiedShow = function () {
        this.court_open = true;
    };
    InterpreterProfileInformationComponent.prototype.courtShow = function () {
        this.credent_open = true;
    };
    InterpreterProfileInformationComponent.prototype.qualifiedShow = function () {
        this.equipment_open = true;
    };
    InterpreterProfileInformationComponent.prototype.legalShow = function () {
        this.legal_open = true;
    };
    InterpreterProfileInformationComponent.prototype.simultShow = function () {
        this.simult_open = true;
    };
    InterpreterProfileInformationComponent.prototype.othShow = function () {
        this.other_open = true;
    };
    InterpreterProfileInformationComponent.prototype.setCheck = function (event, eve_key) {
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
    //====================gokul code end==========================//
    InterpreterProfileInformationComponent.prototype.banking = function () {
        this.general_form = false;
        this.skills_form = false;
        this.assignment_form = false;
        this.banking_form = true;
    };
    InterpreterProfileInformationComponent.prototype.assignment = function () {
        this.general_form = false;
        this.skills_form = false;
        this.assignment_form = true;
        this.banking_form = false;
    };
    InterpreterProfileInformationComponent.prototype.skills = function () {
        this.general_form = false;
        this.skills_form = true;
        this.assignment_form = false;
        this.banking_form = false;
    };
    InterpreterProfileInformationComponent.prototype.general = function () {
        this.general_form = true;
        this.skills_form = false;
        this.assignment_form = false;
        this.banking_form = false;
    };
    /*====================== interpreter general information view and edit  bankingForm ==============*/
    InterpreterProfileInformationComponent.prototype.patchValue = function () {
        this.generalForm.get('title').patchValue(this.detail_Obj.title);
        this.generalForm.get('email').patchValue(this.detail_Obj.email);
        this.generalForm.get('first_name').patchValue(this.detail_Obj.first_name);
        this.generalForm.get('last_name').patchValue(this.detail_Obj.last_name);
        // this.generalForm.get('apartment').patchValue( this.detail_Obj.apartment);
        // this.generalForm.get('middle_name').patchValue( this.detail_Obj.middle_name);
        this.generalForm.get('nick_name').patchValue(this.detail_Obj.nick_name);
        this.generalForm.get('mobile').patchValue(this.detail_Obj.mobile);
        this.generalForm.get('country_code').patchValue(this.detail_Obj.country_code);
        this.generalForm.get('address').patchValue(this.detail_Obj.address);
        this.generalForm.get('dob').patchValue(this.detail_Obj.date_of_birth);
        this.generalForm.get('international_phone_no').patchValue(this.detail_Obj.international_phone_no);
        this.generalForm.get('country').patchValue(this.detail_Obj.country);
        this.generalForm.get('state').patchValue(this.detail_Obj.state);
        if (this.detail_Obj.gender == "Other") {
            this.showOther = true;
            this.generalForm.get('gender').patchValue(this.detail_Obj.gender);
        }
        this.generalForm.get('city').patchValue(this.detail_Obj.city);
        this.generalForm.get('zipCode').patchValue(this.detail_Obj.zipCode);
        this.generalForm.get('timezone').patchValue(this.detail_Obj.timezone);
        this.generalForm.get('other_gender').patchValue(this.detail_Obj.other_gender);
        this.generalForm.get('company_name').patchValue(this.detail_Obj.company_name);
        if (this.detail_Obj.social_security_no == "EIN") {
            this.einshowInput = true;
            this.generalForm.get('social_security_no').patchValue(this.detail_Obj.social_security_no);
        }
        else {
            this.ssnshowInput = true;
            this.generalForm.get('social_security_no').patchValue(this.detail_Obj.social_security_no);
        }
        this.generalForm.get('ssn').patchValue(this.detail_Obj.ssn);
        this.generalForm.get('ein').patchValue(this.detail_Obj.ein);
        this.bankingRoutingForm.get('bank_name').patchValue(this.detail_Obj.bank_name);
        this.bankingRoutingForm.get('account_type').patchValue(this.detail_Obj.account_type);
        this.bankingRoutingForm.get('bank_country').patchValue(this.detail_Obj.bank_country);
        this.bankingRoutingForm.get('account_no').patchValue(this.detail_Obj.account_no);
        this.bankingRoutingForm.get('bank_routing_no').patchValue(this.detail_Obj.bank_routing_no);
        this.bankingRoutingForm.get('payment_method').patchValue(this.detail_Obj.payment_method);
        this.bankingRoutingForm.get('electronic').patchValue(this.detail_Obj.electronic);
        this.bankingRoutingForm.get('SWIFT_code').patchValue(this.detail_Obj.SWIFT_code);
        this.bankingRoutingForm.get('bank_address').patchValue(this.detail_Obj.bank_address);
        this.bankingRoutingForm.get('paypal_id').patchValue(this.detail_Obj.paypal_id);
        this.interpreterSkillForm.get('primary_language').patchValue(this.detail_Obj.primay_lang_id);
        this.interpreterSkillForm.get('secondary_language').patchValue(this.detail_Obj.secondary_language);
    };
    InterpreterProfileInformationComponent.prototype.updateGeneralInfo = function () {
        this.generalForm = this.fb.group({
            title: ['',],
            first_name: ['', this.validation.onlyRequired_validator],
            last_name: ['', this.validation.onlyRequired_validator],
            email: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            international_phone_no: [''],
            // username: [''],
            dob: ['', this.validation.onlyRequired_validator],
            country_code: ['', this.validation.onlyRequired_validator],
            address: ['', this.validation.onlyRequired_validator],
            // address: [''],
            company_name: [''],
            social_security_no: [''],
            // apartment:['', this.validation.onlyRequired_validator],
            gender: [''],
            latitude: [''],
            longitude: [''],
            nick_name: [''],
            // middle_name: ['', this.validation.onlyRequired_validator],
            country: [''],
            city: [''],
            state: [''],
            zipCode: [''],
            timezone: [''],
            image: [''],
            other_gender: [''],
            notes: [''],
            ssn: [''],
            ein: [''],
        });
    };
    InterpreterProfileInformationComponent.prototype.detailProfile = function () {
        var _this = this;
        this.service.getProfileDetail(this.interId).subscribe(function (res) {
            var _a, _b, _c, _d;
            if (res['status'] == 1) {
                _this.detail_Obj = res['data'][0];
                _this.role_idAPI = _this.detail_Obj.role_id;
                console.log("detail_Obj", _this.detail_Obj);
                if (_this.detail_Obj.skillsCommunityDoc != '' && _this.detail_Obj.skillsCommunityDoc != undefined) {
                    _this.communityinter = true;
                    _this.ci = true;
                    // checked="{{ci =='true' ? 'checked' : ''}}"
                }
                if (_this.detail_Obj.skillsConferenceDoc != '' && _this.detail_Obj.skillsConferenceDoc != undefined) {
                    _this.conferenceinter = true;
                    _this.cfi = true;
                    // checked="{{cfi =='true' ? 'checked' : ''}}"
                }
                if (_this.detail_Obj.skillsCourtDoc != '' && _this.detail_Obj.skillsCourtDoc != undefined) {
                    _this.court_open = true;
                    _this.co = true;
                    // checked="{{co =='true' ? 'checked' : ''}}"
                }
                if (_this.detail_Obj.skillsCredentialDoc != '' && _this.detail_Obj.skillsCredentialDoc != undefined) {
                    _this.credent_open = true;
                    _this.cto = true;
                    // checked="{{cto =='true' ? 'checked' : ''}}"
                }
                if (_this.detail_Obj.skillsEquipmentDoc != '' && _this.detail_Obj.skillsEquipmentDoc != undefined) {
                    _this.equipment_open = true;
                    _this.eo = true;
                    // checked="{{eo =='true' ? 'checked' : ''}}"
                }
                if (_this.detail_Obj.skillsLegalDoc != '' && _this.detail_Obj.skillsLegalDoc != undefined) {
                    _this.legal_open = true;
                    _this.lo = true;
                    // checked="{{lo =='true' ? 'checked' : ''}}"
                }
                if (_this.detail_Obj.skillSimultOpen != '' && _this.detail_Obj.skillSimultOpen != undefined) {
                    _this.simult_open = true;
                    _this.so = true;
                    // checked="{{so =='true' ? 'checked' : ''}}"
                }
                if (_this.detail_Obj.skillsOtherDoc != '' && _this.detail_Obj.skillsOtherDoc != undefined) {
                    _this.other_open = true;
                    _this.oo = true;
                    // checked="{{oo =='true' ? 'checked' : ''}}"
                }
                _this.patchValue();
                _this.StateList(_this.detail_Obj.country);
                _this.CityList(_this.detail_Obj.state);
                // addAssignment
            }
            else {
                _this.detail_Obj = res;
            }
            if (((_a = _this.detail_Obj) === null || _a === void 0 ? void 0 : _a.bank_profile_status) == '1' && ((_b = _this.detail_Obj) === null || _b === void 0 ? void 0 : _b.interpreter_assignment_status) == '1' && ((_c = _this.detail_Obj) === null || _c === void 0 ? void 0 : _c.user_profile_status) == '1' && ((_d = _this.detail_Obj) === null || _d === void 0 ? void 0 : _d.skill_complete) == '1') {
                _this.showArroveBtn = 1;
            }
            else {
                _this.showArroveBtn = 0;
            }
        });
    };
    InterpreterProfileInformationComponent.prototype.check_dob = function (e) {
        var d = new Date(e);
        var check = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
        if (d <= check) {
        }
        else {
            this.toastr.error("Date should be valid and atleast 18 year old.", '', { timeOut: 1000, positionClass: 'toast-top-center' });
            this.generalForm.controls['dob'].setValue('');
        }
    };
    //update interpreter value
    InterpreterProfileInformationComponent.prototype.updateInterpreter = function () {
        // this.submitted = true; 
        // if (this.generalForm.invalid) {
        //   return;
        // }
        var _this = this;
        // this.submitted = false;
        this.generalForm.value.interpreter_id = this.interId;
        this.generalForm.value.address = this.new_address;
        this.generalForm.value.latitude = this.latitude;
        this.generalForm.value.longitude = this.longitude;
        console.log("inside", this.generalForm.value);
        this.service.updateInterpreter(this.generalForm.value).subscribe(function (res) {
            _this.gen_Msg = res;
            if (res['status'] == 1) {
                _this.toastr.success(_this.gen_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.skills_form = true;
                _this.general_form = false;
                _this.detailProfile();
            }
            else {
                _this.toastr.error(_this.gen_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
    };
    // interpreter general details end
    //banking code start
    // addBankInfo() {
    //   this.bankingForm = this.fb.group({
    //     bank_name: ['', this.validation.onlyRequired_validator],
    //     account_type: ['', this.validation.onlyRequired_validator],
    //     bank_country: ['', this.validation.onlyRequired_validator],
    //     account_no: ['', this.validation.onlyRequired_validator],
    //     bank_routing_no: ['', this.validation.onlyRequired_validator],
    //     payment_method: ['', this.validation.onlyRequired_validator],
    //     electronic: ['', this.validation.onlyRequired_validator],
    //     SWIFT_code: ['', this.validation.onlyRequired_validator],
    //     bank_address: ['', this.validation.onlyRequired_validator],
    //     paypal_id: ['', this.validation.onlyRequired_validator]
    //   });
    // }
    // banking routing number
    InterpreterProfileInformationComponent.prototype.selectRoutingNo = function (e) {
        var _this = this;
        this.routingNoValue = e.target.value;
        // if(this.routingNoValue.length == 9) {
        this.service.getRoutingNumber(this.routingNoValue).subscribe(function (res) {
            if (res['code'] == 200) {
                _this.routingNo = res;
                console.log("api respone for routing no", _this.routingNo);
                // this.bankingRoutingForm.get('routing_number').patchValue(this.routingNo.routing_number);
                _this.bankingRoutingForm.get('bank_name').patchValue(_this.routingNo.customer_name);
                _this.bankingRoutingForm.get('bank_address').patchValue(_this.routingNo.address);
            }
            else {
                _this.routingNo = res;
                _this.bankingRoutingForm.get('bank_name').patchValue('');
                _this.bankingRoutingForm.get('bank_address').patchValue('');
                // this.toastr.error( this.routingNo.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
        //  return false;
        // }
    };
    //add bank details
    InterpreterProfileInformationComponent.prototype.addBankDetails = function () {
        var _this = this;
        this.submitted = true;
        if (this.bankingRoutingForm.invalid) {
            return;
        }
        this.submitted = false;
        this.bankingRoutingForm.value.user_id = this.interId;
        this.service.getBankingAdd(this.bankingRoutingForm.value)
            .subscribe(function (res) {
            if (res['status'] == 1) {
                _this.banking_Obj = res;
                _this.banking_Msg = res;
                _this.toastr.success(_this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.detailProfile();
                // this.router.navigate(['/languages/list']);  
            }
            else {
                _this.banking_Obj = res;
                _this.banking_Msg = res;
                _this.toastr.error(_this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                // this.router.navigate(['/languages/list']);  
            }
        });
    };
    //update bank details
    InterpreterProfileInformationComponent.prototype.updateBankDetails = function () {
        var _this = this;
        this.submitted = true;
        if (this.bankingRoutingForm.invalid) {
            return;
        }
        this.submitted = false;
        this.bankingRoutingForm.value.user_id = this.interId;
        this.service.bankingUpdate(this.bankingRoutingForm.value)
            .subscribe(function (res) {
            if (res['status'] == 1) {
                console.log("api response", res);
                _this.banking_Obj = res;
                _this.banking_Msg = res;
                _this.toastr.success(_this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                // this.router.navigate(['/languages/list']);  
            }
            else {
                console.log("api response", res);
                _this.banking_Obj = res;
                _this.banking_Msg = res;
                _this.toastr.success(_this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                // this.router.navigate(['/languages/list']);  
            }
        });
    };
    /*==================banking code end============================ */
    /*==================assignment form start============================ */
    InterpreterProfileInformationComponent.prototype.onsiteShow = function () {
        this.onsiteInfo = true;
    };
    InterpreterProfileInformationComponent.prototype.opiShow = function () {
        this.opiInfo = true;
    };
    InterpreterProfileInformationComponent.prototype.vriShow = function () {
        this.vriInfo = true;
    };
    InterpreterProfileInformationComponent.prototype.vclShow = function () {
        this.vclInfo = true;
    };
    InterpreterProfileInformationComponent.prototype.rsiShow = function () {
        this.rsiInfo = true;
    };
    InterpreterProfileInformationComponent.prototype.vci_opiShow = function () {
        this.vci_opi = true;
    };
    InterpreterProfileInformationComponent.prototype.assignmentFormCheck = function (event, eveKey) {
        if (eveKey == '1') {
            if (event.target.checked) {
                this.onsiteInfo = true;
            }
            else {
                this.onsiteInfo = false;
            }
        }
        if (eveKey == '2') {
            if (event.target.checked) {
                this.opiInfo = true;
            }
            else {
                this.opiInfo = false;
            }
        }
        if (eveKey == '3') {
            if (event.target.checked) {
                this.vriInfo = true;
            }
            else {
                this.vriInfo = false;
            }
        }
        if (eveKey == '4') {
            if (event.target.checked) {
                this.vclInfo = true;
            }
            else {
                this.vclInfo = false;
            }
        }
        if (eveKey == '5') {
            if (event.target.checked) {
                this.rsiInfo = true;
            }
            else {
                this.rsiInfo = false;
            }
        }
        console.log(eveKey);
        console.log(event.target.checked);
        if (eveKey == '6') {
            if (event.target.checked) {
                this.vci_opi = true;
            }
            else {
                this.vci_opi = false;
            }
        }
    };
    // Get Current Location Coordinates
    InterpreterProfileInformationComponent.prototype.setCurrentLocation = function () {
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
    InterpreterProfileInformationComponent.prototype.markerDragEnd = function ($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
        this.geocodeLatLng(this.latitude, this.longitude);
    };
    InterpreterProfileInformationComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
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
    InterpreterProfileInformationComponent.prototype.geocodeLatLng = function (latitude, longitude) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                console.log(results);
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
                    _this.generalForm.get('zipCode').patchValue(zipcode);
                    //------------ Country api call ----------------------------//
                    _this.service.getCountryMobileCode().subscribe(function (res) {
                        if (res['status'] == '1') {
                            _this.country_Json = res['data'];
                            var contHash = _this.country_Json.find(function (cont) { return cont.name == country; });
                            _this.generalForm.get('country').patchValue(contHash.id);
                            //------------ State api call ----------------------------//
                            _this.service.getStateCode(contHash.id).subscribe(function (contryRes) {
                                if (contryRes['status'] == '1') {
                                    _this.state_Obj = contryRes["data"];
                                    _this.timezone_Obj = contryRes['timeZoneData']['timezones'];
                                    var stateHash = _this.state_Obj.find(function (st) { return st.name == state; });
                                    if (stateHash) {
                                        _this.generalForm.get('state').patchValue(stateHash.id);
                                        //------------ City api call ----------------------------//
                                        _this.service.getCityCode(stateHash.id).subscribe(function (cityRes) {
                                            if (cityRes['status'] == '1') {
                                                _this.city_Obj = cityRes["data"];
                                                var cityHash = _this.city_Obj.find(function (ct) { return ct.name == city; });
                                                _this.generalForm.get('city').patchValue(cityHash.id);
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });
                }
                else {
                    alert('No results found');
                }
            }
            else {
                alert('Geocoder failed due to: ' + status);
            }
        });
        // setInterval(function(){ }, 3000);
    };
    // Radio button function
    InterpreterProfileInformationComponent.prototype.radioButton1 = function () {
        this.showOther = false;
    };
    InterpreterProfileInformationComponent.prototype.radioButton2 = function () {
        this.showOther = false;
    };
    InterpreterProfileInformationComponent.prototype.radioButton3 = function () {
        this.showOther = true;
    };
    InterpreterProfileInformationComponent.prototype.skillsForm = function () {
        this.interpreterSkillForm = this.fb.group({
            interpreter_id: [''],
            primary_language: [''],
            secondary_language: [''],
            other_title: [''],
            community_doc: [''],
            conference_doc: [''],
            court_doc: [''],
            credential_doc: [''],
            equipment_doc: [''],
            legal_doc: [''],
            simultaneous_doc: [0],
            simult_open: [''],
            other_doc: [''],
        });
    };
    InterpreterProfileInformationComponent.prototype.onSingleFileChange = function (event, key, type) {
        var file = event.target.files[0];
        this.selectedFile = file;
        this.addDocInArray(this.selectedFile, key, type);
    };
    InterpreterProfileInformationComponent.prototype.addDocInArray = function (event, key, type) {
        this.doc.push({
            all_img: event,
            doc_type: key,
            types: type,
        });
    };
    InterpreterProfileInformationComponent.prototype.uploadDocuments = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        this.submitted = true;
        if (this.interpreterSkillForm.invalid) {
            return;
        }
        this.submitted = false;
        var formData = new FormData();
        this.lang = this.interpreterSkillForm.value.secondary_language;
        try {
            for (var _c = __values(this.lang), _d = _c.next(); !_d.done; _d = _c.next()) {
                var a = _d.value;
                formData.append('secondary_language', JSON.stringify(a));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = __values(this.doc), _f = _e.next(); !_f.done; _f = _e.next()) {
                var img = _f.value;
                console.log("img", img.all_img);
                console.log("doc_type", img.doc_type);
                formData.append('doc_name', img.doc_type);
                formData.append(img.doc_type, img.all_img);
                formData.append('type', img.types);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        formData.append('interpreter_id', this.interId);
        formData.append('primary_language', this.priLanguageId);
        // formData.append('secondary_language', this.interpreterSkillForm.value.secondary_language);
        formData.append('other_doc_title', this.interpreterSkillForm.value.other_title);
        this.service.interpreterDocupload(formData).subscribe(function (res) {
            _this.skill_msg = res;
            if (res['status'] == '1') {
                _this.toastr.success(_this.skill_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                _this.detailProfile();
            }
            else {
                _this.toastr.error(_this.skill_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
    };
    InterpreterProfileInformationComponent.prototype.imgview = function (e) {
        console.log("images", e);
        window.open('http://192.168.0.4:3300/documents/' + e);
    };
    InterpreterProfileInformationComponent.prototype.assignmentGroup = function () {
        return this.fb.group({
            id: [''],
            lob: [''],
            language_id: [0],
            hourly_rate: [0],
            hourly_rate_min_paid: [0],
            hourly_rate_pay_increment: [0],
            half_day: [0],
            half_day_min_paid: [0],
            half_day_pay_increment: [0],
            full_day: [0],
            full_day_min_paid: [0],
            full_day_pay_increment: [0]
        });
    };
    InterpreterProfileInformationComponent.prototype.opiAssignmentGroup = function () {
        return this.fb.group({
            opi_id: [''],
            opi_lob: [''],
            opi_language_id: [0],
            opi_hourly_rate: [0],
            opi_hourly_rate_min_paid: [0],
            opi_hourly_rate_pay_increment: [0],
            opi_half_day: [0],
            opi_half_day_min_paid: [0],
            opi_half_day_pay_increment: [0],
            opi_full_day: [0],
            opi_full_day_min_paid: [0],
            opi_full_day_pay_increment: [0]
        });
    };
    InterpreterProfileInformationComponent.prototype.vriAssignmentGroup = function () {
        return this.fb.group({
            vri_id: [''],
            vri_lob: [''],
            vri_language_id: [0],
            vri_hourly_rate: [0],
            vri_hourly_rate_min_paid: [0],
            vri_hourly_rate_pay_increment: [0],
            vri_half_day: [0],
            vri_half_day_min_paid: [0],
            vri_half_day_pay_increment: [0],
            vri_full_day: [0],
            vri_full_day_min_paid: [0],
            vri_full_day_pay_increment: [0]
        });
    };
    InterpreterProfileInformationComponent.prototype.vclAssignmentGroup = function () {
        return this.fb.group({
            vcl_id: [''],
            vcl_lob: [''],
            vcl_language_id: [0],
            vcl_hourly_rate: [0],
            vcl_hourly_rate_min_paid: [0],
            vcl_hourly_rate_pay_increment: [0],
            vcl_half_day: [0],
            vcl_half_day_min_paid: [0],
            vcl_half_day_pay_increment: [0],
            vcl_full_day: [0],
            vcl_full_day_min_paid: [0],
            vcl_full_day_pay_increment: [0]
        });
    };
    InterpreterProfileInformationComponent.prototype.rsiAssignmentGroup = function () {
        return this.fb.group({
            rsi_id: [''],
            rsi_lob: [''],
            rsi_language_id: [0],
            rsi_hourly_rate: [0],
            rsi_hourly_rate_min_paid: [0],
            rsi_hourly_rate_pay_increment: [0],
            rsi_half_day: [0],
            rsi_half_day_min_paid: [0],
            rsi_half_day_pay_increment: [0],
            rsi_full_day: [0],
            rsi_full_day_min_paid: [0],
            rsi_full_day_pay_increment: [0]
        });
    };
    InterpreterProfileInformationComponent.prototype.vci_opiAssignmentGroup = function () {
        return this.fb.group({
            vci_opi_id: [''],
            vci_opi_lob: [''],
            vci_opi_language_id: [0],
            vci_opi_hourly_rate: [0],
            vci_opi_hourly_rate_min_paid: [0],
            vci_opi_hourly_rate_pay_increment: [0],
            vci_opi_half_day: [0],
            vci_opi_half_day_min_paid: [0],
            vci_opi_half_day_pay_increment: [0],
            vci_opi_full_day: [0],
            vci_opi_full_day_min_paid: [0],
            vci_opi_full_day_pay_increment: [0]
        });
    };
    Object.defineProperty(InterpreterProfileInformationComponent.prototype, "assignmentArray", {
        get: function () {
            return this.assignmentForm.get('assignment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InterpreterProfileInformationComponent.prototype, "assignmentOpiArray", {
        get: function () {
            return this.assignmentForm.get('assignment_opi');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InterpreterProfileInformationComponent.prototype, "assignmentVriArray", {
        get: function () {
            return this.assignmentForm.get('assignment_vri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InterpreterProfileInformationComponent.prototype, "assignmentVclArray", {
        get: function () {
            return this.assignmentForm.get('assignment_vcl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InterpreterProfileInformationComponent.prototype, "assignmentRsiArray", {
        get: function () {
            return this.assignmentForm.get('assignment_rsi');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InterpreterProfileInformationComponent.prototype, "assignmentVcl_opiArray", {
        get: function () {
            return this.assignmentForm.get('assignment_vci_opi');
        },
        enumerable: false,
        configurable: true
    });
    InterpreterProfileInformationComponent.prototype.getAssignmentSettingByInterpreterId = function () {
        var _this = this;
        this.service.getAssignmentSettingByInterpreterId(this.interId).subscribe(function (res) {
            console.log('dev------------------------------', res);
            for (var i = 0; i < res.length; ++i) {
                if (res[i].assignment_type == 1 && res[i].status == 1) {
                    _this.onsiteInfo = true;
                    if (document.getElementById('on-site') != null) {
                        document.getElementById('on-site')['checked'] = true;
                    }
                    _this.on_site_language_btn = res[i].language_id;
                    var langArr1 = _this.assignmentForm.controls["assignment"];
                    langArr1.controls[0].patchValue({
                        id: res[i].id,
                        lob: res[i].lob,
                        language_id: res[i].language_id,
                        hourly_rate: res[i].rates_on_duration_hourly,
                        hourly_rate_min_paid: res[i].min_paid_hourly,
                        hourly_rate_pay_increment: res[i].pay_increment_hourly,
                        half_day: res[i].rates_on_duration_half_day,
                        half_day_min_paid: res[i].min_paid_half_day,
                        half_day_pay_increment: res[i].pay_increment_half_day,
                        full_day: res[i].rates_on_duration_full_day,
                        full_day_min_paid: res[i].min_paid_full_day,
                        full_day_pay_increment: res[i].pay_increment_full_day
                    });
                }
                if (res[i].assignment_type == 2 && res[i].status == 1) {
                    _this.opiInfo = true;
                    if (document.getElementById('opi') != null) {
                        document.getElementById('opi')['checked'] = true;
                    }
                    _this.opi_language_btn = res[i].language_id;
                    var langArr2 = _this.assignmentForm.controls["assignment_opi"];
                    langArr2.controls[0].patchValue({
                        opi_id: res[i].id,
                        opi_lob: res[i].lob,
                        opi_language_id: res[i].language_id,
                        opi_hourly_rate: res[i].rates_on_duration_hourly,
                        opi_hourly_rate_min_paid: res[i].min_paid_hourly,
                        opi_hourly_rate_pay_increment: res[i].pay_increment_hourly,
                        opi_half_day: res[i].rates_on_duration_half_day,
                        opi_half_day_min_paid: res[i].min_paid_half_day,
                        opi_half_day_pay_increment: res[i].pay_increment_half_day,
                        opi_full_day: res[i].rates_on_duration_full_day,
                        opi_full_day_min_paid: res[i].min_paid_full_day,
                        opi_full_day_pay_increment: res[i].pay_increment_full_day
                    });
                }
                if (res[i].assignment_type == 3 && res[i].status == 1) {
                    _this.vriInfo = true;
                    if (document.getElementById('vri') != null) {
                        document.getElementById('vri')['checked'] = true;
                    }
                    _this.vri_language_btn = res[i].language_id;
                    var langArr3 = _this.assignmentForm.controls["assignment_vri"];
                    langArr3.controls[0].patchValue({
                        vri_id: res[i].id,
                        vri_lob: res[i].lob,
                        vri_language_id: res[i].language_id,
                        vri_hourly_rate: res[i].rates_on_duration_hourly,
                        vri_hourly_rate_min_paid: res[i].min_paid_hourly,
                        vri_hourly_rate_pay_increment: res[i].pay_increment_hourly,
                        vri_half_day: res[i].rates_on_duration_half_day,
                        vri_half_day_min_paid: res[i].min_paid_half_day,
                        vri_half_day_pay_increment: res[i].pay_increment_half_day,
                        vri_full_day: res[i].rates_on_duration_full_day,
                        vri_full_day_min_paid: res[i].min_paid_full_day,
                        vri_full_day_pay_increment: res[i].pay_increment_full_day
                    });
                }
                if (res[i].assignment_type == 4 && res[i].status == 1) {
                    _this.vclInfo = true;
                    if (document.getElementById('vcl') != null) {
                        document.getElementById('vcl')['checked'] = true;
                    }
                    _this.vci_language_btn = res[i].language_id;
                    var langArr4 = _this.assignmentForm.controls["assignment_vcl"];
                    langArr4.controls[0].patchValue({
                        vcl_id: res[i].id,
                        vcl_lob: res[i].lob,
                        vcl_language_id: res[i].language_id,
                        vcl_hourly_rate: res[i].rates_on_duration_hourly,
                        vcl_hourly_rate_min_paid: res[i].min_paid_hourly,
                        vcl_hourly_rate_pay_increment: res[i].pay_increment_hourly,
                        vcl_half_day: res[i].rates_on_duration_half_day,
                        vcl_half_day_min_paid: res[i].min_paid_half_day,
                        vcl_half_day_pay_increment: res[i].pay_increment_half_day,
                        vcl_full_day: res[i].rates_on_duration_full_day,
                        vcl_full_day_min_paid: res[i].min_paid_full_day,
                        vcl_full_day_pay_increment: res[i].pay_increment_full_day
                    });
                }
                if (res[i].assignment_type == 5 && res[i].status == 1) {
                    _this.rsiInfo = true;
                    if (document.getElementById('rsi') != null) {
                        document.getElementById('rsi')['checked'] = true;
                    }
                    _this.rsi_language_btn = res[i].language_id;
                    var langArr5 = _this.assignmentForm.controls["assignment_rsi"];
                    langArr5.controls[0].patchValue({
                        rsi_id: res[i].id,
                        rsi_lob: res[i].lob,
                        rsi_language_id: res[i].language_id,
                        rsi_hourly_rate: res[i].rates_on_duration_hourly,
                        rsi_hourly_rate_min_paid: res[i].min_paid_hourly,
                        rsi_hourly_rate_pay_increment: res[i].pay_increment_hourly,
                        rsi_half_day: res[i].rates_on_duration_half_day,
                        rsi_half_day_min_paid: res[i].min_paid_half_day,
                        rsi_half_day_pay_increment: res[i].pay_increment_half_day,
                        rsi_full_day: res[i].rates_on_duration_full_day,
                        rsi_full_day_min_paid: res[i].min_paid_full_day,
                        rsi_full_day_pay_increment: res[i].pay_increment_full_day
                    });
                }
                if (res[i].assignment_type == 6 && res[i].status == 1) {
                    _this.vci_opi = true;
                    if (document.getElementById('vci_opi') != null) {
                        document.getElementById('vci_opi')['checked'] = true;
                    }
                    _this.vci_opi_language_btn = res[i].language_id;
                    var langArr6 = _this.assignmentForm.controls["assignment_vci_opi"];
                    langArr6.controls[0].patchValue({
                        vci_opi_id: res[i].id,
                        vci_opi_lob: res[i].lob,
                        vci_opi_language_id: res[i].language_id,
                        vci_opi_hourly_rate: res[i].rates_on_duration_hourly,
                        vci_opi_hourly_rate_min_paid: res[i].min_paid_hourly,
                        vci_opi_hourly_rate_pay_increment: res[i].pay_increment_hourly,
                        vci_opi_half_day: res[i].rates_on_duration_half_day,
                        vci_opi_half_day_min_paid: res[i].min_paid_half_day,
                        vci_opi_half_day_pay_increment: res[i].pay_increment_half_day,
                        vci_opi_full_day: res[i].rates_on_duration_full_day,
                        vci_opi_full_day_min_paid: res[i].min_paid_full_day,
                        vci_opi_full_day_pay_increment: res[i].pay_increment_full_day
                    });
                }
            }
        });
    };
    InterpreterProfileInformationComponent.prototype.addInterpreterAssignment = function (type) {
        var _this = this;
        this.assignmentForm.value.assignment[0].language_id = this.on_site_language;
        this.assignmentForm.value.assignment_opi[0].opi_language_id = this.opi_language;
        this.assignmentForm.value.assignment_vri[0].vri_language_id = this.vri_language;
        this.assignmentForm.value.assignment_vcl[0].vcl_language_id = this.vci_language;
        this.assignmentForm.value.assignment_rsi[0].rsi_language_id = this.rsi_language;
        this.assignmentForm.value.assignment_vci_opi[0].vci_opi_language_id = this.vci_opi_language;
        this.assignmentForm.value.interpreter_id = this.interId;
        this.assignmentForm.value.onsiteInfo = this.onsiteInfo;
        this.assignmentForm.value.opiInfo = this.opiInfo;
        this.assignmentForm.value.vriInfo = this.vriInfo;
        this.assignmentForm.value.vclInfo = this.vclInfo;
        this.assignmentForm.value.rsiInfo = this.rsiInfo;
        this.assignmentForm.value.vci_opi = this.vci_opi;
        console.log('data', this.assignmentForm.value);
        // return
        this.service.addInterpreterAssignmentSetting(this.assignmentForm.value)
            .subscribe(function (res) {
            if (res['status'] == 1) {
                _this.ass_Obj = res;
                _this.toastr.success(_this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                if (type == 'skills') {
                    _this.assignment_form = true;
                    _this.general_form = false;
                    _this.skills_form = false;
                    _this.banking_form = false;
                }
                else {
                    _this.banking_form = true;
                    _this.assignment_form = false;
                    _this.general_form = false;
                    _this.skills_form = false;
                }
            }
            else {
                _this.ass_Obj = res;
                _this.toastr.error(_this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
    };
    InterpreterProfileInformationComponent.prototype.addInterpreterAssignmentSave = function (type) {
        var _this = this;
        console.log(type);
        console.log(this.assignmentForm.value);
        this.assignmentForm.value.assignment[0].language_id = this.on_site_language;
        this.assignmentForm.value.assignment_opi[0].opi_language_id = this.opi_language;
        this.assignmentForm.value.assignment_vri[0].vri_language_id = this.vri_language;
        this.assignmentForm.value.assignment_vcl[0].vcl_language_id = this.vci_language;
        this.assignmentForm.value.assignment_rsi[0].rsi_language_id = this.rsi_language;
        this.assignmentForm.value.assignment_vci_opi[0].vci_opi_language_id = this.vci_opi_language;
        this.assignmentForm.value.interpreter_id = this.interId;
        this.assignmentForm.value.onsiteInfo = this.onsiteInfo;
        this.assignmentForm.value.opiInfo = this.opiInfo;
        this.assignmentForm.value.vriInfo = this.vriInfo;
        this.assignmentForm.value.vclInfo = this.vclInfo;
        this.assignmentForm.value.rsiInfo = this.rsiInfo;
        this.assignmentForm.value.vci_opi = this.vci_opi;
        this.assignmentForm.value.type = type;
        console.log('data', this.assignmentForm.value);
        // return
        this.service.post('update_Account_Setting_Interpreter_Profile', this.assignmentForm.value)
            .subscribe(function (res) {
            if (res['status'] == 1) {
                _this.ass_Obj = res;
                _this.toastr.success(_this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                if (type == 'skills') {
                    _this.assignment_form = true;
                    _this.general_form = false;
                    _this.skills_form = false;
                    _this.banking_form = false;
                }
                else {
                    _this.banking_form = true;
                    _this.assignment_form = false;
                    _this.general_form = false;
                    _this.skills_form = false;
                }
            }
            else {
                _this.ass_Obj = res;
                _this.toastr.error(_this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
    };
    // Radio button ssn and ein function
    InterpreterProfileInformationComponent.prototype.ssnRadioBtn = function () {
        this.einshowInput = false;
        this.ssnshowInput = true;
    };
    InterpreterProfileInformationComponent.prototype.einRadioBtn = function () {
        this.einshowInput = true;
        this.ssnshowInput = false;
    };
    InterpreterProfileInformationComponent.prototype.ApproveInterpreter = function () {
        alert('dev');
    };
    __decorate([
        ViewChild('imageModal', { static: true }),
        __metadata("design:type", Object)
    ], InterpreterProfileInformationComponent.prototype, "imageModal", void 0);
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], InterpreterProfileInformationComponent.prototype, "searchElementRef", void 0);
    InterpreterProfileInformationComponent = __decorate([
        Component({
            selector: 'app-interpreter-profile-information',
            templateUrl: './interpreter-profile-information.component.html',
            styleUrls: ['./interpreter-profile-information.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            NgbModal,
            NgZone,
            MapsAPILoader,
            HttpService,
            HttpClient])
    ], InterpreterProfileInformationComponent);
    return InterpreterProfileInformationComponent;
}());
export { InterpreterProfileInformationComponent };
//# sourceMappingURL=interpreter-profile-information.component.js.map