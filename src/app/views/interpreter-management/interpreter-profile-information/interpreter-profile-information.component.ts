import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-interpreter-profile-information',
  templateUrl: './interpreter-profile-information.component.html',
  styleUrls: ['./interpreter-profile-information.component.scss']
})
export class InterpreterProfileInformationComponent implements OnInit {
  //general form declare
  generalForm: FormGroup;
  userForm: FormGroup;
  submitted: boolean;

  //skills form variavle declare
  interpreterSkillForm: FormGroup; 
  items = ['Javascript', 'Typescript']
  tagsCtrl1 = new FormControl(this.items);
  tagsCtrl2 = new FormControl([]);


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


  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.addBankInfo(); // add bank details
    this.createForm2();
    this.updateGeneralInfo();
    this.countryList();
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

  
  
  
  
  skillsForm() {
    this.interpreterSkillForm = this.fb.group({
      interpreter_id: [''],
      primary_language: [''],
      secondary_language: [''],      
    });
  }



  // commForm() {
  //   this.communityForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //   });
  // }


  
  // conForm() {
  //   this.conferenceForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //   });
  // }



  // couForm() {
  //   this.courtForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //   });
  // }



  // creForm() {
  //   this.credentialedForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //   });
  // }



  // eqpForm() {
  //   this.equipmentForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //   });
  // }



  // legForm() {
  //   this.legalForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //   });
  // }



  // simForm() {
  //   this.simultaneousForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //   });
  // }


  // othForm() {
  //   this.otherForm = this.fb.group({
  //     interpreter_id: [''],
  //     documents: [''],
  //     other: [''],      
  //   });
  // }




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
    this.generalForm.get('apartment').patchValue( this.detail_Obj.apartment);
    this.generalForm.get('middle_name').patchValue( this.detail_Obj.middle_name);
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

  




}
