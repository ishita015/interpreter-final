import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  
  invoices: any[];
  list_Obj: any[];
  language_msg;
  user_status;
  data;
  code_obj;

  constructor(
  	private dl: DataLayerService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public validation: ValidationsService,
    public service:HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  	this.roleList();
  }


    roleList(){
        this.service.getRoleList()
        .subscribe(res => {
            console.log("api response",res);
            this.list_Obj = res['data'];
            console.log("listttttttt", this.list_Obj);
            // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
            // this.router.navigate(['/login'])
        });
    }


    deleteRole(id, modal) {
        console.log("delete idddddddddd",id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
                this.service.getRoleDelete(id)
                    .subscribe(res => {
                        this.language_msg = res;
                        console.log("api",res );
                        this.toastr.success(this.language_msg.message,'', { timeOut: 1000 });
                        this.roleList();
                    })
            }, (reason) => {
            });
    }

   
    roleAddEditOpen(type){
        console.log("XXXXXXXXXXXXXXX",type);
        this.router.navigate(['/permission/' + type]);
    }

    editRole(id,data){
        console.log("idd",id);
        console.log("data",data);
        localStorage.setItem('roleData', JSON.stringify(data));
    }
    


    getPermission(id,data){ 

    //this.router.navigate(['/permission/setpermission',id]); 
      console.log(id);
      console.log(data);
      this.service.editPemisssion(id)
      .subscribe(res => {
        console.log("apiiiiiiiiii response", res);
          this.code_obj = res['result'];
          localStorage.setItem('permissionData', JSON.stringify(this.code_obj));
          this.router.navigate(['/permission/setpermission',id]);
      }) 
    }



      editPemisssion(id) {
        // this.service.editPemisssion(id)
        //   .subscribe(res => {
        //       this.list_Obj = res['data'];
        //       console.log("api response yes",this.list_Obj);
        //       localStorage.setItem('permissionInfo', JSON.stringify(this.list_Obj));
        //       // this.router.navigate(['/permission/setpermission',id]);
        //       this.router.navigate(['/roleset/roleset',id]);
        //   })
              this.router.navigate(['/roleset/roleset',id]);
      }
    

}
