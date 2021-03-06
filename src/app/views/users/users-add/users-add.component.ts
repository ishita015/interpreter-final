import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {} from 'googlemaps';


import { MapsAPILoader } from '@agm/core';
// import { MouseEvent } from '@agm/core';
// import { MouseEvent as AGMMouseEvent } from '@agm/core';
// import { MapsAPILoader, MouseEvent } from '@agm/core';

//
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
 import { FunctionService } from './../../../shared/services/function.service'
@Component({
    selector: 'app-users-add',
    templateUrl: './users-add.component.html',
    styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {
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
    tagsCtrl1 = new FormControl(this.items);
    tagsCtrl2 = new FormControl([]);

    public country_Obj;

    public showHideNew = true;
    // @ViewChild('content1', {static: false}) content1 !: TemplateRef<any>;
    // name = 'Angular';


    @ViewChild('search')
    public searchElementRef: ElementRef;


    constructor(
        public validation: ValidationsService,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private router: Router,
        public func :FunctionService,
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
        // this.mapsAPILoader.load().then(() => {
        //     this.setCurrentLocation();
        //     this.geoCoder = new google.maps.Geocoder;

        //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        //     autocomplete.addListener("place_changed", () => {
        //         this.ngZone.run(() => {
        //             //get the place result
        //             let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //             this.new_address = place['formatted_address'];
        //             //verify result
        //             if (place.geometry === undefined || place.geometry === null) {
        //                 return;
        //             }
        //             // console.log("place-",place[0].formatted_address);

        //             //set latitude, longitude and zoom
        //             this.latitude = place.geometry.location.lat();
        //             this.longitude = place.geometry.location.lng();

        //             // console.log("latitude-",this.latitude);
        //             // console.log("longitude-",this.longitude);




        //             this.zoom = 12;
        //         });
        //     });
        // });

    }

    onChange(id) {
        this.newlanguageVal = id.target.value;
    }

    onChangeRole(id) {
        this.newrole = id.target.value;
    }

    onSelect(item) {
        console.log('tag selected: value is' + item);
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

    /*========== Form Value Start Here========*/
    createForm() {
        this.userForm = this.fb.group({
            id:[''],
            first_name: ['', this.validation.name_validation],
            last_name: ['', this.validation.name_validation],
            email: ['', this.validation.onlyRequired_validator],
            password: ['', this.validation.onlyRequired_validator],
            mobile: ['', this.validation.onlyRequired_validator],
            country_code: ['', this.validation.onlyRequired_validator],
            // address: ['', this.validation.onlyRequired_validator],
            // apartment:['', this.validation.onlyRequired_validator],
            // street:['', this.validation.onlyRequired_validator],
            // gender: ['', this.validation.onlyRequired_validator],
            // languageid: [''],
            // latitude: [''],
            // longitude: [''],
            // primary_language: ['', this.validation.onlyRequired_validator],
            user_role: ['', this.validation.onlyRequired_validator],
            // rate:[''],
        });
    }
    /*========== Form Value End Here========*/
    
    saveUser() {
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.submitted = false;
        
        this.service.post('add-edit-user',this.userForm.value)
            .subscribe(res => {
                if(res['status'] == true){
                    this.toastr.success(res['msg'], '', { timeOut: 1000 });
                    this.router.navigateByUrl('/sessions/signin', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/users/user-list/'+this.userForm.value.user_role]);
                }); 
                    // location.reload();

                 }else{
                    this.toastr.warning(res['msg'], '', { timeOut: 1000 });
                    }
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
                    this.toastr.warning(res['message']);
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
     /*==========Password Show/Hide Function Start Here========*/
   showHideNewPassword(){
    this.showHideNew = this.showHideNew === false;
  }
  /*==========Password Show/Hide Function End Here========*/


}