import { Component, OnInit,ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader } from '@agm/core';
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
      address:['',this.validation.name_validation],
      // latitude:[''],
      // longitude:[''],
      // type:['1'],
      service_requested:['',this.validation.onlyRequired_validator],
      })
  }
  /*==========Step Form Value Start Here========*/

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

  submitForm1(){
    console.log("form value",this.stepOneForm.value);
    console.log("lat,long, addres", this.lat_value, this.long_value);
    this.submitted = true;
    if (this.stepOneForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepOneForm.value.language =  this.newlanguageVal;
    // this.stepOneForm.value.address = this.address1;
    // this.stepOneForm.value.latitude = this.lat_value;
    // this.stepOneForm.value.longitude = this.long_value;
    this.service.getStepOneForm(this.stepOneForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step1_Obj = res;
        console.log("ressss",this.step1_Obj);
        this.toastr.success(this.step1_Obj.message,'', { timeOut: 2000 });
        // this.step_Msg = res
    });
  }

  
}
