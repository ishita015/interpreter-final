import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.scss']
})
export class PendingRequestComponent implements OnInit {
  userId;
  roleId;
  list_Obj: any[];
  userData;
  filteredUser;
  status_msg;
  view_obj;
  resp_msg;
  searchControl: FormControl = new FormControl();
  constructor( 
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service:HttpService,
    private router: Router,) { }

  ngOnInit(){
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.roleId = JSON.parse(localStorage.getItem('roleId'));

    this.interpreterRequestData();
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      this.filerData(value);
    });
  }

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      console.log("xxxxxxx",this.filteredUser);
      return this.filteredUser = [... this.userData];
    }

    const columns = Object.keys( this.userData[0]);
    if (!columns.length) {
      return;
    }

    const rows =  this.userData.filter(function(d) {
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

    interpreterRequestData(){
      this.service.interpreterRequestList(this.roleId,this.userId,'2')
      .subscribe(res => {
        if(res['status']=='1'){
          console.log("api response",res);
          this.list_Obj = res['data'];
          this.userData = [...res['data']];
          this.filteredUser = this.list_Obj;
        }
        
      });
    }


  // requestComplete(id, modal) {
  interpreterReply(user_id,ris_id,res_type,modal){
    
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
          this.service.interpreterReqReply(user_id,ris_id,res_type)
              .subscribe(res => {
                console.log("res---", res)
                this.status_msg = res;
                if (res['status'] == '1') {
                  this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
                  // location.reload();

                  if(res_type=='2'){
                    this.router.navigate(['/interpreter-request/accept-list']);
                  }else{
                    this.router.navigate(['/interpreter-request/reject-list']);
                  }
                  
                  // this.interpreterRequestData();
                }else{
                  this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
                  this.router.navigate(['/interpreter-request/list']);
                }
              })
        }, (reason) => {
    });
  }


  viewDetail(request_id){
    console.log("id--",  request_id);
    this.service.getRequestDetail(request_id).subscribe(res => {
      if(res['status'] == 1){
        this.view_obj = res['data'][0];
        console.log("view object",  this.view_obj);
        localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
        this.router.navigate(['/user-request/request-view',request_id])
      }else{
        this.resp_msg = res;
        this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
      }
        
    })
  }




}
