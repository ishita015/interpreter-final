import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-interpreter-request-list',
  templateUrl: './interpreter-request-list.component.html',
  styleUrls: ['./interpreter-request-list.component.scss']
})
export class InterpreterRequestListComponent implements OnInit {
  view_obj;
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
  resp_msg;
 
  
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

    console.log("userId-",this.userId)
    // console.log("roleId-",this.roleId)
    this.PendingRequestData('1');
    // this.interpreterRequestData();
    // this.searchControl.valueChanges
    // .pipe(debounceTime(200))
    // .subscribe(value => {
    //   this.filerData(value);
    // });
    /*this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
    this.array_Obj = this.roleData['data'][0];
    if(this.array_Obj.id){
      this.array_Obj = this.roleData['data'][0];
      console.log("roleData", this.array_Obj);
    }
    */
  }

  
/*========== Search Filter For Table Start Here========*/
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
/*========== Search Filter For Table End Here========*/

/*========== Pending Request Start Here========*/
    PendingRequestData(e){
      this.allData = this.search_name.value;
      this.startDate = this.range.value.start_date;
      this.endDate = this.range.value.end_date;
      this.service.AllPendingRequest(this.allData,this.startDate,this.endDate,this.userId)
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
/*========== Pending Request End Here========*/


  
//   interpreterRequestData(){
//     this.service.interpreterRequestList(this.roleId,this.userId,'1')
//     .subscribe(res => {
//       if(res['status']=='1'){
//         console.log("api response",res);
//         this.list_Obj = res['data'];
//         this.userData = [...res['data']];
//         // console.log("listttttttt", this.list_Obj);
//         this.filteredUser = this.list_Obj;
//       }
       
//     });
// }


/*========== Accept/Denay Through Interpreter Start Here========*/

// requestComplete(id, modal) {
interpreterReply(ris_id,res_type,modal){
  
  this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.service.interpreterReqReply(this.userId,ris_id,res_type)
            .subscribe(res => {
              console.log("res---", res)
              this.status_msg = res;
              if (res['status'] == '1') {
                this.toastr.success(this.status_msg.message,'', { timeOut: 1000, positionClass: 'toast-top-center' });
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
/*========== Accept/Declined Through Interpreter End Here========*/

/*========== Show Details Start Here========*/

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
      this.toastr.error(this.resp_msg.message,'', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
      
  })
}
/*========== Show Details End Here========*/


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
  /*========== Number of Interpreter Popup Open Start Here========*/

  numOfInterpreter(id,totalInterpreter,modal){
    // this.router.navigate(['/interpreter-request/interpreter-history']);
    // console.log("iddddddddddd",id);
    // localStorage.setItem('interhistory', JSON.stringify(id));
    console.log("totalInterpreter",totalInterpreter)
    if(totalInterpreter==0){
      this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
    }else{
      // this.router.navigate(['/languages/interpreter-detail']);
        this.router.navigate(['/interpreter/interpreter-list/',id,2]);
        // interpreter-list/:id/:type
    }

  }

  /*========== Number of Interpreter Popup Open End Here========*/
}
