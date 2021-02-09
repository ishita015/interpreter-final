import { Component, OnInit } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { HttpClient } from '@angular/common/http';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-request-schedular',
  templateUrl: './all-request-schedular.component.html',
  styleUrls: ['./all-request-schedular.component.scss']
})
export class AllRequestSchedularComponent implements OnInit {
  newRequestForm: FormGroup;
  public clientObj;
  public assignment_Obj;
  public platform_Obj;
  public language_Obj;
  public myvar;
  public onsite;
  simultaneous_var = false;
  public country_Obj;
  submitted: boolean;
  public save_obj;
  public save_Msg;
  public recurrent;
  assignment_var =false;
  days = false;
  public dailyData;
  start_end = true;
  every_show_hide = true;
  public days_Obj;
  public event_at;
  public scheduler_id;
  public ir_Obj;
  public entry_By_data;
  days2;
  constructor(
    public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private dl: DataLayerService,
    public service: HttpService,
     private http: HttpClient
  ) { }

  ngOnInit(){
    this.createForm1();
    this.allClientList();
    this.allAssignmentTypeList();
    this.allPlatformList();
    this.allLanguageList();
    this.CountryList();
    this.allDayList();
    this.date_func();
    this.assign_date_func();
    this.getIRList();
    this.scheduler_id = JSON.parse(localStorage.getItem('userId'));
    this.entry_By_data = JSON.parse(localStorage.getItem('loginData'));
    this.newRequestForm.get('entered_by').patchValue( this.entry_By_data.first_name);
  }

  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.newRequestForm = this.fb.group({
      ir: ['', this.validation.onlyRequired_validator],
      entered_by: ['', this.validation.onlyRequired_validator],
      client_name:['', this.validation.onlyRequired_validator],
      // requested_by:['', this.validation.onlyRequired_validator],
      request_date:['', this.validation.onlyRequired_validator],
      platform:['', this.validation.onlyRequired_validator],
      assignment_type:['', this.validation.onlyRequired_validator],
      // simultaneous:[''],
      receivers_required:[''],
      language:['', this.validation.onlyRequired_validator],
      assignment_date:['', this.validation.onlyRequired_validator],
      from_time: ['', this.validation.onlyRequired_validator],
      to_time: ['', this.validation.onlyRequired_validator],
      recurrent_assignment:['', this.validation.onlyRequired_validator],
      contact_name:['', this.validation.onlyRequired_validator],
      cell_phone:['', this.validation.onlyRequired_validator],
      building_name:['', this.validation.onlyRequired_validator],
      building_address:['', this.validation.onlyRequired_validator],
      room:['', this.validation.onlyRequired_validator],
      notes:['', this.validation.onlyRequired_validator],
      phone_code:['', this.validation.onlyRequired_validator],
      how_many_receivers:[''],
      event_start_time:[''],
      event_end_time:[''],
      event_start_date:[''],
      event_end_date:[''],
      repeats:[''],
      every:[''],
      event_duration:[''],
      event_at:[''],
      scheduler_id:['']
    })
  }
  /*==========Step Form Value End Here========*/

  getIRList(){
    this.service.get('getLastRISEntry')
    .subscribe(res => {
      this.ir_Obj = res['data'];
      this.newRequestForm.get('ir').patchValue( this.ir_Obj.req);
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
        this.clientObj = res['data'];
       
      });
  }
 /*==========Client name list end Here========*/

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
 onChangeRequest($event){

 }
 onChangeClient($event){

 }
 onChangeAssign($event){

 }
//  onChangePlatform(id){
//    this.onsite = id.target.value
//    console.log("aaaaaaaaaaaa",this.onsite);
//    if(this.onsite == '1'){
//     this.simultaneous_var = true;
//    }
   
//  }
 onChangeLanguage($event){

 }
 newRecurrent(ev){
  this.recurrent = ev.target.value;
  if( this.recurrent == '1'){
    this.assignment_var = true;
   }
  else 
  {
    this.assignment_var = false;
  }
 }

 newRepeat(event){
  this.dailyData = event.target.value;
  if( this.dailyData == '1'){
    this.event_at = [0,1,2,3,4,5,6]
    this.days = true;
    this.start_end = false;
    this.every_show_hide = false;
    this.days2 =false;
   }
   else if(this.dailyData == '2'){
    this.every_show_hide = true;
    this.days = false;
    this.start_end = true;
    this.days2 =true;
   }
   else if(this.dailyData == '3'){
    this.every_show_hide = false;
   }
   else if(this.dailyData == '4'){
    this.every_show_hide = false;
  }
  else 
  {
    this.days = false;
    this.start_end = true;
    this.every_show_hide = true;
  }
 

 }
 newSimultaneous(e){
  console.log(e.target.value);
    this.myvar = e.target.value
    if( this.myvar == 1 && this.newRequestForm.value.platform == 'On-Site'){
      this.simultaneous_var = true;
     }
    else 
    {
      this.simultaneous_var = false;
      // this.newRequestForm.controls['receivers_required'].setValue('');
    }
 }

 changeCheckbox(i){
 
    // this.tags[i] = !this.tags[i];
 
 }

  /*==========Today and future date function start here========*/
  date_func() {
    if (document.getElementsByName("setTodaysDate") != null) {
      var today = new Date().toISOString().split('T')[0];
      if (document.getElementsByName("setTodaysDate")[0] != undefined) {
        document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
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

  start_end_date($eve){
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

  start_end_time_repeats(e){
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
    var beginningTime = this.newRequestForm.value.from_time;
    var endTime = this.newRequestForm.value.to_time;
    if (beginningTime > endTime) {
      this.newRequestForm.controls['from_time'].setValue('');
      this.newRequestForm.controls['to_time'].setValue('');
      this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    }
    if (beginningTime == endTime) {
      this.newRequestForm.controls['from_time'].setValue('');
      this.newRequestForm.controls['to_time'].setValue('');
      this.toastr.error("Invalid Time", '', { timeOut: 2000 });
    }
    if (beginningTime < endTime) {
      // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
    }
  }
  /*==========Start and end time valid function end here========*/
  saveUser(){
    this.submitted = true;
    if (this.newRequestForm.invalid) {
      return;
    }
    this.submitted = false;
    this.newRequestForm.value.event_at = this.event_at;
    this.newRequestForm.value.scheduler_id = this.scheduler_id;
    this.service.post('enterNewInterpreterRequestBasicTab',this.newRequestForm.value).subscribe(res => {
      if (res['status'] == true) {
      this.save_obj = res;
      this.save_Msg = res;
      this.toastr.success(this.save_Msg.msg, '', { timeOut: 1000, positionClass: 'toast-top-center' });
      this.router.navigate(['/request-scheduler/all-request-list-schedular']);
      }
    });
  }
}
