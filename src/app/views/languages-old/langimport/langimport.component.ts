import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ValidationsService } from 'src/app/shared/services/validations.service';

@Component({
  selector: 'app-langimport',
  templateUrl: './langimport.component.html',
  styleUrls: ['./langimport.component.scss']
})
export class LangimportComponent implements OnInit {
  uploadForm: FormGroup;  
  formData;


  // serviceEditForm: FormGroup;
  // public data;
  // formData;
  // id;
  // service_edit_Obj;
  // service_edit_Msg;
  // imageSrc;
  // submitted: boolean;
 
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    public service:HttpService  
  ) { }


  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
  }



  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }


  onSubmit() {
    // this.formData = new FormData();
    // this.formData.append('file', this.uploadForm.get('file').value);
    // console.log(this.formData);
    this.service.importLanguage().subscribe(res => {
        console.log("api response",res);
        // this.language_Obj = res
        // this.language_Msg = res
        // this.toastr.success(this.language_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/login'])
        this.router.navigate(['/languages/list']);  
    });

  }


}
