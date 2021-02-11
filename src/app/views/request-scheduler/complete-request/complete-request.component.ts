import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-complete-request',
  templateUrl: './complete-request.component.html',
  styleUrls: ['./complete-request.component.scss']
})
export class CompleteRequestComponent implements OnInit {
  
  userId;
  roleId;
  list_Obj: any[];
  user_time: any[];
  time_var;
  userdelete_msg;
  userData;
  filteredUser;
  viewUser_obj;
  user_Obj;
  status_msg;
  roleData;
  array_Obj;
  msg;
  view_obj;
  resp_msg;
  // searchControl: FormControl = new FormControl();

  //search calendar
  search_name: FormControl = new FormControl();
  range = new FormGroup({
    start_date: new FormControl(),
    end_date: new FormControl()
  });
  allData;
  startDate;
  endDate;
  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service:HttpService,
    private router: Router,
  ) { }


  ngOnInit(){
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.roleId = JSON.parse(localStorage.getItem('roleId'));

    this.interpreterRequestData('1');
    // this.searchControl.valueChanges
    // .pipe(debounceTime(200))
    // .subscribe(value => {
    //   this.filerData(value);
    // });
   
  }

  // filerData(val) {
  //   if (val) {
  //     val = val.toLowerCase();
  //   } else {
  //     console.log("xxxxxxx",this.filteredUser);
  //     return this.filteredUser = [... this.userData];
  //   }

  //   const columns = Object.keys( this.userData[0]);
  //   if (!columns.length) {
  //     return;
  //   }

  //   const rows =  this.userData.filter(function(d) {
  //     for (let i = 0; i <= columns.length; i++) {
  //       const column = columns[i];
  //       // console.log(d[column]);
  //       if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
  //         return true;
  //       }
  //     }
  //   });
  //   this.filteredUser = rows;
  // }

  interpreterRequestData(e){
    this.allData = this.search_name.value;
    this.startDate = this.range.value.start_date;
    this.endDate = this.range.value.end_date;
    this.service.interpreterRequestList(this.roleId,this.userId,'4',this.allData,
    this.startDate,this.endDate)
    .subscribe(res => {
      if(res['status']=='1'){
        console.log("api response",res);
        this.list_Obj = res['data'];
        this.userData = [...res['data']];
        // console.log("listttttttt", this.list_Obj);
        this.filteredUser = this.list_Obj;
      }
       
    });
}

viewDetail(request_id){
  console.log("id--",  request_id);
  this.service.getRequestDetail(request_id).subscribe(res => {
    if(res['status'] == 1){
      this.view_obj = res['data'][0];
      console.log("api response",  this.view_obj);
      localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
      this.router.navigate(['/user-request/request-view',request_id])
    }else{
      this.resp_msg = res;
      this.toastr.error(this.resp_msg.message,'', { timeOut: 2000, positionClass: 'toast-top-center' });
    }   
  })
}


}

