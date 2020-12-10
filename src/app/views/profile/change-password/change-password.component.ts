import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  adminProfileForm: FormGroup;
  public admin_Obj;
  submitted: boolean;
  admin_Msg;
  userId;
  public showHideBtn = true;
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.createForm();
    this.userId = JSON.parse(localStorage.getItem('userId'));
  }

    /*========== Form Value Start Here========*/
    createForm() {
      this.adminProfileForm = this.fb.group({
        old_password: ['',this.validation.password_validator],
        new_password: ['',this.validation.password_validator],
        user_id:[''],
        confirm_pass: ['', this.validation.onlyRequired_validator],
        
      },{ validator: this.MustMatch('new_password', 'confirm_pass') });
    }
    /*========== Form Value End Here========*/

     /*==========Match Password and Confirm Password Validation Code Start Here========*/
   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
   /*==========Match Password and Confirm Password Validation Code End Here========*/

    change_pass(){
      console.log("form value",this.adminProfileForm.value);
      this.submitted = true;
      if (this.adminProfileForm.invalid) {
        return;
      }
      this.submitted = false;
      this.adminProfileForm.value.user_id = this.userId;
      this.service.changePassword(this.adminProfileForm.value)
      .subscribe(res => {
        // if(res['status']=='0'){
          console.log("api response",res);
          this.admin_Obj = res;
          this.admin_Msg = res;
          this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
          this.adminProfileForm.reset();
          // this.router.navigate(['/languages/list']);  
        // }
        // else{
        //   console.log("api response",res);
        //   this.admin_Obj = res;
        //   this.admin_Msg = res;
        //   this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
        //   // this.router.navigate(['/languages/list']);  
        // }
  
      });
    }

     /*==========Password Show/Hide Function Start Here========*/
     showHidePassword(){
      this.showHideBtn = this.showHideBtn === false;
    }
    /*==========Password Show/Hide Function End Here========*/
  
  
}
