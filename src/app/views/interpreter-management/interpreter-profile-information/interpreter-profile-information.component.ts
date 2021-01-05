import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MapsAPILoader } from '@agm/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-interpreter-profile-information',
  templateUrl: './interpreter-profile-information.component.html',
  styleUrls: ['./interpreter-profile-information.component.scss']
})
export class InterpreterProfileInformationComponent implements OnInit {
  @ViewChild('imageModal', { static: true }) imageModal;
  files:string  []  =  [];

  doc: Array<any> = [];
  lang:Array<any> = [];
  selectedFile:File = null;
  //general form declare
  generalForm: FormGroup;
  userForm: FormGroup;
  submitted: boolean;

  //skills form variavle declare
  interpreterSkillForm: FormGroup; 
  items = ['Javascript', 'Typescript']
  tagsCtrl1 = new FormControl(this.items);
  tagsCtrl2 = new FormControl([]);
  skill_msg;

  //assignment form variable declare
  onsiteInfo:boolean = false;
  opiInfo:boolean = false;
  vriInfo:boolean = false;
  vclInfo:boolean = false;
  

  //banking form declare
  bankingForm: FormGroup;
  banking_Obj;
  banking_Msg;

  ass_Obj;
  interId;
  detail_Obj;
  gen_Msg;
  Profile: FormGroup;
  check_form1 = false;
  check_form2 = false;
  check_form3 = false;
  check_form4 = false;
  check_form5 = false;

  communityinter:boolean = false;
  conferenceinter:boolean = false;
  courtcertified:boolean = false;
  court_open:boolean = false;
  credent_open:boolean = false;
  equipment_open:boolean = false;
  legal_open:boolean = false;
  simult_open:boolean = false;
  other_open:boolean = false;


  ci:boolean = false;
  cfi:boolean = false;
  cc:boolean = false;
  co:boolean = false;
  cto:boolean = false;
  eo:boolean = false;
  lo:boolean = false;
  so:boolean = false;
  oo:boolean = false;



  country_Obj;

  public priLanguageId;
  language_Obj;

  // show/hide form
  general_form = true;  //bydefault set
  skills_form = false;
  assignment_form = false;
  banking_form = false;

  showOther:boolean = false;
  
  // google map 
  latitude: number;
  longitude: number;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  zoom: number;
  address: string;
  sec_address:string;
  new_address: string;
  private geoCoder;

  public assignmentForm: FormGroup;

  // ein radio button variable
  einshowInput:boolean = false;
  ssnshowInput:boolean = false;

   // country, state, city variable
   country_id;
   state_id;
   state_Obj;
   city_Obj;
   city_id;
   timezone_Obj;

   role_id;

  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    public service:HttpService) {
      this.assignmentForm = this.fb.group({
        assignment: this.fb.array([this.assignmentGroup()]),
        assignment_opi: this.fb.array([this.opiAssignmentGroup()]),
        assignment_vri: this.fb.array([this.vriAssignmentGroup()]),
        assignment_vcl: this.fb.array([this.vclAssignmentGroup()])
      });
      this.role_id = JSON.parse(localStorage.getItem('roleId'));
    }

  ngOnInit(){
    this.addBankInfo(); // add bank details
    // this.createForm2();
    this.skillsForm();
    this.updateGeneralInfo();
    this.countryList();

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

    
    this.LanguageList();
    this.interId = JSON.parse(localStorage.getItem('userId')); //interpreter id
    console.log("iddd", this.interId);
    this.detailProfile();
  }



  /*========== Form2 Value Start Here========*/
  // createForm2() {
  //   this.Profile = this.fb.group({
  //     payment_mode: ['', this.validation.onlyRequired_validator],
  //     service_type: ['', this.validation.onlyRequired_validator],
  //     duration:['', this.validation.onlyRequired_validator],
  //     cases:['', this.validation.onlyRequired_validator],
  //     subcases:['', this.validation.onlyRequired_validator],
  //     minimum_paid:['', this.validation.onlyRequired_validator],
  //     pay_increment:['', this.validation.onlyRequired_validator],
  //   });
  // }
  /*========== Form2 Value End Here========*/

   /*========== Add Api Start Here========*/
   

   onCountryChange(id) {
    this.country_id = id.target.value;
    console.log("country", this.country_id);
    this.StateList();
  }

  onStateChange(id){
    this.state_id = id.target.value;
    console.log("state", this.state_id);
    this.CityList();
  }

  onCityChange(id){
    this.city_id = id.target.value;
    console.log("city", this.city_id);
  }

      /*========== Country Code for Mobile Start Here========*/
  countryList(){
    this.service.getCountryMobileCode().subscribe(res => {
      if(res['status']=='1'){
        // console.log("api response",res);
        this.country_Obj = res['data'];
        // console.log("countryyyyyyyyyyyyy", this.country_Obj);
      }
    });
  }
   /*==========  Country Code for Mobile End Here========*/


    /*========== State Code for Mobile Start Here========*/

    StateList(){ 
        this.service.getStateCode(this.country_id).subscribe(res => {
            console.log("state api res",res);
          if(res['status']=='1'){
            console.log("api response",res);
            this.state_Obj = res['data'];
            this.timezone_Obj = res['timeZoneData']['timezones'];
            console.log("state_Obj", this.state_Obj);
            console.log("time zone",this.timezone_Obj);
            
          }
        });
    }
    
    /*==========  State Code for Mobile End Here========*/

    /*========== City Code for Mobile Start Here========*/

    CityList(){
        this.service.getCityCode(this.state_id).subscribe(res => {
          if(res['status']=='1'){
            console.log("api response",res);
            this.city_Obj = res['data'];
            console.log("city_Obj", this.city_Obj);
          }
        });
      }
    
    /*==========  City Code for Mobile End Here========*/

  

  check1(){
    this.check_form1 = true;
    this.check_form2 = false;
    this.check_form3 = false;
    this.check_form4 = false;
    this.check_form5 = false;
  }

  check2(){
    this.check_form1 = false;
    this.check_form2 = true;
    this.check_form3 = false;
    this.check_form4 = false;
    this.check_form5 = false;
  }

  check3(){
    this.check_form1 = false;
    this.check_form2 = false;
    this.check_form3 = true;
    this.check_form4 = false;
    this.check_form5 = false;
  }
 
  check4(){
    this.check_form1 = false;
    this.check_form2 = false;
    this.check_form3 = false;
    this.check_form4 = true;
    this.check_form5 = false;
  }

  check5(){
    this.check_form1 = false;
    this.check_form2 = false;
    this.check_form3 = false;
    this.check_form4 = false;
    this.check_form5 = true;
  }



  //gokul code start  ------interpreter skills-------
  //get language list
  LanguageList() {
    this.service.getLanguageList().subscribe(res => {
        if(res['status']=='1'){
          this.language_Obj = res['data'];
          console.log("my testing", this.language_Obj);
        }
    });
  }


  //get primary language id
  onChange(id) {
    this.priLanguageId = id.target.value;
    console.log("pri-lang", this.priLanguageId);
  }

  onSelect(item) {
      console.log('tag selected: value is' + item);
        for (let i = 0; i < item; i++) {
        
        this.lang.push(item[i]);
        }
     
  }

  communityShow(){
    this.communityinter=true;  
  }
  conferenceShow(){
    this.conferenceinter=true;  
  }
  certifiedShow(){
    this.court_open=true;  
  }
  courtShow(){
    this.credent_open=true;  
  }
  qualifiedShow(){
    this.equipment_open=true;  
  }
  legalShow(){
    this.legal_open=true;  
  }
  simultShow(){
    this.simult_open=true;  
  }
  othShow(){
    this.other_open=true;  
  }



  setCheck(event,eve_key){
    if(eve_key=='1'){
      if ( event.target.checked ) {
        this.communityinter=true;
      }else{
        this.communityinter=false;
      }
    }

    if(eve_key=='2'){
      if ( event.target.checked ) {
        this.conferenceinter=true;
      }else{
        this.conferenceinter=false;
      }
    }


    if(eve_key=='3'){
      if ( event.target.checked ) {
        this.court_open=true;
      }else{
        this.court_open=false;
      }
    }


    if(eve_key=='4'){
      if ( event.target.checked ) {
        this.credent_open=true;
      }else{
        this.credent_open=false;
      }
    }

    if(eve_key=='5'){
      if ( event.target.checked ) {
        this.equipment_open=true;
      }else{
        this.equipment_open=false;
      }
    }

    if(eve_key=='6'){
      if ( event.target.checked ) {
        this.legal_open=true;
      }else{
        this.legal_open=false;
      }
    }

    if(eve_key=='7'){
      if ( event.target.checked ) {
        this.simult_open=true;
      }else{
        this.simult_open=false;
      }
    }

    if(eve_key=='8'){
      if ( event.target.checked ) {
        this.other_open=true;
      }else{
        this.other_open=false;
      }
    }
  }

  
  
  
  

  //gokul code end

  banking(){
    this.general_form = false;
    this.skills_form = false;
    this.assignment_form = false;
    this.banking_form = true;
  }

  assignment(){
    this.general_form = false;
    this.skills_form = false;
    this.assignment_form = true;
    this.banking_form = false;
  }

  skills(){
    this.general_form = false;
    this.skills_form = true;
    this.assignment_form = false;
    this.banking_form = false;
  }

  general(){
    this.general_form = true;
    this.skills_form = false;
    this.assignment_form = false;
    this.banking_form = false;
  }

//interpreter general information view and edit  bankingForm

  patchValue(){
    this.generalForm.get('title').patchValue( this.detail_Obj.title);
    this.generalForm.get('email').patchValue( this.detail_Obj.email);
    this.generalForm.get('first_name').patchValue( this.detail_Obj.first_name);
    this.generalForm.get('last_name').patchValue( this.detail_Obj.last_name);
    // this.generalForm.get('apartment').patchValue( this.detail_Obj.apartment);
    // this.generalForm.get('middle_name').patchValue( this.detail_Obj.middle_name);
     this.generalForm.get('nick_name').patchValue( this.detail_Obj.nick_name);
    this.generalForm.get('mobile').patchValue( this.detail_Obj.mobile);
    this.generalForm.get('country_code').patchValue( this.detail_Obj.country_code);
    this.generalForm.get('address').patchValue( this.detail_Obj.address);
    this.generalForm.get('dob').patchValue( this.detail_Obj.date_of_birth);
    this.generalForm.get('international_phone_no').patchValue( this.detail_Obj.international_phone_no);
    this.generalForm.get('country').patchValue( this.detail_Obj.country);
    this.generalForm.get('state').patchValue( this.detail_Obj.state);
    this.generalForm.get('gender').patchValue(this.detail_Obj.gender);
    this.generalForm.get('city').patchValue( this.detail_Obj.city);
    this.generalForm.get('zipCode').patchValue( this.detail_Obj.zipCode);
    this.generalForm.get('timezone').patchValue( this.detail_Obj.timezone);
    this.generalForm.get('other_gender').patchValue( this.detail_Obj.other_gender);
    this.generalForm.get('company_name').patchValue(this.detail_Obj.company_name);
    this.generalForm.get('social_security_no').patchValue(this.detail_Obj.social_security_no);
    this.generalForm.get('ssn').patchValue(this.detail_Obj.ssn);
    this.generalForm.get('ein').patchValue(this.detail_Obj.ein);

    this.bankingForm.get('bank_name').patchValue( this.detail_Obj.bank_name);
    this.bankingForm.get('account_type').patchValue( this.detail_Obj.account_type);
    this.bankingForm.get('bank_country').patchValue(this.detail_Obj.bank_country);
    this.bankingForm.get('account_no').patchValue( this.detail_Obj.account_no);
    this.bankingForm.get('bank_routing_no').patchValue( this.detail_Obj.bank_routing_no);
    this.bankingForm.get('payment_method').patchValue( this.detail_Obj.payment_method);
    this.bankingForm.get('electronic').patchValue(this.detail_Obj.electronic);
    this.bankingForm.get('SWIFT_code').patchValue(this.detail_Obj.SWIFT_code);
    this.bankingForm.get('bank_address').patchValue( this.detail_Obj.bank_address);
    this.bankingForm.get('paypal_id').patchValue( this.detail_Obj.paypal_id);

    this.interpreterSkillForm.get('primary_language').patchValue( this.detail_Obj.primay_lang_id);
    this.interpreterSkillForm.get('secondary_language').patchValue( this.detail_Obj.secondary_language);

  }



  updateGeneralInfo() {
    this.generalForm = this.fb.group({
        title:['', this.validation.onlyRequired_validator],
        first_name: ['', this.validation.onlyRequired_validator],
        last_name: ['', this.validation.onlyRequired_validator],
        email: ['', this.validation.onlyRequired_validator],
        password: ['', this.validation.onlyRequired_validator],
        mobile: ['', this.validation.onlyRequired_validator],
        international_phone_no: [''],
        // username: [''],
        dob:['',this.validation.onlyRequired_validator],
        country_code:['',this.validation.onlyRequired_validator],
        address: ['', this.validation.onlyRequired_validator],
        // address: [''],
        company_name:[''],
        social_security_no:[''],
        // apartment:['', this.validation.onlyRequired_validator],
        gender: [''],
        latitude: [''],
        longitude: [''],
        nick_name:[''],
        // middle_name: ['', this.validation.onlyRequired_validator],
        country: [''],
        city: [''],
        state: [''],
        zipCode: [''],
        timezone:[''],
        image:[''],
        other_gender:[''],
        notes:[''],
        ssn:[''],
        ein:[''],

    });
}



detailProfile(){
  this.service.getProfileDetail(this.interId).subscribe(res => {
    if(res['status']== 1){
   
      this.detail_Obj = res['data'][0];
      console.log("detail_Obj",this.detail_Obj);
      
    if(this.detail_Obj.skillsCommunityDoc!='' && this.detail_Obj.skillsCommunityDoc!=undefined){
      this.communityinter=true;  
      this.ci = true;
      // checked="{{ci =='true' ? 'checked' : ''}}"
    }


    if(this.detail_Obj.skillsConferenceDoc!='' && this.detail_Obj.skillsConferenceDoc!=undefined){
      this.conferenceinter=true;  
      this.cfi = true;
      // checked="{{cfi =='true' ? 'checked' : ''}}"
    } 


      if(this.detail_Obj.skillsCourtDoc!='' && this.detail_Obj.skillsCourtDoc!=undefined){
        this.court_open=true;  
        this.co = true;
        // checked="{{co =='true' ? 'checked' : ''}}"
      }



      if(this.detail_Obj.skillsCredentialDoc!='' && this.detail_Obj.skillsCredentialDoc!=undefined){
        this.credent_open=true;  
        this.cto = true;
        // checked="{{cto =='true' ? 'checked' : ''}}"
      }



      if(this.detail_Obj.skillsEquipmentDoc!='' && this.detail_Obj.skillsEquipmentDoc!=undefined){
        this.equipment_open=true;  
        this.eo = true;
        // checked="{{eo =='true' ? 'checked' : ''}}"
      } 



      if(this.detail_Obj.skillsLegalDoc!='' && this.detail_Obj.skillsLegalDoc!=undefined){
        this.legal_open=true;  
        this.lo = true;
        // checked="{{lo =='true' ? 'checked' : ''}}"
      }



      if(this.detail_Obj.skillSimultOpen!='' && this.detail_Obj.skillSimultOpen!=undefined){
        this.simult_open=true;  
        this.so = true;
        // checked="{{so =='true' ? 'checked' : ''}}"
      }



      if(this.detail_Obj.skillsOtherDoc!='' && this.detail_Obj.skillsOtherDoc!=undefined){
        this.other_open=true;  
        this.oo = true;
        // checked="{{oo =='true' ? 'checked' : ''}}"
      }


      this.patchValue();
      // addAssignment
    }else{
     
      console.log("api response",res);
      this.detail_Obj = res
    }
  });
}


// setData(index,controlName,day) {
//   this.assignmentArray.at(index).get(controlName).setValue(day);
// }

check_dob(e) {
  const d = new Date(e);
  const check = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
  if (d <= check) {
  }
  else {
    this.toastr.error("Date should be valid and atleast 18 year old.", '', { timeOut: 1000, positionClass: 'toast-top-center' });
    this.generalForm.controls['dob'].setValue('');
  }
}




//update interpreter value
updateInterpreter(){
    this.submitted = true;
    if (this.generalForm.invalid) {
      return;
    }
    this.submitted = false;
    this.generalForm.value.interpreter_id = this.interId;
    this.generalForm.value.address = this.new_address;
    this.generalForm.value.latitude = this.latitude
    this.generalForm.value.longitude = this.longitude


  this.service.updateInterpreter(this.generalForm.value).subscribe(res => {
      this.gen_Msg=res;
      if(res['status'] == 1){
        this.toastr.success( this.gen_Msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
        this.detailProfile();
      }else{
        this.toastr.error( this.gen_Msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
      }
    });
  }


  // interpreter general details end
  
      //banking code start

      addBankInfo() {
        this.bankingForm = this.fb.group({
          bank_name: ['', this.validation.onlyRequired_validator],
          account_type: ['', this.validation.onlyRequired_validator],
          bank_country:['', this.validation.onlyRequired_validator],
          account_no:['', this.validation.onlyRequired_validator],
          bank_routing_no:['', this.validation.onlyRequired_validator],
          payment_method:['', this.validation.onlyRequired_validator],
          electronic:['', this.validation.onlyRequired_validator],
          SWIFT_code:['', this.validation.onlyRequired_validator],
          bank_address:['', this.validation.onlyRequired_validator],
          paypal_id:['', this.validation.onlyRequired_validator]
        });
      }


      //add bank details
      addBankDetails(){
        this.submitted = true;
        if (this.bankingForm.invalid) {
          return;
        }
        this.submitted = false;
        this.bankingForm.value.user_id = this.interId;

        console.log("form value",this.bankingForm.value);

        this.service.getBankingAdd(this.bankingForm.value)
        .subscribe(res => {
          if(res['status']== 1){
            console.log("api response",res);
            this.banking_Obj = res
            this.banking_Msg = res
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
            this.detailProfile();
            // this.router.navigate(['/languages/list']);  
          }else{
            console.log("api response",res);
            this.banking_Obj = res
            this.banking_Msg = res
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
            // this.router.navigate(['/languages/list']);  
          }
    
        });
      }
    


      //update bank details
      updateBankDetails(){
        this.submitted = true;
        // if (this.bankingForm.invalid) {
        //   return;
        // }
        // this.submitted = false;
        this.bankingForm.value.user_id = this.interId;

        console.log("form value",this.bankingForm.value);

        this.service.bankingUpdate(this.bankingForm.value)
        .subscribe(res => {
          if(res['status']== 1){
            console.log("api response",res);
            this.banking_Obj = res
            this.banking_Msg = res
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
            // this.router.navigate(['/languages/list']);  
          }else{
            console.log("api response",res);
            this.banking_Obj = res
            this.banking_Msg = res
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000, positionClass: 'toast-top-center' });
            // this.router.navigate(['/languages/list']);  
          }
    
        });
      }



      //banking code end



      // assignment form start

      onsiteShow(){
        this.onsiteInfo=true;  
      }
      opiShow(){
        this.opiInfo=true;  
      }
      vriShow(){
        this.vriInfo=true;  
      }
      vclShow(){
        this.vclInfo=true;  
      }
 

    assignmentFormCheck(event,eveKey){

      if(eveKey=='1'){
        if ( event.target.checked ) {
          this.onsiteInfo=true;
        }else{
          this.onsiteInfo=false;
        }
      }

      if(eveKey=='2'){
        if ( event.target.checked ) {
          this.opiInfo=true;
        }else{
          this.opiInfo=false;
        }
      }

      if(eveKey=='3'){
        if ( event.target.checked ) {
          this.vriInfo=true;
        }else{
          this.vriInfo=false;
        }
      }


      if(eveKey=='4'){
        if ( event.target.checked ) {
          this.vclInfo=true;
        }else{
          this.vclInfo=false;
        }
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




  skillsForm() {
    this.interpreterSkillForm = this.fb.group({
      interpreter_id: [''],
      primary_language: [''],
      secondary_language: [''],      
      
      other_title: [''],  
      community_doc: [''],  
      conference_doc: [''],  
      court_doc: [''],  
      credential_doc: [''],  
      equipment_doc: [''],  
      legal_doc: [''],  
      simult_open: [''],  
      other_doc: [''],  
    });
  }






  onSingleFileChange(event,key,type){
    // for  (var i =  0; i <  event.target.files.length; i++)  {  
    //     this.files.push(event.target.files[i]);
    // }
    let file: File = event.target.files[0];
      this.selectedFile= file;
      this.addDocInArray(this.selectedFile,key,type);
    
  }
  

  addDocInArray(event,key,type){
    this.doc.push({
      all_img:event,
      doc_type:key,
      types:type,
    })
  }

  uploadDocuments(){
    console.log("m-",this.interpreterSkillForm.value)

    this.submitted = true;
    if (this.interpreterSkillForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();

    console.log("all img",this.interpreterSkillForm.value.primary_language)
    console.log("all img",this.interpreterSkillForm.value.secondary_language)
    this.lang =   this.interpreterSkillForm.value.secondary_language         
    // console.log("lang", this.lang);
    
    for(let a of this.lang){
      // console.log("aaaaaa",a);
      formData.append('secondary_language', JSON.stringify(a));
    }
    
    for(let img of this.doc){
      console.log("img",img.all_img)
      console.log("doc_type",img.doc_type)
      formData.append('doc_name',img.doc_type);
      formData.append(img.doc_type,img.all_img);
      formData.append('type',img.types); 
    }
    
    formData.append('interpreter_id', this.interId);
    formData.append('primary_language', this.priLanguageId);

    // formData.append('secondary_language', this.interpreterSkillForm.value.secondary_language);
    formData.append('other_doc_title', this.interpreterSkillForm.value.other_title);

   
   
    this.service.interpreterDocupload(formData).subscribe(res => {
      this.skill_msg=res;
      if(res['status']=='1'){
        this.toastr.success(this.skill_msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
        this.detailProfile();
      }else{
        this.toastr.error(this.skill_msg.message,'', { timeOut: 1000, positionClass: 'toast-top-center' });
      }
    });
  }
  imgview(e:string){ 
    console.log("images",e);
    window.open('http://192.168.0.4:3300/documents/'+e); 
  }


  private assignmentGroup(): FormGroup {
    return this.fb.group({
      language_id: [],
      hourly_rate: [],
      hourly_rate_min_paid: [],
      hourly_rate_pay_increment: [],
      half_day: [],
      half_day_min_paid: [],
      half_day_pay_increment: [],
      full_day: [],
      full_day_min_paid: [],
      full_day_pay_increment: []
    });
  }



  private opiAssignmentGroup(): FormGroup {
    return this.fb.group({
      opi_language_id: [],
      opi_hourly_rate: [],
      opi_hourly_rate_min_paid: [],
      opi_hourly_rate_pay_increment: [],
      opi_half_day: [],
      opi_half_day_min_paid: [],
      opi_half_day_pay_increment: [],
      opi_full_day: [],
      opi_full_day_min_paid: [],
      opi_full_day_pay_increment: []
     });
  }

  private vriAssignmentGroup(): FormGroup {
    return this.fb.group({
     
      vri_language_id: [],
      vri_hourly_rate: [],
      vri_hourly_rate_min_paid: [],
      vri_hourly_rate_pay_increment: [],
      vri_half_day: [],
      vri_half_day_min_paid: [],
      vri_half_day_pay_increment: [],
      vri_full_day: [],
      vri_full_day_min_paid: [],
      vri_full_day_pay_increment: []
    });
  }



  private vclAssignmentGroup(): FormGroup {
    return this.fb.group({
      vcl_language_id: [],
      vcl_hourly_rate: [],
      vcl_hourly_rate_min_paid: [],
      vcl_hourly_rate_pay_increment: [],
      vcl_half_day: [],
      vcl_half_day_min_paid: [],
      vcl_half_day_pay_increment: [],
      vcl_full_day: [],
      vcl_full_day_min_paid: [],
      vcl_full_day_pay_increment: []
    });
  }



  
  get assignmentArray(): FormArray {
    return <FormArray>this.assignmentForm.get('assignment');
  }


  get assignmentOpiArray(): FormArray {
    return <FormArray>this.assignmentForm.get('assignment_opi');
  }


  get assignmentVriArray(): FormArray {
    return <FormArray>this.assignmentForm.get('assignment_vri');
  }


  get assignmentVclArray(): FormArray {
    return <FormArray>this.assignmentForm.get('assignment_vcl');
  }



  addInterpreterAssignment(){
    // console.log("form assignment",this.assignmentForm.value.assignment);
    // console.log("form assignment_opi",this.assignmentForm.value.assignment_opi);
    // console.log("form assignment_vri",this.assignmentForm.value.assignment_vri);
    // console.log("form assignment_vcl",this.assignmentForm.value.assignment_vcl);
    this.assignmentForm.value.interpreter_id = this.interId;
    this.service.addInterpreterAssignmentSetting(this.assignmentForm.value)
    .subscribe(res => {
      if(res['status']== 1){
        console.log("api response",res);
        this.ass_Obj = res
        this.toastr.success(this.ass_Obj.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
      }else{
        console.log("api response",res);
        this.ass_Obj = res
        this.toastr.error(this.ass_Obj.message,'', { timeOut: 1000, positionClass: 'toast-top-center' });
      }
    });

  }

   // Radio button ssn and ein function

   ssnRadioBtn(){
    this.einshowInput = false;
    this.ssnshowInput = true;
    
   }

   einRadioBtn(){
        this.einshowInput = true;
        this.ssnshowInput = false;
       
   }


  // segments.forEach(s => {
  //   formArray.push(this.fb.group({
  //     id: s.id,
  //     name: s.name
  //   }));
  // });
  
  
  // this.myForm.setControl('segments',formArray);

  //assignment settings end 
  plus(){
    var num1 = ((document.getElementById("plus") as HTMLInputElement).value);

    alert(num1);
  }
  // minus(){
  //   var num1 = ((document.getElementById("plus") as HTMLInputElement).value);

  //     console.log(num1)
  // }
}
