import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-all-request-lists',
  templateUrl: './all-request-lists.component.html',
  styleUrls: ['./all-request-lists.component.scss']
})
export class AllRequestListsComponent implements OnInit {

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
  statusId;
  searchControl: FormControl = new FormControl();
  selectedCompany = false;
  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service:HttpService,
    private router: Router,
    public route:ActivatedRoute
  ) { 
    this.statusId = route.snapshot.params['id']
  }

  ngOnInit(){
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.roleId = JSON.parse(localStorage.getItem('roleId'));
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

  getRowClass = (row) => {    
    return {
      'newRequest': row.status == "0",
      'broadcastRequest': row.status == "1",
      'progressRequest': row.status == "2",
      'completeRequest': row.status == "3",
      'rejecteRequest': row.status == "4",
    };
   }


  userRequestList(e){
    this.allData = this.search_name.value;
    this.service.post('getAllRequestList',{status:this.statusId,search_info: this.allData})
    .subscribe(res => {
      if(res['status'] == true){
        this.list_Obj = res['data'];
        this.userData = [...res['data']];
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
    this.service.getRequestDetail(request_id).subscribe(res => {
      if(res['status'] == 1){
        this.view_obj = res['data'][0];
        localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
        this.router.navigate(['/request-scheduler/details',request_id]);
      }else{
        this.resp_msg = res;
        this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
      }
    })
  }

}
