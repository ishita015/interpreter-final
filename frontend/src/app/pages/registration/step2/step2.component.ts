import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
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
    this.stepTwoForm = this.fb.group({
      caseworker_name: ['',this.validation.name_validation],
      requester_name: ['',this.validation.name_validation],
      ahs_department:['',this.validation.name_validation],
      office_phone: ['',this.validation.mobile_validator],
      cell_phone: ['',this.validation.mobile_validator],
      email_address: ['',this.validation.email_validator],
      site_contact: ['',this.validation.mobile_validator],
      case_name: ['',this.validation.name_validation],
      client_name: ['',this.validation.name_validation],
      trails: ['',this.validation.name_validation],
      language: ['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.name_validation],
      date:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      simultaneous:['',this.validation.onlyRequired_validator],
      address:['',this.validation.name_validation],
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

   onChange(id){
    this.newlanguageVal = id.target.value;
    console.log("iddddddddddd", this.newlanguageVal);
   }

  submitForm2(){
    console.log("form value",this.stepTwoForm.value);
    this.submitted = true;
    if (this.stepTwoForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepTwoForm.value.language =  this.newlanguageVal;
    this.service.getStepTwoForm(this.stepTwoForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step2_Obj = res;
        console.log("ressss",this.step2_Obj);
        this.toastr.success(this.step2_Obj.message,'', { timeOut: 2000 });
        // this.reg_Msg = res
    });
  }
}
