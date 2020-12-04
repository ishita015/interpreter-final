import { Component, OnInit,ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader } from '@agm/core';
import * as moment from 'moment';
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  visible: boolean;
  opacity: number;
}
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  lat_value:number;
  long_value:number;
  address1: string;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  
  stepOneForm: FormGroup;
  submitted: boolean;
  public step1_Obj;
  public languageObj;
  step_Msg;
  public newlanguageVal;

  startTime;
  endTime;
  strStartTime;
  strEndTime
  constructor( public service:CommonService,
    private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public router: Router,
    private toastr: ToastrService,
    public validation: ValidationsService,) { }

  ngOnInit() {
    this.createForm1();
    this.languageList();
    this.date_func();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,{});
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // console.log("latitude--",this.latitude)
          console.log("address--",place.formatted_address);
          this.address1 = place.formatted_address;


          console.log("address are coming--",this.address1);

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          // this.lat_value =  this.latitude;
          // this.long_value =  this.longitude;
          console.log("latitude 1--", this.latitude)
          console.log("longitude 2--", this.longitude)
          this.zoom = 12;
        });
      });
    });
  }

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
  
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
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
  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.stepOneForm = this.fb.group({
      caseworker_name: ['',this.validation.name_validation],
      requester_name: [''],
      adams_county: ['',this.validation.name_validation],
      office_phone: ['',this.validation.mobile_validator],
      cell_phone: ['',this.validation.mobile_validator],
      email_address: ['',this.validation.email_validator],
      site_contact: [''],
      case_name: ['',this.validation.name_validation],
      client_name: ['',this.validation.name_validation],
      trails: ['',this.validation.name_validation],
      language: ['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.name_validation],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      simultaneous:['',this.validation.onlyRequired_validator],
      address:['',this.validation.onlyRequired_validator],
      latitude:[''],
      longitude:[''],
      type:['1'],
      service_requested:['',this.validation.onlyRequired_validator],
      })
  }
  /*==========Step Form Value Start Here========*/

  /*==========Today and future date function start here========*/
  date_func(){
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
  }
 /*==========Today and future date function end here========*/

  languageList(){
    this.service.getLanguage()
    .subscribe(res => {
        console.log("api responsee list",res);
        this.languageObj = res['data'];
        console.log("lllllllllllllll",  this.languageObj);
        
    });
   }

   onChange(id){
    this.newlanguageVal = id.target.value;
    console.log("iddddddddddd", this.newlanguageVal);
   }

     /*==========Start and end time valid function start here========*/

   start_end_time(e){ 
    var beginningTime = this.stepOneForm.value.start_time;
    var endTime = this.stepOneForm.value.end_time;
    // var beginningTime = moment(this.stepOneForm.value.start_time, 'h:mma');
    // var endTime = moment(this.stepOneForm.value.end_time, 'h:mma');
    if (beginningTime > endTime) {
      this.stepOneForm.controls['start_time'].setValue('');
      this.stepOneForm.controls['end_time'].setValue('');
      this.toastr.error("Invalid Time",'', { timeOut: 2000 });
    }
    if (beginningTime == endTime) {
      this.stepOneForm.controls['start_time'].setValue('');
      this.stepOneForm.controls['end_time'].setValue('');
      this.toastr.error("Invalid Time",'', { timeOut: 2000 });
    }
    if (beginningTime < endTime) {
      // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
    }
   }
    /*==========Start and end time valid function end here========*/


  submitForm1(){
    // console.log("latitude 1--", this.latitude)
    // console.log("longitude 2--", this.longitude)
    console.log("address1--", this.address1);
    console.log("lat_value--", this.latitude);
    console.log("long_value--", this.longitude);
    this.stepOneForm.value.language =  this.newlanguageVal;
    this.stepOneForm.value.address = this.address1;
    this.stepOneForm.value.latitude = this.latitude;
    this.stepOneForm.value.longitude = this.longitude;
   
    // if(beginningTime && endTime){
    //   alert(1)
    //   console.log(beginningTime.isBefore(endTime)); // true
    //   return beginningTime.isBefore(endTime);
    // }
   

    this.submitted = true;
    if (this.stepOneForm.invalid) {
      return;
    }
    this.submitted = false;
   

    console.log("all val in form", this.stepOneForm.value);

    // this.service.getStepOneForm(this.stepOneForm.value)
    this.service.getStepTwelveForm(this.stepOneForm.value)
    
    .subscribe(res => {
        console.log("api response",res);
        this.step1_Obj = res;
        console.log("ressss",this.step1_Obj);
        this.toastr.success(this.step1_Obj.message,'', { timeOut: 2000 });
        // this.step_Msg = res
    });
  }

  
}
