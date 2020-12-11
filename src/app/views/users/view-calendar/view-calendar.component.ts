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
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent implements OnInit {

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
	//-- Calendar variable End --//
	constructor(
		private modalService: NgbModal,
		public service:HttpService,
		private router: Router,
		private calendarService: CalendarAppService,
	) {
		this.actions = [{
			label: '<i class="i-Edit m-1 text-secondary"></i>',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.handleEvent('edit', event);
			}
		}, {
			label: '<i class="i-Close m-1 text-danger"></i>',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.removeEvent(event);
			}
		}];
	}

	ngOnInit() {
		this.roleName = JSON.parse(localStorage.getItem('roleName'));
		this.userId = JSON.parse(localStorage.getItem('userId'));
		this.calendar_Id = JSON.parse(localStorage.getItem('calendarId'));
		// this.loadEvents();
		this.getInterpreterRequestInfo();
	}
	// ================================ Calendar Function Start=============================== //

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
	
	
		// ================================ Calendar Function End=============================== //
	

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
			});
	}

	public removeEvent(event) {
		this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
			.result.then((result) => {
				this.calendarService
				.deleteEvent(event._id)
					.subscribe(events => {
						this.events = this.initEvents(events);
						this.refresh.next();
					});
			}, (reason) => {

			});

	}

	public addEvent() {
		const dialogRef = this.modalService.open(CalendarFormDialogComponent, {centered: true});
		dialogRef.componentInstance.data = {
			action: 'add',
			date: new Date()
		};
		dialogRef.result
			.then((res) => {

				if (!res) {
					return;
				}

				const dialogAction = res.action;
				const responseEvent = res.event;
				responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
				responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
				this.calendarService
					.addEvent(responseEvent)
					.subscribe(events => {
						this.events = this.initEvents(events);
						this.refresh.next(true);
						console.log(this.events);

					});
			}).catch(e => {
				console.log(e);
			});
	}

	public handleEvent(action: string, event: CalendarAppEvent): void {
		const dialogRef = this.modalService.open(CalendarFormDialogComponent, {centered: true});
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
					this.removeEvent(event);
				}

			})
			.catch(e => {
				console.log(e);
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

	public eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
		event.start = newStart;
		event.end = newEnd;

		this.calendarService
			.updateEvent(event)
			.subscribe(events => {
				this.events = this.initEvents(events);
				this.refresh.next();
			});
	}


}
