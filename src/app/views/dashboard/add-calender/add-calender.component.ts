import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from 'frontend/src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-add-calender',
  templateUrl: './add-calender.component.html',
  styleUrls: ['./add-calender.component.scss']
})
export class AddCalenderComponent implements OnInit {
  addCalForm: FormGroup;
  submitted: boolean;
  data_Obj;
  data_Msg;
  Id;
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.createForm();
    this.date_func();
    this.Id = JSON.parse(localStorage.getItem('userId'));
   
  }

   /*==========Today and future date function start here========*/
	 date_func(){
		var today = new Date().toISOString().split('T')[0];
		document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
	  }
   /*==========Today and future date function end here========*/
   
    /*========== Form Value Start Here========*/
    createForm() {
      this.addCalForm = this.fb.group({
        title:['', this.validation.onlyRequired_validator],
        start_time:['', this.validation.onlyRequired_validator],
        date:['', this.validation.onlyRequired_validator],
        description:['', this.validation.onlyRequired_validator],
        end_time:['', this.validation.onlyRequired_validator]
      });
      }
      /*========== Form Value End Here========*/

         /*==========Start and end time valid function start here========*/

   start_end_time(e){ 
    var beginningTime = this.addCalForm.value.start_time;
    var endTime = this.addCalForm.value.end_time;
    // var beginningTime = moment(this.addCalForm.value.start_time, 'h:mma');
    // var endTime = moment(this.addCalForm.value.end_time, 'h:mma');
    if (beginningTime > endTime) {
      this.addCalForm.controls['start_time'].setValue('');
      this.addCalForm.controls['end_time'].setValue('');
      this.toastr.error("Invalid Time",'', { timeOut: 2000 });
    }
    if (beginningTime == endTime) {
      this.addCalForm.controls['start_time'].setValue('');
      this.addCalForm.controls['end_time'].setValue('');
      this.toastr.error("Invalid Time",'', { timeOut: 2000 });
    }
    if (beginningTime < endTime) {
      // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
    }
   }
    /*==========Start and end time valid function end here========*/

    addCalender(){
      console.log("form value",this.addCalForm.value);
      this.submitted = true;
      if (this.addCalForm.invalid) {
        return;
      }
      this.submitted = false;
      this.addCalForm.value.user_id = this.Id;
      this.service.getAddCalender(this.addCalForm.value)
      .subscribe(res => {
        if(res['status']=='0'){
          console.log("api response",res);
          this.data_Obj = res
          this.data_Msg = res
          this.toastr.success(this.data_Msg.message,'', { timeOut: 1000 });
          this.router.navigate(['/dashboard/v2']);  
        }else{
          console.log("api response",res);
          this.data_Obj = res
          this.data_Msg = res
          this.toastr.success(this.data_Msg.message,'', { timeOut: 1000 });
          // this.router.navigate(['/login'])
          this.router.navigate(['/dashboard/v2']);  
        }
  
      });
  
    }
}
