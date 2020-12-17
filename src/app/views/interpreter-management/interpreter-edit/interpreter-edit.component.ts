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
// import { MouseEvent } from '@agm/core';

 import { DataLayerService } from 'src/app/shared/services/data-layer.service';

@Component({
  selector: 'app-interpreter-edit',
  templateUrl: './interpreter-edit.component.html',
  styleUrls: ['./interpreter-edit.component.scss']
})
export class InterpreterEditComponent implements OnInit {

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
  role_id;
  editData;
  json_Obj;
  Id;
  editdata;
  editShowOther:boolean = false;
  selectedFile:File = null;
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
    private ngZone: NgZone
  ) { }

  ngOnInit(){
    this.createForm();  
    this.Id = JSON.parse(localStorage.getItem('rowId'));
    this.data = JSON.parse(localStorage.getItem('editData'));
    this.LanguageList();
    this.userRoleList();
    this.editUser();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.new_address=place['formatted_address'];
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

  }

  onSelect(item) {
    console.log('tag selected: value is' + item);
  }

  /*========== Form Value Start Here========*/
  createForm() {
    this.userEditForm = this.fb.group({ 
    first_name: ['', this.validation.name_validation],
    last_name: ['', this.validation.name_validation],
    email: [{value: '', disabled: true}],
    mobile: ['', this.validation.onlyRequired_validator],
    address: ['', this.validation.onlyRequired_validator],
    apartment:['', this.validation.onlyRequired_validator],
    // street:['', this.validation.onlyRequired_validator],
    gender: ['', this.validation.onlyRequired_validator],
    languageid:['', this.validation.onlyRequired_validator],
    latitude:[''],
    longitude:[''],
    primary_lang_id:['', this.validation.onlyRequired_validator],
    // user_role:[{value: '', disabled: true}],
      id:[''],
      rate:[''],
      image:[''],
      other_gender:[''],
    });
  }
  // /*========== Form Value End Here========*/
  
  /*========== Edit Input Value Start Here========*/
  patchValue(){
    // this.userEditForm.get('user_role').patchValue( this.json_Obj.role_id);
    this.userEditForm.get('email').patchValue( this.json_Obj.email);
    this.userEditForm.get('first_name').patchValue( this.json_Obj.first_name);
    this.userEditForm.get('last_name').patchValue( this.json_Obj.last_name);
    this.userEditForm.get('apartment').patchValue( this.json_Obj.apartment);
    // this.userEditForm.get('street').patchValue( this.json_Obj.street);
    this.userEditForm.get('mobile').patchValue( this.json_Obj.mobile);
    this.userEditForm.get('address').patchValue( this.json_Obj.address);
    this.userEditForm.get('latitude').patchValue( this.json_Obj.latitude);
    this.userEditForm.get('longitude').patchValue( this.json_Obj.longitude);
    //let itemsAsObjects = [{id: 0, display: 'Angular'}, {id: 1, display: 'React'}];
    this.userEditForm.get('languageid').patchValue( this.json_Obj.interLanguage);
    this.userEditForm.get('primary_lang_id').patchValue( this.json_Obj.primary_lang_id);
    this.userEditForm.get('gender').patchValue(this.json_Obj.gender);
    if(this.json_Obj.gender == 'Other'){
      this.editShowOther = true;
      this.userEditForm.get('other_gender').patchValue( this.json_Obj.other_gender);
    }
      this.userEditForm.get('rate').patchValue( this.json_Obj.interpreter_rate);
  }

  editUser() {
    console.log("edit id",this.Id);
    this.service.getInterpreterDetail( this.Id)
      .subscribe(res => {
          this.json_Obj = res['data']['0'];
          this.patchValue();
          console.log("edit api",this.json_Obj);
          localStorage.setItem('editData', JSON.stringify(this.json_Obj));
      })
  }

   /*==========Single Image Function Start Here========*/
   onSingleFileChange(event){
      let file: File = event.target.files[0];
      this.selectedFile= file;
   }
  /*==========Single Image Function End Here========*/

  /*==========Edit Input Value End Here========*/ 
  submitUser(){
      this.submitted = true;
      if (this.userEditForm.invalid) {
        return;
      }
      this.submitted = false;
      const formData: any = new FormData();
      formData.append('first_name', this.userEditForm.value.first_name);
      formData.append('last_name', this.userEditForm.value.last_name);
      formData.append('email', this.userEditForm.value.email);
      formData.append('mobile', this.userEditForm.value.mobile);
      formData.append('address', this.new_address);
      formData.append('apartment', this.userEditForm.value.apartment);
      // formData.append('street', this.userEditForm.value.street);
      formData.append('gender', this.userEditForm.value.gender);
      formData.append('other_gender', this.userEditForm.value.other_gender);
      formData.append('latitude', this.latitude);
      formData.append('longitude', this.longitude);
      formData.append('languageid', this.userEditForm.value.languageid);
      formData.append('id', this.json_Obj.id);
      formData.append('primary_lang_id', this.newlanguageVal);
      formData.append('rate', this.userEditForm.value.rate);
      formData.append('image', this.selectedFile);
      console.log("user value-",this.userEditForm.value.id)
      this.service.updateInterpreter(formData).subscribe(res => {
        this.useredit_Msg = res;
        if(res['status'] == 1){
          this.useredit_Obj = res
          console.log("api response", this.useredit_Obj);
          this.toastr.success( this.useredit_Msg.message,'', { timeOut: 1000 });
          this.router.navigate(['/interpreter/interpreter-list']);
        }else{
          this.toastr.error( this.useredit_Msg.message,'', { timeOut: 1000 });
          this.router.navigate(['/interpreter/interpreter-list']);  
        }                        
    });
}
  
  LanguageList(){
    this.service.getLanguageList()
    .subscribe(res => {
      if(res['status'] == 1){
        this.language_Obj = res['data'];
      }else{
        this.toastr.success( this.useredit_Msg.message,'', { timeOut: 1000 });
        this.router.navigate(['/interpreter/interpreter-list']); 
      }
    });
  }

  userRoleList(){
    this.service.roleList()
    .subscribe(res => {
        this.role_Obj = res['data'];
    });
  }

  onChange(id){
    this.newlanguageVal = id.target.value;
    console.log("newlanguageVal", this.newlanguageVal);
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

  // Radio button function
  radioButton1(){
    this.editShowOther = false;
  }
  radioButton2(){
      this.editShowOther = false;
  }
  radioButton3(){
      this.editShowOther = true;
  }

}
