import { Component, OnInit } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-dashboard-v2',
  templateUrl: './dashboard-v2.component.html',
  styleUrls: ['./dashboard-v2.component.scss']
})
export class DashboardV2Component implements OnInit {
  chartPie1: any;
  chartLineOption3: any;
	products$: any;
	public roleName;
	userId;
	public newrequest_obj;
    public accept_obj;
    public reject_obj;
    public totalcancel_obj;
    public totalcomplete_obj;
  constructor(
		private productService: ProductService,public service:HttpService,
	) { }

  ngOnInit() {
	this.roleName = JSON.parse(localStorage.getItem('roleName'));
	this.userId = JSON.parse(localStorage.getItem('userId'));
	this.new_request();
	this.accept_request();
	this.reject_request();
	this.complete_request();
	this.cancelled_request();
  }


   
    new_request(){
		this.service.newRequestCount(this.userId)
		.subscribe(res => {
		//   console.log("apiiiiiiiiii response service", res);
			this.newrequest_obj = res['data'][0];
		})
	}


	accept_request(){
		this.service.acceptRequestCount(this.userId)
		.subscribe(res => {
		console.log("apiiiiiiiiii response service", res);
			this.accept_obj = res['data'][0];
		})
	}


	reject_request(){
		this.service.rejectRequestCount(this.userId)
		.subscribe(res => {
		console.log("apiiiiiiiiii response service", res);
			this.reject_obj = res['data'][0];
		})
	}


	complete_request(){
		this.service.completeRequestCount(this.userId)
		.subscribe(res => {
		console.log("apiiiiiiiiii response service", res);
			this.totalcomplete_obj = res['data'][0];
		})
	}


	cancelled_request(){
		this.service.cancelledRequestCount(this.userId)
		.subscribe(res => {
			this.totalcancel_obj = res['data'][0];
		})
	}

}