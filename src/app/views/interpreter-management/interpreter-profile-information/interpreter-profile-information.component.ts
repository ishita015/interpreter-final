import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MapsAPILoader } from '@agm/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable, of, Subscription } from 'rxjs';
import { tap, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { th } from 'date-fns/locale';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-interpreter-profile-information',
  templateUrl: './interpreter-profile-information.component.html',
  styleUrls: ['./interpreter-profile-information.component.scss']
})
export class InterpreterProfileInformationComponent implements OnInit {
  showArroveBtn = 0;
  on_site_language_btn = 0;
  opi_language_btn = 0;
  vri_language_btn = 0;
  vci_language_btn = 0;
  rsi_language_btn = 0;
  vci_opi_language_btn = 0;
  documentUrl = environment.documentUrl

  @ViewChild('imageModal', { static: true }) imageModal;
  files: string[] = [];

  doc: Array<any> = [];
  lang: Array<any> = [];
  selectedFile: File = null;
  //general form declare
  generalForm: FormGroup;
  bankingRoutingForm: FormGroup;
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
  rsiInfo: boolean = false;
  vci_opi: boolean = false;


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
  role_idAPI;

  //map location variable
  country_name;
  city_name;
  state_name;
  map_address;
  country_Json;
  state_Json;
  city_Json;

  //bank routing no variable
  routingNo;
  routingNoValue;

  //Hourly Rate variable
  baseRate1;
  baseRate2;
  baseRate3;
  baseRate4;
  baseRate5;
  baseRate6;

  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    public service: HttpService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
  ) {
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

  ngOnInit() {
    // this.addBankInfo(); // add bank details

    this.GetLOB();
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
    this.createForm2();
    this.getUserLanguage();
  }

  /*========== Bank Routing Value Start Here========*/
  createForm2() {
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
  }
  /*========== Bank Routing Value End Here========*/

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
    else {
      this.service.getCityCode(state_id).subscribe(res => {
        if (res['status'] == '1') {
          this.city_Obj = res['data'];
        }
      });
    }
  }
  /*==========  City Code for Mobile End Here========*/

MasterLobData=[]
  GetLOB() {
    this.service.get('getlob').subscribe(res => {
      this.MasterLobData = res['data'];
    });
  }


  UserLangData = []
  getUserLanguage() {
    this.service.getUserLanguage(this.interId).subscribe(res => {
      this.UserLangData = res['data'];
    });
  }
  on_site_language = 0;
  opi_language = 0;
  vri_language = 0;
  vci_language = 0;
  rsi_language = 0;
  vci_opi_language = 0;

lanArr=[];
  addLanguageOnAssignment(type, val) {
    if (type == 'on_site') {
      this.lanArr.push(val)
      this.on_site_language = val;
      this.service.baseRateDetail(val).subscribe(res => {
        this.baseRate1 = res['data']['0'];
        let langArr1 = <FormArray>this.assignmentForm.controls["assignment"];
        langArr1.controls[0].patchValue({
          hourly_rate: this.baseRate1.base_rate,
          Communityhourly_rate: this.baseRate1.base_rate,
          Medicalhourly_rate: this.baseRate1.base_rate,
        })
      });
    }

    if (type == 'opi') {
      this.opi_language = val;
      this.service.baseRateDetail(val).subscribe(res => {
        this.baseRate2 = res['data']['0'];
        let langArr2 = <FormArray>this.assignmentForm.controls["assignment_opi"];
        langArr2.controls[0].patchValue({
          opi_hourly_rate: this.baseRate2.base_rate
        })
      });
    }

    if (type == 'vri') {
      this.vri_language = val;
      this.service.baseRateDetail(val).subscribe(res => {
        this.baseRate3 = res['data']['0'];
        let langArr3 = <FormArray>this.assignmentForm.controls["assignment_vri"];
        langArr3.controls[0].patchValue({
          vri_hourly_rate: this.baseRate3.base_rate
        })
      });
    }

    if (type == 'vci') {
      this.vci_language = val;
      this.service.baseRateDetail(val).subscribe(res => {
        this.baseRate4 = res['data']['0'];
        let langArr4 = <FormArray>this.assignmentForm.controls["assignment_vcl"];
        langArr4.controls[0].patchValue({
          vcl_hourly_rate: this.baseRate4.base_rate
        })
      });
    }

    if (type == 'rsi') {
      this.rsi_language = val;
      this.service.baseRateDetail(val).subscribe(res => {
        this.baseRate5 = res['data']['0'];
        let langArr5 = <FormArray>this.assignmentForm.controls["assignment_rsi"];
        langArr5.controls[0].patchValue({
          rsi_hourly_rate: this.baseRate5.base_rate
        })
      });
    }

    if (type == 'vci_opi') {
      this.vci_opi_language = val;
      this.service.baseRateDetail(val).subscribe(res => {
        this.baseRate6 = res['data']['0'];
        let langArr6 = <FormArray>this.assignmentForm.controls["assignment_vci_opi"];
        langArr6.controls[0].patchValue({
          vci_opi_hourly_rate: this.baseRate6.base_rate
        })
      });
    }
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
    console.log('===============',this.detail_Obj)
    this.generalForm.get('title').patchValue(this.detail_Obj.title);
    this.generalForm.get('email').patchValue(this.detail_Obj.email);
    this.generalForm.get('first_name').patchValue(this.detail_Obj.first_name);
    this.generalForm.get('last_name').patchValue(this.detail_Obj.last_name);
    // this.generalForm.get('apartment').patchValue( this.detail_Obj.apartment);
    // this.generalForm.get('middle_name').patchValue( this.detail_Obj.middle_name);
    this.generalForm.get('nick_name').patchValue(this.detail_Obj.nick_name);
    this.generalForm.get('notes').patchValue(this.detail_Obj.about);
    this.generalForm.get('mobile').patchValue(this.detail_Obj.mobile);
    this.generalForm.get('country_code').patchValue(this.detail_Obj.country_code);
    this.generalForm.get('address').patchValue(this.detail_Obj.address);
    this.generalForm.get('dob').patchValue(this.detail_Obj.date_of_birth);
    this.generalForm.get('international_phone_no').patchValue(this.detail_Obj.international_phone_no);

    this.generalForm.get('country').patchValue(this.detail_Obj.country);
    this.generalForm.get('state').patchValue(this.detail_Obj.state);
    if (this.detail_Obj.gender == "Other") {
      this.showOther = true;
    }
      this.generalForm.get('gender').patchValue(this.detail_Obj.gender);
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
    this.generalForm.get('ssn').patchValue(this.detail_Obj.ssn_no);
    this.generalForm.get('ein').patchValue(this.detail_Obj.ein_no);

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
        this.role_idAPI = this.detail_Obj.role_id
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
        this.detail_Obj = res;
      }

      if (this.detail_Obj?.bank_profile_status == '1' && this.detail_Obj?.interpreter_assignment_status == '1' && this.detail_Obj?.user_profile_status == '1' && this.detail_Obj?.skill_complete == '1') {
        this.showArroveBtn = 1
      } else {
        this.showArroveBtn = 0

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
    this.spinner.show();
    this.generalForm.value.interpreter_id = this.interId;
    this.generalForm.value.address = this.new_address;
    this.generalForm.value.latitude = this.latitude
    this.generalForm.value.longitude = this.longitude

    console.log("inside", this.generalForm.value);
    this.service.updateInterpreter(this.generalForm.value).subscribe(res => {
      this.spinner.hide();
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
  selectRoutingNo(e) {
    this.routingNoValue = e.target.value;
    // if(this.routingNoValue.length == 9) {
    this.service.getRoutingNumber(this.routingNoValue).subscribe(res => {
      if (res['code'] == 200) {
        this.routingNo = res;
        console.log("api respone for routing no", this.routingNo);
        // this.bankingRoutingForm.get('routing_number').patchValue(this.routingNo.routing_number);
        this.bankingRoutingForm.get('bank_name').patchValue(this.routingNo.customer_name);
        this.bankingRoutingForm.get('bank_address').patchValue(this.routingNo.address);
      }
      else {
        this.routingNo = res;
        this.bankingRoutingForm.get('bank_name').patchValue('');
        this.bankingRoutingForm.get('bank_address').patchValue('');
        // this.toastr.error( this.routingNo.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
      }
    });
    //  return false;
    // }


  }

  //add bank details
  addBankDetails() {
    this.submitted = true;
    if (this.bankingRoutingForm.invalid) {
      return;
    }
    this.submitted = false;
    this.bankingRoutingForm.value.user_id = this.interId;
    this.service.getBankingAdd(this.bankingRoutingForm.value)
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
          this.toastr.error(this.banking_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
          // this.router.navigate(['/languages/list']);  
        }

      });
  }

  //update bank details
  updateBankDetails() {
    this.submitted = true;
    if (this.bankingRoutingForm.invalid) {
      return;
    }
    this.submitted = false;
    this.bankingRoutingForm.value.user_id = this.interId;
    this.service.bankingUpdate(this.bankingRoutingForm.value)
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

  rsiShow() {
    this.rsiInfo = true;
  }

  vci_opiShow() {
    this.vci_opi = true;
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


    if (eveKey == '5') {
      if (event.target.checked) {
        this.rsiInfo = true;
      } else {
        this.rsiInfo = false;
      }
    }
    console.log(eveKey)
    console.log(event.target.checked)
    if (eveKey == '6') {
      if (event.target.checked) {
        this.vci_opi = true;
      } else {
        this.vci_opi = false;
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

  geocodeLatLng(latitude, longitude) {
     this.spinner.show();
         this.country_Json=[];
        this.state_Obj=[];
        this.city_Obj=[];
    var geocoder = new google.maps.Geocoder;
    var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    geocoder.geocode({ 'location': latlng }, (results, status) => {
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
            if (res['status'] == '1') {
              this.country_Json = res['data'];
              let contHash = this.country_Json.find(cont => cont.name == country)
              this.generalForm.get('country').patchValue(contHash.id);
              //------------ State api call ----------------------------//
              this.service.getStateCode(contHash.id).subscribe(contryRes => {

                if (contryRes['status'] == '1') {
                  this.state_Obj = contryRes["data"];
                  this.timezone_Obj = contryRes['timeZoneData']['timezones'];
                  let stateHash = this.state_Obj.find(st => st.name == state);
                  if (stateHash) {
                    this.generalForm.get('state').patchValue(stateHash.id);
                    //------------ City api call ----------------------------//
                    this.service.getCityCode(stateHash.id).subscribe(cityRes => {
                      if (cityRes['status'] == '1') {
                        this.city_Obj = cityRes["data"];
                        let cityHash = this.city_Obj.find(ct => ct.name == city)
                        this.generalForm.get('city').patchValue(cityHash.id);
                        this.spinner.hide();
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
      simultaneous_doc: [0],
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
    // for (let a of this.lang) {
    // }
      formData.append('secondary_language', JSON.stringify(this.lang));

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
        this.ngOnInit();
      } else {
        this.toastr.error(this.skill_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
      }
    });
  }

  imgview(e: string) {
    console.log("images", e);
    window.open(this.documentUrl + e);
  }

  private assignmentGroup(): FormGroup {
    return this.fb.group({
      id: [''],
      lob: [''],
      language_id: [0],
      hourly_rate: [0],
      Communityhourly_rate:[0],
      Medicalhourly_rate:[0],
      hourly_rate_min_paid: [0],
      hourly_rate_pay_increment: [0],
      half_day: [0],
      half_day_min_paid: [0],
      half_day_pay_increment: [0],
      full_day: [0],
      full_day_min_paid: [0],
      full_day_pay_increment: [0]
    });
  }

  private opiAssignmentGroup(): FormGroup {
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
  }

  private vriAssignmentGroup(): FormGroup {
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
  }

  private vclAssignmentGroup(): FormGroup {
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
  }

  private rsiAssignmentGroup(): FormGroup {
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
  } private vci_opiAssignmentGroup(): FormGroup {
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
  get assignmentRsiArray(): FormArray {
    return <FormArray>this.assignmentForm.get('assignment_rsi');
  }

  get assignmentVcl_opiArray(): FormArray {
    return <FormArray>this.assignmentForm.get('assignment_vci_opi');
  }




  getAssignmentSettingByInterpreterId() {
    this.service.getAssignmentSettingByInterpreterId(this.interId).subscribe(res => {
      console.log('dev------------------------------', res)
      for (var i = 0; i < res.length; ++i) {
        if (res[i].assignment_type == 1 && res[i].status == 1) {
          this.onsiteInfo = true;
          if (document.getElementById('on-site') != null) {
            document.getElementById('on-site')['checked'] = true;
          }
          this.on_site_language_btn = res[i].language_id;

          let langArr1 = <FormArray>this.assignmentForm.controls["assignment"];
          langArr1.controls[0].patchValue({
            id: res[i].id,
            lob: res[i].lob,
            language_id: res[i].language_id,
            // hourly_rate: res[i].rates_on_duration_hourly,
            hourly_rate_min_paid: res[i].min_paid_hourly,
            hourly_rate_pay_increment: res[i].pay_increment_hourly,
            half_day: res[i].rates_on_duration_half_day,
            half_day_min_paid: res[i].min_paid_half_day,
            half_day_pay_increment: res[i].pay_increment_half_day,
            full_day: res[i].rates_on_duration_full_day,
            full_day_min_paid: res[i].min_paid_full_day,
            full_day_pay_increment: res[i].pay_increment_full_day
          });
          // Communityhourly_rate
// Medicalhourly_rate
          for (var legalI = 0; legalI < res[i].settingsLob.length; ++legalI) {
              if(res[i].settingsLob[legalI].lob == 'Legal'){
                langArr1.controls[0].patchValue({hourly_rate:res[i].settingsLob[legalI].rates_on_duration_hourly})
              }
              if(res[i].settingsLob[legalI].lob == 'Community'){
                langArr1.controls[0].patchValue({Communityhourly_rate:res[i].settingsLob[legalI].rates_on_duration_hourly})
              }
              if(res[i].settingsLob[legalI].lob == 'Medical'){
                langArr1.controls[0].patchValue({Medicalhourly_rate:res[i].settingsLob[legalI].rates_on_duration_hourly})
              }
          }
        }

        if (res[i].assignment_type == 2 && res[i].status == 1) {
          this.opiInfo = true;
          if (document.getElementById('opi') != null) {
            document.getElementById('opi')['checked'] = true;
          }
          this.opi_language_btn = res[i].language_id;

          let langArr2 = <FormArray>this.assignmentForm.controls["assignment_opi"];
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
          this.vriInfo = true;
          if (document.getElementById('vri') != null) {
            document.getElementById('vri')['checked'] = true;
          }
          this.vri_language_btn = res[i].language_id;

          let langArr3 = <FormArray>this.assignmentForm.controls["assignment_vri"];
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
          this.vclInfo = true;
          if (document.getElementById('vcl') != null) {
            document.getElementById('vcl')['checked'] = true;
          }
          this.vci_language_btn = res[i].language_id;

          let langArr4 = <FormArray>this.assignmentForm.controls["assignment_vcl"];
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
          this.rsiInfo = true;
          if (document.getElementById('rsi') != null) {
            document.getElementById('rsi')['checked'] = true;
          }
          this.rsi_language_btn = res[i].language_id;
          let langArr5 = <FormArray>this.assignmentForm.controls["assignment_rsi"];
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
          this.vci_opi = true;
          if (document.getElementById('vci_opi') != null) {
            document.getElementById('vci_opi')['checked'] = true;
          }


          this.vci_opi_language_btn = res[i].language_id;

          let langArr6 = <FormArray>this.assignmentForm.controls["assignment_vci_opi"];
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
    })

  }
  addInterpreterAssignment(type) {

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

    console.log('data', this.assignmentForm.value)
    // return
    this.service.addInterpreterAssignmentSetting(this.assignmentForm.value)
      .subscribe(res => {
        if (res['status'] == 1) {
          this.ass_Obj = res
          this.toastr.success(this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
          if (type == 'skills') {
            this.assignment_form = true;
            this.general_form = false;
            this.skills_form = false;
            this.banking_form = false;
          }
          else {
            this.banking_form = true;
            this.assignment_form = false;
            this.general_form = false;
            this.skills_form = false;

          }


        } else {
          this.ass_Obj = res
          this.toastr.error(this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
        }
      });

  }
showLegalLob=1;
showCommunityLob=0;
showMedicalLob=0;
  logChange(val){
    console.log(val)
    if(val == 'Legal'){
      this.showLegalLob=1;
      this.showCommunityLob=0;
      this.showMedicalLob=0;
    }
    if(val == 'Community'){
      this.showLegalLob=0;
      this.showCommunityLob=1;
      this.showMedicalLob=0;
    }
    if(val == 'Medical'){
      this.showLegalLob=0;
      this.showCommunityLob=0;
      this.showMedicalLob=1;
    }
  }

  addInterpreterAssignmentSave(type) {
    console.log(this.assignmentForm.value)
    console.log('==============lanArr',this.lanArr)
    // return
    console.log(type)

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


    console.log('data', this.assignmentForm.value)
    // return
    this.service.post('update_Account_Setting_Interpreter_Profile', this.assignmentForm.value)
      .subscribe(res => {
        if (res['status'] == 1) {
          this.ass_Obj = res
          this.toastr.success(this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
          if (type == 'skills') {
            this.assignment_form = true;
            this.general_form = false;
            this.skills_form = false;
            this.banking_form = false;
            

          }
          else {
            this.banking_form = true;
            this.assignment_form = false;
            this.general_form = false;
            this.skills_form = false;
           ;


          }


        } else {
          this.ass_Obj = res
          this.toastr.error(this.ass_Obj.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
        
        
      }
            this.showLegalLob=1;
              this.showCommunityLob=0;
              this.showMedicalLob=0;
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
  ApproveInterpreter() {
    alert('dev')
  }

}
