import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../../../shared/services/http.service";
import { ToastrService } from 'ngx-toastr';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [SharedAnimations]
})
export class ForgotComponent implements OnInit {

  Form: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                public apiservice:HttpService,
                private toastr: ToastrService,
                private router: Router,
                private spinner: NgxSpinnerService,


) { }

    ngOnInit() {
      localStorage.clear();
        this.Form = this.formBuilder.group({
		email   : ['', [Validators.required, Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/)]],
        });
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
    	var result=  await this.apiservice.post('forget-password',this.Form.value).toPromise();
    	this.spinner.hide();
      		if(result['status'] == true){
      			this.toastr.success(result['msg']);
      			this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      			    this.router.navigate(['sessions/forgot']);
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
