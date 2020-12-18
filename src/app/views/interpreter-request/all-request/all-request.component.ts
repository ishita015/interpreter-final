import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-all-request',
  templateUrl: './all-request.component.html',
  styleUrls: ['./all-request.component.scss']
})
export class AllRequestComponent implements OnInit {
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
  reminder;
 
  view_obj;
  resp_msg;
  
  
  searchControl: FormControl = new FormControl();
  constructor(  private productService: ProductService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public service: HttpService,
    private router: Router) { }

  ngOnInit(){
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.roleId = JSON.parse(localStorage.getItem('roleId'));
    this.interpreterAllRequest();
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.filerData(value);
      });
  } 

     /*========== Filter Start Here========*/
      filerData(val) {
        if (val) {
          val = val.toLowerCase();
        } else {
          console.log("xxxxxxx", this.filteredUser);
          return this.filteredUser = [... this.userData];
        }

        const columns = Object.keys(this.userData[0]);
        if (!columns.length) {
          return;
        }

        const rows = this.userData.filter(function (d) {
          for (let i = 0; i <= columns.length; i++) {
            const column = columns[i];
            // console.log(d[column]);
            if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
              return true;
            }
          }
        });
        this.filteredUser = rows;
      }
       /*========== Filter End Here========*/

       /*========== All Request List Start Here========*/
      interpreterAllRequest() {
        this.service.interpreterAllRequestList()
          .subscribe(res => {
            if (res['status'] == '1') {
              console.log("api response", res);
              this.list_Obj = res['data'];
              this.userData = [...res['data']];
              this.filteredUser = this.list_Obj;
            }
            else{
              this.resp_msg = res;
              this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
            }

          });
      }
       /*========== All Request List End Here========*/

       /*========== Detail Start Here========*/
      viewDetail(request_id){
        console.log("id--",  request_id);
        this.service.getRequestDetail(request_id).subscribe(res => {
          if(res['status'] == 1){
            this.view_obj = res['data'][0];
            console.log("api data",  this.view_obj);
            localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
            this.router.navigate(['/user-request/request-view',request_id]);
          }else{
            this.resp_msg = res;
            this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
          }
            
        })
      }
       /*========== Detail End Here========*/

}