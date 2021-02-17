import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { HttpClient } from '@angular/common/http';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { environment } from 'src/environments/environment';
import { enableRipple } from '@syncfusion/ej2-base';
import * as moment from 'moment';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
//enable ripple style
enableRipple(true);
@Component({
  selector: 'app-all-request-schedular',
  templateUrl: './all-request-schedular.component.html',
  styleUrls: ['./all-request-schedular.component.scss']
})
export class AllRequestSchedularComponent implements OnInit {


  newRequestForm: FormGroup;
  educationRequestForm: FormGroup;
  // legalRequestForm:FormGroup;
  communityRequestForm: FormGroup;
  medicalRequestForm: FormGroup;
  // otherRequestForm:FormGroup;
  public clientObj: string[] = [];
  public assignment_Obj;
  public platform_Obj;
  public language_Obj;
  public myvar;
  public onsite;
  simultaneous_var = false;
  public country_Obj;
  submitted: boolean;
  submittedMed: boolean;
  submittedEdu: boolean;
  submittedComm: boolean;
  public save_obj;
  public save_Msg;
  public recurrent;
  assignment_var = false;
  days = false;
  public dailyData;
  start_end = true;
  every_show_hide = true;
  public days_Obj;
  public event_at;
  public scheduler_id;
  public ir_Obj;
  public entry_By_data;
  public days2;
  public editId;
  public edit_Obj;
  public lob_Obj;

  public formatString: string = 'HH:mm';
  public interval: number = 5;

  // map variable
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  sec_address: string;
  new_address: string;
  private geoCoder;
  @ViewChild('search', { static: false }) searchElementRef: ElementRef;  
  // maps the local data column to fields property
  public localFields: Object = { value: 'name' };
  //set the placeholder to AutoComplete input

  //auto complete
  form: FormGroup;
  client_name: FormControl;
  filterRegions: Observable<any[]>;
  data1: string[] = [];

  myControl = new FormControl();



  showEductionForm = false;
  showMedicalForm = false;
  showLegalForm = false;
  showCommunityForm = false;
  showOtherForm = false;
  



  constructor(
    public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private dl: DataLayerService,
    public service: HttpService,
    private http: HttpClient,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader,
  ) { }

  ngOnInit() {
    
    this.createForm1();
    this.createForm2();
    this.createForm3();
    this.createForm4();
    this.allClientList();
    this.allAssignmentTypeList();
    this.allPlatformList();
    this.allLanguageList();
    this.CountryList();
    this.allDayList();
    this.date_func();
    this.assign_date_func();
    this.getIRList();
    this.allLobList();
    
    this.scheduler_id = JSON.parse(localStorage.getItem('userId'));
    this.entry_By_data = JSON.parse(localStorage.getItem('loginData'));
    this.newRequestForm.get('entered_by').patchValue(this.entry_By_data.first_name);
    this.editId = JSON.parse(localStorage.getItem('rowId'));
    //load Places Autocomplete
    //load Places Autocomplete
   

  }

  getGooleAddress(){
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.new_address = place['formatted_address'];
          console.log("address", this.new_address);

          this.sec_address = place['formatted_address'];

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // console.log("place-",place[0].formatted_address);

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          console.log("latitude-", this.latitude);
          console.log("longitude-", this.longitude);

          this.zoom = 12;

        });
      });
    });
  }

  
  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.newRequestForm = this.fb.group({
      ir: ['', this.validation.onlyRequired_validator],
      entered_by: ['', this.validation.onlyRequired_validator],
      client_name: ['', this.validation.onlyRequired_validator],
      // requested_by:['', this.validation.onlyRequired_validator],
      request_date: ['', this.validation.onlyRequired_validator],
      platform: ['', this.validation.onlyRequired_validator],
      assignment_type: [''],
      // simultaneous:[''],
      receivers_required: [''],
      language: ['', this.validation.onlyRequired_validator],
      assignment_date: ['', this.validation.onlyRequired_validator],
      from_time: ['', this.validation.onlyRequired_validator],
      to_time: ['', this.validation.onlyRequired_validator],
      recurrent_assignment: ['', this.validation.onlyRequired_validator],
      // name_of_contact_person: ['', this.validation.onlyRequired_validator],
      // cell_phone: ['', this.validation.onlyRequired_validator],
      // building_name: ['', this.validation.onlyRequired_validator],
      // building_address: ['', this.validation.onlyRequired_validator],
      // room: ['', this.validation.onlyRequired_validator],
      // notes: ['', this.validation.onlyRequired_validator],
      // phone_code: ['', this.validation.onlyRequired_validator],

      //  name_of_contact_person: [''],
      // cell_phone: [''],
      // building_name: [''],
      // building_address: [''],
      // room: [''],
      // notes: [''],
      // phone_code: [''],



      // caseworker_name:[''],
      // caseworker_lastname:[''],
      // position:[''],
      // contact_person_cellphone:[''],
      // case_name:[''],
      // client_firstname:[''],
      // client_lastname:[''],
      // trails:[''],
      // home_visit:[''],
      // apt:[''],

      how_many_receivers: [''],
      event_start_time: [''],
      event_end_time: [''],
      event_start_date: [''],
      event_end_date: [''],
      repeats: [''],
      every: [''],
      event_duration: [''],
      event_at: [''],
      scheduler_id: [''],
      requested_by: [''],
      lob: ['', this.validation.onlyRequired_validator],
      // latitude: [''],
      // longitude: [''],
      // address: [''],

    })
  }

  createForm2() {
    this.educationRequestForm = this.fb.group({
      name_of_contact_person: ['', this.validation.onlyRequired_validator],
      cell_phone: ['', this.validation.onlyRequired_validator],
      building_name: ['', this.validation.onlyRequired_validator],
      building_address: ['', this.validation.onlyRequired_validator],
      room: ['', this.validation.onlyRequired_validator],
      notes: ['', this.validation.onlyRequired_validator],
      phone_code: ['', this.validation.onlyRequired_validator],
      // address:[''],
      email: ['', this.validation.onlyRequired_validator],
      // latitude: [''],
      // longitude: [''],
    })
  }

  createForm3() {
    this.communityRequestForm = this.fb.group({
      caseworker_firstname: ['', this.validation.onlyRequired_validator],
      caseworker_lastname: ['', this.validation.onlyRequired_validator],
      position: ['', this.validation.onlyRequired_validator],
      contact_person_phone_code: ['', this.validation.onlyRequired_validator],
      contact_person_cellphone: ['', this.validation.onlyRequired_validator],
      phone_code: ['', this.validation.onlyRequired_validator],
      name_of_contact_person: ['', this.validation.onlyRequired_validator],
      cell_phone: ['', this.validation.onlyRequired_validator],
      case_name: ['', this.validation.onlyRequired_validator],
      client_firstname: ['', this.validation.onlyRequired_validator],
      client_lastname: ['', this.validation.onlyRequired_validator],
      trails: ['', this.validation.onlyRequired_validator],
      home_visit: [''],
      apt: [''],
      address: [''],
      practice_name: [''],
      provider_name: [''],
      provider_address: [''],
      room: [''],
      notes: [''],
      latitude: [''],
      longitude: [''],
      provider_latitude: [''],
      provider_longitude: [''],
    })
  }

  createForm4() {
    this.medicalRequestForm = this.fb.group({
      practice_name: ['', this.validation.onlyRequired_validator],
      provider_name: ['', this.validation.onlyRequired_validator],
      phone_code: ['', this.validation.onlyRequired_validator],
      cell_phone: ['', this.validation.onlyRequired_validator],
      address: [''],
      room: ['', this.validation.onlyRequired_validator],
      notes: ['', this.validation.onlyRequired_validator],
      latitude: [''],
      longitude: [''],
    })
  }

  /*==========Step Form Value End Here========*/

  getIRList() {
    this.service.get('getLastRISEntry')
      .subscribe(res => {
        this.ir_Obj = res['data'];
        this.newRequestForm.get('ir').patchValue(this.ir_Obj.req);
      });
  }
  /*========== Country Code for Mobile Start Here========*/

  CountryList() {
    this.service.getCountryMobileCode().subscribe(res => {
      if (res['status'] == '1') {
        this.country_Obj = res['data'];
      }
    });
  }

  /*==========  Country Code for Mobile End Here========*/

  /*==========Client name list start Here========*/

  allClientList() {
    this.service.get('getAllClients')
      .subscribe(res => {
        this.clientObj = res['data']
      });
    this.filterRegions = this.newRequestForm.get('client_name').valueChanges.pipe(
      startWith(''),
      map(value => this.getRegions(value))
    );
  }

  getRegions(name: string): any {
    return this.clientObj.filter((x: any) => x.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1);
  }


  /*==========Client name list end Here========*/


  /*==========LOB list start Here========*/

  allLobList() {
    this.service.get('getAllLOB')
      .subscribe(res => {
        this.lob_Obj = res['data'];

      });
  }
  /*==========LOB list end Here========*/

  /*==========Assignment Type list start Here========*/

  allAssignmentTypeList() {
    this.service.get('getAllAssignmentTypes')
      .subscribe(res => {
        this.assignment_Obj = res['data'];

      });
  }
  /*==========Assignment Type list end Here========*/
  /*==========Platform start Here========*/

  allPlatformList() {
    this.service.get('getAllPlatforms')
      .subscribe(res => {
        this.platform_Obj = res['data'];
      });
  }
  /*==========Platform end Here========*/
  /*==========Language start Here========*/

  allLanguageList() {
    this.service.get('getAllLanguages')
      .subscribe(res => {
        this.language_Obj = res['data'];
      });
  }
  /*==========Language end Here========*/

  /*==========Days api start Here========*/
  allDayList() {
    this.service.get('getDays')
      .subscribe(res => {
        this.days_Obj = res['data'];
      });
  }
  /*==========Days api end Here========*/
  onChangeRequest($event) {

  }
  onChangeClient(e) {
  }
  onChangeAssign($event) {

  }
  onChangeLanguage($event) {

  }
  homevisit(e) {
    this.getGooleAddress();
  }
  onChangeLob(e) {
    if (e.target.value == 'Education' || e.target.value == 'Legal1' || e.target.value == 'Others') {
      this.showEductionForm = true;
      this.showMedicalForm = false;
      this.showLegalForm = false;
      this.showCommunityForm = false;
      this.showOtherForm = false;
    }
    if (e.target.value == 'Medical') {
      this.showMedicalForm = true;
      this.showEductionForm = false;
      this.showLegalForm = false;
      this.showCommunityForm = false;
      this.showOtherForm = false;
      this.getGooleAddress();
    }
    if (e.target.value == 'Community') {
      this.showMedicalForm = false;
      this.showEductionForm = false;
      this.showLegalForm = false;
      this.showCommunityForm = true;
      this.showOtherForm = false;
    }
    //  else if(e.target.value == 'Legal1' || e.target.value == 'Others'){
    //   this.showMedicalForm = false;
    //   this.showEductionForm = false;
    //   this.showLegalForm = true;
    //   this.showCommunityForm = false;
    //   this.showOtherForm = false;
    //  }
    //  else if(e.target.value == 'Others'){
    //   this.showMedicalForm = false;
    //   this.showEductionForm = false;
    //   this.showLegalForm = false;
    //   this.showCommunityForm = false;
    //   this.showOtherForm = true;
    //  }
  }



  /*==========Client name search function start Here========*/


  /*==========Client name search function end Here========*/
  newRecurrent(ev) {
    this.recurrent = ev.target.value;
    if (this.recurrent == '1') {
      this.assignment_var = true;
    }
    else {
      this.assignment_var = false;
    }
  }

  newRepeat(event) {
    this.dailyData = event.target.value;
    if (this.dailyData == '1') {
      this.event_at = [0, 1, 2, 3, 4, 5, 6]
      this.days = true;
      this.start_end = false;
      this.every_show_hide = false;
      this.days2 = false;
    }
    else if (this.dailyData == '2') {
      this.every_show_hide = true;
      this.days = false;
      this.start_end = true;
      this.days2 = true;
    }
    else if (this.dailyData == '3') {
      this.every_show_hide = false;
    }
    else if (this.dailyData == '4') {
      this.every_show_hide = false;
    }
    else {
      this.days = false;
      this.start_end = true;
      this.every_show_hide = true;
    }


  }
  newSimultaneous(e) {
    console.log(e.target.value);
    this.myvar = e.target.value
    if (this.myvar == 1 && this.newRequestForm.value.platform == 'On-Site') {
      this.simultaneous_var = true;
    }
    else {
      this.simultaneous_var = false;
    }
  }

  changeClient(data, e) {
    this.newRequestForm.get('requested_by').patchValue(data.contact_person_name);
  }

  changeCheckbox(i) {

  }

  /*==========Today and future date function start here========*/
  date_func() {
    if (document.getElementsByName("setTodaysDate") != null) {
      var today = new Date().toISOString().split('T')[0];
      if (document.getElementsByName("setTodaysDate")[0] != undefined) {
        document.getElementsByName("setTodaysDate")[0].setAttribute('max', today);
      }
    }
  }
  assign_date_func() {
    if (document.getElementsByName("assignDate") != null) {
      var date = new Date().toISOString().split('T')[0];
      if (document.getElementsByName("assignDate")[0] != undefined) {
        document.getElementsByName("assignDate")[0].setAttribute('min', date);
      }
    }
  }
  /*==========Today and future date function end here========*/

  /*==========Start and end time valid function start here========*/

  start_end_date($eve) {
    var beginningDate = this.newRequestForm.value.event_start_date;
    var endDate = this.newRequestForm.value.event_end_date;
    if (beginningDate > endDate) {
      this.newRequestForm.controls['event_start_date'].setValue('');
      this.newRequestForm.controls['event_end_date'].setValue('');
      this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    }
    if (beginningDate == endDate) {
      this.newRequestForm.controls['event_start_date'].setValue('');
      this.newRequestForm.controls['event_end_date'].setValue('');
      this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    }
    if (beginningDate < endDate) {

      // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
    }
  }

  start_end_time_repeats(e) {
    var beginningTimeRep = this.newRequestForm.value.event_start_time;
    var endTimeRep = this.newRequestForm.value.event_end_time;
    if (beginningTimeRep > endTimeRep) {
      this.newRequestForm.controls['event_start_time'].setValue('');
      this.newRequestForm.controls['event_end_time'].setValue('');
      this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    }
    if (beginningTimeRep == endTimeRep) {
      this.newRequestForm.controls['event_start_time'].setValue('');
      this.newRequestForm.controls['event_end_time'].setValue('');
      this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    }
    if (beginningTimeRep < endTimeRep) {
      // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
    }
  }

  start_end_time(e) {

    // var beginningTime = this.newRequestForm.value.from_time;
    // var endTime = this.newRequestForm.value.to_time;
    // if (beginningTime > endTime) {

    //   this.newRequestForm.controls['from_time'].setValue('');
    //   this.newRequestForm.controls['to_time'].setValue('');
    //   this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    // }
    // if (beginningTime == endTime) {

    //   this.newRequestForm.controls['from_time'].setValue('');
    //   this.newRequestForm.controls['to_time'].setValue('');
    //   this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    // }
    // if (beginningTime < endTime) {

    // }
  }
  /*==========Start and end time valid function end here========*/
  saveUser() {
    console.log("=====newRequestForm",this.newRequestForm.invalid)
    console.log("=====educationRequestForm",this.educationRequestForm.invalid)
    console.log("=====showEductionForm",this.showEductionForm)
    console.log("=====medicalRequestForm", this.medicalRequestForm.invalid)
    console.log("=====showMedicalForm",this.showMedicalForm)
    console.log("=====communityRequestForm",this.communityRequestForm.invalid)
    console.log("=====showCommunityForm",this.showCommunityForm)
    this.submitted = true;
    if(this.showEductionForm){
      this.submittedEdu = true;
    }
    if (this.showEductionForm && this.educationRequestForm.invalid && this.newRequestForm.invalid) {
      console.log("anana")
      return;
    }

    if(this.showMedicalForm == true){
      this.submittedMed = true;
    }
    if (this.showMedicalForm && this.medicalRequestForm.invalid && this.newRequestForm.invalid) {
      return;
    }

    if(this.showCommunityForm){
      this.submittedComm = true;
    }
    if (this.showCommunityForm && this.communityRequestForm.invalid && this.newRequestForm.invalid) {
      return;
    }
   
    let stime = moment(this.newRequestForm.value.from_time).format("HH:mm");
    let etime = moment(this.newRequestForm.value.to_time).format("HH:mm");
    let s_eventtime = moment(this.newRequestForm.value.event_start_date).format("HH:mm");
    let e_enenttime = moment(this.newRequestForm.value.event_end_time).format("HH:mm");
    this.newRequestForm.value.from_time = stime;
    this.newRequestForm.value.to_time = etime;
    this.newRequestForm.value.event_start_time = s_eventtime;
    this.newRequestForm.value.event_end_time = e_enenttime;
    this.newRequestForm.value.event_at = this.event_at;
    this.newRequestForm.value.scheduler_id = this.scheduler_id;
    // this.newRequestForm.value.latitude = this.latitude;
    // this.newRequestForm.value.longitude = this.longitude;



    if (this.showEductionForm) {

      this.newRequestForm.value.education = this.educationRequestForm.value;
    }
    if (this.showMedicalForm) {
      this.medicalRequestForm.value.latitude = this.latitude;
      this.medicalRequestForm.value.longitude = this.longitude;
      this.medicalRequestForm.value.address = this.new_address;
      this.newRequestForm.value.medical = this.medicalRequestForm.value;
    }
    if (this.showCommunityForm) {
      this.communityRequestForm.value.latitude = this.latitude;
      this.communityRequestForm.value.longitude = this.longitude;
      this.communityRequestForm.value.address = this.new_address;
      this.newRequestForm.value.community = this.communityRequestForm.value;
    }
    console.log("formccc", this.newRequestForm.value);
    this.service.post('enterNewInterpreterRequestBasicTab', this.newRequestForm.value).subscribe(res => {
      if (res['status'] == true) {
        this.save_obj = res;
        this.save_Msg = res;
        this.toastr.success(this.save_Msg.msg, '', { timeOut: 1000, positionClass: 'toast-top-center' });
        this.router.navigate(['/request-scheduler/all-request-list-schedular']);
      }
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }



  markerDragEnd($event: any) {
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
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
}
