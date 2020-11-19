import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import {ValidationsService} from "../../../shared/services/validations.service";
import { HttpService } from "../../../shared/services/http.service";
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
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        public validation: ValidationsService,
        public service:HttpService
    ) {
        this.createForm();
     }

    ngOnInit() {
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
    this.auth.signin(this.signinForm.value)
        .subscribe(res => {
            if (this.signinForm.value.email  === undefined || this.signinForm.value.email === '' ||
                    this.signinForm.value.password === undefined || this.signinForm.value.password === '') {
                } 
                else {
                  this.router.navigate(['/dashboard/v1']);
                }
            this.loading = false;
        });
 }

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
