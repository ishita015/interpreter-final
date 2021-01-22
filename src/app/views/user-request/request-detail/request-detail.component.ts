import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  data;
  constructor(    public service: HttpService,    private router: Router,

) { 
    this.data = JSON.parse(localStorage.getItem('userViewData'));
    console.log("vvvvvvvvvvvvvvv",this.data);
  }

  ngOnInit(): void {
    // this.GetAllPagesPermission()
  }
GetAllPagesPermission(){
        this.service.get('getClientRoleMenusForPages/'+JSON.parse(localStorage.getItem('roleId'))).subscribe(res => {
  var count=0;
        for (var i = 0; i < res['data'].length; ++i) {
           if(res['data'][i].module_id == 7){
              if(res['data'][i].view_permission == 'false'){
                 this.router.navigate(['/client-request/all-request-list']);    
               }else{
                 count=count+1;
             alert(count)
               }
           }
           else{
               let obj = res['data'].find(o => o.module_id === 7);
           alert(JSON.stringify(obj))
             if(count == 0){

                 this.router.navigate(['/client-request/all-request-list']);    
             }

           }
           }
        })
      }
}
