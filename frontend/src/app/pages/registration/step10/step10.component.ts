import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.css']
})
export class Step10Component implements OnInit {

  stepTenForm: FormGroup;
  submitted: boolean;
  languageObj;
  step10_Obj;
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
    this.stepTenForm = this.fb.group({
      business: ['',this.validation.name_validation],
      requester_name: ['',this.validation.name_validation],
      office_phone: ['',this.validation.mobile_validator],
      cell_phone: ['',this.validation.mobile_validator],
      email_address: ['',this.validation.email_validator],
      interpreter: ['',this.validation.name_validation],
      location1:['',this.validation.name_validation],
      contact_assignment:['',this.validation.mobile_validator],
      name_assignment:['',this.validation.name_validation],
      location2:['',this.validation.name_validation],
      language: ['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.name_validation],
      date:['',this.validation.onlyRequired_validator],
      equipment:['',this.validation.name_validation],
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

   submitForm10(){
    console.log("form value",this.stepTenForm.value);
    this.submitted = true;
    if (this.stepTenForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepTenForm.value.language = this.newlanguageVal;
    this.service.getStepTenForm(this.stepTenForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step10_Obj = res;
        console.log("ressss",this.step10_Obj);
        this.toastr.success(this.step10_Obj.message,'', { timeOut: 2000 });
        // this.reg_Msg = res
    });
  }

}
