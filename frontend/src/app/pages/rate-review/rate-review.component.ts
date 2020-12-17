import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../../services/common.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-rate-review',
  templateUrl: './rate-review.component.html',
  styleUrls: ['./rate-review.component.css']
})
export class RateReviewComponent implements OnInit {
  public ratingkey;
  currentRate = 0;
  ratingForm: FormGroup;
  submitted: boolean;
  rate_Obj;
  constructor( private route: ActivatedRoute,
    public service:CommonService, 
    private fb: FormBuilder,
    public router: Router,
    private toastr: ToastrService,
    public validation: ValidationsService) { }

  ngOnInit(){
    this.ratingkey = this.route.snapshot.params.verifykey;
    console.log("verifykey", this.ratingkey);
    this.createForm1(); 
  }

   /*==========Step Form Value Start Here========*/
   createForm1() {
    this.ratingForm = this.fb.group({
      rating: ['',this.validation.onlyRequired_validator],
      unique_code:['1'],
      review:[''],
    })
  }
  /*==========Step Form Value End Here========*/

  submitForm1(){
    console.log("form", this.ratingForm.value);
    this.submitted = true;
    if (this.ratingForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getRating(this.ratingForm.value)
    .subscribe(res => {
        console.log("api response",res);
        if(res['status'] == 1){
         
          this.rate_Obj = res;
          console.log("ressss",this.rate_Obj);
       
          this.toastr.success(this.rate_Obj.message,'', { timeOut: 2000 });
        }
        else{
          this.toastr.error(res['message'],'', { timeOut: 2000 });
        }
    });
  }

}
