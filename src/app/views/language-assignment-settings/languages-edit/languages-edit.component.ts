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
    this.createForm();  
    this.LOB();  
    this.Language();  
    
     this.route.paramMap.subscribe(params => {
    console.log("country",);
    if(params.get('id') == null){
    this.Check='Add'
    }else{
    this.Check='Edit'
      this.service.get('GetLanguageAssignmentSettingsDetail/'+params.get('id')).subscribe(res => {
          this.langaugeEditForm.patchValue(res['data'][0])
      })
    }
  });
  }
LobData=[]
LOB(){
  this.service.get('get-lob-active').subscribe(res => {
    this.LobData=res['data']
  })
}
LanguageData=[]
Language(){
  this.service.get('get-language-active').subscribe(res => {
    this.LanguageData=res['data']
  })
}
d_id=0;
s_id=0;
rateCal(e,type){
  if(type == 'd'){
    this.d_id=e;
  }else{
    this.s_id=e
  }
  if(this.d_id != 0 && this.s_id != 0){
    this.service.post('calculate-rate-language-settings',{destination_language:this.d_id,source_language:this.s_id}).subscribe(res => {
    this.langaugeEditForm.patchValue({rate:res['data']['total']})
  })
  }
}
  /*========== Form Value Start Here========*/
  createForm() {
    this.langaugeEditForm = this.fb.group({
      lob_id: ['', this.validation.onlyRequired_validator],
      source_language: ['',this.validation.onlyRequired_validator],
      destination_language: ['',this.validation.onlyRequired_validator],
      rate: ['',this.validation.onlyRequired_validator],
     
      id:['']
    });
  }
  

submitEdit(){
    this.submitted = true;
    if (this.langaugeEditForm.invalid) {
      return;
    }
    this.submitted = false;
  this.service.post('addEditLanguageSetting',this.langaugeEditForm.value)
                .subscribe(res => {
                    this.toastr.success(res['msg'],'', { timeOut: 1000 , positionClass: 'toast-top-center'});
                    this.router.navigate(['/language-assignment-settings/list']);  
        });
      }


}
