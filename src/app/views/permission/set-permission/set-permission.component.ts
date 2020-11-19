import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-set-permission',
  templateUrl: './set-permission.component.html',
  styleUrls: ['./set-permission.component.scss']
})
export class SetPermissionComponent implements OnInit {
	dataRe;
	//d={id:1,name:'Dev'}
  constructor(
  	 private productService: ProductService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public service:HttpService,
    private router: Router,
  ) { }

  ngOnInit(){
  	this.dataRe = JSON.parse(localStorage.getItem('permissionInfo'));
  	console.log("yes is working",this.dataRe[0]);
  }



}
