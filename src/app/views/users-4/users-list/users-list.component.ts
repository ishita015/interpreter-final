import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  products$;
  userdelete_msg;
  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service:HttpService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.products$ = this.productService.getProducts();
  }

  deleteUser(id, modal) {
    console.log("delete idddddddddd",id);
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
            this.service.getUserDelete(id)
                .subscribe(res => {
                    this.userdelete_msg = res;
                    console.log("api",res );
                    this.toastr.success(this.userdelete_msg.message,'', { timeOut: 1000 });
                    // this.languageList();
                })
        }, (reason) => {
    });
}

editUser(id,data){
  console.log("idd",id);
  console.log("data",data);
  localStorage.setItem('userData', JSON.stringify(data));
  
}

}
