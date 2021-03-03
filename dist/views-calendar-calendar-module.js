(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-calendar-calendar-module"],{

/***/ "TwXb":
/*!***************************************************!*\
  !*** ./src/app/views/calendar/calendar.module.ts ***!
  \***************************************************/
/*! exports provided: CalendarAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAppModule", function() { return CalendarAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "i5S4");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "1BeU");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "E4Uz");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "qF0F");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.component */ "xBsi");
/* harmony import */ var _calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-form-dialog/calendar-form-dialog.component */ "wJGF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");












class CalendarAppModule {
}
CalendarAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarAppModule });
CalendarAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarAppModule_Factory(t) { return new (t || CalendarAppModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3__["adapterFactory"]
            }),
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarAppModule, { declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CalendarFormDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"], _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarAppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                    angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"].forRoot({
                        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3__["adapterFactory"]
                    }),
                    _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarRoutingModule"]
                ],
                declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CalendarFormDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qF0F":
/*!***********************************************************!*\
  !*** ./src/app/views/calendar/calendar-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar/calendar.component */ "xBsi");





const routes = [
    {
        path: '',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]
    }
];
class CalendarRoutingModule {
}
CalendarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
CalendarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xBsi":
/*!***************************************************************!*\
  !*** ./src/app/views/calendar/calendar/calendar.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_shared_models_calendar_event_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/calendar-event.model */ "PI+e");
/* harmony import */ var _calendar_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar-app.service */ "+GWT");
/* harmony import */ var _calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar-form-dialog/calendar-form-dialog.component */ "wJGF");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils */ "9uVP");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "rXAn");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "i5S4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");














const _c0 = ["eventDeleteConfirm"];
function CalendarComponent_mwl_calendar_month_view_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function CalendarComponent_mwl_calendar_month_view_26_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.dayClicked($event.day); })("eventClicked", function CalendarComponent_mwl_calendar_month_view_26_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.handleEvent("edit", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_month_view_26_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("activeDayIsOpen", ctx_r0.activeDayIsOpen);
} }
function CalendarComponent_mwl_calendar_week_view_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_week_view_27_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.handleEvent("edit", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_week_view_27_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh);
} }
function CalendarComponent_mwl_calendar_day_view_28_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_day_view_28_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.handleEvent("edit", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_day_view_28_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
} }
function CalendarComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Event?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_ng_template_29_Template_button_click_3_listener() { const modal_r15 = ctx.$implicit; return modal_r15.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_ng_template_29_Template_button_click_7_listener() { const modal_r15 = ctx.$implicit; return modal_r15.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_ng_template_29_Template_button_click_9_listener() { const modal_r15 = ctx.$implicit; return modal_r15.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CalendarComponent {
    constructor(modalService, calendarService) {
        this.modalService = modalService;
        this.calendarService = calendarService;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.actions = [{
                label: '<i class="i-Edit m-1 text-secondary"></i>',
                onClick: ({ event }) => {
                    this.handleEvent('edit', event);
                }
            }, {
                label: '<i class="i-Close m-1 text-danger"></i>',
                onClick: ({ event }) => {
                    this.removeEvent(event);
                }
            }];
    }
    ngOnInit() {
        this.loadEvents();
    }
    initEvents(events) {
        return events.map(event => {
            event.actions = this.actions;
            return new src_app_shared_models_calendar_event_model__WEBPACK_IMPORTED_MODULE_4__["CalendarAppEvent"](event);
        });
    }
    loadEvents() {
        this.calendarService
            .getEvents()
            .subscribe((events) => {
            this.events = this.initEvents(events);
        });
    }
    removeEvent(event) {
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
    addEvent() {
        const dialogRef = this.modalService.open(_calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CalendarFormDialogComponent"], { centered: true });
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
            responseEvent.start = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].ngbDateToDate(responseEvent.start);
            responseEvent.end = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].ngbDateToDate(responseEvent.end);
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
    handleEvent(action, event) {
        const dialogRef = this.modalService.open(_calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CalendarFormDialogComponent"], { centered: true });
        dialogRef.componentInstance.data = { event, action };
        dialogRef
            .result
            .then(res => {
            if (!res) {
                return;
            }
            const dialogAction = res.action;
            const responseEvent = res.event;
            responseEvent.start = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].ngbDateToDate(responseEvent.start);
            responseEvent.end = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].ngbDateToDate(responseEvent.end);
            console.log(res);
            if (dialogAction === 'save') {
                this.calendarService
                    .updateEvent(responseEvent)
                    .subscribe(events => {
                    this.events = this.initEvents(events);
                    this.refresh.next();
                    console.log(this.events);
                });
            }
            else if (dialogAction === 'delete') {
                this.removeEvent(event);
            }
        })
            .catch(e => {
            console.log(e);
        });
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
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
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_app_service__WEBPACK_IMPORTED_MODULE_5__["CalendarAppService"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eventDeleteConfirm = _t.first);
    } }, decls: 31, vars: 20, consts: [[1, "mb-4"], [1, "btn", "btn-rounded", "btn-primary", 3, "click"], [1, "card"], [1, ""], [1, "p-3", "d-flex", "justify-content-between", "align-items-center", "calendar-title"], [1, "cal-top-col", "text-center"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-rounded", "btn-icon", "btn-outline-primary", "m-1", 3, "view", "viewDate", "viewDateChange"], [1, "i-Arrow-Left"], ["mwlCalendarToday", "", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "viewDate", "viewDateChange"], [1, "i-Calendar-2"], ["mwlCalendarNextView", "", 1, "btn", "btn-rounded", "btn-icon", "btn-outline-primary", "m-1", 3, "view", "viewDate", "viewDateChange"], [1, "i-Arrow-Right"], [1, "text-center"], [1, "m-0", "text-muted", "font-weight-bold"], [1, "d-flex", "justify-content-center"], ["ngbTooltip", "Month view", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "click"], [1, "i-Calendar"], ["ngbTooltip", "Week view", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "click"], [1, "i-Split-Vertical-2"], ["ngbTooltip", "Day view", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "click"], [1, "i-Align-Justify-All"], [1, "p-0"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], ["eventDeleteConfirm", ""], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-secondary", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-rounded", "btn-danger", 3, "click"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_1_listener() { return ctx.addEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_7_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_9_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_11_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_18_listener() { return ctx.view = "month"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_20_listener() { return ctx.view = "week"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_22_listener() { return ctx.view = "day"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CalendarComponent_mwl_calendar_month_view_26_Template, 1, 4, "mwl-calendar-month-view", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CalendarComponent_mwl_calendar_week_view_27_Template, 1, 3, "mwl-calendar-week-view", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CalendarComponent_mwl_calendar_day_view_28_Template, 1, 3, "mwl-calendar-day-view", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CalendarComponent_ng_template_29_Template, 11, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 16, ctx.viewDate, ctx.view + "ViewTitle", "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
    } }, directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_9__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["ɵg"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarDayViewComponent"]], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_9__["ɵi"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhbGVuZGFyL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_8__["SharedAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_8__["SharedAnimations"]]
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _calendar_app_service__WEBPACK_IMPORTED_MODULE_5__["CalendarAppService"] }]; }, { eventDeleteConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['eventDeleteConfirm', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=views-calendar-calendar-module.js.map