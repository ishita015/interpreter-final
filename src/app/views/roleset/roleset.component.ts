import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../shared/services/http.service";
// import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roleset',
  templateUrl: './roleset.component.html',
  styleUrls: ['./roleset.component.scss']
})
export class RolesetComponent implements OnInit {
  dataResult;
  roleForm: FormGroup; 
  public role_Obj;
  submitted: boolean;
  role_Msg;
  // arr=[1]
  constructor(
    // public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService
  ) { }

  ngOnInit() {
    this.dataResult = JSON.parse(localStorage.getItem('permissionInfo'));
    // console.log("yes is working",this.dataResult);
    // this.createForm();
  }


  
  setCheck(event,eve_key,i){
    if ( event.target.checked ) {
        this.dataResult[i][eve_key] = 'true';
    }else{
        this.dataResult[i][eve_key] = 'false';
    }
  }

  



    saveRole(){
      var count=0;
      var count1=0;
      for (var i = 0; i < this.dataResult.length; ++i) {
        if(this.dataResult[i].status == true || this.dataResult[i].status == 'true'){
          if(this.dataResult[i].add_permission == 'false'  && this.dataResult[i].delete_permission == 'false'  && this.dataResult[i].edit_permission  == 'false' && this.dataResult[i].status_permission  == 'false' && this.dataResult[i].view_permission  == 'false')
          {
            count=count+1;
        }
      }
  }
      if(count > 0){
            this.toastr.warning('Please select permission if module is selected');
            return

      }else{

      for (var i = 0; i < this.dataResult.length; ++i) {
          if(this.dataResult[i].add_permission == 'true'  || this.dataResult[i].delete_permission == 'true' || this.dataResult[i].edit_permission  == 'true' || this.dataResult[i].status_permission  == 'true' || this.dataResult[i].view_permission  == 'true')
          {
           if(this.dataResult[i].status == false || this.dataResult[i].status == 'false'){
              count1=count1+1;
           }
        }
        }  

        if(count1 > 0){
            this.toastr.warning('Please select  module');
            return

      }else{
      this.service.userRoleadd(this.dataResult)
      .subscribe(res => {
          this.role_Msg = res
          this.toastr.success(this.role_Msg.message,'', { timeOut: 1000 });
           this.router.navigate(['/permission/rolelist']);  
      });
      }
      }


}
}
