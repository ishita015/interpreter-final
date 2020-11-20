import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-step12',
  templateUrl: './step12.component.html',
  styleUrls: ['./step12.component.css']
})
export class Step12Component implements OnInit {
  stepTwelveForm: FormGroup;
  submitted: boolean;
  languageObj;
  public newlanguageVal;
  step12_Obj;
  constructor(public service:CommonService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public validation: ValidationsService,) { }

  ngOnInit(){
    this.languageList();
    this.createForm1();
  }

  /*==========Step Form Value Start Here========*/
  createForm1() {
    this.stepTwelveForm = this.fb.group({
      school_district: ['',this.validation.name_validation],
      requester_name: ['',this.validation.name_validation],
      office_phone: ['',this.validation.mobile_validator],
      cell_phone: ['',this.validation.mobile_validator],
      email_address: ['',this.validation.email_validator],
      location1:['',this.validation.name_validation],
      location2:['',this.validation.name_validation],
      contact_assignment:['',this.validation.mobile_validator],
      name_assignment:['',this.validation.name_validation],
      language: ['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.name_validation],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      equipment:['',this.validation.onlyRequired_validator],
      notes:['',this.validation.name_validation],
      name_of_student:['',this.validation.name_validation],
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

  submitForm12(){
    console.log("form value",this.stepTwelveForm.value);
    this.submitted = true;
    if (this.stepTwelveForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepTwelveForm.value.language = this.newlanguageVal;
    this.service.getStepTwelveForm(this.stepTwelveForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step12_Obj = res;
        console.log("ressss",this.step12_Obj);
        this.toastr.success(this.step12_Obj.message,'', { timeOut: 2000 });
        // this.reg_Msg = res
    });
  }

}
