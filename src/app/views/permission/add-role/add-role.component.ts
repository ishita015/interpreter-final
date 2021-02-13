import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
	
  roleForm: FormGroup;
  public role_Obj;
  submitted: boolean;
  role_Msg;

  constructor(
  	public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService
  ) { }

  ngOnInit(): void {
  	this.createForm();
  }


  /*========== Form Value Start Here========*/
   createForm() {
    this.roleForm = this.fb.group({
      role_name: ['', this.validation.onlyRequired_validator],
    });
  }
  /*========== Form Value End Here========*/

  /*========== Add Api Start Here========*/
  addRole(){
    console.log("form value",this.roleForm.value);
    this.submitted = true;
    if (this.roleForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getRoleAdd(this.roleForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.role_Obj = res
        this.role_Msg = res
        this.toastr.success(this.role_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/login'])
        this.router.navigateByUrl('/sessions/signin', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/permission/rolelist']);  
}); 
    });
  }
  /*==========Add Api End Here========*/  


   
}
