import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
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
  public newlanguageVal;
  constructor(public service:CommonService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public validation: ValidationsService,) { }

  ngOnInit() {
    this.languageList();
    this.createForm1();
  }

  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.stepEightForm = this.fb.group({
      business: ['',this.validation.name_validation],
      requester_name: ['',this.validation.name_validation],
      office_phone: ['',this.validation.mobile_validator],
      email_address: ['',this.validation.email_validator],
      location1: ['',this.validation.name_validation],
      location2: ['',this.validation.name_validation],
      location3: ['',this.validation.mobile_validator],
      name_of_provider: ['',this.validation.name_validation],
      interpreter: ['',this.validation.name_validation],
      case:['',this.validation.name_validation],
      nature_of_appointment:['',this.validation.name_validation],
      language: ['',this.validation.onlyRequired_validator],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      notes:['',this.validation.name_validation],
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

   onChange(id){
    this.newlanguageVal = id.target.value;
    console.log("iddddddddddd", this.newlanguageVal);
   }

   submitForm8(){
    console.log("form value",this.stepEightForm.value);
    this.submitted = true;
    if (this.stepEightForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepEightForm.value.language = this.newlanguageVal;
    this.service.getStepEightForm(this.stepEightForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step8_Obj = res;
        console.log("ressss",this.step8_Obj);
        this.toastr.success(this.step8_Obj.message,'', { timeOut: 2000 });
        // this.reg_Msg = res
    });
  }

}
