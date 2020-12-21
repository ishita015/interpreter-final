import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboad-default',
	templateUrl: './dashboad-default.component.html',
	styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
	chartLineOption3: EChartOption;
    salesChartBar: EChartOption;
    salesChartPie: EChartOption;

    public totaluser_obj;
    public totallanguage_obj;
    public roleName;
    public totalinter_obj;
    public totalrequest_obj;
    public totalassign_obj;
    public totalinprogress_obj;
    public totalcancel_obj;
    public totalcomplete_obj;
    public allreq_obj;
	constructor(public service:HttpService,  private router: Router,) { }

	ngOnInit() {
        this.totalUserList(1);
        this.totalLanguageList();

        this.totalNewRequest();
        this.total_assign();
        this.total_inprogress();
        this.total_complete();
        this.total_cancelled();
        this.total_interpreter();
        this.getallRequest();
        this.roleName = JSON.parse(localStorage.getItem('roleName'));
	}

    totalUserList(id){
        this.service.getdashboardUsers()
        .subscribe(res => {
          console.log("apiiiiiiiiii response user", res);
            this.totaluser_obj = res['data'][0];
        })
    }



    total_interpreter(){
        this.service.getdashboardInterpreter()
        .subscribe(res => {
        //   console.log("apiiiiiiiiii response service", res);
            this.totalinter_obj = res['data'][0];
        })
    }




    totalLanguageList(){
        this.service.getdashboardLanguage()
        .subscribe(res => {
          console.log("apiiiiiiiiii response service", res);
            this.totallanguage_obj = res['data'][0];
        })
    }



    
   
    getallRequest(){
        this.service.allRequest()
        .subscribe(res => {
        //   console.log("apiiiiiiiiii response service", res);
            this.allreq_obj = res['data'][0];
        })
    }




    totalNewRequest(){
        this.service.totalRequest()
        .subscribe(res => {
        //   console.log("apiiiiiiiiii response service", res);
            this.totalrequest_obj = res['data'][0];
        })
    }


    total_assign(){
        this.service.totalAssign()
        .subscribe(res => {
          console.log("apiiiiiiiiii response service", res);
            this.totalassign_obj = res['data'][0];
        })
    }


    total_inprogress(){
        this.service.totalInprogress()
        .subscribe(res => {
          console.log("apiiiiiiiiii response service", res);
            this.totalinprogress_obj = res['data'][0];
        })
    }


    total_complete(){
        this.service.totalComplete()
        .subscribe(res => {
          console.log("apiiiiiiiiii response service", res);
            this.totalcomplete_obj = res['data'][0];
        })
    }


    total_cancelled(){
        this.service.totalCancelled()
        .subscribe(res => {
          console.log("apiiiiiiiiii response service", res);
            this.totalcancel_obj = res['data'][0];
        })
    }



    




    users(){
        this.router.navigate(['/users/user-list']);
    }
    interpreter(){
        this.router.navigate(['/interpreter/interpreter-list']);
    }

    language(){
        this.router.navigate(['/languages/list']);
    }

    all_requ(){
        this.router.navigate(['/interpreter-request/all-request-list']);
    }
    

    new_request(){
        this.router.navigate(['/user-request/list']);
    }


    assign_request(){
        this.router.navigate(['/interpreter-request/list']);
    }
    
    accept_request(){
        this.router.navigate(['/interpreter-request/accept-list']);
    }
    
    complete_request(){
        this.router.navigate(['/interpreter-request/completed-list']);
    }
    cancel_request(){
        this.router.navigate(['/interpreter-request/cancelled-list']);
    }
}
