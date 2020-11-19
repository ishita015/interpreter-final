import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent implements OnInit {
 
  moduleForm: FormGroup;
  public module_Obj;
  submitted: boolean;
  module_Msg;	
  
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
    this.moduleForm = this.fb.group({
      module_name: ['', this.validation.onlyRequired_validator],
    });
  }
  /*========== Form Value End Here========*/

  /*========== Add Api Start Here========*/
  addModule(){
    console.log("form value",this.moduleForm.value);
    this.submitted = true;
    if (this.moduleForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.moduleAdd(this.moduleForm.value)
    .subscribe(res => {
        console.log("api response",res);
        this.module_Obj = res
        this.module_Msg = res
        this.toastr.success(this.module_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/login'])
        this.router.navigate(['/permission/modulelist']);  
    });
  }
  /*==========Add Api End Here========*/ 




}
