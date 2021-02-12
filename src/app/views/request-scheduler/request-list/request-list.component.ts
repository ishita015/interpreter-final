import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  list_Obj: any[];
  interpreter_obj: any[];
  view_interpreter;
  view_obj;
  userData;
  filteredUser;
  user_Obj;
  status_msg;
  userId;
  roleId;
  searchNameEmail = '';
  distance = '';
  rate = '';
  rating = '';resp_msg;
  
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

    console.log("userId-",this.userId)
    console.log("roleId-",this.roleId)

    this.userRequestList('1');
    // this.searchControl.valueChanges
    // .pipe(debounceTime(200))
    // .subscribe(value => {
    //   this.filerData(value);
    // });
    // this.products$ = this.productService.getProducts();
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



  userRequestList(e){
    console.log("startDateaaaaaaaaaa", this.range.value.start_date );
    this.allData = this.search_name.value;
    this.startDate = this.range.value.start_date;
    console.log("startDate",  this.startDate);
    this.endDate = this.range.value.end_date;
    console.log("all", this.allData, this.startDate,this.endDate);
    this.service.getUserRequest(this.allData,this.startDate,this.endDate)
    .subscribe(res => {
      console.log("==============================res", res);
      if(res['status'] == 1){
        this.list_Obj = res['data'];
        this.userData = [...res['data']];
        console.log("listttttttt", this.list_Obj);
        this.filteredUser = this.list_Obj;
      }else{
        this.list_Obj = [];
        this.userData = [];
        this.filteredUser = [];
        // this.resp_msg = res;
        // this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
      }
        
    });
  }



  viewDetail(request_id){
    console.log("id--",  request_id);
    this.service.getRequestDetail(request_id).subscribe(res => {
      if(res['status'] == 1){
        this.view_obj = res['data'][0];
        console.log("view object",  this.view_obj);
        localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
        this.router.navigate(['/request-scheduler/details',request_id]);
        // this.router.navigate(['/user-request/request-view',request_id])
      }else{
        this.resp_msg = res;
        this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
      }
        
    })
  }




  //assign
  assignMyNearbyInterpreter(service_id,info){
    
    // localStorage.setItem('assignData', JSON.stringify(info));
    // localStorage.setItem('serviceId', JSON.stringify(service_id));
    this.service.myNearbyInterpreter(service_id,info.language,this.searchNameEmail,this.distance,this.rate,this.rating).subscribe(res => {
        this.interpreter_obj = res['data'];
        console.log("interpreter_obj",  this.interpreter_obj);
        // localStorage.setItem('viewDatainMap', JSON.stringify(this.view_interpreter));
        this.router.navigate(['/request-scheduler/interpreter-view',service_id])
    })
  }



}
