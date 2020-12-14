import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelled-request',
  templateUrl: './cancelled-request.component.html',
  styleUrls: ['./cancelled-request.component.scss']
})
export class CancelledRequestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  viewDetail(request_id){
    console.log("id--",  request_id);
    this.router.navigate(['/user-request/request-view',request_id])
    // this.service.getRequestDetail(request_id).subscribe(res => {
    //   if(res['status'] == 1){
    //     this.view_obj = res['data'][0];
    //     console.log("view object",  this.view_obj);
    //     localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
       
    //   }else{
    //     this.resp_msg = res;
    //     this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
    //   }
        
    // })
  }

}
