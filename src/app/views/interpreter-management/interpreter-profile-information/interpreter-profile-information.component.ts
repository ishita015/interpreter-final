import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MapsAPILoader } from '@agm/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-interpreter-profile-information',
  templateUrl: './interpreter-profile-information.component.html',
  styleUrls: ['./interpreter-profile-information.component.scss']
})
export class InterpreterProfileInformationComponent implements OnInit {
  @ViewChild('imageModal', { static: true }) imageModal;
  files: string[] = [];

  doc: Array<any> = [];
  lang: Array<any> = [];
  selectedFile: File = null;
  //general form declare
  generalForm: FormGroup;
  userForm: FormGroup;
  submitted: boolean;

  //skills form variavle declare
  interpreterSkillForm: FormGroup;
  items = ['Javascript', 'Typescript']
  tagsCtrl1 = new FormControl(this.items);
  tagsCtrl2 = new FormControl([]);
  skill_msg;

  //assignment form variable declare
  onsiteInfo: boolean = false;
  opiInfo: boolean = false;
  vriInfo: boolean = false;
  vclInfo: boolean = false;


  //banking form declare
  bankingForm: FormGroup;
  banking_Obj;
  banking_Msg;

  ass_Obj;
  interId;
  detail_Obj;
  gen_Msg;
  Profile: FormGroup;
  check_form1 = false;
  check_form2 = false;
  check_form3 = false;
  check_form4 = false;
  check_form5 = false;

  communityinter: boolean = false;
  conferenceinter: boolean = false;
  courtcertified: boolean = false;
  court_open: boolean = false;
  credent_open: boolean = false;
  equipment_open: boolean = false;
  legal_open: boolean = false;
  simult_open: boolean = false;
  other_open: boolean = false;


  ci: boolean = false;
  cfi: boolean = false;
  cc: boolean = false;
  co: boolean = false;
  cto: boolean = false;
  eo: boolean = false;
  lo: boolean = false;
  so: boolean = false;
  oo: boolean = false;

  country_Obj;

  public priLanguageId;
  language_Obj;

  // show/hide form
  general_form = true;  //bydefault set
  skills_form = false;
  assignment_form = false;
  banking_form = false;

  showOther: boolean = false;

  // google map 
  latitude: number;
  longitude: number;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  zoom: number;
  address: string;
  sec_address: string;
  new_address: string;
  country;
  private geoCoder;

  public assignmentForm: FormGroup;

  // ein radio button variable
  einshowInput: boolean = false;
  ssnshowInput: boolean = false;

  // country, state, city variable
  country_id;
  state_id;
  state_Obj;
  city_Obj;
  city_id;
  timezone_Obj;

  role_id;

  //map location variable
  country_name;
  city_name;
  state_name;
  map_address;
  country_Json;
  state_Json;
  city_Json;
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    public service: HttpService) {
    this.assignmentForm = this.fb.group({
      assignment: this.fb.array([this.assignmentGroup()]),
      assignment_opi: this.fb.array([this.opiAssignmentGroup()]),
      assignment_vri: this.fb.array([this.vriAssignmentGroup()]),
      assignment_vcl: this.fb.array([this.vclAssignmentGroup()])
    });
    this.role_id = JSON.parse(localStorage.getItem('roleId'));
  }

  ngOnInit() {
    this.addBankInfo(); // add bank details
    // this.createForm2();
    this.skillsForm();
    this.updateGeneralInfo();
    this.countryList();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          console.log('place', place)
          this.new_address = place['formatted_address'];
          this.sec_address = place['formatted_address'];
          console.log("addresss", this.new_address);



          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.geocodeLatLng(this.latitude, this.longitude);
        });
      });
    });
    this.LanguageList();
    this.interId = JSON.parse(localStorage.getItem('userId')); //interpreter id
    this.detailProfile();
    this.getUserLanguage();
  }

  /*========== Form2 Value Start Here========*/
  // createForm2() {
  //   this.Profile = this.fb.group({
  //     payment_mode: ['', this.validation.onlyRequired_validator],
  //     service_type: ['', this.validation.onlyRequired_validator],
  //     duration:['', this.validation.onlyRequired_validator],
  //     cases:['', this.validation.onlyRequired_validator],
  //     subcases:['', this.validation.onlyRequired_validator],
  //     minimum_paid:['', this.validation.onlyRequired_validator],
  //     pay_increment:['', this.validation.onlyRequired_validator],
  //   });
  // }
  /*========== Form2 Value End Here========*/

  /*========== Add Api Start Here========*/
  onCountryChange(id) {
    this.country_id = id.target.value;
    this.StateList(this.country_id);
  }
  onStateChange(id) {
    this.state_id = id.target.value;
    this.CityList(this.state_id);
  }

  onCityChange(id) {
    this.city_id = id.target.value;
    this.CityList(id.target.value);
  }

  /*========== Country Code for Mobile Start Here========*/
  countryList() {
    this.service.getCountryMobileCode().subscribe(res => {
      if (res['status'] == '1') {
        this.country_Obj = res['data'];
      }
    });
  }
  /*==========  Country Code for Mobile End Here========*/

  /*========== State Code for Mobile Start Here========*/

  StateList(country_id) {
    if (this.country_id) {
      this.service.getStateCode(this.country_id).subscribe(res => {
       
        
        if (res['status'] == '1') {
          this.state_Obj = res['data'];
          this.timezone_Obj = res['timeZoneData']['timezones'];
        }
      });
    }
    else {
      this.service.getStateCode(country_id).subscribe(res => {
        if (res['status'] == '1') {
        
          this.state_Obj = res['data'];
          this.timezone_Obj = res['timeZoneData']['timezones'];
        }
      });
    }

  }


  /*==========  State Code for Mobile End Here========*/

  /*========== City Code for Mobile Start Here========*/
  CityList(state_id) {
    if (this.state_id) {
    this.service.getCityCode(this.state_id).subscribe(res => {
      if (res['status'] == '1') {
        this.city_Obj = res['data'];
      }
    });
  }
  else{
    this.service.getCityCode(state_id).subscribe(res => {
      if (res['status'] == '1') {
        this.city_Obj = res['data'];
      }
    });
  }
  }
  /*==========  City Code for Mobile End Here========*/
UserLangData=[]
   getUserLanguage() {
    this.service.getUserLanguage(this.interId).subscribe(res => {
     this.UserLangData=res['data'];
    });
  }

  check1() {
    this.check_form1 = true;
    this.check_form2 = false;
    this.check_form3 = false;
    this.check_form4 = false;
    this.check_form5 = false;
  }

  check2() {
    this.check_form1 = false;
    this.check_form2 = true;
    this.check_form3 = false;
    this.check_form4 = false;
    this.check_form5 = false;
  }

  check3() {
    this.check_form1 = false;
    this.check_form2 = false;
    this.check_form3 = true;
    this.check_form4 = false;
    this.check_form5 = false;
  }

  check4() {
    this.check_form1 = false;
    this.check_form2 = false;
    this.check_form3 = false;
    this.check_form4 = true;
    this.check_form5 = false;
  }

  check5() {
    this.check_form1 = false;
    this.check_form2 = false;
    this.check_form3 = false;
    this.check_form4 = false;
    this.check_form5 = true;
  }

  //gokul code start  ------interpreter skills-------
  // ==============================get language list============================ //
  LanguageList() {
    this.service.getLanguageList().subscribe(res => {
      if (res['status'] == '1') {
        this.language_Obj = res['data'];
      }
    });
  }

  //get primary language id
  onChange(id) {
    this.priLanguageId = id.target.value;
  }

  onSelect(item) {
    for (let i = 0; i < item; i++) {
      this.lang.push(item[i]);
    }

  }

  communityShow() {
    this.communityinter = true;
  }
  conferenceShow() {
    this.conferenceinter = true;
  }
  certifiedShow() {
    this.court_open = true;
  }
  courtShow() {
    this.credent_open = true;
  }
  qualifiedShow() {
    this.equipment_open = true;
  }
  legalShow() {
    this.legal_open = true;
  }
  simultShow() {
    this.simult_open = true;
  }
  othShow() {
    this.other_open = true;
  }

  setCheck(event, eve_key) {
    if (eve_key == '1') {
      if (event.target.checked) {
        this.communityinter = true;
      } else {
        this.communityinter = false;
      }
    }

    if (eve_key == '2') {
      if (event.target.checked) {
        this.conferenceinter = true;
      } else {
        this.conferenceinter = false;
      }
    }

    if (eve_key == '3') {
      if (event.target.checked) {
        this.court_open = true;
      } else {
        this.court_open = false;
      }
    }

    if (eve_key == '4') {
      if (event.target.checked) {
        this.credent_open = true;
      } else {
        this.credent_open = false;
      }
    }

    if (eve_key == '5') {
      if (event.target.checked) {
        this.equipment_open = true;
      } else {
        this.equipment_open = false;
      }
    }

    if (eve_key == '6') {
      if (event.target.checked) {
        this.legal_open = true;
      } else {
        this.legal_open = false;
      }
    }

    if (eve_key == '7') {
      if (event.target.checked) {
        this.simult_open = true;
      } else {
        this.simult_open = false;
      }
    }

    if (eve_key == '8') {
      if (event.target.checked) {
        this.other_open = true;
      } else {
        this.other_open = false;
      }
    }
  }

  //====================gokul code end==========================//

  banking() {
    this.general_form = false;
    this.skills_form = false;
    this.assignment_form = false;
    this.banking_form = true;
  }

  assignment() {
    this.general_form = false;
    this.skills_form = false;
    this.assignment_form = true;
    this.banking_form = false;
  }

  skills() {
    this.general_form = false;
    this.skills_form = true;
    this.assignment_form = false;
    this.banking_form = false;
  }

  general() {
    this.general_form = true;
    this.skills_form = false;
    this.assignment_form = false;
    this.banking_form = false;
  }

  /*====================== interpreter general information view and edit  bankingForm ==============*/

  patchValue() {
      
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
    if(this.detail_Obj.gender == "Other"){
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

    this.bankingForm.get('bank_name').patchValue(this.detail_Obj.bank_name);
    this.bankingForm.get('account_type').patchValue(this.detail_Obj.account_type);
    this.bankingForm.get('bank_country').patchValue(this.detail_Obj.bank_country);
    this.bankingForm.get('account_no').patchValue(this.detail_Obj.account_no);
    this.bankingForm.get('bank_routing_no').patchValue(this.detail_Obj.bank_routing_no);
    this.bankingForm.get('payment_method').patchValue(this.detail_Obj.payment_method);
    this.bankingForm.get('electronic').patchValue(this.detail_Obj.electronic);
    this.bankingForm.get('SWIFT_code').patchValue(this.detail_Obj.SWIFT_code);
    this.bankingForm.get('bank_address').patchValue(this.detail_Obj.bank_address);
    this.bankingForm.get('paypal_id').patchValue(this.detail_Obj.paypal_id);

    this.interpreterSkillForm.get('primary_language').patchValue(this.detail_Obj.primay_lang_id);
    this.interpreterSkillForm.get('secondary_language').patchValue(this.detail_Obj.secondary_language);

  }

  updateGeneralInfo() {
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
  }

  detailProfile() {
    this.service.getProfileDetail(this.interId).subscribe(res => {
      if (res['status'] == 1) {
        this.detail_Obj = res['data'][0];
        console.log("detail_Obj", this.detail_Obj);

        if (this.detail_Obj.skillsCommunityDoc != '' && this.detail_Obj.skillsCommunityDoc != undefined) {
          this.communityinter = true;
          this.ci = true;
          // checked="{{ci =='true' ? 'checked' : ''}}"
        }

        if (this.detail_Obj.skillsConferenceDoc != '' && this.detail_Obj.skillsConferenceDoc != undefined) {
          this.conferenceinter = true;
          this.cfi = true;
          // checked="{{cfi =='true' ? 'checked' : ''}}"
        }

        if (this.detail_Obj.skillsCourtDoc != '' && this.detail_Obj.skillsCourtDoc != undefined) {
          this.court_open = true;
          this.co = true;
          // checked="{{co =='true' ? 'checked' : ''}}"
        }

        if (this.detail_Obj.skillsCredentialDoc != '' && this.detail_Obj.skillsCredentialDoc != undefined) {
          this.credent_open = true;
          this.cto = true;
          // checked="{{cto =='true' ? 'checked' : ''}}"
        }

        if (this.detail_Obj.skillsEquipmentDoc != '' && this.detail_Obj.skillsEquipmentDoc != undefined) {
          this.equipment_open = true;
          this.eo = true;
          // checked="{{eo =='true' ? 'checked' : ''}}"
        }

        if (this.detail_Obj.skillsLegalDoc != '' && this.detail_Obj.skillsLegalDoc != undefined) {
          this.legal_open = true;
          this.lo = true;
          // checked="{{lo =='true' ? 'checked' : ''}}"
        }

        if (this.detail_Obj.skillSimultOpen != '' && this.detail_Obj.skillSimultOpen != undefined) {
          this.simult_open = true;
          this.so = true;
          // checked="{{so =='true' ? 'checked' : ''}}"
        }

        if (this.detail_Obj.skillsOtherDoc != '' && this.detail_Obj.skillsOtherDoc != undefined) {
          this.other_open = true;
          this.oo = true;
          // checked="{{oo =='true' ? 'checked' : ''}}"
        }
        this.patchValue();
        this.StateList(this.detail_Obj.country);
        this.CityList(this.detail_Obj.state);
        // addAssignment
      } else {
        this.detail_Obj = res
        console.log("api response", res);
      }
    });
  }

  check_dob(e) {
    const d = new Date(e);
    const check = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
    if (d <= check) {
    }
    else {
      this.toastr.error("Date should be valid and atleast 18 year old.", '', { timeOut: 1000, positionClass: 'toast-top-center' });
      this.generalForm.controls['dob'].setValue('');
    }
  }

  //update interpreter value
  updateInterpreter() {
    // this.submitted = true; 
    // if (this.generalForm.invalid) {
    //   return;
    // }

    // this.submitted = false;
    this.generalForm.value.interpreter_id = this.interId;
    this.generalForm.value.address = this.new_address;
    this.generalForm.value.latitude = this.latitude
    this.generalForm.value.longitude = this.longitude

    console.log("inside", this.generalForm.value);
    this.service.updateInterpreter(this.generalForm.value).subscribe(res => {
      this.gen_Msg = res;
      if (res['status'] == 1) {
        this.toastr.success(this.gen_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
        this.skills_form = true;
        this.general_form = false;
        this.detailProfile();
      } else {
        this.toastr.error(this.gen_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
      }
    });
  }

  // interpreter general details end
  //banking code start
  addBankInfo() {
    this.bankingForm = this.fb.group({
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
  }

  //add bank details
  addBankDetails() {
    this.submitted = true;
    if (this.bankingForm.invalid) {
      return;
    }
    this.submitted = false;
    this.bankingForm.value.user_id = this.interId;
    this.service.getBankingAdd(this.bankingForm.value)
      .subscribe(res => {
        if (res['status'] == 1) {
          this.banking_Obj = res
          this.banking_Msg = res
          this.toastr.success(this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
          this.detailProfile();
          // this.router.navigate(['/languages/list']);  
        } else {
          this.banking_Obj = res
          this.banking_Msg = res
          this.toastr.success(this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
          // this.router.navigate(['/languages/list']);  
        }

      });
  }

  //update bank details
  updateBankDetails() {
    this.submitted = true;
    // if (this.bankingForm.invalid) {
    //   return;
    // }
    // this.submitted = false;
    this.bankingForm.value.user_id = this.interId;
    this.service.bankingUpdate(this.bankingForm.value)
      .subscribe(res => {
        if (res['status'] == 1) {
          console.log("api response", res);
          this.banking_Obj = res
          this.banking_Msg = res
          this.toastr.success(this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
          // this.router.navigate(['/languages/list']);  
        } else {
          console.log("api response", res);
          this.banking_Obj = res
          this.banking_Msg = res
          this.toastr.success(this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
          // this.router.navigate(['/languages/list']);  
        }
      });
  }

  /*==================banking code end============================ */

  /*==================assignment form start============================ */

  onsiteShow() {
    this.onsiteInfo = true;
  }
  opiShow() {
    this.opiInfo = true;
  }
  vriShow() {
    this.vriInfo = true;
  }
  vclShow() {
    this.vclInfo = true;
  }

  assignmentFormCheck(event, eveKey) {

    if (eveKey == '1') {
      if (event.target.checked) {
        this.onsiteInfo = true;
      } else {
        this.onsiteInfo = false;
      }
    }

    if (eveKey == '2') {
      if (event.target.checked) {
        this.opiInfo = true;
      } else {
        this.opiInfo = false;
      }
    }

    if (eveKey == '3') {
      if (event.target.checked) {
        this.vriInfo = true;
      } else {
        this.vriInfo = false;
      }
    }

    if (eveKey == '4') {
      if (event.target.checked) {
        this.vclInfo = true;
      } else {
        this.vclInfo = false;
      }
    }
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
        this.geocodeLatLng(this.latitude, this.longitude);

      });
    }
  }

  markerDragEnd($event: any) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
    this.geocodeLatLng(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
  
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.sec_address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

   geocodeLatLng(latitude, longitude) 
  {
    var geocoder = new google.maps.Geocoder;
    var latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
    geocoder.geocode({'location': latlng},  (results, status) =>{
        if (status === 'OK') {
            console.log(results)
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
                            } else {
                                street += ", " + results[i].address_components[j].long_name;
                            }
                        }

                    }
                    if (results[i].types[0] === "street_address") {
                        for (var j = 0; j < 4; j++) {
                            if (j == 0) {
                                street = results[i].address_components[j].long_name;
                            } else {
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

                this.map_address = {
                    "street": street,
                    "city": city,
                    "state": state,
                    "country": country,
                    "zipcode": zipcode,
                };

                this.generalForm.get('zipCode').patchValue(zipcode);

                //------------ Country api call ----------------------------//
               this.service.getCountryMobileCode().subscribe(res => {
                 if (res['status'] == '1') 
                 {
                   this.country_Json = res['data'];
                   let contHash = this.country_Json.find(cont => cont.name == country)
                   this.generalForm.get('country').patchValue(contHash.id);
                   //------------ State api call ----------------------------//
                   this.service.getStateCode(contHash.id).subscribe(contryRes => {
     
                     if (contryRes['status'] == '1') {
                       this.state_Obj = contryRes["data"];
                       this.timezone_Obj = contryRes['timeZoneData']['timezones'];
                       let stateHash =  this.state_Obj.find(st => st.name == state);
                       if(stateHash)
                       {
                       this.generalForm.get('state').patchValue(stateHash.id);
                         //------------ City api call ----------------------------//
                       this.service.getCityCode(stateHash.id).subscribe(cityRes => {
                         if (cityRes['status'] == '1') {
                           this.city_Obj = cityRes["data"];
                           let cityHash = this.city_Obj.find(ct => ct.name == city)
                           this.generalForm.get('city').patchValue(cityHash.id); 
                         }
                       });
                     }
                     }
                   })
                  }
           
                });
            
         
                   } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder failed due to: ' + status);
        }
    });

   
    // setInterval(function(){ }, 3000);
}




// Radio button function
radioButton1() {
  this.showOther = false;
}
radioButton2() {
  this.showOther = false;
}
radioButton3() {
  this.showOther = true;
}

skillsForm() {
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
    simultaneous_doc:[0],
    simult_open: [''],
    other_doc: [''],
  });
}

onSingleFileChange(event, key, type) {
  let file: File = event.target.files[0];
  this.selectedFile = file;
  this.addDocInArray(this.selectedFile, key, type);
}

addDocInArray(event, key, type) {
  this.doc.push({
    all_img: event,
    doc_type: key,
    types: type,
  })
}

uploadDocuments() {
  this.submitted = true;
  if (this.interpreterSkillForm.invalid) {
    return;
  }
  this.submitted = false;
  const formData: any = new FormData();
  this.lang = this.interpreterSkillForm.value.secondary_language
  for (let a of this.lang) {
    formData.append('secondary_language', JSON.stringify(a));
  }

  for (let img of this.doc) {
    console.log("img", img.all_img)
    console.log("doc_type", img.doc_type)
    formData.append('doc_name', img.doc_type);
    formData.append(img.doc_type, img.all_img);
    formData.append('type', img.types);
  }
  formData.append('interpreter_id', this.interId);
  formData.append('primary_language', this.priLanguageId);

  // formData.append('secondary_language', this.interpreterSkillForm.value.secondary_language);
  formData.append('other_doc_title', this.interpreterSkillForm.value.other_title);
  this.service.interpreterDocupload(formData).subscribe(res => {
    this.skill_msg = res;
    if (res['status'] == '1') {
      this.toastr.success(this.skill_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
      this.detailProfile();
    } else {
      this.toastr.error(this.skill_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
    }
  });
}

imgview(e: string) {
  console.log("images", e);
  window.open('http://192.168.0.4:3300/documents/' + e);
}

  private assignmentGroup(): FormGroup {
  return this.fb.group({
id:[''],
    language_id:[0],
    hourly_rate:[0],
    hourly_rate_min_paid:[0],
    hourly_rate_pay_increment:[0],
    half_day:[0],
    half_day_min_paid:[0],
    half_day_pay_increment:[0],
    full_day:[0],
    full_day_min_paid:[0],
    full_day_pay_increment: [0]
  });
}

  private opiAssignmentGroup(): FormGroup {
  return this.fb.group({
    id:[''],
    opi_language_id:[0],
    opi_hourly_rate:[0],
    opi_hourly_rate_min_paid:[0],
    opi_hourly_rate_pay_increment:[0],
    opi_half_day:[0],
    opi_half_day_min_paid:[0],
    opi_half_day_pay_increment:[0],
    opi_full_day:[0],
    opi_full_day_min_paid:[0],
    opi_full_day_pay_increment: [0]
  });
}

  private vriAssignmentGroup(): FormGroup {
  return this.fb.group({
    id:[''],
    vri_language_id:[0],
    vri_hourly_rate:[0],
    vri_hourly_rate_min_paid:[0],
    vri_hourly_rate_pay_increment:[0],
    vri_half_day:[0],
    vri_half_day_min_paid:[0],
    vri_half_day_pay_increment:[0],
    vri_full_day:[0],
    vri_full_day_min_paid:[0],
    vri_full_day_pay_increment: [0]
  });
}

  private
   vclAssignmentGroup(): FormGroup {
  return this.fb.group({
    id:[''],
    vcl_language_id:[0],
    vcl_hourly_rate:[0],
    vcl_hourly_rate_min_paid:[0],
    vcl_hourly_rate_pay_increment:[0],
    vcl_half_day:[0],
    vcl_half_day_min_paid:[0],
    vcl_half_day_pay_increment:[0],
    vcl_full_day:[0],
    vcl_full_day_min_paid:[0],
    vcl_full_day_pay_increment: [0]
  });
}

get assignmentArray(): FormArray {
  return <FormArray>this.assignmentForm.get('assignment');
}

get assignmentOpiArray(): FormArray {
  return <FormArray>this.assignmentForm.get('assignment_opi');
}

get assignmentVriArray(): FormArray {
  return <FormArray>this.assignmentForm.get('assignment_vri');
}

get assignmentVclArray(): FormArray {
  return <FormArray>this.assignmentForm.get('assignment_vcl');
}

getAssignmentSettingByInterpreterId() {
    this.service.getAssignmentSettingByInterpreterId(this.interId).subscribe(res => {
      console.log('dev------------------------------',res)
      for (var i = 0; i < res.length; ++i) {
        if(res[i].assignment_type == 1 && res[i].status == 1 ){
          this.onsiteInfo=true;
          if(document.getElementById('on-site') != null){
            document.getElementById('on-site')['checked'] =true;
          }
        }

        if(res[i].assignment_type == 2 && res[i].status == 1){
          this.opiInfo=true;
          if(document.getElementById('opi') != null){
            document.getElementById('opi')['checked'] =true;
          }
        }

        if(res[i].assignment_type == 3 && res[i].status == 1){
          this.vriInfo=true;
          if(document.getElementById('vri') != null){
            document.getElementById('vri')['checked'] =true;
          }
        }

        if(res[i].assignment_type == 4 && res[i].status == 1){
          this.vclInfo=true;
          if(document.getElementById('vcl') != null){
          document.getElementById('vcl')['checked'] =true;
          }
        }
      }
    })

}
addInterpreterAssignment() {
  this.assignmentForm.value.interpreter_id = this.interId;
  this.assignmentForm.value.onsiteInfo = this.onsiteInfo;
  this.assignmentForm.value.opiInfo = this.opiInfo;
  this.assignmentForm.value.vriInfo = this.vriInfo;
  this.assignmentForm.value.vclInfo = this.vclInfo;
  this.service.addInterpreterAssignmentSetting(this.assignmentForm.value)
    .subscribe(res => {
      if (res['status'] == 1) {
        this.ass_Obj = res
        this.toastr.success(this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
      } else {
        this.ass_Obj = res
        this.toastr.error(this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
      }
    });

}
// Radio button ssn and ein function
ssnRadioBtn() {
  this.einshowInput = false;
  this.ssnshowInput = true;
}
einRadioBtn() {
  this.einshowInput = true;
  this.ssnshowInput = false;
}

}
