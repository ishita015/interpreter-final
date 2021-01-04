import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-set-calculation-add',
  templateUrl: './set-calculation-add.component.html',
  styleUrls: ['./set-calculation-add.component.scss']
})
export class SetCalculationAddComponent implements OnInit {
  calcutionForm: FormGroup;
  cal_Obj;
  cal_Msg;
  detail_Obj;
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service: HttpService) { }

  ngOnInit() {
    this.createForm();
    this.detailProfile();

    // this.patchValue();

  }

  /*========== Form Value Start Here========*/
  createForm() {
    this.calcutionForm = this.fb.group({
      after_hours: [''],
      weekend: [''],
      holidays: [''],
      last_minute: [''],
      rush_fee: [''],
      weekend_after_hours: [''],
      holiday_after_hours: [''],
    });
  }
  /*========== Form Value End Here========*/

  /*==========add calcution start Here========*/

  addCal() {
    this.service.getCalAdd(this.calcutionForm.value)
      .subscribe(res => {
        if (res['status'] == 1) {
          this.cal_Obj = res
          this.cal_Msg = res;
          this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });

        } else {
          this.cal_Obj = res
          this.cal_Msg = res
          this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
        }
      });
  }
  /*==========add calcution end Here========*/


  patchValue() {
    this.calcutionForm.get('after_hours').patchValue(this.detail_Obj.after_hours);
    this.calcutionForm.get('weekend').patchValue(this.detail_Obj.weekend);
    this.calcutionForm.get('holidays').patchValue(this.detail_Obj.holidays);
    this.calcutionForm.get('last_minute').patchValue(this.detail_Obj.last_minute);
    this.calcutionForm.get('rush_fee').patchValue(this.detail_Obj.rush_fee);
    this.calcutionForm.get('weekend_after_hours').patchValue(this.detail_Obj.weekend_after_hours);
    this.calcutionForm.get('holiday_after_hours').patchValue(this.detail_Obj.holiday_after_hours);
  }

  detailProfile() {
    this.service.getCalDeatil().subscribe(res => {
      if (res['status'] == 1) {
        this.detail_Obj = res['data'][0];
        this.patchValue();
      }
    })
  }

  updateCal(){
  
    this.service.calUpadte(this.calcutionForm.value)
    .subscribe(res => {
      if(res['status']== 1){
        this.cal_Obj = res
        this.cal_Msg  = res
        this.toastr.success(this.cal_Msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
        
      }else{
        this.cal_Obj = res
        this.cal_Msg  = res
        this.toastr.success(this.cal_Msg .message,'', { timeOut: 1000, positionClass: 'toast-top-center' });
       
      }

    });
  }
}
