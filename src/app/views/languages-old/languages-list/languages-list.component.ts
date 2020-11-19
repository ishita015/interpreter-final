import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnInit {

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

    ngOnInit() {
       
        this.languageList();
    }
    
   

    languageList(){
        this.service.getLanguageList()
        .subscribe(res => {
            console.log("api response",res);
            this.list_Obj = res['data'];
            console.log("listttttttt", this.list_Obj);
            // this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
            // this.router.navigate(['/login'])
        });
    }

    deleteLanguage(id, modal) {
        console.log("delete idddddddddd",id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
                this.service.getLanguagDelete(id)
                    .subscribe(res => {
                        this.language_msg = res;
                        console.log("api",res );
                        this.toastr.success(this.language_msg.message,'', { timeOut: 1000 });
                        this.languageList();
                    })
            }, (reason) => {
            });
    }

    statusLanguageChange(ev,status,id){
        console.log("statussss",status,id);
        if(status == 1){
            // this.toastr.success('Status Change Successfully!','' ,{ timeOut: 1000 });
            this.user_status= 0;
          }
          else {
            // this.toastr.success('Status Change Successfully!','' ,{ timeOut: 1000 }); 
            this.user_status= 1;
          }

    }

    languageAddEditOpen(type){
        console.log("XXXXXXXXXXXXXXX",type);
        this.router.navigate(['/languages/' + type]);
    }

    Edit(id,data){
        console.log("idd",id);
        console.log("data",data);
        localStorage.setItem('languageData', JSON.stringify(data));
    }
    
}
