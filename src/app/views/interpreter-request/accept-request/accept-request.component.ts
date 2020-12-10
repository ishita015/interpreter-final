import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.scss']
})
export class AcceptRequestComponent implements OnInit {

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
  noteForm: FormGroup;
  searchControl: FormControl = new FormControl();
  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public service: HttpService,
    private router: Router,
  ) { }


  ngOnInit() {
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
      this.createForm();
    /*this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
    this.array_Obj = this.roleData['data'][0];
    if(this.array_Obj.id){
      this.array_Obj = this.roleData['data'][0];
      console.log("roleData", this.array_Obj);
    }
    */
  }
   /*========== Form Value Start Here========*/
 createForm() {
  this.noteForm = this.fb.group({
    notes:['']
  });
}
/*========== Form Value End Here========*/

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





  interpreterRequestData() {
    this.service.interpreterRequestList(this.roleId, this.userId, '2')
      .subscribe(res => {
        if (res['status'] == '1') {
          console.log("api response", res);
          this.list_Obj = res['data'];
          this.userData = [...res['data']];
          // console.log("listttttttt", this.list_Obj);
          this.filteredUser = this.list_Obj;
        }

      });
  }

  // 
  requestComplete(id, modal) {
    console.log("idddddddddd", id);
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.service.interpreterReqCompleted(id, this.userId)
          .subscribe(res => {
            this.msg = res;
            if (res['status'] == '1') {
              this.toastr.success(this.msg.message, '', { timeOut: 1000 });

              this.router.navigate(['/interpreter-request/completed-list']);
            }
            // else{
            //   this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
            //   this.router.navigate(['/interpreter-request/list']);
            // }

          })
      }, (reason) => {
      });
  }
  reminder_popup_open(id,risId,modal) {
    console.log("iddddddd",id,risId);
   
    
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
      this.service.getReminderRequest(id,risId,this.noteForm.value.notes)
        .subscribe(res => {
          this.reminder = res;
          console.log("reminder form", this.reminder);
          if (res['status'] == '1') {
            this.toastr.success(this.msg.message, '', { timeOut: 1000 });
            this.router.navigate(['/interpreter-request/accept-list']);
          }
        })
    }, (reason) => {
    });
    
  }

}

