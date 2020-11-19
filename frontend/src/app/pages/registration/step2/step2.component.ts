import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  stepTwoForm: FormGroup;
  submitted: boolean;
  step2_Obj;
  languageObj;
  constructor(public service:CommonService,
    private fb: FormBuilder,
    public validation: ValidationsService,) { }

  ngOnInit() {
    this.languageList();
    this.createForm1();
  }

  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.stepTwoForm = this.fb.group({
      // email: ['',this.validation.email_validator],
      caseworker_name: ['',this.validation.onlyRequired_validator],
      requester_name: ['',this.validation.onlyRequired_validator],
      department:['',this.validation.onlyRequired_validator],
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
        console.log("api responsee",res);
        this.languageObj = res['data'];
        console.log("llllllll", this.languageObj);
    });
   }

  submitForm2(){
    console.log("form value",this.stepTwoForm.value);
    this.submitted = true;
    if (this.stepTwoForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getStepTwoForm(this.stepTwoForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step2_Obj = res;
        console.log("ressss",this.step2_Obj);
        // this.reg_Msg = res
    });
  }
}
