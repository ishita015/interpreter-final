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
    console.log("yes is working",this.dataResult);
    // this.createForm();
  }


  
  setCheck(event,eve_key,i){
    console.log(event);
    if ( event.target.checked ) {
        this.dataResult[i][eve_key] = true;
    }else{
        this.dataResult[i][eve_key] = false;
    }
  }

  



    saveRole(){
      console.log("this is test",this.dataResult);
      
      this.service.userRoleadd(this.dataResult)
      .subscribe(res => {
          console.log("api response",res);
          this.role_Msg = res
          this.toastr.success(this.role_Msg.message,'', { timeOut: 1000 });
           this.router.navigate(['/permission/rolelist']);  
      });
  }

}
