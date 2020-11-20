import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  stepOneForm: FormGroup;
  submitted: boolean;
  public step1_Obj;
  public languageObj;
  step_Msg;
  public newlanguageVal;
  constructor( public service:CommonService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public validation: ValidationsService,) { }

  ngOnInit() {
    this.createForm1();
    this.languageList();
  }

  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.stepOneForm = this.fb.group({
      caseworker_name: ['',this.validation.onlyRequired_validator],
      requester_name: ['',this.validation.onlyRequired_validator],
      adams_county: ['',this.validation.onlyRequired_validator],
      office_phone: ['',this.validation.onlyRequired_validator],
      cell_phone: ['',this.validation.onlyRequired_validator],
      email_address: ['',this.validation.onlyRequired_validator],
      site_contact: ['',this.validation.onlyRequired_validator],
      case_name: ['',this.validation.onlyRequired_validator],
      client_name: ['',this.validation.onlyRequired_validator],
      trails: ['',this.validation.onlyRequired_validator],
      language: ['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.onlyRequired_validator],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      simultaneous:['',this.validation.onlyRequired_validator],
      address:['',this.validation.onlyRequired_validator],
      service_requested:['',this.validation.onlyRequired_validator],
      })
  }
  /*==========Step Form Value Start Here========*/

  languageList(){
    this.service.getLanguage()
    .subscribe(res => {
        console.log("api responsee list",res);
        this.languageObj = res['data'];
        console.log("lllllllllllllll",  this.languageObj);
        
    });
   }

   onChange(id){
    this.newlanguageVal = id.target.value;
    console.log("iddddddddddd", this.newlanguageVal);
   }

  submitForm1(){
    console.log("form value",this.stepOneForm.value);
    this.submitted = true;
    if (this.stepOneForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepOneForm.value.language =  this.newlanguageVal;
    this.service.getStepOneForm(this.stepOneForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step1_Obj = res;
        console.log("ressss",this.step1_Obj);
        this.toastr.success(this.step1_Obj.message,'', { timeOut: 2000 });
        // this.step_Msg = res
    });
  }
}
