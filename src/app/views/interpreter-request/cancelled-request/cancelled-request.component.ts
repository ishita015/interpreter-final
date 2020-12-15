import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cancelled-request',
  templateUrl: './cancelled-request.component.html',
  styleUrls: ['./cancelled-request.component.scss']
})
export class CancelledRequestComponent implements OnInit {
  view_obj;
  resp_msg;
  constructor(private router: Router,
    public service:HttpService,
    private toastr: ToastrService,) { }

  ngOnInit(){
  }

  viewDetail(request_id){
    console.log("id--",  request_id);
    this.service.getRequestDetail(request_id).subscribe(res => {
      if(res['status'] == 1){
        this.view_obj = res['data'][0];
        console.log("view object apiii",  this.view_obj);
        localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
        this.router.navigate(['/user-request/request-view',request_id])
      }
      else{
        this.resp_msg = res;
        this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
      }
    })
  }

}
