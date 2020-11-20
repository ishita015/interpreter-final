import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css']
})
export class Step9Component implements OnInit {
  stepNineForm: FormGroup;
  submitted: boolean;
  languageObj;
  step9_Obj;
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
    this.stepNineForm = this.fb.group({
      caseworker_name: ['',this.validation.onlyRequired_validator],
      requester_name: ['',this.validation.onlyRequired_validator],
      human_services: ['',this.validation.onlyRequired_validator],
      office_phone: ['',this.validation.onlyRequired_validator],
      cell_phone: ['',this.validation.onlyRequired_validator],
      email_address: ['',this.validation.onlyRequired_validator],
      site_contact: ['',this.validation.onlyRequired_validator],
      // interpreter: ['',this.validation.onlyRequired_validator],
      case:['',this.validation.onlyRequired_validator],
      client_name:['',this.validation.onlyRequired_validator],
      trails: ['',this.validation.onlyRequired_validator],
      language: ['',this.validation.onlyRequired_validator],
      nature_of_appointment:['',this.validation.onlyRequired_validator],
      date:['',this.validation.onlyRequired_validator],
      simultaneous:['',this.validation.onlyRequired_validator],
      start_time:['',this.validation.onlyRequired_validator],
      end_time:['',this.validation.onlyRequired_validator],
      service_requested:['',this.validation.onlyRequired_validator],
      address:['',this.validation.onlyRequired_validator],
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

   submitForm9(){
    console.log("form value",this.stepNineForm.value);
    this.submitted = true;
    if (this.stepNineForm.invalid) {
      return;
    }
    this.submitted = false; 
    this.service.getStepNineForm(this.stepNineForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.step9_Obj = res;
        console.log("ressss",this.step9_Obj);
        this.toastr.success(this.step9_Obj.message,'', { timeOut: 2000 });
        // this.reg_Msg = res
    });
  }
}
