import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-interpreter-list',
  templateUrl: './interpreter-list.component.html',
  styleUrls: ['./interpreter-list.component.scss']
})
export class InterpreterListComponent implements OnInit {
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
  role_id; response_msg;
  json_Obj;
  id;
  type;

  searchControl: FormControl = new FormControl();

  Start_Date;
  End_Date;
  search_name: FormControl = new FormControl();
  range = new FormGroup({
    start_date: new FormControl(),
    end_date: new FormControl()
  });
  allData;
  startDate;
  endDate;
  constructor( private productService: ProductService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service: HttpService,

    private router: Router,
    private route: ActivatedRoute) { 

    }

  ngOnInit(){
    this.id = this.route.snapshot.params.id ? this.route.snapshot.params.id : '0';
    console.log("iddddddd", this.id);
    this.type = this.route.snapshot.params.type? this.route.snapshot.params.type : '0';
    console.log("qqqqq", this.type );
 
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.roleId = JSON.parse(localStorage.getItem('roleId'));
    this.interpreterList('1');
    // this.searchControl.valueChanges
    //   .pipe(debounceTime(200))
    //   .subscribe(value => {
    //     this.filerData(value);
    //   });
    this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
    // this.array_Obj = this.roleData['data'][3]; 
    // if(this.array_Obj.id){
    //   this.array_Obj = this.roleData['data'][3];
    //   // console.log("roleData", this.array_Obj);
  }


  // filerData(val) {
  //   if (val) {
  //     val = val.toLowerCase();
  //   } else {
  //     console.log("xxxxxxx", this.filteredUser);
  //     return this.filteredUser = [... this.userData];
  //   }

  //   const columns = Object.keys(this.userData[0]);
  //   if (!columns.length) {
  //     return;
  //   }

  //   const rows = this.userData.filter(function (d) {
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
  
  interpreterList(e) {
  
    // this.range.value.start_date = e;
    console.log("startDateaaaaaaaaaa", this.range.value.start_date );
    this.allData = this.search_name.value;
    this.startDate = this.range.value.start_date;
    console.log("startDate",  this.startDate);
    this.endDate = this.range.value.end_date;
    console.log("all", this.allData, this.startDate,this.endDate);
    
    this.service.getInterpreterList(this.id,this.type,this.allData,this.startDate,this.endDate)
    // this.service.getInterpreterList(this.id,this.type)
      .subscribe(res => {
        if (res['status'] == 1) {
          this.list_Obj = res['data'];
          this.userData = [...res['data']];
          this.filteredUser = this.list_Obj;
          this.role_id = this.roleId;
        } else {
          // this.response_msg=res;
          // this.toastr.success(this.response_msg.msg,'', { timeOut: 2000 });
          this.router.navigate(['/users/user-list'])
        }
      });
  }


  deleteInterpreter(id, modal) {
    console.log("delete idddddddddd", id);
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.service.getUserDelete(id)
          .subscribe(res => {
            this.userdelete_msg = res;
            console.log("api", res);
            this.toastr.success(this.userdelete_msg.message, '', { timeOut: 1000 });
            // this.languageList();
          })
      }, (reason) => {
      });
  }



  addInterpreter() {
    this.router.navigate(['/interpreter/interpreter-add']);
  }

  profileInterpreter(id){
    console.log("iddddd",id);
    localStorage.setItem('interpreterId', JSON.stringify(id));
    this.router.navigate(['/interpreter/interpreter-profile',id]);
  }

  
  editInterpreter(id, data) {
 
    this.router.navigate(['/interpreter/interpreter-edit', id]);
    console.log("permission idddddddddd", id);
    console.log("data", data);
    localStorage.setItem('editData', JSON.stringify(data));
    localStorage.setItem('rowId', JSON.stringify(id));
    this.service.getInterpreterDetail(id)
      .subscribe(res => {
        this.user_Obj = res['data'];
        this.json_Obj = res['data']['0']
        console.log("edit api", this.json_Obj.id);
        // localStorage.setItem('editData', JSON.stringify(this.json_Obj));
        // localStorage.setItem('interpreterInfo', JSON.stringify(this.user_Obj));
        // this.router.navigate(['/permission/setpermission',id]);
        
        // location.reload();
      })
  }

  statusChange(target, status, id) {
    console.log("permission target", target);
    console.log("permission status", status);
    console.log("permission id", id);
    this.service.statusUpdate(status, id)
      .subscribe(res => {
        this.status_msg = res;
        this.toastr.success(this.status_msg.message, '', { timeOut: 1000 });
        this.interpreterList('1');
      })
  }

  userView(id){
    this.router.navigate(['/interpreter/interpreter-view', id])
  }

  userInterpreter(id) {
    // localStorage.setItem('Id', JSON.stringify(id));
    this.service.getInterpreterDetail(id).subscribe(res => {
      // console.log("apiii", res);
      this.viewUser_obj = res['data'][0];
      console.log("view object", this.viewUser_obj);
      localStorage.setItem('userViewData', JSON.stringify(this.viewUser_obj));
      this.router.navigate(['/interpreter/interpreter-view', id])
    })
  }

  


}
