import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
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
  searchControl: FormControl = new FormControl();
  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service:HttpService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.userRequestList();
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      this.filerData(value);
    });
    // this.products$ = this.productService.getProducts();
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



  userRequestList(){
    this.service.getUserRequest()
    .subscribe(res => {
        console.log("api response",res);
        this.list_Obj = res['data'];
        this.userData = [...res['data']];
        console.log("listttttttt", this.list_Obj);
        this.filteredUser = this.list_Obj;
    });
  }



  viewDetail(request_id){
    console.log("id--",  request_id);
    this.service.getRequestDetail(request_id).subscribe(res => {
        console.log("res--",  res);
        this.view_obj = res['data'][0];
        console.log("view object",  this.view_obj);
        localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
        this.router.navigate(['/user-request/request-view',request_id])
    })
  }




  //assign
  assignMyNearbyInterpreter(service_id,info){
    console.log("id assign",service_id);
    console.log("Infoooooooooooo lang",info.language);
    
    localStorage.setItem('assignData', JSON.stringify(info));
    localStorage.setItem('serviceId', JSON.stringify(service_id));
    this.service.myNearbyInterpreter(service_id,info.language).subscribe(res => {
      // console.log(res['data']);
        this.interpreter_obj = res['data'];
        console.log("interpreter_obj",  this.interpreter_obj);
        localStorage.setItem('viewDatainMap', JSON.stringify(this.view_interpreter));
        this.router.navigate(['/user-request/interpreter-view',service_id])
    })
  }



}
