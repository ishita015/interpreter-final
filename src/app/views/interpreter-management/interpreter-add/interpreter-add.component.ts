import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl } from '@angular/forms';
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
    title1: string = 'AGM project';
    latitude: number;
    longitude: number;
    zoom: number;
    address: string;
    sec_address:string;
    new_address: string;
    private geoCoder;
    public newlanguageVal;
    public newrole;
    public country_Obj;
    public firstnameVal;
    public lastnameVal;
    public username_Obj;
    public username_msg;
    fullnameVal
    tagsCtrl1 = new FormControl(this.items);
    tagsCtrl2 = new FormControl([]);
    list1:[] = [];
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
                  console.log("ppppppppppppp",place);
                 
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

                  console.log("latitude-",this.latitude);
                  console.log("longitude-",this.longitude);

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
            title:['', this.validation.onlyRequired_validator],
            first_name: ['', this.validation.name_validation],
            last_name: ['', this.validation.name_validation],
            email: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            phone_no: ['', this.validation.onlyRequired_validator],
            international_phone_no: ['', this.validation.onlyRequired_validator],
            // username: [''],
            dob:['',this.validation.onlyRequired_validator],
            country_code:['',this.validation.onlyRequired_validator],
            // address: ['', this.validation.onlyRequired_validator],
            address: [''],
            company_name:['', this.validation.onlyRequired_validator],
            social_security_no:['', this.validation.onlyRequired_validator],
            apartment:['', this.validation.onlyRequired_validator],
            gender: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            middle_name: ['', this.validation.onlyRequired_validator],
            country: ['', this.validation.onlyRequired_validator],
            city: ['', this.validation.onlyRequired_validator],
            state: ['', this.validation.onlyRequired_validator],
            zipCode: ['', this.validation.onlyRequired_validator],
            timezone:[''],
            image:['', this.validation.onlyRequired_validator]
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

    username(){
        this.fullnameVal = this.userForm.value.first_name + this.userForm.value.last_name;
        console.log("fullnameVal", this.fullnameVal);
        // this.userForm.get('user_name').patchValue(this.fullnameVal);

        this.firstnameVal = this.userForm.value.first_name;
        this.lastnameVal = this.userForm.value.last_name;
        this.service.userName(this.firstnameVal,this.lastnameVal).subscribe(res => {
            if(res['status']=='1'){
              console.log("api response",res);
              this.username_Obj = res['data'];
              this.username_msg = res;
              console.log("user name", this.username_Obj);
              this.userForm.get('username').patchValue(this.username_Obj);
            }
            else{
                this.toastr.success(res['message'], '', { timeOut: 2000 });
            }
        });
    }
    

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

    check_dob(e){
        console.log("eeeeeeeeeeeeeee",e);
        var before = this.userForm.value.dob;
        var now = new Date();
    if (before >= now) {
        this.userForm.controls['dob'].setValue('');
        this.toastr.success("selected date is in the past", '', { timeOut: 1000 });
    }
    }

    saveUser(){
        console.log("latitude --",this.latitude);
        console.log("longitude 22",this.longitude);
        console.log("new_address 44",this.new_address);
        this.submitted = true;
        // if (this.userForm.invalid) {
        //   return;
        // }
        // this.submitted = false;

        this.userForm.value.address = this.new_address;
        this.userForm.value.latitude = this.latitude
        this.userForm.value.longitude = this.longitude
        this.userForm.value.title


        const formData: any = new FormData();
        this.userForm.value.image = this.selectedFile;      
        formData.append('title', this.userForm.value.title);
        formData.append('first_name', this.userForm.value.first_name);
        formData.append('middle_name', this.userForm.value.middle_name);
        formData.append('last_name', this.userForm.value.last_name);
        formData.append('email', this.userForm.value.email);
        formData.append('mobile', this.userForm.value.mobile);
        formData.append('international_phone_no', this.userForm.value.international_phone_no);
        formData.append('company_name', this.userForm.value.company_name);
        formData.append('social_security_no', this.userForm.value.social_security_no);
        formData.append('dob', this.userForm.value.dob);
        formData.append('address', this.userForm.value.address);
        formData.append('country', this.userForm.value.country);
        formData.append('password', this.userForm.value.password);
        formData.append('apartment', this.userForm.value.apartment);
        formData.append('city', this.userForm.value.city);
        formData.append('gender', this.userForm.value.gender);
        formData.append('latitude', this.userForm.value.latitude);
        formData.append('longitude', this.userForm.value.longitude);
        formData.append('state', this.userForm.value.state);
        formData.append('timezone', this.userForm.value.timezone);
        formData.append('zipCode', this.userForm.value.zipCode);
        formData.append('country_code', this.userForm.value.country_code);
        formData.append('image', this.selectedFile);
        
        console.log("final form value",this.userForm.value);

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
      alert(1)
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
          console.log(results);
          console.log(status);
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
