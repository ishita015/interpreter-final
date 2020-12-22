import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-interpreter-profile',
  templateUrl: './interpreter-profile.component.html',
  styleUrls: ['./interpreter-profile.component.scss']
})
export class InterpreterProfileComponent implements OnInit {
  items = ['Javascript', 'Typescript']
  bankingForm: FormGroup;
  userForm: FormGroup;
  langForm: FormGroup;
  communityForm: FormGroup;
  conferenceForm: FormGroup;
  courtForm: FormGroup;
  credentialedForm: FormGroup;
  equipmentForm: FormGroup;
  legalForm: FormGroup;
  simultaneousForm: FormGroup;
  otherForm: FormGroup;
  tagsCtrl1 = new FormControl(this.items);
  tagsCtrl2 = new FormControl([]);
  submitted: boolean;
  banking_Obj;
  banking_Msg;
  ass_Obj;
  ass_Msg;
  interId;
  detail_Obj;
  detail_Msg;
  Profile: FormGroup;
  check_form1 = false;
  check_form2 = false;
  check_form3 = false;
  check_form4 = false;
  check_form5 = false;
  selectedFile:File = null;
  communityinter:boolean = false;
  conferenceinter:boolean = false;
  courtcertified:boolean = false;
  court_open:boolean = false;
  credent_open:boolean = false;
  equipment_open:boolean = false;
  legal_open:boolean = false;
  simult_open:boolean = false;
  other_open:boolean = false;


  public priLanguageId;
  language_Obj;

  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.createForm();
    this.createForm2();

    this.commForm();
    this.languageForm();


    this.conForm();
    this.couForm();
    this.creForm();
    this.eqpForm();
    this.legForm();
    this.simForm();


    this.othForm();
    
    this.LanguageList();
    this.interId = JSON.parse(localStorage.getItem('interpreterId'));
    console.log("iddd", this.interId);
    this.detailProfile();
  }

   /*========== Form Value Start Here========*/
   createForm() {
    this.bankingForm = this.fb.group({
      account_no: ['', this.validation.onlyRequired_validator],
      country: ['', this.validation.onlyRequired_validator],
      financial_institution:['', this.validation.onlyRequired_validator],
      payment_benificiary:['', this.validation.onlyRequired_validator],
      payment_method:['', this.validation.onlyRequired_validator],
      routing_number:['', this.validation.onlyRequired_validator],
      SWIFT_code:['', this.validation.onlyRequired_validator],
      fusion_id:['', this.validation.onlyRequired_validator],
      site_code:['', this.validation.onlyRequired_validator],
      site_id:['', this.validation.onlyRequired_validator],
      user_id:['1']
    });
  }
  /*========== Form Value End Here========*/

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

    // });
  }

  /*==========assignment setting Form2 end Here========*/

   /*========== Add Api Start Here========*/
   addProfile(){
    
    console.log("form value",this.bankingForm.value);
    this.submitted = true;
    if (this.bankingForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getBankingAdd(this.bankingForm.value)
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
        // this.router.navigate(['/login'])
        // this.router.navigate(['/languages/list']);  
      }

    });
  }

  detailProfile(){
 
    this.service.getProfileDetail(this.interId)
    .subscribe(res => {
      if(res['status']== 1){
       
        this.detail_Obj = res['data'][0];
        this.detail_Msg = res
        console.log("api response",  this.detail_Obj);
        this.toastr.success(this.detail_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/languages/list']);  
      }else{
        console.log("api response",res);
        this.detail_Obj = res
        this.detail_Msg = res
        this.toastr.success(this.detail_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/login'])
        // this.router.navigate(['/languages/list']);  
      }

    });

  }

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



  //gokul code start  -------interpreter skills---------
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
    //Community Interpreting
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

  
  
  
  
  languageForm() {
    this.langForm = this.fb.group({
      interpreter_id: [''],
      primary_language: [''],
      secondary_language: [''],      
    });
  } 


  add_language(){
    console.log("form value",this.langForm.value);
    this.submitted = true;
    if (this.langForm.invalid) {
      return;
    }
    this.submitted = false;
    this.langForm.value.interpreter_id = this.interId;
    this.service.interpreterLanguage(this.langForm.value)
    .subscribe(res => {
      if(res['status']=='1'){
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        // this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
        // this.adminProfileForm.reset();
      }
      // else{
      //   console.log("api response",res);
      //   this.admin_Obj = res;
      //   this.admin_Msg = res;
      //   this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
      //   // this.router.navigate(['/languages/list']);  
      // }

    });
  }





   /*==========Single Image Function Start Here========*/
  onSingleFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_community();
  }
  /*==========Single Image Function End Here========*/



  upload_community(){
    console.log("form value",this.communityForm.value);
    this.submitted = true;
    if (this.communityForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.communityForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '1');
    formData.append('documents', this.selectedFile);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }






  commForm() {
    this.communityForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
    });
  }




   /*==========Single Image Function Start Here========*/
  selectFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_conference();
  }
  /*==========Single Image Function End Here========*/


  
  upload_conference(){
    console.log("form value",this.conferenceForm.value);
    this.submitted = true;
    if (this.conferenceForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.conferenceForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '2');
    formData.append('documents', this.selectedFile);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }





  
  conForm() {
    this.conferenceForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
    });
  }





   /*==========Single Image Function Start Here========*/
   selectcourtFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_court();
  }
  /*==========Single Image Function End Here========*/


  upload_court(){
    console.log("form value",this.courtForm.value);
    this.submitted = true;
    if (this.courtForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.courtForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '3');
    formData.append('documents', this.selectedFile);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }





  couForm() {
    this.courtForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
    });
  }



   /*==========Single Image Function Start Here========*/
   selectcredentialedFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_credentialed();
  }
  /*==========Single Image Function End Here========*/

  
  upload_credentialed(){
    console.log("form value",this.credentialedForm.value);
    this.submitted = true;
    if (this.credentialedForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.credentialedForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '4');
    formData.append('documents', this.selectedFile);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }





  creForm() {
    this.credentialedForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
    });
  }




   /*==========Single Image Function Start Here========*/
   qualifiedFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_qualified();
  }
  /*==========Single Image Function End Here========*/

  
  upload_qualified(){
    console.log("form value",this.equipmentForm.value);
    this.submitted = true;
    if (this.equipmentForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.equipmentForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '5');
    formData.append('documents', this.selectedFile);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }





  eqpForm() {
    this.equipmentForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
    });
  }



   /*==========Single Image Function Start Here========*/
   legalFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_legal();
  }
  /*==========Single Image Function End Here========*/

  
  upload_legal(){
    console.log("form value",this.legalForm.value);
    this.submitted = true;
    if (this.legalForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.legalForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '6');
    formData.append('documents', this.selectedFile);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }





  legForm() {
    this.legalForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
    });
  }





   /*==========Single Image Function Start Here========*/
   simultFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_simultaneous();
  }
  /*==========Single Image Function End Here========*/

  
  upload_simultaneous(){
    console.log("form value",this.simultaneousForm.value);
    this.submitted = true;
    if (this.simultaneousForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.simultaneousForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '7');
    formData.append('documents', this.selectedFile);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }


  simForm() {
    this.simultaneousForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
    });
  }




   /*==========Single Image Function Start Here========*/
   otherFileChange(event){
    let file: File = event.target.files[0];
    this.selectedFile= file;
    this.upload_other();
  }
  /*==========Single Image Function End Here========*/

  
  upload_other(){
    console.log("form value",this.otherForm.value);
    this.submitted = true;
    if (this.otherForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.otherForm.value.documents = this.selectedFile;
    
    // this.communityForm.value.interpreter_id = this.interId; 

    formData.append('interpreter_id', this.interId);
    formData.append('doc_type', '8');
    formData.append('documents', this.selectedFile);
    formData.append('other_doc_title', this.otherForm.value.other);
    
    this.service.interpreterDocupload(formData).subscribe(res => {
      if(res['status']=='1'){
        // this.log_Obj = res['data'][0];
        // localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
        // this.admin_Obj = res;
        // this.admin_Msg = res;
        this.toastr.success(res['message'].message,'', { timeOut: 1000 });
      }else{
        // this.admin_Msg = res;
        this.toastr.error(res['message'].message,'', { timeOut: 1000 });
      }
    });
  }



  othForm() {
    this.otherForm = this.fb.group({
      interpreter_id: [''],
      documents: [''],
      other: [''],      
    });
  }




  //gokul code end

}
