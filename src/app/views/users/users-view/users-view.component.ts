import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
	isSameDay,
	isSameMonth
} from 'date-fns';

import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
// import { CalendarAppService } from './calendar-app.service'; 
// import { CalendarFormDialogComponent } from '../calendar-form-dialog/calendar-form-dialog.component';
import { Utils } from 'src/app/shared/utils';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { CalendarAppService } from '../../calendar/calendar-app.service';
import { CalendarFormDialogComponent } from '../../calendar/calendar-form-dialog/calendar-form-dialog.component';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {

  public view = 'month';
	public viewDate = new Date();
	@ViewChild('eventDeleteConfirm', { static: true }) eventDeleteConfirm;
	public activeDayIsOpen = true;
	public refresh: Subject<any> = new Subject();
	public events: CalendarAppEvent[];
	private actions: CalendarEventAction[];
	//-- Calendar variable Start --//
	pipe = new DatePipe('en-US');
	// now = Date.now();
	public roleName;
	userId;
	public newrequest_obj;
    public accept_obj;
    public reject_obj;
    public totalcancel_obj;
	public totalcomplete_obj;
	cal_data;
	new_date;
  calendar_Id;
  data
	//-- Calendar variable End --//
	constructor(
		private modalService: NgbModal,
		public service:HttpService,
		private router: Router,
		private calendarService: CalendarAppService,
		 private activatedRoute: ActivatedRoute,
	) {
		// this.actions = [{
		// 	label: '<i class="i-Edit m-1 text-secondary"></i>',
		// 	onClick: ({ event }: { event: CalendarEvent }): void => {
		// 		this.handleEvent('edit', event);
		// 	}
		// }, {
		// 	label: '<i class="i-Close m-1 text-danger"></i>',
		// 	onClick: ({ event }: { event: CalendarEvent }): void => {
		// 		this.removeEvent(event);
		// 	}
		// }];
	}

param
	ngOnInit() {

		this.activatedRoute.params.subscribe(params => {
        this.param=params['id']
      })
		console.log(this.param)
		// try{
		// 	var result=  await this.service.get('get-user-detail/'+this.param).toPromise();
		// }
		// catch(e){
		// 	console.log(e)
		// }

    		this.data = JSON.parse(localStorage.getItem('userViewData'));
		this.roleName = JSON.parse(localStorage.getItem('roleName'));
		this.userId = JSON.parse(localStorage.getItem('userId'));
		this.calendar_Id = JSON.parse(localStorage.getItem('calendarId'));
		// this.loadEvents();
		this.getInterpreterRequestInfo();
	}

  getInterpreterRequestInfo(){
		this.service.interpreterDashboardData(this.calendar_Id)
		.subscribe(res => {
			if(res['status']=='1'){
				this.cal_data = res['data'];
				this.events = [];
				for(let i=0; i < this.cal_data.length; i++){ 
					var dataArray = this.cal_data[i].date.split(/[ -]/);
					this.new_date = new Date( dataArray[0],dataArray[1]-1,dataArray[2]);
					this.events.push ({
						start: this.new_date,
						title: this.cal_data[i].title
					});
				}
			}		
		})
	  }
	

  // data
  // constructor() {
  //   this.data = JSON.parse(localStorage.getItem('userViewData'));
  //   console.log("vvvvvvvvvvvvvvv",this.data);
    
  //  }

  // ngOnInit() {
  // }

}
