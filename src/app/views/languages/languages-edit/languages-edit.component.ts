import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-languages-edit',
  templateUrl: './languages-edit.component.html',
  styleUrls: ['./languages-edit.component.scss']
})
export class LanguagesEditComponent implements OnInit {
  langaugeEditForm: FormGroup;
  public data;
  public language_Obj;
  public language_Msg;
  submitted: boolean;
  constructor(public validation: ValidationsService,
    public service:HttpService,private fb: FormBuilder,
    private toastr: ToastrService,private router: Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(){
    this. createForm();  
    this.data = JSON.parse(localStorage.getItem('languageData'));
    console.log("data", this.data);
    console.log("country",this.data.country);
    
    this.patchValue();
  }


  /*========== Form Value Start Here========*/
  createForm() {
    this.langaugeEditForm = this.fb.group({
      name: ['', this.validation.onlyRequired_validator],
      code: ['',this.validation.onlyRequired_validator],
      country: [''],
      // country: [{value: '', disabled: this.data.country != 'N/A' ? true : false }],   
      description: [''],
      base_rate: ['',this.validation.onlyRequired_validator],
      id:['']
    });
  }
  /*========== Form Value End Here========*/

  /*========== Edit Input Value Start Here========*/
  patchValue(){
    this.langaugeEditForm.get('name').patchValue(this.data.name);
    this.langaugeEditForm.get('code').patchValue(this.data.code);
    this.langaugeEditForm.get('country').patchValue(this.data.country);
    this.langaugeEditForm.get('description').patchValue(this.data.description);
    this.langaugeEditForm.get('base_rate').patchValue(this.data.base_rate);
  }
/*==========Edit Input Value End Here========*/

submitEdit(){
  console.log("formmmmmmmmmmmm",this.langaugeEditForm.value);
  console.log("form value",this.langaugeEditForm.value);
    this.submitted = true;
    if (this.langaugeEditForm.invalid) {
      return;
    }
    this.submitted = false;
  this.langaugeEditForm.value.id =  this.data.id
  this.service.getUserUpadte(this.langaugeEditForm.value)
                .subscribe(res => {
                    // console.log("api response",res);
                    this.language_Obj = res
                    this.language_Msg = res;
                    console.log("api response", this.language_Obj);
                    this.toastr.success( this.language_Msg.message,'', { timeOut: 1000 , positionClass: 'toast-top-center'});
                    this.router.navigate(['/languages/list']);  
        });
      }


}
