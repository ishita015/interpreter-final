import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
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
  public newlanguageVal;
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
    this.stepFiveForm = this.fb.group({
      caseworker_name: ['',this.validation.name_validation],
      requester_name: [''],
      department:['',this.validation.name_validation],
      office_phone: ['',this.validation.mobile_validator],
      cell_phone: ['',this.validation.mobile_validator],
      email_address: ['',this.validation.email_validator],
      site_contact: [''],
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

  submitForm5(){
    console.log("form value",this.stepFiveForm.value);
    this.submitted = true;
    if (this.stepFiveForm.invalid) {
      return;
    }
    this.submitted = false;
    this.stepFiveForm.value.language =  this.newlanguageVal;
    this.service.getStepFiveForm(this.stepFiveForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step5_Obj = res;
        console.log("ressss",this.step5_Obj);
        this.toastr.success(this.step5_Obj.message,'', { timeOut: 2000 });
        // this.reg_Msg = res
    });
  }
}
