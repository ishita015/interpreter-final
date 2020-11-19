import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
    
  invoices: any[];
  list_Obj: any[];
  language_msg;
  user_status;

  constructor(
  	private dl: DataLayerService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public validation: ValidationsService,
    public service:HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  	this.moduleList();
  }


  moduleList(){
        this.service.getModuleList()
        .subscribe(res => {
            console.log("api response",res);
            this.list_Obj = res['data'];
            console.log("listttttttt", this.list_Obj);
            // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
            // this.router.navigate(['/login'])
        });
    }


    deleteModule(id, modal) {
        console.log("delete idddddddddd",id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
                this.service.moduleDelete(id)
                    .subscribe(res => {
                        this.language_msg = res;
                        console.log("api",res );
                        this.toastr.success(this.language_msg.message,'', { timeOut: 1000 });
                        this.moduleList();
                    })
            }, (reason) => {
            });
    }

   
    moduleAddEditOpen(type){
        console.log("XXXXXXXXXXXXXXX",type);
        this.router.navigate(['/permission/' + type]);
    }

    editModel(id,data){
        console.log("idd",id);
        console.log("data",data);
        localStorage.setItem('moduleData', JSON.stringify(data));
    }

}
