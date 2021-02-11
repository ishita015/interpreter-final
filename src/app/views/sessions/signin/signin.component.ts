import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import {ValidationsService} from "../../../shared/services/validations.service";
import { HttpService } from "../../../shared/services/http.service";
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from './../../../shared/services/permission.service';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    submitted: boolean;
    name;
    public log_Msg;
    public log_Obj;
    public role_obj;
    public showHideNew = true;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private toastr: ToastrService,
        public validation: ValidationsService,
        public service:HttpService,
        public permission:PermissionService
    ) {
        this.createForm();
     }

    ngOnInit() {
        if(localStorage.getItem('userId') != null){
             this.router.navigate(['dashboard/v1'])   
        }
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });
    }

  /*==========Create Form Function Start Here========*/
  createForm() {
    this.signinForm = this.fb.group({
        email: ['', this.validation.email_validator],
        password: ['', this.validation.password_validator]
    });
  }
 /*==========SigninForm Function End Here========*/
 signin() {
    this.loading = true;
    this.submitted = true;
    this.loadingText = 'Sigining in...';
    console.log('kkkkkkk',this.signinForm.value);
    
    this.auth.signin(this.signinForm.value)
        .subscribe(res => {
            console.log("login api",res);
            this.log_Obj = res;
            this.log_Msg = res
            console.log("log object", this.log_Obj);
          
            if (this.signinForm.value.email  === undefined || this.signinForm.value.email === '' ||
                    this.signinForm.value.password === undefined || this.signinForm.value.password === '') {
                } 
                    if(this.log_Obj.status == 0){
                        this.log_Msg = res;
                        this.toastr.error(this.log_Obj.message,'', { timeOut: 2000 });
                    } else {
                        this.log_Obj = res['data'][0];
                        this.log_Msg = res;

                        console.log('log_Obj--', this.log_Obj);

                        localStorage.setItem('loginData', JSON.stringify(this.log_Obj));
                        this.name=this.log_Obj.first_name+" "+this.log_Obj.last_name;
                        localStorage.setItem('userId', JSON.stringify(this.log_Obj.id));
                        localStorage.setItem('roleId', JSON.stringify(this.log_Obj.role_id));
                        localStorage.setItem('roleName', JSON.stringify(this.log_Obj.role_name));
                        localStorage.setItem('loggeduser', JSON.stringify(this.name));
                        this.toastr.success(this.log_Msg.message,'', { timeOut: 2000, positionClass: 'toast-top-center' });

                        if(this.log_Obj.role_id==1){
                            this.router.navigate(['/dashboard/v1']);
                        }else{
                            this.router.navigate(['/dashboard/v2']);
                        }

                        // dashboard-v2

                        this.service.editPemisssion(this.log_Obj.role_id)
                        .subscribe(res => {
                          console.log("apiiiiiiiiii response", res);
                            this.role_obj = res;
                            console.log("role_obj", this.role_obj);
                            localStorage.setItem('Allpermission', JSON.stringify(this.role_obj));
                            // this.router.navigate(['/permission/setpermission',id]);
                        }) 
                    }
            this.loading = false;
        });
 }

 /*==========Password Show/Hide Function Start Here========*/
 showHidePassword(){
    this.showHideNew = this.showHideNew === false;
  }
  /*==========Password Show/Hide Function End Here========*/
    // signin() {
    //     this.router.navigate(['/dashboard/v1']);
    //     this.submitted = true;
    //     // this.loading = true;
    //     // this.loadingText = 'Sigining in...';
    //     this.submitted = false;
    //     if (this.signinForm.invalid) {
    //         return;
    //     }
      
    //     if (this.signinForm.value.email  === undefined || this.signinForm.value.email === '' ||
    //         this.signinForm.value.password === undefined || this.signinForm.value.password === '') {
    //     } 
    //     else {
    //       this.router.navigate(['/dashboard/v1']);
    //   }
    // }
}
