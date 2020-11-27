import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
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
  userId;
  roleId;
  role_id;
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
    this.interpreterList();
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      this.filerData(value);
    });
    this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
    this.array_Obj = this.roleData['data'][3];
    if(this.array_Obj.id){
      this.array_Obj = this.roleData['data'][3];
      console.log("roleData", this.array_Obj);
    }
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



  interpreterList(){
    this.service.getInterpreterList()
    .subscribe(res => {
        console.log("api response",res);
        this.list_Obj = res['data'];
        this.userData = [...res['data']];
        console.log("listttttttt", this.list_Obj);
        this.filteredUser = this.list_Obj;
        this.role_id = this.roleId;

        console.log("role_id---",this.role_id)
        // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
        // this.router.navigate(['/login'])
    });
}



  deleteUser(id, modal) {
    console.log("delete idddddddddd",id);
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
            this.service.getUserDelete(id)
                .subscribe(res => {
                    this.userdelete_msg = res;
                    console.log("api",res );
                    this.toastr.success(this.userdelete_msg.message,'', { timeOut: 1000 });
                    // this.languageList();
                })
        }, (reason) => {
    });
}



addUser(){
  this.router.navigate(['/users/user-add']);
}

// editUser(id,data){
//   console.log("idd",id);
//   console.log("data",data);
//   localStorage.setItem('userData', JSON.stringify(data));
  
// }


  

// userView(id) {
//   this.router.navigate(['/users/user-view']);
// }


editUser(id) {
  console.log("permission idddddddddd",id);
  this.service.getInterpreterDetail(id)
    .subscribe(res => {
        this.user_Obj = res['data'];
        console.log("api response yes",this.user_Obj);
        localStorage.setItem('interpreterInfo', JSON.stringify(this.user_Obj));
        // this.router.navigate(['/permission/setpermission',id]);
        this.router.navigate(['/users/user-edit',id]);
    })
}





statusChange(target,status,id) {
  console.log("permission target",target);
  console.log("permission status",status);
  console.log("permission id",id);
  this.service.statusUpdate(status,id)
    .subscribe(res => {
        this.status_msg = res;
        this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
        this.interpreterList();
    })
}





userView(id){
  // localStorage.setItem('Id', JSON.stringify(id));
  this.service.getInterpreterDetail(id).subscribe(res => {
    // console.log("apiii", res);
      this.viewUser_obj = res['data'][0];
      console.log("view object",  this.viewUser_obj);
      localStorage.setItem('userViewData', JSON.stringify(this.viewUser_obj));

      this.router.navigate(['/users/user-view',id])
  })
}


}
