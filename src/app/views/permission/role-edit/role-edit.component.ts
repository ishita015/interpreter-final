import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  roleEditForm: FormGroup;
  public data;
  public role_Obj;
  public role_Msg;
  submitted: boolean;
  constructor(
    public validation: ValidationsService,
    public service:HttpService,private fb: FormBuilder,
    private toastr: ToastrService,private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(){
    this. createForm();  
    this.data = JSON.parse(localStorage.getItem('roleData'));
    console.log("data", this.data);
    this.patchValue();
  }


  /*========== Form Value Start Here========*/
  createForm() {
    this.roleEditForm = this.fb.group({
      role_name: ['', this.validation.onlyRequired_validator],
      id:['']
    });
  }
  /*========== Form Value End Here========*/

  /*========== Edit Input Value Start Here========*/
  patchValue(){
    this.roleEditForm.get('role_name').patchValue(this.data.role_name);
  }
/*==========Edit Input Value End Here========*/

submitEdit(){
  // console.log("formmmmmmmmmmmm",this.roleEditForm.value);
  // console.log("form value",this.roleEditForm.value);
    this.submitted = true;
    if (this.roleEditForm.invalid) {
      return;
    }
  this.submitted = false;
  this.roleEditForm.value.id =  this.data.id
  this.service.getRoleUpadte(this.roleEditForm.value)
        .subscribe(res => {
            // console.log("api response",res);
            this.role_Obj = res
            this.role_Msg = res;
            console.log("api response", this.role_Obj);
            this.toastr.success( this.role_Msg.message,'', { timeOut: 1000 });
            this.router.navigate(['/permission/rolelist']);  
    });
  }

 
}
