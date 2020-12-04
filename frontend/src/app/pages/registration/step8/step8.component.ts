import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css']
})
export class Step8Component implements OnInit {

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

  stepEightForm: FormGroup;
  submitted: boolean;
  languageObj;
  step8_Obj;
  public newlanguageVal;
  constructor(public service:CommonService,
    private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private toastr: ToastrService,
    public validation: ValidationsService,) { }

  ngOnInit() {
    this.languageList();
    this.createForm1();
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
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }


          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.lat_value =  this.latitude;
          this.long_value =  this.longitude;

          console.log("latitude 1--", this.lat_value)
          console.log("longitude 2--", this.long_value)
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
    this.stepEightForm = this.fb.group({
      business: ['',this.validation.name_validation],
      requester_name: ['',this.validation.name_validation],
      office_phone: ['',this.validation.mobile_validator],
      email_address: ['',this.validation.email_validator],
      location1: ['',this.validation.name_validation],
      location2: ['',this.validation.onlyRequired_validator],
      location3: ['',this.validation.mobile_validator],
      name_of_provider: ['',this.validation.name_validation],
      interpreter: ['',this.validation.name_validation],
      case:['',this.validation.name_validation],
      nature_of_appointment:['',this.validation.name_validation],
      language: ['',this.validation.onlyRequired_validator],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      notes:['',this.validation.name_validation],
      latitude:[''],
      longitude:[''],
      type:['8'],
      })
  }
  /*==========Step Form Value Start Here========*/

  languageList(){
    this.service.getLanguage()
    .subscribe(res => {
        console.log("api responsee",res);
        this.languageObj = res['data'];
        console.log("llllllll", this.languageObj);
    });
   }

   onChange(id){
    this.newlanguageVal = id.target.value;
    console.log("iddddddddddd", this.newlanguageVal);
   }

    /*==========Today and future date function start here========*/
  date_func(){
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
  }
    /*==========Today and future date function end here========*/

   /*==========Start and end time valid function start here========*/

   start_end_time(e){ 
    var beginningTime = this.stepEightForm.value.start_time;
    var endTime = this.stepEightForm.value.end_time;
    // var beginningTime = moment(this.stepEightForm.value.start_time, 'h:mma');
    // var endTime = moment(this.stepEightForm.value.end_time, 'h:mma');
    if (beginningTime > endTime) {
      this.stepEightForm.controls['start_time'].setValue('');
      this.stepEightForm.controls['end_time'].setValue('');
      this.toastr.error("Invalid Time",'', { timeOut: 2000 });
    }
    if (beginningTime == endTime) {
      this.stepEightForm.controls['start_time'].setValue('');
      this.stepEightForm.controls['end_time'].setValue('');
      this.toastr.error("Invalid Time",'', { timeOut: 2000 });
    }
    if (beginningTime < endTime) {
      // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
    }
   }
    /*==========Start and end time valid function end here========*/


   submitForm8(){
    console.log("form value",this.stepEightForm.value);
    this.submitted = true;
    if (this.stepEightForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepEightForm.value.language = this.newlanguageVal;
    this.stepEightForm.value.location2 = this.address1;
    this.stepEightForm.value.latitude = this.latitude;
    this.stepEightForm.value.longitude = this.longitude;
    this.service.getStepEightForm(this.stepEightForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step8_Obj = res;
        console.log("ressss",this.step8_Obj);
        this.toastr.success(this.step8_Obj.message,'', { timeOut: 2000 });
        // this.reg_Msg = res
    });
  }

}
