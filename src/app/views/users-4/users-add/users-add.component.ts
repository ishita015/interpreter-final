import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean;
  public user_Obj;
  public user_Msg;
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.createForm();
  }

   /*========== Form Value Start Here========*/
   createForm() {
    this.userForm = this.fb.group({
      name: ['', this.validation.onlyRequired_validator],
      email: ['', this.validation.onlyRequired_validator],
      password: ['', this.validation.onlyRequired_validator],
      mobile: ['', this.validation.onlyRequired_validator],
    });
  }
  /*========== Form Value End Here========*/
  addUser(){
    console.log("form value",this.userForm.value);
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getUserAdd(this.userForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.user_Obj = res
        this.user_Msg = res
        this.toastr.success(this.user_Msg.message,'', { timeOut: 1000 });
        this.router.navigate(['/users/user-list']);  
    });
  }

}
