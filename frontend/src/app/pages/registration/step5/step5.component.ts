import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {
  stepFiveForm: FormGroup;
  submitted: boolean;
  languageObj;
  step5_Obj;
  constructor(public service:CommonService,
    private fb: FormBuilder,
    public validation: ValidationsService,) { }

  ngOnInit(){
    this.languageList();
    this.createForm1();
  }

   /*==========Step Form Value Start Here========*/
   createForm1() {
    this.stepFiveForm = this.fb.group({
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

  submitForm5(){
    console.log("form value",this.stepFiveForm.value);
    this.submitted = true;
    if (this.stepFiveForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getStepFiveForm(this.stepFiveForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step5_Obj = res;
        console.log("ressss",this.step5_Obj);
        // this.reg_Msg = res
    });
  }
}
