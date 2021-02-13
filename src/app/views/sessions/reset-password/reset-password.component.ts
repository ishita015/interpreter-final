import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../../../shared/services/http.service";
import { ToastrService } from 'ngx-toastr';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ActivatedRoute,ResolveEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MustMatch } from '../../../shared/services/must-match.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [SharedAnimations]
})
export class ResetPasswordComponent implements OnInit {

  Form: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                public apiservice:HttpService,
                private toastr: ToastrService,
                private router: Router,
                private spinner: NgxSpinnerService,
                private activatedRoute: ActivatedRoute,


) { }

    ngOnInit() {
      localStorage.clear();
      this.Form = this.formBuilder.group({
    password   : ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword   : ['', [Validators.required, Validators.minLength(6)]],
    reset_password_key:['']
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
      this.activatedRoute.params.subscribe(params => {
        this.Form.patchValue({reset_password_key:params['id']})
      })
        
    }

    // convenience getter for easy access to form fields
    get f() { return this.Form.controls; }

   async onSubmit() {
        this.submitted = true;

        if (this.Form.invalid) {
            return;
        }
   	this.spinner.show();
    try{
    	var result=  await this.apiservice.post('reset-password',this.Form.value).toPromise();
    	this.spinner.hide();
		if(result['status'] == true){
			this.toastr.success(result['msg']);
			this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
			    this.router.navigate(['sessions/signin']);
			}); 	
		}else{
			this.toastr.warning(result['msg'])
		}
    }
    catch(err){
    	this.spinner.hide();
    	this.toastr.warning('Something went wrong from server/api');
   	 }
    }
    }
