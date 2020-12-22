import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-interpreter-profile',
  templateUrl: './interpreter-profile.component.html',
  styleUrls: ['./interpreter-profile.component.scss']
})
export class InterpreterProfileComponent implements OnInit {
  bankingForm: FormGroup;
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
  
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.createForm();
    this.createForm2();
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
    this.service.getInterpreterProfileAdd(this.Profile.value)
    .subscribe(res => {
      if(res['status']== 1){
        console.log("api response",res);
        this.ass_Obj = res
        this.ass_Msg = res
        this.toastr.success(this.ass_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/languages/list']);  
      }else{
        console.log("api response",res);
        this.ass_Obj = res
        this.ass_Msg = res
        this.toastr.success(this.ass_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/login'])
        // this.router.navigate(['/languages/list']);  
      }

    });
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

}
