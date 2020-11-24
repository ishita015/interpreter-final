import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
//import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute, Router } from '@angular/router';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { ToastrService } from 'ngx-toastr';


import { MapsAPILoader } from '@agm/core';
//import { MouseEvent } from '@agm/core';

 import { DataLayerService } from 'src/app/shared/services/data-layer.service';


@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  userEditForm: FormGroup;
  public data;
  public useredit_Obj;
  public useredit_Msg;
  submitted: boolean;
  items = [];
  language_Obj;
  public newlanguageVal;
  role_Obj;
  tagsCtrl1 = new FormControl(this.items);
  tagsCtrl2 = new FormControl([]);
  latlong='';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  new_address: string;
  private geoCoder;




  @ViewChild('search')
  public searchElementRef: ElementRef;

  
  constructor(
    public validation: ValidationsService,
    public service:HttpService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route : ActivatedRoute,
    private dl: DataLayerService,
  
  private mapsAPILoader: MapsAPILoader,
  // private ngZone: NgZone
  
    ) { }

  ngOnInit(){
    this. createForm();  
    // this.data = JSON.parse(localStorage.getItem('userData'));
    this.data = JSON.parse(localStorage.getItem('interpreterInfo'));
    // console.log("data user-",this.data[0]);
    console.log("interLanguage-",this.data[0].interLanguage);
   this.patchValue();
    this.LanguageList();
    this.userRoleList();

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // this.geoCoder = new google.maps.Geocoder;

      // let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      // autocomplete.addListener("place_changed", () => {
      //   this.ngZone.run(() => {
      //     //get the place result
      //     let place: google.maps.places.PlaceResult = autocomplete.getPlace();
      //     this.new_address=place['formatted_address'];
      //     //verify result
      //     if (place.geometry === undefined || place.geometry === null) {
      //       return;
      //     }
      //     // console.log("place-",place[0].formatted_address);
          
      //     //set latitude, longitude and zoom
      //     this.latitude = place.geometry.location.lat();
      //     this.longitude = place.geometry.location.lng();
          
      //     console.log("latitude-",this.latitude);
      //     console.log("longitude-",this.longitude);




      //     this.zoom = 12;
      //   });
      // });
    });

  }




  onSelect(item) {
    
    console.log('tag selected: value is' + item);
  }


  /*========== Form Value Start Here========*/
  createForm() {
    this.userEditForm = this.fb.group({ 
    name: ['', this.validation.onlyRequired_validator],
    email: ['', this.validation.onlyRequired_validator],
    password: ['', this.validation.onlyRequired_validator],
    mobile: ['', this.validation.onlyRequired_validator],
    address: ['', this.validation.onlyRequired_validator],
    gender: ['', this.validation.onlyRequired_validator],
    languageid:[''],
    latitude:[''],
    longitude:[''],
    primary_lang_id:['', this.validation.onlyRequired_validator],
    user_role:['', this.validation.onlyRequired_validator],
      id:['']
    });
  }
  // /*========== Form Value End Here========*/
  /*========== Edit Input Value Start Here========*/
  patchValue(){
    this.userEditForm.get('user_role').patchValue(this.data[0].role_id);
    this.userEditForm.get('email').patchValue(this.data[0].email);
    this.userEditForm.get('name').patchValue(this.data[0].name);
    this.userEditForm.get('mobile').patchValue(this.data[0].mobile);
    this.userEditForm.get('address').patchValue(this.data[0].address);
    this.userEditForm.get('latitude').patchValue(this.data[0].latitude);
    this.userEditForm.get('longitude').patchValue(this.data[0].longitude);

    //let itemsAsObjects = [{id: 0, display: 'Angular'}, {id: 1, display: 'React'}];

    this.userEditForm.get('languageid').patchValue(this.data[0].interLanguage);


    this.userEditForm.get('primary_lang_id').patchValue(this.data[0].primary_lang_id);
    // this.userEditForm.patchValue({ primary_lang_id:  this.data[0].primary_lang_id});
    this.userEditForm.get('gender').patchValue(this.data[0].gender);
    
    
  }



  


/*==========Edit Input Value End Here========*/ 
  submitUser(){
    console.log("formmmmmmmmmmmm",this.userEditForm.value);
    // console.log("form value",this.userEditForm.value);
      this.submitted = true;
      if (this.userEditForm.invalid) {
        // return;
      }
      this.submitted = false;

    this.userEditForm.value.latitude = this.latitude;
    this.userEditForm.value.longitude = this.longitude
    this.userEditForm.value.address =this.new_address;
    this.userEditForm.value.language = this.newlanguageVal;
    

    this.userEditForm.value.id =  this.data[0].id
    console.log("user value-",this.userEditForm.value)
      // console.log("api response",res);
    this.service.updateInterpreter(this.userEditForm.value)
                  .subscribe(res => {
                      // console.log("api response",res);
                      this.useredit_Obj = res
                      this.useredit_Msg = res;
                      console.log("api response", this.useredit_Obj);
                      this.toastr.success( this.useredit_Msg.message,'', { timeOut: 1000 });
                      this.router.navigate(['/users/user-list']);  
          });
        }
  

onChange(id){
  this.newlanguageVal = id.target.value;
  console.log("iddddddddddd", this.newlanguageVal);
 }




LanguageList(){
  this.service.getLanguageList()
  .subscribe(res => {
      // console.log("api response",res);
      this.language_Obj = res['data'];
      console.log("my testing", this.language_Obj);
  });
}


userRoleList(){
  this.service.roleList()
  .subscribe(res => {
      // console.log("api response",res);
      this.role_Obj = res['data'];
      console.log("my testing", this.role_Obj);
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
    console.log("latitude-",this.latitude);
    console.log("longitude-",this.longitude);

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
}
