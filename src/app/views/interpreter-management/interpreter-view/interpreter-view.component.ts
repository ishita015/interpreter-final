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
	@ViewChild('eventViewConfirm', { static: true }) eventViewConfirm;
	@ViewChild('eventDeleteConfirm', { static: true }) eventDeleteConfirm;
	public activeDayIsOpen = false;
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
	viewObj;
  interpreter_Id;
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
		this.interpreter_Id = JSON.parse(localStorage.getItem('userViewData'));
		// console.log("calendar_Id",this.interpreter_Id.id);
		// this.loadEvents();
		this.getInterpreterRequestInfo();
	}

//   getInterpreterRequestInfo(){
// 		this.service.interpreterDashboardData(this.interpreter_Id.id)
// 		.subscribe(res => {
// 			if(res['status']=='1'){
// 				this.cal_data = res['data'];
// 				this.events = [];
// 				for(let i=0; i < this.cal_data.length; i++){ 
// 					var dataArray = this.cal_data[i].date.split(/[ -]/);
// 					this.new_date = new Date( dataArray[0],dataArray[1]-1,dataArray[2]);
// 					this.events.push ({
// 						start: this.new_date,
// 						title: this.cal_data[i].title
// 					});
// 				}
// 			}else{
// 				console.log(res)
// 			}		
// 		})
// 	  }



	  // get admin assign
	  getInterpreterRequestInfo(){
		this.service.interpreterDashboardData(this.interpreter_Id.id)
		.subscribe(res => {
			if(res['status']=='1'){
				this.cal_data = res['data'];
				console.log("cal_data",this.cal_data)
	
				this.events = [];	
				for(let i=0; i < this.cal_data.length; i++){ 
					var dataArray = this.cal_data[i].date.split(/[ -]/);
					this.new_date = new Date( dataArray[0],dataArray[1]-1,dataArray[2]);
					this.events.push ({
						start: this.new_date,
						title: this.cal_data[i].title,
						_id:this.cal_data[i].id,
						request_id:this.cal_data[i].request_id,
						color: {
							primary: this.cal_data[i].id=="0" ? "#77a024" : "#1153e3",
							secondary: this.cal_data[i].id =="0" ? "#11e3ad" : "#9c24a0",
						  }
					});
				}
			}		
		})
	  }
		
	
	

	

	public viewEvent(e) {
		console.log("view all data _id", e);
		this.service
			.interpreterViewEvents(this.interpreter_Id.id, e.event._id)
			.subscribe(result => {
				if(result['status']=='1'){
					console.log("result", result);
					this.viewObj = result;
					console.log("response ", this.viewObj);

					this.modalService.open(this.eventViewConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
						.result.then((result) => {
					});
				}else{
					
					this.router.navigate(['/user-request/request-view/'+e.event.request_id]);
					// this.modalService.open(this.requestViewConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
					// 	.result.then((result) => {
					// });
				}
				
			});
			

	}



	  public dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {

		if (isSameMonth(date, this.viewDate)) {
			if (
				(isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
				events.length === 0
			) {
				this.activeDayIsOpen = false;
			} else {
				this.activeDayIsOpen = true;
				this.viewDate = date;
			}
		}
	}

	private initEvents(events): CalendarAppEvent[] {
		return events.map(event => {
			event.actions = this.actions;
			return new CalendarAppEvent(event);
		});
	}

	public loadEvents() {
		this.calendarService
			.getEvents()
			.subscribe((events: CalendarEvent[]) => {
				this.events = this.initEvents(events);
				console.log("events--", this.events)

			});
	}


	public handleEvent(action: string, event: CalendarAppEvent): void {
		const dialogRef = this.modalService.open(CalendarFormDialogComponent, { centered: true });
		dialogRef.componentInstance.data = { event, action };
		dialogRef
			.result
			.then(res => {
				if (!res) {
					return;
				}
				const dialogAction = res.action;
				const responseEvent = res.event;
				responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
				responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
				console.log(res);
				if (dialogAction === 'save') {

					this.calendarService
						.updateEvent(responseEvent)
						.subscribe(events => {
							this.events = this.initEvents(events);
							this.refresh.next();
							console.log(this.events);
						});
				} else if (dialogAction === 'delete') {
					// this.removeEvent(event);
				}

			})
			.catch(e => {
				console.log(e);
			});
	}


	// public eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
	// 	event.start = newStart;
	// 	event.end = newEnd;

	// 	this.calendarService
	// 		.updateEvent(event)
	// 		.subscribe(events => {
	// 			this.events = this.initEvents(events);
	// 			this.refresh.next();
	// 		});
	// }



}
