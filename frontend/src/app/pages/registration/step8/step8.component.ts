import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css']
})
export class Step8Component implements OnInit {

  stepEightForm: FormGroup;
  submitted: boolean;
  languageObj;
  step8_Obj;
  constructor(public service:CommonService,
    private fb: FormBuilder,
    public validation: ValidationsService,) { }

  ngOnInit() {
    this.languageList();
    this.createForm1();
  }

  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.stepEightForm = this.fb.group({
      business: ['',this.validation.onlyRequired_validator],
      requester_name: ['',this.validation.onlyRequired_validator],
      office_phone: ['',this.validation.onlyRequired_validator],
      email_address: ['',this.validation.onlyRequired_validator],
      location1: ['',this.validation.onlyRequired_validator],
      location2: ['',this.validation.onlyRequired_validator],
      location3: ['',this.validation.onlyRequired_validator],
      name_of_provider: ['',this.validation.onlyRequired_validator],
      interpreter: ['',this.validation.onlyRequired_validator],
      case:['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.onlyRequired_validator],
      language: ['',this.validation.onlyRequired_validator],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
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

   submitForm8(){
    console.log("form value",this.stepEightForm.value);
    this.submitted = true;
    if (this.stepEightForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getStepEightForm(this.stepEightForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step8_Obj = res;
        console.log("ressss",this.step8_Obj);
        // this.reg_Msg = res
    });
  }

}
