import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ValidationsService } from 'src/app/shared/services/validations.service';

import { ExcelServicesService } from '../../../shared/services/excel-services.service';

@Component({
  selector: 'app-langimport',
  templateUrl: './langimport.component.html',
  styleUrls: ['./langimport.component.scss']
})
export class LangimportComponent implements OnInit {
 // uploadForm: FormGroup; 
   
  //formData;
  selectedFile:File = null;
  fileToUpload: File = null;
  data  =[
    {
    name: 'English',
    code: 'en',
    country: 'usa',
    base_rate: '20',
    }
];
  excel=[];
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
    private excelService:ExcelServicesService,
    public service:HttpService,
   public toastr:ToastrService  
  ) { 
    this.form = this.formBuilder.group({
      
      image: ['']
    })
  }
  
form: FormGroup;


  ngOnInit() { }

  uploadFile(event) {
    this.selectedFile = <File>event.target.files[0]
  }

  submitForm() {
    console.log(this.form.value)
    if(this.selectedFile == null){
      this.toastr.warning('Please select xlsx file')
    }else{

    var formData: any = new FormData();
    this.form.value.image =  this.selectedFile;
    console.log("aaaaaaaa", this.selectedFile);
    
   formData.append("image", this.selectedFile);
   
    this.service.importLanguage(formData).subscribe(res => {
      console.log("api response",res);
      // this.language_Obj = res
      // this.language_Msg = res
      // this.toastr.success(this.language_Msg.message,'', { timeOut: 1000 });
      // this.router.navigate(['/login'])
      this.router.navigate(['/languages/list']);  
  });
    //this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
      //(response) => console.log(response),
     // (error) => console.log(error)
    //)
  }
    }

  exportAsXLSX(){
    // this.service.getJSON().subscribe(data => {
    //   console.log("mmmmmmmmmmmmmmmmmmmm",data);
      
      this.data.forEach(row => {
        this.excel.push(row);
      });
    //  });
    this.excelService.exportAsExcelFile(this.excel, 'sample');
  }

/*
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

*/
}
