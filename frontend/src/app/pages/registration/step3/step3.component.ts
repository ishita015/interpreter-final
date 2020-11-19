import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  stepThreeForm: FormGroup;
  submitted: boolean;
  languageObj;
  step3_Obj;
  constructor(public service:CommonService,
    private fb: FormBuilder,
    public validation: ValidationsService,) { }

  ngOnInit() {
    this.languageList();
    this.createForm1();
  }

  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.stepThreeForm = this.fb.group({
      business: ['',this.validation.onlyRequired_validator],
      requester_name: ['',this.validation.onlyRequired_validator],
      office_phone: ['',this.validation.onlyRequired_validator],
      cell_phone: ['',this.validation.onlyRequired_validator],
      email_address: ['',this.validation.onlyRequired_validator],
      location1: ['',this.validation.onlyRequired_validator],
      location2: ['',this.validation.onlyRequired_validator],
      name_assignment: ['',this.validation.onlyRequired_validator],
      contact_assignment: ['',this.validation.onlyRequired_validator],
      interpreter: ['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.onlyRequired_validator],
      language: ['',this.validation.onlyRequired_validator],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      equipment:['',this.validation.onlyRequired_validator],
      notes:['',this.validation.onlyRequired_validator],
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

   submitForm3(){
    console.log("form value",this.stepThreeForm.value);
    this.submitted = true;
    if (this.stepThreeForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getStepThreeForm(this.stepThreeForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step3_Obj = res;
        console.log("ressss",this.step3_Obj);
        // this.reg_Msg = res
    });
  }
}
