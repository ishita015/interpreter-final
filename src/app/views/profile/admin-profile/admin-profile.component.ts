import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  adminProfileForm: FormGroup;
  public admin_Obj;
  submitted: boolean;
  admin_Msg;
  selectedFile:File = null;
  url:any = '';
  editdata;
  userId;
  constructor(public validation: ValidationsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service:HttpService) { }

  ngOnInit(){
    this.createForm();
    this.editdata = JSON.parse(localStorage.getItem('loginData'));
    console.log("data", this.editdata);
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.patchValue();
  }

   /*========== Form Value Start Here========*/
   createForm() {
    this.adminProfileForm = this.fb.group({
      name: ['',this.validation.name_validation],
      mobile: ['',this.validation.mobile_validator],
      email: [''],
      user_id:[''],
      address:['',this.validation.onlyRequired_validator],
      image:['',this.validation.onlyRequired_validator],
    });
  }
  /*========== Form Value End Here========*/

   /*========== Edit Input Value Start Here========*/
   patchValue(){
    this.adminProfileForm.get('name').patchValue(this.editdata.name);
    this.adminProfileForm.get('mobile').patchValue(this.editdata.mobile);
    this.adminProfileForm.get('email').patchValue(this.editdata.email);
    this.adminProfileForm.get('address').patchValue(this.editdata.address);
  }
/*==========Edit Input Value End Here========*/

   /*==========Single Image Function Start Here========*/
   onSingleFileChange(event){
   
    // this.selectedFile = <File>event.target.files[0]
    let file: File = event.target.files[0];
    this.selectedFile= file;
    console.log("imagesss", this.selectedFile);
    
  //   if (event.target.files && event.target.files[0]) {
  //    var reader = new FileReader();
  //    reader.readAsDataURL(event.target.files[0]); // read file as data url
  //    reader.onload = (event) => { // called once readAsDataURL is completed
  //      this.url = event.target.result;
  //      console.log("lllllllllllllllllllll", this.url);
       
  //    }
  //  } 
  }
  /*==========Single Image Function End Here========*/

  admin_profile(){
    console.log("form value",this.adminProfileForm.value);
    this.submitted = true;
    if (this.adminProfileForm.invalid) {
      return;
    }
    this.submitted = false;
    const formData: any = new FormData();
    this.adminProfileForm.value.image = this.selectedFile;
    console.log("iii", this.adminProfileForm.value.image);
    this.adminProfileForm.value.user_id = this.userId; 
    console.log("userIdddd",this.adminProfileForm.value.user_id);
    
    formData.append('name', this.editdata.name);
    formData.append('user_id', this.adminProfileForm.value.user_id);
    formData.append('mobile', this.adminProfileForm.value.mobile);
    formData.append('address', this.adminProfileForm.value.address);
    formData.append('image', this.selectedFile);
    console.log("oooooooooooooooo",formData);
    
    this.service.getProfileUpadte(formData)
    .subscribe(res => {
      // if(res['status']=='0'){
        console.log("api response",res);
        this.admin_Obj = res;
        this.admin_Msg = res;
        this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
        // this.router.navigate(['/languages/list']);  
      // }
      // else{
      //   console.log("api response",res);
      //   this.admin_Obj = res;
      //   this.admin_Msg = res;
      //   this.toastr.success(this.admin_Msg.message,'', { timeOut: 1000 });
      //   // this.router.navigate(['/languages/list']);  
      // }
    });
  }
}
