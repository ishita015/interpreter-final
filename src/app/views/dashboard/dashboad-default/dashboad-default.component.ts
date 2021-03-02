import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
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

    roleId = localStorage.getItem('roleId')




    /////v2/////
    public view = 'month';
    public viewDate = new Date();



    @ViewChild('eventDeleteConfirm', { static: true }) eventDeleteConfirm;
    @ViewChild('eventViewConfirm', { static: true }) eventViewConfirm;
    @ViewChild('requestViewConfirm', { static: true }) requestViewConfirm;
    public activeDayIsOpen = false;
    public refresh: Subject<any> = new Subject();
    public events: CalendarAppEvent[];
    // events: Array<any> = [];
    private actions: CalendarEventAction[];


    pipe = new DatePipe('en-US');
    // now = Date.now();

    new_date;

    chartPie1: any;
    products$: any;
    userId;
    public newrequest_obj;
    public accept_obj;
    public reject_obj;
    cal_data;
    local_data;
    viewObj;
    /////v2/////

    id;
    constructor(
        private productService: ProductService
        , public service: HttpService,
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
        }]

    }

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


        this.roleName = JSON.parse(localStorage.getItem('roleName'));
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.new_request();
        this.accept_request();
        this.reject_request();
        // this.complete_request();
        // this.cancelled_request();
        // this.loadEvents();
        //get admin assign
        this.getInterpreterRequestInfo();
    }

    totalUserList(id) {
        this.service.getdashboardUsers()
            .subscribe(res => {
                this.totaluser_obj = res['data'][0];
            })
    }



    total_interpreter() {
        this.service.getdashboardInterpreter()
            .subscribe(res => {
                this.totalinter_obj = res['data'][0];
            })
    }




    totalLanguageList() {
        this.service.getdashboardLanguage()
            .subscribe(res => {
                this.totallanguage_obj = res['data'][0];
            })
    }





    getallRequest() {
        this.service.allRequest()
            .subscribe(res => {
                this.allreq_obj = res['data'][0];
                console.log("allllllllllllllll",  this.allreq_obj);
            })
    }




    totalNewRequest() {
        this.service.totalRequest()
            .subscribe(res => {
                this.totalrequest_obj = res['data'][0];
            })
    }


    total_assign() {
        this.service.totalAssign()
            .subscribe(res => {
                this.totalassign_obj = res['data'][0];
            })
    }


    total_inprogress() {
        this.service.totalInprogress()
            .subscribe(res => {
                this.totalinprogress_obj = res['data'][0];
            })
    }


    total_complete() {
        this.service.totalComplete()
            .subscribe(res => {
                this.totalcomplete_obj = res['data'][0];
            })
    }


    total_cancelled() {
        this.service.totalCancelled()
            .subscribe(res => {
                this.totalcancel_obj = res['data'][0];
            })
    }








    users() {
        this.router.navigate(['/users/user-list/all']);
    }
    interpreter() {
        this.router.navigate(['/interpreter/interpreter-list']);
    }

    language() {
        this.router.navigate(['/languages/list']);
    }

    all_requ(e) {
        this.id = e
        console.log("eeeeeeeeeeeeeeeeee", this.id);
        // this.router.navigate(['/interpreter-request/all-request-list']);
        this.router.navigate(['/dashboard/all-request/' + this.id]);
    }


    // new_request(){
    //     this.router.navigate(['/user-request/list']);
    // }


    assign_request(e) {
        this.id = e
        this.router.navigate(['/dashboard/all-request/' + this.id]);
        // this.router.navigate(['/interpreter-request/list']);
    }

    // accept_request(){
    //     this.router.navigate(['/interpreter-request/accept-list']);
    // }

    // complete_request(){
    //     this.router.navigate(['/interpreter-request/completed-list']);
    // }
    cancel_request() {
        this.router.navigate(['/interpreter-request/cancelled-list']);
    }




    ////////////////v2///////////////////
    // get admin assign
    getInterpreterRequestInfo() {
        this.service.interpreterDashboardData(this.userId)
            .subscribe(res => {
                if (res['status'] == '1') {
                    this.cal_data = res['data'];
                    this.events = [];
                    for (let i = 0; i < this.cal_data.length; i++) {
                        var dataArray = this.cal_data[i].date.split(/[ -]/);
                        this.new_date = new Date(dataArray[0], dataArray[1] - 1, dataArray[2]);
                        this.events.push({
                            start: this.new_date,
                            title: this.cal_data[i].title,
                            _id: this.cal_data[i].id,
                            request_id: this.cal_data[i].request_id,
                            color: {
                                primary: this.cal_data[i].id == "0" ? "#77a024" : "#1153e3",
                                secondary: this.cal_data[i].id == "0" ? "#11e3ad" : "#9c24a0",
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
                if (result['status'] == '1') {
                    this.viewObj = result;
                    this.modalService.open(this.eventViewConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
                        .result.then((result) => {
                        });
                } else {

                    this.router.navigate(['/user-request/request-view/' + e.event.request_id]);
                }

            });


    }

    editCalender(data, id) {
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/dashboard/edit']);
    }


    public removeEvent(e) {
        this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
                this.service.interpreterLocalEvents(this.userId)
                this.service.removeLocalEvents(this.userId, e)
                    .subscribe(res => {
                        this.toastr.success(res.message, '', { timeOut: 1000 });
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


    // complete_request() {
    //     this.service.completeRequestCount(this.userId)
    //         .subscribe(res => {
    //             this.totalcomplete_obj = res['data'][0];
    //             console.log("xxxxxxxxxxxxxxxxxx", this.totalcomplete_obj);

    //         })
    // }


    // cancelled_request() {
    //     this.service.cancelledRequestCount(this.userId)
    //         .subscribe(res => {
    //             this.totalcancel_obj = res['data'][0];
    //         })
    // }


    all_new_request(e) {
        this.id = e
        console.log("aaaaaaaaaa", this.id);
        this.router.navigate(['/dashboard/all-request/' + this.id]);
    }

    newRequest() {
        this.router.navigate(['/interpreter-request/list']);
    }


    acceptRquest(e) {
        this.id = e
        console.log("acceptRquest", this.id);
        this.router.navigate(['/dashboard/all-request/' + this.id]);
        // this.router.navigate(['/interpreter-request/accept-list']);
    }

    RejectRequest() {
        this.router.navigate(['/interpreter-request/reject-list']);
    }

    completeRequest(e) {
        this.id = e
        console.log("completeRequest", this.id);
        this.router.navigate(['/dashboard/all-request/' + this.id]);
        // this.router.navigate(['/interpreter-request/completed-list']);
    }
    cancelRequest(e) {
        this.id = e
        console.log("cancelRequest", this.id);
        this.router.navigate(['/dashboard/all-request/' + this.id]);
        // this.router.navigate(['/interpreter-request/cancelled-list']);
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
    //     const dialogRef = this.modalService.open(CalendarFormDialogComponent, {centered: true});
    //     dialogRef.componentInstance.data = {
    //         action: 'add',
    //         date: new Date()
    //     };
    //     dialogRef.result
    //         .then((res) => {

    //             if (!res) {
    //                 return;
    //             }

    //             const dialogAction = res.action;
    //             const responseEvent = res.event;
    //             responseEvent.start = Utils.ngbDateToDate(responseEvent.start);
    //             responseEvent.end = Utils.ngbDateToDate(responseEvent.end);
    //             this.calendarService
    //                 .addEvent(responseEvent)
    //                 .subscribe(events => {
    //                     this.events = this.initEvents(events);
    //                     this.refresh.next(true);
    //                     console.log(this.events);

    //                 });
    //         }).catch(e => {
    //             console.log(e);
    //         });
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
    //     event.start = newStart;
    //     event.end = newEnd;

    //     this.calendarService
    //         .updateEvent(event)
    //         .subscribe(events => {
    //             this.events = this.initEvents(events);
    //             this.refresh.next();
    //         });
    // }




    // ================================ Add Calendar Start =============================== //
    addEvent() {
        this.router.navigate(['/dashboard/add']);

    }
    // ================================ Add Calendar End =============================== //

    ////////////////v2///////////////////
}
