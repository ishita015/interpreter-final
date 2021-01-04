import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-interpreter-history-list',
  templateUrl: './interpreter-history-list.component.html',
  styleUrls: ['./interpreter-history-list.component.scss']
})
export class InterpreterHistoryListComponent implements OnInit {
  filteredUser;
  userData;
  requestId;
  interpreter_obj;
  resp_msg;
  searchControl: FormControl = new FormControl();

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service: HttpService,
    private router: Router
  ) { }

  ngOnInit(){
    this.requestId = JSON.parse(localStorage.getItem('interhistory'));
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      this.filerData(value);
    });
    this.numOfInterpreter();
  }

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

  numOfInterpreter(){
    console.log(this.requestId);
    this.service.getNoOfInterpreter(this.requestId).subscribe(res => {
      if(res['status'] == 1){
        this.interpreter_obj = res['data'];
        this.userData = [...res['data']];
        this.filteredUser = this.interpreter_obj;
      }else{
        this.resp_msg = res;
        this.toastr.error(this.resp_msg.message,'', { timeOut: 2000, positionClass: 'toast-top-center' });
      }
    })
  }

}
