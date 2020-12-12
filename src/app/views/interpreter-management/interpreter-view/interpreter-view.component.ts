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
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interpreter-view',
  templateUrl: './interpreter-view.component.html',
  styleUrls: ['./interpreter-view.component.scss']
})
export class InterpreterViewComponent implements OnInit {

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
	) {
		
	}

	ngOnInit() {
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
	


}