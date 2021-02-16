import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2'


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
  languageData;
  filteredLanguage;
  array_Obj;
  roleData;
  userId;
  roleId;
  role_id;
  searchControl: FormControl = new FormControl();
    constructor(
        private dl: DataLayerService,
        private modalService: NgbModal,
        private toastr: ToastrService,
        public validation: ValidationsService,
        public service:HttpService,
        private router: Router,
    ) { }

    ngOnInit() {
      this.userId = JSON.parse(localStorage.getItem('userId'));
      this.roleId = JSON.parse(localStorage.getItem('roleId'));
        this.rolePermission();
        this.languageList();
        this.searchControl.valueChanges
        .pipe(debounceTime(200))
        .subscribe(value => {
            this.filerData(value);
        });

        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        // this.array_Obj = this.roleData['data'][1];
        // if(this.array_Obj.id){
        //   this.array_Obj = this.roleData['data'][1];
        //   console.log("roleData xxxxxxxxxxxxxx", this.array_Obj);
        // }
    }
rolePermission(){
  this.service.get('get-user-role-permission/'+localStorage.getItem('roleId')).subscribe(res =>{
    for (var i = 0; i < res['data'].length; ++i) {
        if(res['data'][i].module_id == 11){
            this.array_Obj=res['data'][i]
        }
      }
  })
}

    filerData(val) {
        if (val) {
          val = val.toLowerCase();
        } else {
          console.log("xxxxxxx",this.filteredLanguage);
          return this.filteredLanguage = [... this.languageData];
        }
    
        const columns = Object.keys( this.languageData[0]);
        if (!columns.length) {
          return;
        }
    
        const rows =  this.languageData.filter(function(d) {
          for (let i = 0; i <= columns.length; i++) {
            const column = columns[i];
            // console.log(d[column]);
            if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
              return true;
            }
          }
        });
        this.filteredLanguage = rows;
      }
    
   

    languageList(){
        this.service.get('get-lob')
        .subscribe(res => {
            this.list_Obj = res['data'];
            this.languageData = [...res['data']];
            this.filteredLanguage = this.list_Obj;
            this.role_id = this.roleId;
 });
    }

    



    statusLanguageChange(status,id) {
       if(status == 2 ){
         Swal.fire({
              title: 'Are you sure want to delete?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes'
            }).then((result) => {
              if (result.isConfirmed) {
                this.chageMethod(status,id)
              }
            })
       }else{
          this.chageMethod(status,id)
       }
       
    }

chageMethod(status,id){
   this.service.post('ChangeStatus',{status,id})
        .subscribe(res => {
          this.toastr.success(res['msg'],'', { timeOut: 1000 });
          this.languageList();
        })
}
    languageAddEditOpen(type){
        this.router.navigate(['/lob/' + type]);
    }

    

    
}
