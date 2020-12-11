import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { isThisSecond } from 'date-fns';
import { ValidationsService } from 'frontend/src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-edit-calender',
  templateUrl: './edit-calender.component.html',
  styleUrls: ['./edit-calender.component.scss']
})
export class EditCalenderComponent implements OnInit {
  editCalForm: FormGroup;
  submitted: boolean;
  data_Obj;
  data_Msg;
  Id;
  editObj;
  edit_date;
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit() {
    this.edit_date = JSON.parse(localStorage.getItem('editData'));
    console.log("eeeeeeeeeeeee", this.edit_date);
    
    this.createForm();  
    this.patchValue();
    this.date_func();
   
    
  }
   /*========== Form Value Start Here========*/
   createForm() {
    this.editCalForm = this.fb.group({
      title:['', this.validation.onlyRequired_validator],
      start_time:['', this.validation.onlyRequired_validator],
      date:['', this.validation.onlyRequired_validator],
      description:['', this.validation.onlyRequired_validator],
      end_time:['', this.validation.onlyRequired_validator],
      id:['']
    });
    }
    /*========== Form Value End Here========*/

     /*========== Edit Input Value Start Here========*/
  patchValue(){
    this.editCalForm.get('title').patchValue(this.edit_date.title);
    this.editCalForm.get('start_time').patchValue(this.edit_date.start_time);
    this.editCalForm.get('date').patchValue(this.edit_date.date);
    this.editCalForm.get('description').patchValue(this.edit_date.description);
    this.editCalForm.get('end_time').patchValue(this.edit_date.end_time);
  }
/*==========Edit Input Value End Here========*/

       /*==========Start and end time valid function start here========*/

       start_end_time(e){ 
        var beginningTime = this.editCalForm.value.start_time;
        var endTime = this.editCalForm.value.end_time;
        
        
        // var beginningTime = moment(this.editCalForm.value.start_time, 'h:mma');
        // var endTime = moment(this.editCalForm.value.end_time, 'h:mma');
        if (beginningTime > endTime) {
          this.editCalForm.controls['start_time'].setValue('');
          this.editCalForm.controls['end_time'].setValue('');
          this.toastr.error("Invalid Time",'', { timeOut: 2000 });
        }
        if (beginningTime == endTime) {
          this.editCalForm.controls['start_time'].setValue('');
          this.editCalForm.controls['end_time'].setValue('');
          this.toastr.error("Invalid Time",'', { timeOut: 2000 });
        }
        if (beginningTime < endTime) {
          // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
       }
        /*==========Start and end time valid function end here========*/

        /*==========Today and future date function start here========*/
	 date_func(){
		var today = new Date().toISOString().split('T')[0];
		document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
	  }
   /*==========Today and future date function end here========*/
   
    
        editCalender(){
          console.log("form value",this.editCalForm.value);
          this.submitted = true;
          if (this.editCalForm.invalid) {
            return;
          }
          this.submitted = false;
          this.editCalForm.value.id = this.edit_date.id;
          this.service.getUpdateCalender(this.editCalForm.value)
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
