import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  userEditForm: FormGroup;
  public data;
  public useredit_Obj;
  public useredit_Msg;
  submitted: boolean;
  constructor(public validation: ValidationsService,
    public service:HttpService,private fb: FormBuilder,
    private toastr: ToastrService,private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(){
    this. createForm();  
    this.data = JSON.parse(localStorage.getItem('userData'));
    console.log("data", this.data);
    this.patchValue();
  }

  /*========== Form Value Start Here========*/
  createForm() {
    this.userEditForm = this.fb.group({
      // email: ['', this.validation.onlyRequired_validator],
      name: ['', this.validation.onlyRequired_validator],
      mobile: ['', this.validation.onlyRequired_validator],
      // password: ['', this.validation.onlyRequired_validator],
      id:['']
    });
  }
  /*========== Form Value End Here========*/
  /*========== Edit Input Value Start Here========*/
  patchValue(){
    // this.userEditForm.get('email').patchValue(this.data.email);
    this.userEditForm.get('name').patchValue(this.data.name);
    this.userEditForm.get('mobile').patchValue(this.data.mobile);
    // this.userEditForm.get('password').patchValue(this.data.password);
  }
/*==========Edit Input Value End Here========*/
  submitUser(){
    console.log("formmmmmmmmmmmm",this.userEditForm.value);
    console.log("form value",this.userEditForm.value);
      this.submitted = true;
      if (this.userEditForm.invalid) {
        return;
      }
      this.submitted = false;
    this.userEditForm.value.id =  this.data.id
    this.service.updateInterpreter(this.userEditForm.value)
                  .subscribe(res => {
                      // console.log("api response",res);
                      this.useredit_Obj = res
                      this.useredit_Msg = res;
                      console.log("api response", this.useredit_Obj);
                      this.toastr.success( this.useredit_Msg.message,'', { timeOut: 1000 });
                      this.router.navigate(['/users/user-list']);  
          });
        }
  

}
