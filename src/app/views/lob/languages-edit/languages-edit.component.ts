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
  Check='Add'
  ngOnInit(){
    this. createForm();  
    this.route.paramMap.subscribe(params => {
    console.log("country",);
    if(params.get('id') == null){
    this.Check='Add'
    }else{
    this.Check='Edit'
      this.service.get('get-lob-details/'+params.get('id')).subscribe(res => {
          this.langaugeEditForm.patchValue(res['data'][0])
      })
    }
  });
    
  }


  /*========== Form Value Start Here========*/
  createForm() {
    this.langaugeEditForm = this.fb.group({
      name: ['', this.validation.onlyRequired_validator],
      id:['']
    });
  }
  

submitEdit(){
    this.submitted = true;
    if (this.langaugeEditForm.invalid) {
      return;
    }
    this.submitted = false;
  this.service.post('add-edit-lob',this.langaugeEditForm.value).subscribe(res => {
                    this.toastr.success(res['msg'],'', { timeOut: 1000 , positionClass: 'toast-top-center'});
                    this.router.navigate(['/lob/list']);  
        });
      }


}
