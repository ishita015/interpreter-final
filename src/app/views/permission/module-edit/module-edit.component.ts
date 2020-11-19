import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.scss']
})
export class ModuleEditComponent implements OnInit {

  moduleEditForm: FormGroup;
  public data;
  public module_Obj;
  public module_Msg;
  submitted: boolean;
  constructor(
    public validation: ValidationsService,
    public service:HttpService,private fb: FormBuilder,
    private toastr: ToastrService,private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(){
    this. createForm();  
    this.data = JSON.parse(localStorage.getItem('moduleData'));
    console.log("data", this.data);
    this.patchValue();
  }


  /*========== Form Value Start Here========*/
  createForm() {
    this.moduleEditForm = this.fb.group({
      module_name: ['', this.validation.onlyRequired_validator],
      id:['']
    });
  }
  /*========== Form Value End Here========*/

  /*========== Edit Input Value Start Here========*/
  patchValue(){
    this.moduleEditForm.get('module_name').patchValue(this.data.module_name);
  }
/*==========Edit Input Value End Here========*/

submitEdit(){
  console.log("formmmmmmmmmmmm",this.moduleEditForm.value);
  console.log("form value",this.moduleEditForm.value);
    this.submitted = true;
    if (this.moduleEditForm.invalid) {
      return;
    }
  this.submitted = false;
  this.moduleEditForm.value.id =  this.data.id
  this.service.moduleUpadte(this.moduleEditForm.value)
        .subscribe(res => {
            // console.log("api response",res);
            this.module_Obj = res
            this.module_Msg = res;
            // console.log("api response", this.module_Obj);
            this.toastr.success( this.module_Msg.message,'', { timeOut: 1000 });
            this.router.navigate(['/permission/modulelist']);  
    });
  }

 
}
