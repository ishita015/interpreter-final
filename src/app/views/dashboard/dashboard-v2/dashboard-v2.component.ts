import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {
	isSameDay,
	isSameMonth
} from 'date-fns';
import { DatePipe } from '@angular/common';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
import { CalendarAppService } from './../../calendar/calendar-app.service';
import { CalendarFormDialogComponent } from '../../calendar/calendar-form-dialog/calendar-form-dialog.component';
import { Utils } from 'src/app/shared/utils';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $;
@Component({
	selector: 'app-dashboard-v2',
	templateUrl: './dashboard-v2.component.html',
	styleUrls: ['./dashboard-v2.component.scss']
})
export class DashboardV2Component implements OnInit {
	public view = 'month';
	public viewDate = new Date();



	@ViewChild('eventDeleteConfirm', { static: true }) eventDeleteConfirm;
	@ViewChild('eventViewConfirm', { static: true }) eventViewConfirm;
	@ViewChild('requestViewConfirm', { static: true }) requestViewConfirm;
	public activeDayIsOpen = true;
	public refresh: Subject<any> = new Subject();
	public events: CalendarAppEvent[];
	// events: Array<any> = [];
	private actions: CalendarEventAction[];


	pipe = new DatePipe('en-US');
	// now = Date.now();

	new_date;

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
	cal_data;
	local_data;
	viewObj;
	constructor(
		private productService: ProductService,public service:HttpService,
		private router: Router,
		private fb: FormBuilder,
		private modalService: NgbModal,
		private calendarService: CalendarAppService,
		private toastr: ToastrService
	) {
		this.actions = [{
			label: '<i class="i-Edit m-1 text-secondary"></i>',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.handleEvent('edit', event);
			}
		}, {
			label: '<i class="i-Close m-1 text-danger"></i>',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				// this.removeEvent(event);
			}
		}];
	 }

	 

  ngOnInit() {
	this.roleName = JSON.parse(localStorage.getItem('roleName'));
	this.userId = JSON.parse(localStorage.getItem('userId'));
	this.new_request();
	this.accept_request();
	this.reject_request();
	this.complete_request();
	this.cancelled_request();
	// this.loadEvents();
	//get admin assign
	this.getInterpreterRequestInfo();
}
	

  

   // get admin assign
  getInterpreterRequestInfo(){
	this.service.interpreterDashboardData(this.userId)
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
			.interpreterViewEvents(this.userId, e.event._id)
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

	editCalender(data, id) {
		console.log("idddddddddddddd",data, id);
		localStorage.setItem('editData', JSON.stringify(data));
		this.router.navigate(['/dashboard/edit']);
	}


	public removeEvent(e) {
	console.log("idddddddd",e);
	
		this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
			.result.then((result) => {
				this.service.interpreterLocalEvents(this.userId)
				this.service.removeLocalEvents(this.userId,e)
					.subscribe(res => {
						// this.events = this.initEvents(events);
						console.log("resp",res)
						this.toastr.success(res.message,'', { timeOut: 1000 });
						// this.refresh.next();
						this.getInterpreterRequestInfo();
					});
			}, (reason) => {

		});
	}





	new_request() {
		this.service.newRequestCount(this.userId)
			.subscribe(res => {
				this.newrequest_obj = res['data'][0];
			})
	}


	accept_request() {
		this.service.acceptRequestCount(this.userId)
			.subscribe(res => {
				this.accept_obj = res['data'][0];
			})
	}


	reject_request() {
		this.service.rejectRequestCount(this.userId)
			.subscribe(res => {
				this.reject_obj = res['data'][0];
			})
	}


	complete_request() {
		this.service.completeRequestCount(this.userId)
			.subscribe(res => {
				this.totalcomplete_obj = res['data'][0];
			})
	}


	cancelled_request() {
		this.service.cancelledRequestCount(this.userId)
			.subscribe(res => {
				this.totalcancel_obj = res['data'][0];
			})
	}


	newRequest() {
		this.router.navigate(['/interpreter-request/list']);
	}


	acceptRquest() {
		this.router.navigate(['/interpreter-request/accept-list']);
	}

	RejectRequest() {
		this.router.navigate(['/interpreter-request/reject-list']);
	}

	completeRequest() {
		this.router.navigate(['/interpreter-request/completed-list']);
	}
	cancelRequest() {
		this.router.navigate(['/interpreter-request/cancelled-list']);
	}

	// ================================ calendar =============================== //

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



	// public addEvent() {
	// 	const dialogRef = this.modalService.open(CalendarFormDialogComponent, {centered: true});
	// 	dialogRef.componentInstance.data = {
	// 		action: 'add',
	// 		date: new Date()
	// 	};
	// 	dialogRef.result
	// 		.then((res) => {

	// 			if (!res) {
	// 				return;
	// 			}

	// 			const dialogAction = res.action;
	// 			const responseEvent = res.event;
	// 			responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
	// 			responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
	// 			this.calendarService
	// 				.addEvent(responseEvent)
	// 				.subscribe(events => {
	// 					this.events = this.initEvents(events);
	// 					this.refresh.next(true);
	// 					console.log(this.events);

	// 				});
	// 		}).catch(e => {
	// 			console.log(e);
	// 		});
	// }




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




	// ================================ Add Calendar Start =============================== //
	addEvent() {
		this.router.navigate(['/dashboard/add']);

	}
	// ================================ Add Calendar End =============================== //

}