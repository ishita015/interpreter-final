import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-interpreter-request-list',
  templateUrl: './interpreter-request-list.component.html',
  styleUrls: ['./interpreter-request-list.component.scss']
})
export class InterpreterRequestListComponent implements OnInit {
  
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
  searchControl: FormControl = new FormControl();
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

    // console.log("userId-",this.userId)
    // console.log("roleId-",this.roleId)

    this.interpreterRequestData();
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      this.filerData(value);
    });
    /*this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
    this.array_Obj = this.roleData['data'][0];
    if(this.array_Obj.id){
      this.array_Obj = this.roleData['data'][0];
      console.log("roleData", this.array_Obj);
    }
    */
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
    this.service.interpreterRequestList(this.roleId,this.userId,'1')
    .subscribe(res => {
        console.log("api response",res);
        this.list_Obj = res['data'];
        this.userData = [...res['data']];
        // console.log("listttttttt", this.list_Obj);
        this.filteredUser = this.list_Obj;
       
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



/*
  interpreterReply_old(user_id,ris_id,res_type,modal){
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
    this.service.interpreterReqReply(user_id,ris_id,res_type).subscribe(res => {
      this.status_msg = res;
        if (res['status'] == '1') {
          this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
          // location.reload();
          this.router.navigate(['/interpreter-request/reject-list']);
          // this.interpreterRequestData();
        }else{
          this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
          this.router.navigate(['/interpreter-request/list']);
        }
    })
    });
  }
*/
}
