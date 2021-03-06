import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {} from 'googlemaps';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';

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
  sec_address: string;
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
  list1: [] = [];
  // languageid = [];

  selectedFile: File = null;
  // @ViewChild('content1', {static: false}) content1 !: TemplateRef<any>;
  // name = 'Angular';

  // gender variable 
  showOther: boolean = false;

  // ein/ssn radio button variable
  einshowInput: boolean = false;
  ssnshowInput: boolean = false;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  // country, state, city variable
  country_id;
  state_id;
  state_Obj;
  city_Obj;
  city_id;
  timezone_Obj;


  country_Json;
  map_address;
  constructor(
    public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private dl: DataLayerService,
    public service: HttpService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private http:HttpClient
  ) { }
client_image='';
stateData
cityData
  ngOnInit() {
    if(window.location.href.split('client/client-edit/') != undefined){
    if(window.location.href.split('client/client-edit/')[1] != undefined){
    var param=window.location.href.split('client/client-edit/')[1];
      this.service.get('getClientDetails/'+param).subscribe(res => {
        this.userForm.patchValue({
       id:res['data'][0].id,
      password: res['data'][0].password,
      company_name: res['data'][0].name,
      company_email: res['data'][0].email,
      country_code:res['data'][0].country_code,
      mobile: res['data'][0].mobile,
      phone_no: res['data'][0].phone_no,
      address: res['data'][0].address,
      country:res['data'][0].country,
      state: res['data'][0].state,
      zipCode: res['data'][0].zipCode,
      timezone:res['data'][0].timezone,
      city:res['data'][0].city ,
      contact_person_name: res['data'][0].contact_person_name,
      contact_mobile_no: res['data'][0].contact_mobile_no,
      ssn: res['data'][0].ssn_no,
      contact_country_code: res['data'][0].contact_country_code,
        })
      this.new_address=res['data'][0].address,
      this.latitude=res['data'][0].latitude,
      this.longitude=res['data'][0].longitude ,
        this.client_image=res['data'][0].profile_img;
        this.StateList1(res['data'][0].country);
        this.CityList1(res['data'][0].state)
      })
    }
    }
    this.createForm();
    this.LanguageList();
    this.userRoleList();
    this.CountryList();
    //   this.StateList();
    //   this.CityList();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
  
      // this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
       
        this.ngZone.run(() => {
        
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.new_address = place['formatted_address'];

          this.sec_address = place['formatted_address'];

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
      id:[''],
      company_name: ['', this.validation.onlyRequired_validator],
      company_email: ['', this.validation.onlyRequired_validator],
      password: ['', this.validation.onlyRequired_validator],
      country_code: ['', this.validation.onlyRequired_validator],
      mobile: ['', this.validation.onlyRequired_validator],
      phone_no: ['', this.validation.onlyRequired_validator],
      address: ['', this.validation.onlyRequired_validator],
      country: ['', this.validation.onlyRequired_validator],
      state: ['', this.validation.onlyRequired_validator],
      zipCode: ['', this.validation.onlyRequired_validator],
      timezone: ['', this.validation.onlyRequired_validator],
      image: [''],
      city: ['', ],
      latitude: [''],
      longitude: [''],
      contact_person_name: ['', this.validation.onlyRequired_validator],
      contact_mobile_no: ['', this.validation.onlyRequired_validator],
      ssn: ['', this.validation.onlyRequired_validator],
      contact_country_code: ['', this.validation.onlyRequired_validator],
    });
  }

  /*========== Form Value End Here========*/


  onCountryChange(id) {
    this.country_id = id.target.value;
    // this.userForm.patchValue({state:this.country_id})
    this.StateList();
  }

  onStateChange(id) {
    this.state_id = id.target.value;
    this.CityList();
  }

  onCityChange(id) {
    this.city_id = id.target.value;
  }

  /*========== Country Code for Mobile Start Here========*/

  CountryList() {
    this.service.getCountryMobileCode().subscribe(res => {
      if (res['status'] == '1') {
        console.log("api response", res);
        this.country_Obj = res['data'];
      }
    });
  }

  /*==========  Country Code for Mobile End Here========*/

  /*========== State Code for Mobile Start Here========*/

  StateList() {
    console.log(this.country_id)
    this.service.getStateCode(this.country_id).subscribe(res => {
      console.log("state api res", res);
      if (res['status'] == '1') {
        console.log("api response", res);
        this.state_Obj = res['data'];
        this.timezone_Obj = res['timeZoneData']['timezones'];
      }
    });
  }

  /*==========  State Code for Mobile End Here========*/

  /*========== City Code for Mobile Start Here========*/

  CityList() {
    this.service.getCityCode(this.state_id).subscribe(res => {
      if (res['status'] == '1') {
        console.log("api response", res);
        this.city_Obj = res['data'];
      }
    });
  }

  /*==========  City Code for Mobile End Here========*/
StateList1(id) {
    this.service.getStateCode(id).subscribe(res => {
      if (res['status'] == '1') {
        this.state_Obj = res['data'];
        this.timezone_Obj = res['timeZoneData']['timezones'];
      }
    });
  }

  CityList1(id) {
    this.service.getCityCode(id).subscribe(res => {
      if (res['status'] == '1') {
        this.city_Obj = res['data'];
      }
    });
  }

  username() {
    this.fullnameVal = this.userForm.value.first_name + this.userForm.value.last_name;
    this.firstnameVal = this.userForm.value.first_name;
    this.lastnameVal = this.userForm.value.last_name;
    this.service.userName(this.firstnameVal, this.lastnameVal).subscribe(res => {
      if (res['status'] == '1') {
        this.username_Obj = res['data'];
        this.username_msg = res;
        this.userForm.get('username').patchValue(this.username_Obj);
      }
      else {
        this.toastr.success(res['message'], '', { timeOut: 2000, positionClass: 'toast-top-center' });
      }
    });
  }


  /*==========Single Image Function Start Here========*/
  onSingleFileChange(event) {
    let file: File = event.target.files[0];
    this.selectedFile = file;
  }
  /*==========Single Image Function End Here========*/
   check_dob(e) {
    const d = new Date(e);
    const check = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
    if (d <= check) {
    }
    else {
      this.toastr.error("Date should be valid and atleast 18 year old.", '', { timeOut: 1000, positionClass: 'toast-top-center' });
      this.userForm.controls['dob'].setValue('');
    }
  }

  saveUser() {
    console.log('in',this.userForm.value);
    console.log('incheck',this.userForm);
    // if(this.userForm.value.id == ''){
    //       this.submitted = true;
    //     if (this.userForm.invalid) {
    //       return;
    //     }
    //     console.log(this.userForm.value);
    //     this.submitted = false;
    //  }
    this.userForm.value.address = this.new_address;
    this.userForm.value.latitude = this.latitude;
    this.userForm.value.longitude = this.longitude;
    const formData: any = new FormData();
   formData.append('id', this.userForm.value.id);
   formData.append('company_name', this.userForm.value.company_name);
    formData.append('company_email', this.userForm.value.company_email);
    formData.append('country_code', this.userForm.value.country_code);
    formData.append('password', this.userForm.value.password);
    formData.append('mobile', this.userForm.value.mobile);
    formData.append('phone_no', this.userForm.value.phone_no);
    formData.append('address', this.new_address);
    formData.append('country', this.userForm.value.country);
    formData.append('state', this.userForm.value.state);
    formData.append('city', this.userForm.value.city); //this.city_id
    formData.append('latitude', this.latitude);
    formData.append('longitude', this.longitude);
    formData.append('timezone', this.userForm.value.timezone);
    formData.append('zipCode', this.userForm.value.zipCode);
    formData.append('ssn', this.userForm.value.ssn);
    formData.append('contact_person_name', this.userForm.value.contact_person_name);
    formData.append('contact_mobile_no', this.userForm.value.contact_mobile_no);
    formData.append('contact_country_code', this.userForm.value.contact_country_code);
    formData.append('image', this.selectedFile);

    this.http.post(environment.apiUrl+'/cesco/saveClient',formData).subscribe(res => {
      if (res['status'] == '1') {
      this.toastr.success(res['msg'], '', { timeOut: 1000, positionClass: 'toast-top-center' });
      this.router.navigate(['/client/client-list']);
      }
    });
  }




  LanguageList() {
    this.service.getLanguageList()
      .subscribe(res => {
        // console.log("api response",res);
        this.language_Obj = res['data'];
      });
  }

  userRoleList() {
    this.service.roleList()
      .subscribe(res => {
        // console.log("api response",res);
        this.role_Obj = res['data'];
      });
  }


  checkEmail($event, email) {
    if(this.userForm.value.id == ''){

    this.service.checkUserEmail(email)
      .subscribe(res => {
        if (res['status'] == '1') {
          alert(res['message']);
          $event.target.value = "";
        }

      });
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
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
    this.geocodeLatLng(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
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

   //------------ get country, city, state  ----------------------------//
   geocodeLatLng(latitude, longitude) {
    var geocoder = new google.maps.Geocoder;
    var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    geocoder.geocode({ 'location': latlng }, (results, status) => {

      if (status === 'OK') {
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
          this.userForm.get('zipCode').patchValue(zipcode);

          console.log('map_address',this.map_address)
         
          this.service.getCountryMobileCode().subscribe(res => {
            if (res['status'] == '1') 
            {
             this.country_Json = res['data'];
              let contHash = this.country_Json.find(cont => cont.name == country)
             
              this.userForm.patchValue({country:contHash.id});
            
              this.service.getStateCode(contHash.id).subscribe(contryRes => {
                if (contryRes['status'] == '1') {
                  this.state_Obj = contryRes["data"];
                  this.timezone_Obj = contryRes['timeZoneData']['timezones'];
                  let stateHash =  this.state_Obj.find(st => st.name == state);
                  this.stateData =  this.state_Obj.find(st => st.name == state);
                  // setTimeout(()=>{
                    console.log('state_Obj',stateHash)
                  if(stateHash.id != undefined)
                  {
                  this.userForm.patchValue({state:stateHash.id});
                  this.service.getCityCode(stateHash.id).subscribe(cityRes => {
                    if (cityRes['status'] == '1') {
                      this.city_Obj = cityRes["data"];
                      let cityHash = this.city_Obj.find(ct => ct.name == city)
                      this.cityData = this.city_Obj.find(ct => ct.name == city)
                      this.userForm.patchValue({city:cityHash.id}); 
                    }
                  });

                  console.log('yes-------------------------------------',this.userForm.value)
                }
                 // }, 500);
                }
              })
            }
          });
         
          // this.generalForm.get('country').patchValue(country); 
          //this.patchValue()
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  }


  // Radio button gender function
  radioButton1() {
    this.showOther = false;
  }
  radioButton2() {
    this.showOther = false;
  }
  radioButton3() {
    this.showOther = true;
  }

  // Radio button ssn and ein function

  ssnRadioBtn() {
    this.einshowInput = false;
    this.ssnshowInput = true;
    this.userForm.controls['ein'].setValue('');
  }
  einRadioBtn() {
    this.einshowInput = true;
    this.ssnshowInput = false;
    this.userForm.controls['ssn'].setValue('');
  }
}


