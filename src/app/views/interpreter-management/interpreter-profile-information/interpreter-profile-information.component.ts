import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  // communityForm: FormGroup;
  // conferenceForm: FormGroup;
  // courtForm: FormGroup;
  // credentialedForm: FormGroup;
  // equipmentForm: FormGroup;
  // legalForm: FormGroup;
  // simultaneousForm: FormGroup;
  // otherForm: FormGroup;
  
  
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


  fields=[
    { 
      id:'1',
      lang_id:'1',
      label:'Hourly Rate',
     
    },
    {
        id:'2',
        lang_id:'1',
        label:'Mininum Paid',
        
    },
    {
        id:'3',
        lang_id:'1',
        label:'Pay Increment',
        
    },

    { 
        id:'4',
        label:'Half Day',
        
    },
    {
        id:'5',
        lang_id:'1',
        label:'Mininum Paid',
        
    },
    {
        id:'6',
        lang_id:'1',
        label:'Pay Increment',
        
    },

    { 
        id:'7',
        lang_id:'1',
        label:'Full Day',
        
    },
    {
        id:'8',
        lang_id:'1',
        label:'Mininum Paid',
        
    },
    {
        id:'9',
        lang_id:'1',
        label:'Pay Increment',
        
    }
  ]

  form = new FormGroup({});

  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    public service:HttpService) { }

  ngOnInit(){
    this.addBankInfo(); // add bank details
    this.createForm2();
    this.updateGeneralInfo();
    this.countryList();
    this.onSiteBtn();

 
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

    // this.commForm();
    // // this.languageForm(); interpreterSkillForm


    // this.conForm();
    // this.couForm();
    // this.creForm();
    // this.eqpForm();
    // this.legForm();
    // this.simForm();


    // this.othForm();
    
    this.LanguageList();
    this.interId = JSON.parse(localStorage.getItem('interpreterId')); //interpreter id
    console.log("iddd", this.interId);
    this.detailProfile();
  }



  /*========== Form2 Value Start Here========*/
  createForm2() {
    this.Profile = this.fb.group({
      payment_mode: ['', this.validation.onlyRequired_validator],
      service_type: ['', this.validation.onlyRequired_validator],
      duration:['', this.validation.onlyRequired_validator],
      cases:['', this.validation.onlyRequired_validator],
      subcases:['', this.validation.onlyRequired_validator],
      minimum_paid:['', this.validation.onlyRequired_validator],
      pay_increment:['', this.validation.onlyRequired_validator],
    });
  }
  /*========== Form2 Value End Here========*/

  /*==========assignment setting Form2 start Here========*/
  submit_form1(){
    console.log("form value",this.Profile.value);
    this.submitted = true;
    if (this.Profile.invalid) {
      return;
    }
    this.submitted = false;
    // this.service.getInterpreterProfileAdd(this.Profile.value)
    // .subscribe(res => {
    //   if(res['status']== 1){
    //     console.log("api response",res);
    //     this.ass_Obj = res
    //     this.ass_Msg = res
    //     this.toastr.success(this.ass_Msg.message,'', { timeOut: 1000 });
    //     // this.router.navigate(['/languages/list']);  
    //   }else{
    //     console.log("api response",res);
    //     this.ass_Obj = res
    //     this.ass_Msg = res
    //     this.toastr.success(this.ass_Msg.message,'', { timeOut: 1000 });
    //     // this.router.navigate(['/login'])
    //     // this.router.navigate(['/languages/list']);  
    //   }

    this.service.getInterpreterProfileAdd(this.Profile.value)
    .subscribe(res => {
      if(res['status']== 1){
        console.log("api response",res);
        this.ass_Obj = res
      
        
      }else{
        console.log("api response",res);
        this.ass_Obj = res
      
      }


     });
  }

  /*==========assignment setting Form2 end Here========*/

   /*========== Add Api Start Here========*/
   
  

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

  }



  updateGeneralInfo() {
    this.generalForm = this.fb.group({
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
        // apartment:['', this.validation.onlyRequired_validator],
        gender: ['', this.validation.onlyRequired_validator],
        latitude: [''],
        longitude: [''],
        nick_name:['', this.validation.onlyRequired_validator],
        // middle_name: ['', this.validation.onlyRequired_validator],
        country: ['', this.validation.onlyRequired_validator],
        city: ['', this.validation.onlyRequired_validator],
        state: ['', this.validation.onlyRequired_validator],
        zipCode: ['', this.validation.onlyRequired_validator],
        timezone:[''],
        image:['', this.validation.onlyRequired_validator],
        other_gender:[''],
    });
}


detailProfile(){
  this.service.getProfileDetail(this.interId).subscribe(res => {
    if(res['status']== 1){
      this.detail_Obj = res['data'][0];
      console.log("detail_Obj",this.detail_Obj)

      this.patchValue();

      

    }else{
      console.log("api response",res);
      this.detail_Obj = res
    }
  });

}



countryList(){
  this.service.getCountryMobileCode().subscribe(res => {
    if(res['status']=='1'){
      console.log("api response",res);
      this.country_Obj = res['data'];
      console.log("countryyyyyyyyyyyyy", this.country_Obj);
    }
  });
}


//update interpreter value
updateInterpreter(){
    this.submitted = true;
    // if (this.generalForm.invalid) {
    //   return;
    // }
    // this.submitted = false;
  this.generalForm.value.interpreter_id = this.interId;
  this.generalForm.value.address = this.new_address;
  this.generalForm.value.latitude = this.latitude
  this.generalForm.value.longitude = this.longitude

  this.service.updateInterpreter(this.generalForm.value).subscribe(res => {
      this.gen_Msg=res;
      if(res['status'] == 1){
        this.toastr.success( this.gen_Msg.message,'', { timeOut: 1000 });
        this.detailProfile();
      }else{
        this.toastr.error( this.gen_Msg.message,'', { timeOut: 1000 });
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
        // if (this.bankingForm.invalid) {
        //   return;
        // }
        // this.submitted = false;
        this.bankingForm.value.user_id = this.interId;

        console.log("form value",this.bankingForm.value);

        this.service.getBankingAdd(this.bankingForm.value)
        .subscribe(res => {
          if(res['status']== 1){
            console.log("api response",res);
            this.banking_Obj = res
            this.banking_Msg = res
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000 });
            this.detailProfile();
            // this.router.navigate(['/languages/list']);  
          }else{
            console.log("api response",res);
            this.banking_Obj = res
            this.banking_Msg = res
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000 });
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
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000 });
            // this.router.navigate(['/languages/list']);  
          }else{
            console.log("api response",res);
            this.banking_Obj = res
            this.banking_Msg = res
            this.toastr.success(this.banking_Msg.message,'', { timeOut: 1000 });
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
      // primary_language: [''],
      // secondary_language: [''],      
      
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
    // console.log("m-",this.interpreterSkillForm.value)
    // this.submitted = true;
    // if (this.communityForm.invalid) {
    //   return;
    // }
    // this.submitted = false;
    const formData: any = new FormData();

    console.log("all img",this.doc)
    for(let img of this.doc){
      console.log("img",img.all_img)
      console.log("doc_type",img.doc_type)
      formData.append('doc_name',img.doc_type);
      formData.append(img.doc_type,img.all_img);
      formData.append('type',img.types);
      
    }

    formData.append('interpreter_id', this.interId);
    // formData.append('other_doc_title', this.interpreterSkillForm.value.other_title);
    // this.communityForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 
    // this.communityForm.value.interpreter_id = f.value; 
    // formData.append('interpreter_id', this.interId);
    // formData.append('doc_type', '1');
    // formData.append('documents', this.selectedFile);
   
    this.service.interpreterDocupload(formData).subscribe(res => {
      this.skill_msg=res;
      if(res['status']=='1'){
        this.toastr.success(this.skill_msg.message,'', { timeOut: 1000 });
        this.detailProfile();
      }else{
        this.toastr.error(this.skill_msg.message,'', { timeOut: 1000 });
      }
    });
  }
  imgview(e:string){ 
    console.log("images",e);
    window.open(e); 
  }
 

  onSiteBtn(){
    console.log("iiii", this.form.value);
    this.fields.forEach(x => {
      console.log("xxxxxxxxxxxxxxxx",x);
      // if(this.form.value.lang_id == '1'){
        this.form.addControl(x.id, new FormControl('',Validators.required));
          console.log("oooooooooooooooooooooo", this.form.value);
        // }
    });
  
  }
}
