import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-languages-add',
  templateUrl: './languages-add.component.html',
  styleUrls: ['./languages-add.component.scss']
})
export class LanguagesAddComponent implements OnInit {
  langaugeForm: FormGroup;
  public language_Obj;
  submitted: boolean;
  language_Msg;
  constructor( public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.createForm();
  }

   /*========== Form Value Start Here========*/
   createForm() {
    this.langaugeForm = this.fb.group({
      name: ['', this.validation.onlyRequired_validator],
      code: ['', this.validation.onlyRequired_validator],
      country: ['', this.validation.onlyRequired_validator],
    });
  }
  /*========== Form Value End Here========*/

  /*========== Add Api Start Here========*/
  addLanguage(){
    console.log("form value",this.langaugeForm.value);
    this.submitted = true;
    if (this.langaugeForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getLanguagAdd(this.langaugeForm.value)
    .subscribe(res => {
      if(res['status']=='0'){
        console.log("api response",res);
        this.language_Obj = res
        this.language_Msg = res
        this.toastr.success(this.language_Msg.message,'', { timeOut: 1000 });
        this.router.navigate(['/languages/list']);  
      }else{
        console.log("api response",res);
        this.language_Obj = res
        this.language_Msg = res
        this.toastr.success(this.language_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/login'])
        this.router.navigate(['/languages/list']);  
      }

    });
  }


  check_language($event,code){
    console.log("email-",code)
    // console.log("event-",$event)
    this.service.checkLanguage(code)
    .subscribe(res => {
      if(res['status']=='1'){
          alert(res['message']);
          // this.userForm.value.email = '';
          $event.target.value="";
      }
     
    });
  }

  /*==========Add Api End Here========*/
}
