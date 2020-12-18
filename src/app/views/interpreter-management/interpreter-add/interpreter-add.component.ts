import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {} from 'googlemaps';


import { MapsAPILoader } from '@agm/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
@Component({
  selector: 'app-interpreter-add',
  templateUrl: './interpreter-add.component.html',
  styleUrls: ['./interpreter-add.component.scss']
})
export class InterpreterAddComponent implements OnInit {
  userForm: FormGroup;
    submitted: boolean;
    public user_Obj;
    public user_Msg;
    latlong = '';
    items = ['Javascript', 'Typescript'];
    // autocompletes;
    language_Obj;
    role_Obj;
    title: string = 'AGM project';
    latitude: number;
    longitude: number;
    zoom: number;
    address: string;
    new_address: string;
    private geoCoder;
    public newlanguageVal;
    public newrole;
    public country_Obj;
    tagsCtrl1 = new FormControl(this.items);
    tagsCtrl2 = new FormControl([]);
    // languageid = [];
    
    selectedFile:File = null;
    // @ViewChild('content1', {static: false}) content1 !: TemplateRef<any>;
    // name = 'Angular';

    showOther:boolean = false;

    @ViewChild('search')
    public searchElementRef: ElementRef;


    constructor(
      public validation: ValidationsService,
      private fb: FormBuilder,
      private toastr: ToastrService,
      private router: Router,
      private dl: DataLayerService,
      public service: HttpService,
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone
    ) { }

    ngOnInit() {
      this.createForm();
      this.LanguageList();
      this.userRoleList();
      this.CountryList();
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
          this.setCurrentLocation();
          this.geoCoder = new google.maps.Geocoder;

          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
          autocomplete.addListener("place_changed", () => {
              this.ngZone.run(() => {
                  //get the place result
                  let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                  this.new_address = place['formatted_address'];
                  //verify result
                  if (place.geometry === undefined || place.geometry === null) {
                      return;
                  }
                  // console.log("place-",place[0].formatted_address);

                  //set latitude, longitude and zoom
                  this.latitude = place.geometry.location.lat();
                  this.longitude = place.geometry.location.lng();

                  // console.log("latitude-",this.latitude);
                  // console.log("longitude-",this.longitude);

                  this.zoom = 12;
              });
          });
      });

  }

  onChange(id) {
      this.newlanguageVal = id.target.value;
    //   console.log("iddddddddddd", this.newlanguageVal);
  }

//   onChangeRole(id) {
//       this.newrole = id.target.value;
//       console.log("iddddddddddd", this.newrole);
//   }

  onSelect(item) {
      console.log('tag selected: value is' + item);
  }

    /*========== Form Value Start Here========*/
    createForm() {
        this.userForm = this.fb.group({
            first_name: ['', this.validation.name_validation],
            last_name: ['', this.validation.name_validation],
            email: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            address: ['', this.validation.onlyRequired_validator],
            apartment:['', this.validation.onlyRequired_validator],
            // street:['', this.validation.onlyRequired_validator],
            gender: ['', this.validation.onlyRequired_validator],
            languageid: [''],
            latitude: [''],
            longitude: [''],
            primary_language: ['', this.validation.onlyRequired_validator],
            // user_role: ['', this.validation.onlyRequired_validator],
            rate:[''],
            image:[''],
            other_gender:[''],
            country_code:['',this.validation.onlyRequired_validator]
        });
    }
    /*========== Form Value End Here========*/

    /*========== Country Code for Mobile Start Here========*/

    CountryList(){
        this.service.getCountryMobileCode().subscribe(res => {
          if(res['status']=='1'){
            console.log("api response",res);
            this.country_Obj = res['data'];
            console.log("countryyyyyyyyyyyyy", this.country_Obj);
          }
        });
      }
    
    /*==========  Country Code for Mobile End Here========*/
    

    /*==========Single Image Function Start Here========*/
    onSingleFileChange(event){
        let file: File = event.target.files[0];
        this.selectedFile= file;
        console.log("imagesss", this.selectedFile);
    }
  /*==========Single Image Function End Here========*/



    // saveUser() {
    //     this.submitted = true;
    //     if (this.userForm.invalid) {
    //         return;
    //     }
    //     this.submitted = false;
    //     this.userForm.value.latitude = this.latitude;
    //     this.userForm.value.longitude = this.longitude;
    //     this.userForm.value.address = this.new_address;
    //     this.userForm.value.language = this.newlanguageVal;
    //     // this.userForm.value.role = this.newrole;

    //     console.log("form value", this.userForm.value);
    //     this.service.interpreterAdd(this.userForm.value)
    //         .subscribe(res => {
    //             // console.log("api response",res);
    //             this.user_Obj = res
    //             this.user_Msg = res
    //             this.toastr.success(this.user_Msg.message, '', { timeOut: 1000 });
    //             this.router.navigate(['/interpreter/interpreter-list']);
    //         });
    // }


    saveUser(){
        console.log("languageid 1",this.userForm.value.languageid);
        // console.log("form value",this.adminProfileForm.value);
        this.submitted = true;
        if (this.userForm.invalid) {
          return;
        }
        this.submitted = false;

        const formData: any = new FormData();

        // for(let id of this.userForm.value.languageid){
        //     console.log("language--id",id);
        //     formData.append('languageid',id);
        // }

        // console.log("languageid",this.userForm.value.languageid);

        this.userForm.value.image = this.selectedFile;
        
        // this.userForm.value.user_id = this.userId; 
        
        formData.append('first_name', this.userForm.value.first_name);
        formData.append('last_name', this.userForm.value.last_name);
        formData.append('email', this.userForm.value.email);
        formData.append('mobile', this.userForm.value.mobile);
        formData.append('address', this.new_address);
        formData.append('password', this.userForm.value.password);
        formData.append('apartment', this.userForm.value.apartment);
        formData.append('other_gender', this.userForm.value.other_gender);
        formData.append('gender', this.userForm.value.gender);
        formData.append('latitude', this.latitude);
        formData.append('longitude', this.longitude);
        formData.append('languageid', this.userForm.value.languageid);
        formData.append('primary_language', this.newlanguageVal);
        formData.append('rate', this.userForm.value.rate);
        formData.append('country_code', this.userForm.value.country_code);
        // formData.append('latitude', this.userForm.value.address);
        formData.append('image', this.selectedFile);
        
        
        this.service.interpreterAdd(formData).subscribe(res => {
            this.user_Obj = res
            this.user_Msg = res
            this.toastr.success(this.user_Msg.message, '', { timeOut: 1000 });
            this.router.navigate(['/interpreter/interpreter-list']);
        });
      }




    LanguageList() {
      this.service.getLanguageList()
          .subscribe(res => {
              // console.log("api response",res);
              this.language_Obj = res['data'];
              console.log("my testing", this.language_Obj);
          });
  }

  userRoleList() {
      this.service.roleList()
          .subscribe(res => {
              // console.log("api response",res);
              this.role_Obj = res['data'];
              console.log("my testing", this.role_Obj);
          });
  }


  checkEmail($event, email) {
      console.log("email-", email)
      // console.log("event-",$event)
      this.service.checkUserEmail(email)
          .subscribe(res => {
              if (res['status'] == '1') {
                  alert(res['message']);
                  // this.userForm.value.email = '';
                  $event.target.value = "";
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

  // Radio button function
        radioButton1(){
            this.showOther = false;
        }
        radioButton2(){
            this.showOther = false;
        }
        radioButton3(){
            this.showOther = true;
        }
    }
