(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-request-scheduler-request-scheduler-module"],{

/***/ "6RV7":
/*!*****************************************************************************!*\
  !*** ./src/app/views/request-scheduler/request-scheduler-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RequestSchedulerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSchedulerRoutingModule", function() { return RequestSchedulerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _all_request_list_schedular_all_request_list_schedular_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-request-list-schedular/all-request-list-schedular.component */ "S6gb");
/* harmony import */ var _all_request_schedular_all_request_schedular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-request-schedular/all-request-schedular.component */ "Z0oT");
/* harmony import */ var _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-list/request-list.component */ "9ZVi");
/* harmony import */ var _complete_request_complete_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complete-request/complete-request.component */ "YiLU");
/* harmony import */ var _cancelled_request_cancelled_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancelled-request/cancelled-request.component */ "b61f");
/* harmony import */ var _accept_request_accept_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accept-request/accept-request.component */ "p4GS");
/* harmony import */ var _broadcast_request_broadcast_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./broadcast-request/broadcast-request.component */ "KQpT");
/* harmony import */ var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-detail/request-detail.component */ "lIoM");
/* harmony import */ var _interpreter_list_interpreter_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interpreter-list/interpreter-list.component */ "ECN4");













const routes = [
    { path: 'all-request-schedular', component: _all_request_schedular_all_request_schedular_component__WEBPACK_IMPORTED_MODULE_3__["AllRequestSchedularComponent"] },
    { path: 'all-request-list-schedular', component: _all_request_list_schedular_all_request_list_schedular_component__WEBPACK_IMPORTED_MODULE_2__["AllRequestListSchedularComponent"] },
    { path: 'request-list-schedular', component: _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_4__["RequestListComponent"] },
    { path: 'progress-list-schedular', component: _accept_request_accept_request_component__WEBPACK_IMPORTED_MODULE_7__["AcceptRequestComponent"] },
    { path: 'completed-list-schedular', component: _complete_request_complete_request_component__WEBPACK_IMPORTED_MODULE_5__["CompleteRequestComponent"] },
    { path: 'cancelled-list-schedular', component: _cancelled_request_cancelled_request_component__WEBPACK_IMPORTED_MODULE_6__["CancelledRequestComponent"] },
    { path: 'broadcast-list-schedular', component: _broadcast_request_broadcast_request_component__WEBPACK_IMPORTED_MODULE_8__["BroadcastRequestComponent"] },
    { path: 'details/:id', component: _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_9__["RequestDetailComponent"] },
    { path: 'interpreter-view/:id', component: _interpreter_list_interpreter_list_component__WEBPACK_IMPORTED_MODULE_10__["InterpreterListComponent"] },
];
class RequestSchedulerRoutingModule {
}
RequestSchedulerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestSchedulerRoutingModule });
RequestSchedulerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestSchedulerRoutingModule_Factory(t) { return new (t || RequestSchedulerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestSchedulerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestSchedulerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9ZVi":
/*!********************************************************************************!*\
  !*** ./src/app/views/request-scheduler/request-list/request-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: RequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListComponent", function() { return RequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");


















function RequestListComponent_ngx_datatable_23_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " IR ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r20 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r20.ir, " ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Client Name ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r22 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.client_name, " ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " LOB ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r24 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r24.lob_name, " ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Assignment Type ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r26 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r26.assignment_type, " ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Language ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r28 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r28.lang_name, " ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Requested date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestListComponent_ngx_datatable_23_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", row_r30.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, row_r30.created_at, "MM/dd/yyyy"), "");
} }
function RequestListComponent_ngx_datatable_23_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Status ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_21_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestListComponent_ngx_datatable_23_ng_template_21_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Repeat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestListComponent_ngx_datatable_23_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestListComponent_ngx_datatable_23_ng_template_21_p_0_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestListComponent_ngx_datatable_23_ng_template_21_p_1_Template, 2, 0, "p", 30);
} if (rf & 2) {
    const row_r32 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r32.ris_status == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r32.ris_status == "4");
} }
function RequestListComponent_ngx_datatable_23_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Actions ");
} }
function RequestListComponent_ngx_datatable_23_ng_template_24_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestListComponent_ngx_datatable_23_ng_template_24_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const row_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.assignMyNearbyInterpreter(row_r36.id, row_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Broadcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestListComponent_ngx_datatable_23_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestListComponent_ngx_datatable_23_ng_template_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const row_r36 = ctx.row; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.viewDetail(row_r36.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestListComponent_ngx_datatable_23_ng_template_24_button_2_Template, 2, 0, "button", 32);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.roleId == "1" || ctx_r18.roleId == "4");
} }
function RequestListComponent_ngx_datatable_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestListComponent_ngx_datatable_23_ng_template_2_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestListComponent_ngx_datatable_23_ng_template_3_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestListComponent_ngx_datatable_23_ng_template_5_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestListComponent_ngx_datatable_23_ng_template_6_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RequestListComponent_ngx_datatable_23_ng_template_8_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RequestListComponent_ngx_datatable_23_ng_template_9_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RequestListComponent_ngx_datatable_23_ng_template_11_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RequestListComponent_ngx_datatable_23_ng_template_12_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RequestListComponent_ngx_datatable_23_ng_template_14_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RequestListComponent_ngx_datatable_23_ng_template_15_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RequestListComponent_ngx_datatable_23_ng_template_17_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RequestListComponent_ngx_datatable_23_ng_template_18_Template, 3, 5, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RequestListComponent_ngx_datatable_23_ng_template_20_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RequestListComponent_ngx_datatable_23_ng_template_21_Template, 2, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngx-datatable-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RequestListComponent_ngx_datatable_23_ng_template_23_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RequestListComponent_ngx_datatable_23_ng_template_24_Template, 3, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("rowClass", ctx_r1.getRowClass)("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("rows", ctx_r1.filteredUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function RequestListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We couldn't find what you're looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RequestListComponent {
    constructor(productService, modalService, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.searchNameEmail = '';
        this.distance = '';
        this.rate = '';
        this.rating = '';
        this.search_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.getRowClass = (row) => {
            return {
                'newRequest': row.status == "0",
                'broadcastRequest': row.status == "1",
                'progressRequest': row.status == "2",
                'completeRequest': row.status == "3",
                'rejecteRequest': row.status == "4",
            };
        };
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        console.log("userId-", this.userId);
        console.log("roleId-", this.roleId);
        this.userRequestList('1');
        // this.searchControl.valueChanges
        // .pipe(debounceTime(200))
        // .subscribe(value => {
        //   this.filerData(value);
        // });
        // this.products$ = this.productService.getProducts();
    }
    // filerData(val) {
    //   if (val) {
    //     val = val.toLowerCase();
    //   } else {
    //     console.log("xxxxxxx",this.filteredUser);
    //     return this.filteredUser = [... this.userData];
    //   }
    //   const columns = Object.keys( this.userData[0]);
    //   if (!columns.length) {
    //     return;
    //   }
    //   const rows =  this.userData.filter(function(d) {
    //     for (let i = 0; i <= columns.length; i++) {
    //       const column = columns[i];
    //       // console.log(d[column]);
    //       if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
    //         return true;
    //       }
    //     }
    //   });
    //   this.filteredUser = rows;
    // }
    userRequestList(e) {
        console.log("startDateaaaaaaaaaa", this.range.value.start_date);
        this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        console.log("startDate", this.startDate);
        this.endDate = this.range.value.end_date;
        console.log("all", this.allData, this.startDate, this.endDate);
        this.service.getUserRequest(this.allData, this.startDate, this.endDate)
            .subscribe(res => {
            console.log("==============================res", res);
            if (res['status'] == 1) {
                this.list_Obj = res['data'];
                this.userData = [...res['data']];
                console.log("listttttttt", this.list_Obj);
                this.filteredUser = this.list_Obj;
            }
            else {
                this.list_Obj = [];
                this.userData = [];
                this.filteredUser = [];
                // this.resp_msg = res;
                // this.toastr.error(this.resp_msg.message,'', { timeOut: 2000 });
            }
        });
    }
    viewDetail(request_id) {
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(res => {
            if (res['status'] == 1) {
                this.view_obj = res['data'][0];
                console.log("view object", this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                this.router.navigate(['/request-scheduler/details', request_id]);
                // this.router.navigate(['/user-request/request-view',request_id])
            }
            else {
                this.resp_msg = res;
                this.toastr.error(this.resp_msg.message, '', { timeOut: 2000 });
            }
        });
    }
    //assign
    assignMyNearbyInterpreter(service_id, info) {
        // localStorage.setItem('assignData', JSON.stringify(info));
        // localStorage.setItem('serviceId', JSON.stringify(service_id));
        this.service.myNearbyInterpreter(service_id, info.language, this.searchNameEmail, this.distance, this.rate, this.rating).subscribe(res => {
            this.interpreter_obj = res['data'];
            console.log("interpreter_obj", this.interpreter_obj);
            // localStorage.setItem('viewDatainMap', JSON.stringify(this.view_interpreter));
            this.router.navigate(['/request-scheduler/interpreter-view', service_id]);
        });
    }
}
RequestListComponent.ɵfac = function RequestListComponent_Factory(t) { return new (t || RequestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RequestListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestListComponent, selectors: [["app-request-list"]], decls: 25, vars: 6, consts: [[1, ""], [1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["id", "search", "placeholder", "Search", "type", "text", 1, "form-control", "form-control-rounded", 3, "formControl", "keyup"], [1, "col-md-4", "dummy_text"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start_date", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end_date", "placeholder", "End date", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-12", "requesttable", "yellowtable", "yellowtablenew"], [1, "card", "o-hidden"], ["style", "height: 500px; box-shadow: none", "class", "material fullscreen", 3, "columnMode", "rowClass", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", 4, "ngIf"], ["class", "col-md-12 text-center", 4, "ngIf"], [1, "material", "fullscreen", 2, "height", "500px", "box-shadow", "none", 3, "columnMode", "rowClass", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows"], ["name", "IR", "prop", "ir"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Client Name", "prop", "client_name"], ["name", "LOB", "prop", "lob_name"], ["name", "Assignment Type", "prop", "assignment_type"], ["ngx-datatable-header-template", "", "name", "Language", "prop", "lang_name"], [3, "width", "sortable"], ["title", "Requested date"], [3, "title"], [4, "ngIf"], [1, "btn", "btn-outline-secondary", 3, "click"], ["class", "btn btn-outline-secondary ml-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-secondary", "ml-2", 3, "click"], [1, "col-md-12", "text-center"], ["src", "../assets/images/nosearch.png"]], template: function RequestListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RequestListComponent_Template_input_keyup_12_listener($event) { return ctx.userRequestList($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function RequestListComponent_Template_input_dateChange_16_listener($event) { return ctx.userRequestList($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function RequestListComponent_Template_input_dateChange_17_listener($event) { return ctx.userRequestList($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RequestListComponent_ngx_datatable_23_Template, 25, 9, "ngx-datatable", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RequestListComponent_div_24_Template, 7, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredUser == null ? null : ctx.filteredUser.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list_Obj == null ? null : ctx.list_Obj.length) <= 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnCellDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0px 8px !important;\n  border-radius: 15px !important;\n  outline: initial !important;\n  background: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #47404f;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  background: #fff;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 3px 0;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none !important;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-date-range-input {\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n  bottom: 7px;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::-moz-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::placeholder {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvcmVxdWVzdC1saXN0L3JlcXVlc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztBQUFsQjs7QUFHRztFQUNBLGdCQUFnQjtBQUFuQjs7QUFFRztFQUNDLGNBQWM7QUFDbEI7O0FBQ0c7RUFDQyx3QkFBd0I7QUFFNUI7O0FBQUc7RUFDQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUdmOztBQUFHO0VBQ0EsY0FBYztBQUdqQjs7QUFKRztFQUNBLGNBQWM7QUFHakI7O0FBSkc7RUFDQSxjQUFjO0FBR2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvcmVxdWVzdC1saXN0L3JlcXVlc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tIHNlYXJjaCBjYWxlbmRhciBTdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4uZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgcGFkZGluZzogMHB4IDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGNvbG9yOiAjNDc0MDRmO1xuICAgXG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcbiAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDNweCAwO1xuICAgfVxuICAgLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cbiAgIC5kdW1teV90ZXh0IDo6bmctZGVlcCAgLm1hdC1kYXRlLXJhbmdlLWlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogN3B4O1xuICAgfVxuICAgXG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlcntcbiAgIGNvbG9yOiAjOWI5YjliO1xuICAgfVxuICAgLy8gLS0tLS0tLS0tLS0tLS0gc2VhcmNoIGNhbGVuZGFyIEVuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS8vIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-list',
                templateUrl: './request-list.component.html',
                styleUrls: ['./request-list.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ECN4":
/*!****************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/interpreter-list/interpreter-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InterpreterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpreterListComponent", function() { return InterpreterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "bOtU");


// import { MouseEvent } from '@agm/core';















function InterpreterListComponent_agm_marker_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("markerClick", function InterpreterListComponent_agm_marker_31_Template_agm_marker_markerClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const m_r5 = ctx.$implicit; const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); return ctx_r7.clickedMarker(m_r5.label, m_r5.id, m_r5, i_r6, _r3); })("dragEnd", function InterpreterListComponent_agm_marker_31_Template_agm_marker_dragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const m_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.markerDragEnd(m_r5, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", m_r5.lat)("iconUrl", m_r5.icon)("longitude", m_r5.lng)("label", m_r5.label)("markerDraggable", m_r5.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r5.label);
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " S.No ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const rowIndex_r29 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowIndex_r29 + 1, " ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Name ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r32 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r32.name, " ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Email ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r34 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r34.email, " ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Mobile ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "mask");
} if (rf & 2) {
    const row_r36 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r36.mobile, "(000) 000-0000"), " ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Gender ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r38 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r38.gender, " ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Address ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r40 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r40.address, " ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Distance ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const row_r42 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r42.distance, "1.2-2"), " ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Rating ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r44 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r44.rating, " 0 ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Reject ");
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_27_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_27_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InterpreterListComponent_ngx_datatable_78_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InterpreterListComponent_ngx_datatable_78_ng_template_27_p_0_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InterpreterListComponent_ngx_datatable_78_ng_template_27_p_1_Template, 2, 0, "p", 28);
} if (rf & 2) {
    const row_r46 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r46.is_reject == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r46.is_reject == "1");
} }
function InterpreterListComponent_ngx_datatable_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InterpreterListComponent_ngx_datatable_78_ng_template_2_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InterpreterListComponent_ngx_datatable_78_ng_template_3_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InterpreterListComponent_ngx_datatable_78_ng_template_5_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InterpreterListComponent_ngx_datatable_78_ng_template_6_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InterpreterListComponent_ngx_datatable_78_ng_template_8_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InterpreterListComponent_ngx_datatable_78_ng_template_9_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InterpreterListComponent_ngx_datatable_78_ng_template_11_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InterpreterListComponent_ngx_datatable_78_ng_template_12_Template, 2, 4, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InterpreterListComponent_ngx_datatable_78_ng_template_14_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InterpreterListComponent_ngx_datatable_78_ng_template_15_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable-column", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InterpreterListComponent_ngx_datatable_78_ng_template_17_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InterpreterListComponent_ngx_datatable_78_ng_template_18_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable-column", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InterpreterListComponent_ngx_datatable_78_ng_template_20_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InterpreterListComponent_ngx_datatable_78_ng_template_21_Template, 2, 4, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngx-datatable-column", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InterpreterListComponent_ngx_datatable_78_ng_template_23_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InterpreterListComponent_ngx_datatable_78_ng_template_24_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngx-datatable-column", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InterpreterListComponent_ngx_datatable_78_ng_template_26_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, InterpreterListComponent_ngx_datatable_78_ng_template_27_Template, 2, 2, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("rows", ctx_r1.filteredUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sortable", false)("maxWidth", 100);
} }
function InterpreterListComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InterpreterListComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterpreterListComponent_ng_template_80_Template_button_click_3_listener() { const modal_r49 = ctx.$implicit; return modal_r49.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterpreterListComponent_ng_template_80_Template_button_click_29_listener() { const modal_r49 = ctx.$implicit; return modal_r49.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterpreterListComponent_ng_template_80_Template_button_click_31_listener() { const modal_r49 = ctx.$implicit; return modal_r49.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.mapInfo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.mapInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.mapInfo.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.mapInfo.address);
} }
class InterpreterListComponent {
    constructor(formBuilder, toastr, modalService, router, route, service) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.service = service;
        // google maps zoom level
        this.zoom = 8;
        this.markers = [];
        this.searchNameEmail = '';
        this.distance = '';
        this.rate = '';
        this.rating = '';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.distances = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.rates = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.ratings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.search_name_email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        // initial center position for the map
        // lat: number = 0;
        // lng: number = 0;
        this.scroll = false;
        this.lat = 22.7261762;
        this.lng = 76.1305457;
        this.serviceid = route.snapshot.params['id'];
        // this.serviceid = JSON.parse(localStorage.getItem('serviceId'));
    }
    ngOnInit() {
        this.getRequestDetails();
        // this.assignInfo = JSON.parse(localStorage.getItem('assignData'));
        this.service.currentMessage.subscribe(message => {
            this.mapInfo = message;
            console.log("mapView", this.mapInfo);
        });
        // this.lat = this.assignInfo.latitude;
        // this.lng = this.assignInfo.longitude;
        // console.log("my testing lat long  --", this.assignInfo)
        // this.language_id = this.assignInfo.language;
        // this.searchControl.valueChanges
        // .pipe(debounceTime(200))
        // .subscribe(value => {
        //   this.filerData(value);
        // });
    }
    getRequestDetails() {
        this.service.get("getRequestDetails/" + this.serviceid).subscribe((res) => {
            this.assignInfo = res['data'][0];
            console.log("this.assignInfo=============", this.assignInfo);
            this.lat = this.assignInfo.latitude;
            this.lng = this.assignInfo.longitude;
            this.language_id = this.assignInfo.language_id;
            this.assignMyNearbyInterpreter();
        });
    }
    clickedMarker(label, id, info, index, modal) {
        this.requestId = id;
        localStorage.setItem('Id', JSON.stringify(id));
        localStorage.setItem('Info', JSON.stringify(info));
        this.service.changeMessage(info);
        this.nameShow = label;
        this.addressShow = info.address;
        this.mobileShow = info.mobile;
        this.emailShow = info.email;
        // this.language_id = info.language;
        this.userId = JSON.parse(localStorage.getItem('serviceId'));
        if (index != 0) {
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.service.sendInterpreterRequest(this.requestId, this.userId).subscribe(res => {
                    this.requestStatus = res;
                    if (this.requestStatus.status == 1) {
                        this.toastr.success(this.requestStatus.message, '', { timeOut: 2000 });
                        this.router.navigate(['/user-request/list']);
                    }
                    else {
                        this.toastr.error(this.requestStatus.message, '', { timeOut: 2000 });
                    }
                });
            }, (reason) => {
            });
        }
        // console.log("userId, service_id",  this.userId );
        // console.log(`clicked the marker: ${id || index}`);
        // this.markers[index].visible = false;
    }
    mapClicked($event) {
        console.log("eeeee", $event);
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
            visible: true,
            opacity: 0.4
        });
    }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
    }
    /*filerData(val) {
      if (val) {
        val = val.toLowerCase();
      } else {
        return this.filteredUser = [... this.userData];
      }
  
      const columns = Object.keys( this.userData[0]);
      if (!columns.length) {
        return;
      }
  
      const rows =  this.userData.filter(function(d) {
        for (let i = 0; i <= columns.length; i++) {
          const column = columns[i];
          if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
            return true;
          }
        }
      });
      this.filteredUser = rows;
    }
  */
    assignMyNearbyInterpreter() {
        this.distance_formdata = this.distances.value;
        this.rates_formdata = this.rates.value;
        this.ratings_formdata = this.ratings.value;
        this.namemail_formdata = this.search_name_email.value;
        this.distance = this.distance_formdata;
        this.searchNameEmail = this.namemail_formdata;
        this.rate = this.rates_formdata;
        this.rating = this.ratings_formdata;
        //  console.log("value set", this.distance);
        console.log("============this.language_id", this.language_id);
        console.log("============this.serviceid", this.serviceid);
        console.log("============this.searchNameEmail", this.searchNameEmail);
        console.log("============this.distance", this.distance);
        console.log("============this.rate", this.rate);
        console.log("============this.rating", this.rating);
        this.service.myNearbyInterpreter(this.serviceid, this.language_id, this.searchNameEmail, this.distance, this.rate, this.rating).subscribe(res => {
            if (res['status'] == 0) {
                this.list_Obj = '';
                this.userData = '';
                this.filteredUser = '';
                this.markers = [
                    {
                        lat: this.assignInfo.latitude,
                        lng: this.assignInfo.longitude,
                        label: this.assignInfo.caseworker_name,
                        id: this.assignInfo.id,
                        mobile: this.assignInfo.cell_phone,
                        // address: this.assignInfo.lang_name,
                        address: this.assignInfo.language,
                        email: this.assignInfo.email,
                        draggable: false,
                        visible: false,
                        opacity: 0.7
                    }
                ];
                // console.log(this.markers)
                // console.log(this.markers[0])
                // this.markers=[];
                // this.markers.filter(item => item !== this.markers[0]);
            }
            else {
                this.markers = [
                    {
                        lat: this.assignInfo.latitude,
                        lng: this.assignInfo.longitude,
                        label: this.assignInfo.caseworker_name,
                        id: this.assignInfo.id,
                        mobile: this.assignInfo.cell_phone,
                        // address: this.assignInfo.lang_name,
                        address: this.assignInfo.language,
                        email: this.assignInfo.email,
                        draggable: false,
                        visible: false,
                        opacity: 0.7
                    }
                ];
                this.list_Obj = res['data'];
                this.userData = [...res['data']];
                this.filteredUser = this.list_Obj;
                console.log("===============this.filteredUser", this.filteredUser);
                for (let i = 0; i < this.list_Obj.length; i++) {
                    this.markers.push({
                        lat: this.list_Obj[i].latitude,
                        lng: this.list_Obj[i].longitude,
                        label: this.list_Obj[i].name,
                        id: this.list_Obj[i].id,
                        mobile: this.list_Obj[i].mobile,
                        address: this.list_Obj[i].address,
                        email: this.list_Obj[i].email,
                        draggable: false,
                        visible: false,
                        opacity: 0.7,
                        icon: "./assets/images/faces/placeholder.png"
                    });
                }
                console.log("clicked the marker:", this.markers);
            }
        });
    }
    //}
    viewDetail() {
        this.router.navigate(['/request-scheduler/details', this.assignInfo.id]);
        // this.router.navigate(['/user-request/request-view', this.assignInfo.id])
    }
    requestDetail(id, data, modal) {
        this.requestId = id;
        this.userId = JSON.parse(localStorage.getItem('serviceId'));
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
            this.service.sendInterpreterRequest(this.requestId, this.userId).subscribe(res => {
                this.requestStatus = res;
                if (this.requestStatus.status == 1) {
                    this.nameShow = data.name;
                    this.addressShow = data.address;
                    this.mobileShow = data.mobile;
                    this.emailShow = data.email;
                    this.toastr.success(this.requestStatus.message, '', { timeOut: 2000 });
                    this.router.navigate(['/user-request/list']);
                }
                else {
                    this.router.navigate(['/user-request/list']);
                    this.toastr.error(this.requestStatus.message, '', { timeOut: 2000 });
                }
            });
        }, (reason) => {
        });
    }
    assignAllInterpreter() {
        // this.service.requestAssignAllInterpreter(this.serviceid, this.list_Obj).subscribe(res => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure want to Broadcast?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                this.service.requestAssignAllInterpreter(this.serviceid, this.filteredUser).subscribe(res => {
                    console.log("res====", res);
                    this.requestStatus = res;
                    if (res['status'] == '1') {
                        this.router.navigate(['/request-scheduler/broadcast-list-schedular']);
                        this.toastr.success(this.requestStatus.message, '', { timeOut: 2000 });
                    }
                    else {
                        // this.router.navigate(['/user-request/list'])
                        this.toastr.error(this.requestStatus.message, '', { timeOut: 2000 });
                    }
                });
            }
        });
    }
}
InterpreterListComponent.ɵfac = function InterpreterListComponent_Factory(t) { return new (t || InterpreterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
InterpreterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterpreterListComponent, selectors: [["app-interpreter-list"]], decls: 82, vars: 18, consts: [[1, "row"], [1, "col-md-4"], ["for", "test"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "col-md-8"], [3, "latitude", "longitude", "disableDefaultUI", "mapClick"], [3, "latitude", "iconUrl", "longitude", "label", "markerDraggable", "markerClick", "dragEnd", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "form-grup"], ["id", "search", "placeholder", "Name/Email", "type", "text", 1, "form-control", "form-control-rounded", 3, "formControl"], [1, "form-group"], ["id", "search", "placeholder", "Distance", "type", "text", 1, "form-control", "form-control-rounded", 3, "formControl"], ["placeholder", "Rate", 1, "form-control", "form-control-rounded", 3, "formControl"], ["value", ""], ["value", "10"], ["value", "20"], ["value", "30"], ["value", "40"], ["value", "50"], ["placeholder", "Rating", 1, "form-control", "form-control-rounded", 3, "formControl"], ["value", "5"], ["value", "4"], ["value", "3"], ["value", "2"], ["value", "1"], [1, "col-md-12"], [1, "card", "o-hidden"], ["style", "height: 500px; box-shadow: none", "class", "material fullscreen", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", 4, "ngIf"], [4, "ngIf"], ["requestConfirmModal", ""], [3, "latitude", "iconUrl", "longitude", "label", "markerDraggable", "markerClick", "dragEnd"], [1, "material", "fullscreen", 2, "height", "500px", "box-shadow", "none", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows"], ["name", "S.No", 3, "sortable", "maxWidth"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name", "prop", "name"], ["name", "Email", "prop", "email"], ["name", "Mobile", "prop", "mobile"], ["name", "Gender", "prop", "gender"], ["name", "Address", "prop", "address"], ["name", "Distance", "prop", "distance"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-0"], [1, "map_label", "mb-0"], [1, "map_left"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"]], template: function InterpreterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Requested By : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mobile No. : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterpreterListComponent_Template_button_click_27_listener() { return ctx.viewDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "agm-map", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function InterpreterListComponent_Template_agm_map_mapClick_30_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InterpreterListComponent_agm_marker_31_Template, 4, 6, "agm-marker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "$10/Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "$20/Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "$30/Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "$40/Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "$50/Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Select Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterpreterListComponent_Template_button_click_71_listener() { return ctx.assignMyNearbyInterpreter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterpreterListComponent_Template_button_click_74_listener() { return ctx.assignAllInterpreter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Broadcast All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, InterpreterListComponent_ngx_datatable_78_Template, 28, 8, "ngx-datatable", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, InterpreterListComponent_ng_container_79_Template, 2, 0, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, InterpreterListComponent_ng_template_80_Template, 33, 4, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.assignInfo == null ? null : ctx.assignInfo.client_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.assignInfo == null ? null : ctx.assignInfo.requested_by, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.assignInfo == null ? null : ctx.assignInfo.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.assignInfo == null ? null : ctx.assignInfo.phone_code, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 15, ctx.assignInfo == null ? null : ctx.assignInfo.cellphone_contact_person, " (000) 000-0000"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("disableDefaultUI", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search_name_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.distances);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.rates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ratings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredUser == null ? null : ctx.filteredUser.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list_Obj == null ? null : ctx.list_Obj.length) <= 0);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmInfoWindow"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnCellDirective"]], pipes: [ngx_mask__WEBPACK_IMPORTED_MODULE_10__["MaskPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.map_left[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 23px;\n  top: 35px;\n}\n\n.map_label[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 98px;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvaW50ZXJwcmV0ZXItbGlzdC9pbnRlcnByZXRlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBRVg7O0FBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFHWCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcXVlc3Qtc2NoZWR1bGVyL2ludGVycHJldGVyLWxpc3QvaW50ZXJwcmV0ZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLm1hcF9sZWZ0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyM3B4O1xuICB0b3A6IDM1cHg7XG59XG4ubWFwX2xhYmVse1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5OHB4O1xuICB0b3A6IDE1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterpreterListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interpreter-list',
                templateUrl: './interpreter-list.component.html',
                styleUrls: ['./interpreter-list.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "EECh":
/*!*********************************************************************!*\
  !*** ./src/app/views/request-scheduler/request-scheduler.module.ts ***!
  \*********************************************************************/
/*! exports provided: RequestSchedulerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSchedulerModule", function() { return RequestSchedulerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _request_scheduler_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-scheduler-routing.module */ "6RV7");
/* harmony import */ var _all_request_schedular_all_request_schedular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-request-schedular/all-request-schedular.component */ "Z0oT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _all_request_list_schedular_all_request_list_schedular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-request-list-schedular/all-request-list-schedular.component */ "S6gb");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ "bOtU");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "10VE");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./request-list/request-list.component */ "9ZVi");
/* harmony import */ var _complete_request_complete_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./complete-request/complete-request.component */ "YiLU");
/* harmony import */ var _cancelled_request_cancelled_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cancelled-request/cancelled-request.component */ "b61f");
/* harmony import */ var _accept_request_accept_request_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./accept-request/accept-request.component */ "p4GS");
/* harmony import */ var _broadcast_request_broadcast_request_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./broadcast-request/broadcast-request.component */ "KQpT");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../material.module */ "vvyD");
/* harmony import */ var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./request-detail/request-detail.component */ "lIoM");
/* harmony import */ var _interpreter_list_interpreter_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./interpreter-list/interpreter-list.component */ "ECN4");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");


























class RequestSchedulerModule {
}
RequestSchedulerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestSchedulerModule });
RequestSchedulerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestSchedulerModule_Factory(t) { return new (t || RequestSchedulerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__["AutocompleteLibModule"],
            _request_scheduler_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequestSchedulerRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__["TimePickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',
                libraries: ['places']
            }),
            ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestSchedulerModule, { declarations: [_all_request_schedular_all_request_schedular_component__WEBPACK_IMPORTED_MODULE_3__["AllRequestSchedularComponent"],
        _all_request_list_schedular_all_request_list_schedular_component__WEBPACK_IMPORTED_MODULE_5__["AllRequestListSchedularComponent"],
        _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_14__["RequestListComponent"],
        _complete_request_complete_request_component__WEBPACK_IMPORTED_MODULE_15__["CompleteRequestComponent"],
        _cancelled_request_cancelled_request_component__WEBPACK_IMPORTED_MODULE_16__["CancelledRequestComponent"],
        _accept_request_accept_request_component__WEBPACK_IMPORTED_MODULE_17__["AcceptRequestComponent"],
        _broadcast_request_broadcast_request_component__WEBPACK_IMPORTED_MODULE_18__["BroadcastRequestComponent"],
        _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_20__["RequestDetailComponent"],
        _interpreter_list_interpreter_list_component__WEBPACK_IMPORTED_MODULE_21__["InterpreterListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__["AutocompleteLibModule"],
        _request_scheduler_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequestSchedulerRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__["TimePickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestSchedulerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _all_request_schedular_all_request_schedular_component__WEBPACK_IMPORTED_MODULE_3__["AllRequestSchedularComponent"],
                    _all_request_list_schedular_all_request_list_schedular_component__WEBPACK_IMPORTED_MODULE_5__["AllRequestListSchedularComponent"],
                    _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_14__["RequestListComponent"],
                    _complete_request_complete_request_component__WEBPACK_IMPORTED_MODULE_15__["CompleteRequestComponent"],
                    _cancelled_request_cancelled_request_component__WEBPACK_IMPORTED_MODULE_16__["CancelledRequestComponent"],
                    _accept_request_accept_request_component__WEBPACK_IMPORTED_MODULE_17__["AcceptRequestComponent"],
                    _broadcast_request_broadcast_request_component__WEBPACK_IMPORTED_MODULE_18__["BroadcastRequestComponent"],
                    _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_20__["RequestDetailComponent"],
                    _interpreter_list_interpreter_list_component__WEBPACK_IMPORTED_MODULE_21__["InterpreterListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__["AutocompleteLibModule"],
                    _request_scheduler_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequestSchedulerRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                    src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__["TimePickerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',
                        libraries: ['places']
                    }),
                    ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"].forRoot(),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "KQpT":
/*!******************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/broadcast-request/broadcast-request.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BroadcastRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastRequestComponent", function() { return BroadcastRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");


















function BroadcastRequestComponent_ngx_datatable_23_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " IR ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r26 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r26.ir, " ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Client Name ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r28 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r28.client_name, " ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " LOB ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r30 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.lob_name, " ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Assignment Type ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r32 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r32.assignment_type, " ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Language ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r34 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r34.lang_name, " ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_16_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No. Of Interpreter ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_16_ng_template_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const row_r38 = ctx.row; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx_r39.numOfInterpreter(row_r38.ris_id, row_r38.no_of_interpreter, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r38.no_of_interpreter);
} }
function BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_16_ng_template_1_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_16_ng_template_2_Template, 2, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Requested date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", row_r42.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, row_r42.created_at, "MM/dd/yyyy"), "");
} }
function BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Status ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Pending Acceptance ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_20_ng_template_2_Template, 1, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Action ");
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_23_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ngx_datatable_23_ng_template_23_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const row_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx_r51.interpreterReply(row_r48.ris_id, "1", _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_23_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ngx_datatable_23_ng_template_23_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const row_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx_r54.interpreterReply(row_r48.ris_id, "3", _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BroadcastRequestComponent_ngx_datatable_23_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ngx_datatable_23_ng_template_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const row_r48 = ctx.row; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.viewDetail(row_r48.ris_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BroadcastRequestComponent_ngx_datatable_23_ng_template_23_button_2_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BroadcastRequestComponent_ngx_datatable_23_ng_template_23_button_3_Template, 2, 0, "button", 38);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.roleId != "1" && ctx_r24.roleId != "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.roleId != "1" && ctx_r24.roleId != "4");
} }
function BroadcastRequestComponent_ngx_datatable_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BroadcastRequestComponent_ngx_datatable_23_ng_template_2_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BroadcastRequestComponent_ngx_datatable_23_ng_template_3_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BroadcastRequestComponent_ngx_datatable_23_ng_template_5_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BroadcastRequestComponent_ngx_datatable_23_ng_template_6_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BroadcastRequestComponent_ngx_datatable_23_ng_template_8_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BroadcastRequestComponent_ngx_datatable_23_ng_template_9_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BroadcastRequestComponent_ngx_datatable_23_ng_template_11_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BroadcastRequestComponent_ngx_datatable_23_ng_template_12_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BroadcastRequestComponent_ngx_datatable_23_ng_template_14_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BroadcastRequestComponent_ngx_datatable_23_ng_template_15_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_16_Template, 3, 0, "ngx-datatable-column", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BroadcastRequestComponent_ngx_datatable_23_ng_template_18_Template, 2, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BroadcastRequestComponent_ngx_datatable_23_ng_template_19_Template, 3, 5, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BroadcastRequestComponent_ngx_datatable_23_ngx_datatable_column_20_Template, 3, 2, "ngx-datatable-column", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BroadcastRequestComponent_ngx_datatable_23_ng_template_22_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BroadcastRequestComponent_ngx_datatable_23_ng_template_23_Template, 4, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("rows", ctx_r1.filteredUser)("rowClass", ctx_r1.getRowClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.roleId == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.roleId == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function BroadcastRequestComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We couldn't find what you're looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BroadcastRequestComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_25_Template_button_click_3_listener() { const modal_r59 = ctx.$implicit; return modal_r59.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure? you want to Accept Request?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_25_Template_button_click_11_listener() { const modal_r59 = ctx.$implicit; return modal_r59.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_25_Template_button_click_13_listener() { const modal_r59 = ctx.$implicit; return modal_r59.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BroadcastRequestComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_27_Template_button_click_3_listener() { const modal_r63 = ctx.$implicit; return modal_r63.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure? you want to Reject Request?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_27_Template_button_click_11_listener() { const modal_r63 = ctx.$implicit; return modal_r63.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_27_Template_button_click_13_listener() { const modal_r63 = ctx.$implicit; return modal_r63.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BroadcastRequestComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_29_Template_button_click_3_listener() { const modal_r67 = ctx.$implicit; return modal_r67.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "There is no interpreter available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BroadcastRequestComponent_ng_template_29_Template_button_click_11_listener() { const modal_r67 = ctx.$implicit; return modal_r67.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BroadcastRequestComponent {
    constructor(productService, modalService, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        //search calendar
        this.search_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.getRowClass = (row) => {
            return {
                'broadcastRequest': row.status == "1",
            };
        };
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        console.log("userId-", this.userId);
        // console.log("roleId-",this.roleId)
        this.PendingRequestData('1');
        // this.interpreterRequestData();
        // this.searchControl.valueChanges
        // .pipe(debounceTime(200))
        // .subscribe(value => {
        //   this.filerData(value);
        // });
        /*this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        this.array_Obj = this.roleData['data'][0];
        if(this.array_Obj.id){
          this.array_Obj = this.roleData['data'][0];
          console.log("roleData", this.array_Obj);
        }
        */
    }
    /*========== Search Filter For Table Start Here========*/
    filerData(val) {
        if (val) {
            val = val.toLowerCase();
        }
        else {
            console.log("xxxxxxx", this.filteredUser);
            return this.filteredUser = [...this.userData];
        }
        const columns = Object.keys(this.userData[0]);
        if (!columns.length) {
            return;
        }
        const rows = this.userData.filter(function (d) {
            for (let i = 0; i <= columns.length; i++) {
                const column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredUser = rows;
    }
    /*========== Search Filter For Table End Here========*/
    /*========== Pending Request Start Here========*/
    PendingRequestData(e) {
        this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        this.endDate = this.range.value.end_date;
        this.service.AllPendingRequest(this.allData, this.startDate, this.endDate, '')
            .subscribe(res => {
            if (res['status'] == '1') {
                console.log("api response", res);
                this.list_Obj = res['data'];
                this.userData = [...res['data']];
                // console.log("listttttttt", this.list_Obj);
                this.filteredUser = this.list_Obj;
                console.log("================sss=", this.filteredUser);
            }
        });
    }
    /*========== Pending Request End Here========*/
    //   interpreterRequestData(){
    //     this.service.interpreterRequestList(this.roleId,this.userId,'1')
    //     .subscribe(res => {
    //       if(res['status']=='1'){
    //         console.log("api response",res);
    //         this.list_Obj = res['data'];
    //         this.userData = [...res['data']];
    //         // console.log("listttttttt", this.list_Obj);
    //         this.filteredUser = this.list_Obj;
    //       }
    //     });
    // }
    /*========== Accept/Denay Through Interpreter Start Here========*/
    // requestComplete(id, modal) {
    interpreterReply(ris_id, res_type, modal) {
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
            this.service.interpreterReqReply(this.userId, ris_id, res_type)
                .subscribe(res => {
                console.log("res---", res);
                this.status_msg = res;
                if (res['status'] == '1') {
                    this.toastr.success(this.status_msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                    // location.reload();
                    if (res_type == '2') {
                        this.router.navigate(['/interpreter-request/accept-list']);
                    }
                    else {
                        this.router.navigate(['/interpreter-request/reject-list']);
                    }
                    // this.interpreterRequestData();
                }
                else {
                    this.toastr.success(this.status_msg.message, '', { timeOut: 1000 });
                    this.router.navigate(['/interpreter-request/list']);
                }
            });
        }, (reason) => {
        });
    }
    /*========== Accept/Declined Through Interpreter End Here========*/
    /*========== Show Details Start Here========*/
    viewDetail(request_id) {
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(res => {
            if (res['status'] == 1) {
                this.view_obj = res['data'][0];
                console.log("view object", this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                this.router.navigate(['/request-scheduler/details', request_id]);
                // this.router.navigate(['/user-request/request-view', request_id])
            }
            else {
                this.resp_msg = res;
                this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
            }
        });
    }
    /*========== Show Details End Here========*/
    /*
      interpreterReply_old(user_id,ris_id,res_type,modal){
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        this.service.interpreterReqReply(user_id,ris_id,res_type).subscribe(res => {
          this.status_msg = res;
            if (res['status'] == '1') {
              this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
              // location.reload();
              this.router.navigate(['/interpreter-request/reject-list']);
              // this.interpreterRequestData();
            }else{
              this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
              this.router.navigate(['/interpreter-request/list']);
            }
        })
        });
      }
    */
    /*========== Number of Interpreter Popup Open Start Here========*/
    numOfInterpreter(id, totalInterpreter, modal) {
        // this.router.navigate(['/interpreter-request/interpreter-history']);
        // console.log("iddddddddddd",id);
        // localStorage.setItem('interhistory', JSON.stringify(id));
        console.log("totalInterpreter", totalInterpreter);
        if (totalInterpreter == 0) {
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
        }
        else {
            // this.router.navigate(['/languages/interpreter-detail']);
            this.router.navigate(['/interpreter/interpreter-list/', id, 2]);
            // interpreter-list/:id/:type
        }
    }
}
BroadcastRequestComponent.ɵfac = function BroadcastRequestComponent_Factory(t) { return new (t || BroadcastRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BroadcastRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BroadcastRequestComponent, selectors: [["broadcast-request"]], decls: 31, vars: 6, consts: [[1, ""], [1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["id", "search", "placeholder", "Search", "type", "text", 1, "form-control", "form-control-rounded", 3, "formControl", "keyup"], [1, "col-md-4", "dummy_text"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start_date", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end_date", "placeholder", "End date", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-12", "requesttable", "broad", "broadnew"], [1, "card", "o-hidden"], ["style", "height: 500px; box-shadow: none", "class", "material fullscreen", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "rowClass", 4, "ngIf"], ["class", "col-md-12 text-center", 4, "ngIf"], ["acceptConfirmModal", ""], ["rejectConfirmModal", ""], ["interpreterConfirmModal", ""], [1, "material", "fullscreen", 2, "height", "500px", "box-shadow", "none", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "rowClass"], ["name", "IR", "prop", "ir"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Client Name", "prop", "client_name"], ["name", "LOB", "prop", "lob_name"], ["name", "Assignment Type", "prop", "assignment_type"], ["name", "Language", "prop", "lang_name"], ["name", "Interpreter", "prop", "requester_name", 4, "ngIf"], [3, "width", "sortable", 4, "ngIf"], [3, "width", "sortable"], ["name", "Interpreter", "prop", "requester_name"], [1, "Cursor_Point", 3, "click"], ["title", "Requested date"], [3, "title"], [1, "btn", "btn-outline-secondary", 3, "click"], ["class", "btn btn-outline-danger ml-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-danger", "ml-2", 3, "click"], [1, "col-md-12", "text-center"], ["src", "../assets/images/nosearch.png"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"]], template: function BroadcastRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Broadscasting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BroadcastRequestComponent_Template_input_keyup_12_listener($event) { return ctx.PendingRequestData($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function BroadcastRequestComponent_Template_input_dateChange_16_listener($event) { return ctx.PendingRequestData($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function BroadcastRequestComponent_Template_input_dateChange_17_listener($event) { return ctx.PendingRequestData($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BroadcastRequestComponent_ngx_datatable_23_Template, 24, 11, "ngx-datatable", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BroadcastRequestComponent_div_24_Template, 7, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BroadcastRequestComponent_ng_template_25_Template, 15, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BroadcastRequestComponent_ng_template_27_Template, 15, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BroadcastRequestComponent_ng_template_29_Template, 13, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredUser == null ? null : ctx.filteredUser.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list_Obj == null ? null : ctx.list_Obj.length) <= 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnCellDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0px 8px !important;\n  border-radius: 15px !important;\n  outline: initial !important;\n  background: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #47404f;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  background: #fff;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 3px 0;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none !important;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-date-range-input {\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n  bottom: 7px;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::-moz-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::placeholder {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvYnJvYWRjYXN0LXJlcXVlc3QvYnJvYWRjYXN0LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFBbEI7O0FBR0c7RUFDQSxnQkFBZ0I7QUFBbkI7O0FBRUc7RUFDQyxjQUFjO0FBQ2xCOztBQUNHO0VBQ0Msd0JBQXdCO0FBRTVCOztBQUFHO0VBQ0MsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFHZjs7QUFBRztFQUNBLGNBQWM7QUFHakI7O0FBSkc7RUFDQSxjQUFjO0FBR2pCOztBQUpHO0VBQ0EsY0FBYztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcXVlc3Qtc2NoZWR1bGVyL2Jyb2FkY2FzdC1yZXF1ZXN0L2Jyb2FkY2FzdC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0gc2VhcmNoIGNhbGVuZGFyIFN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbi5kdW1teV90ZXh0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBwYWRkaW5nOiAwcHggOHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgY29sb3I6ICM0NzQwNGY7XG4gICBcbiAgIH1cbiAgIC5kdW1teV90ZXh0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xuICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgIH1cbiAgIC5kdW1teV90ZXh0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgfVxuICAgLmR1bW15X3RleHQgOjpuZy1kZWVwICAubWF0LWRhdGUtcmFuZ2UtaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA3cHg7XG4gICB9XG4gICBcbiAgIC5kdW1teV90ZXh0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye1xuICAgY29sb3I6ICM5YjliOWI7XG4gICB9XG4gICAvLyAtLS0tLS0tLS0tLS0tLSBzZWFyY2ggY2FsZW5kYXIgRW5kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLy8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BroadcastRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'broadcast-request',
                templateUrl: './broadcast-request.component.html',
                styleUrls: ['./broadcast-request.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "S6gb":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/all-request-list-schedular/all-request-list-schedular.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AllRequestListSchedularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRequestListSchedularComponent", function() { return AllRequestListSchedularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");



















function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " IR ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r19 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r19.ir, " ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Client Name ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r21.client_name, " ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " LOB ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r23 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.lob_name, " ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Assignment Type ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r25 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r25.assignment_type, " ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Language ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r27 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r27.lang_name, " ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Requested date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", row_r29.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, row_r29.created_at, "MM/dd/yyyy"), "");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Status ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Broadcasting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reassign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_0_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_2_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_3_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_span_4_Template, 2, 0, "span", 40);
} if (rf & 2) {
    const row_r33 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r33.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r33.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r33.status == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r33.status == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r33.status == 4);
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_ng_template_2_Template, 5, 5, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Action ");
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_22_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_22_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const row_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.assignMyNearbyInterpreter(row_r40.id, row_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Broadcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRequestListSchedularComponent_ngx_datatable_39_ng_template_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const row_r40 = ctx.row; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.viewDetail(row_r40.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_22_button_2_Template, 2, 0, "button", 42);
} if (rf & 2) {
    const row_r40 = ctx.row;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r40.status == 0 && (ctx_r17.roleId == "1" || ctx_r17.roleId == "4"));
} }
function AllRequestListSchedularComponent_ngx_datatable_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_2_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_3_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_5_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_6_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_8_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_9_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_11_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_12_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_14_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_15_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_17_Template, 2, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_18_Template, 3, 5, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllRequestListSchedularComponent_ngx_datatable_39_ngx_datatable_column_19_Template, 3, 2, "ngx-datatable-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-datatable-column", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_21_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AllRequestListSchedularComponent_ngx_datatable_39_ng_template_22_Template, 3, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("rows", ctx_r1.filteredUser)("rowClass", ctx_r1.getRowClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minWidth", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.roleId == "1" || ctx_r1.roleId == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function AllRequestListSchedularComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We couldn't find what you're looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllRequestListSchedularComponent {
    constructor(productService, modalService, fb, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.fb = fb;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.searchEmail = '';
        this.searchStatus = '';
        this.request_status = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('select');
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.search_email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        //search calendar
        this.search_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.interval = 5;
        // <option class="black-text bg-warning" value="0">New Request</option>
        // <option class="bg-black text-white" value="1">Broadcasting</option>
        // <option class="bg-primary text-white" value="2">In Progress</option>
        // <option class="bg-success black-text" value="3">Completed</option>
        this.getRowClass = (row) => {
            return {
                'newRequest': row.status == "0",
                'broadcastRequest': row.status == "1",
                'progressRequest': row.status == "2",
                'completeRequest': row.status == "3",
                'rejecteRequest': row.status == "4",
            };
        };
        this.PermissionData = [];
        this.searchNameEmail = '';
        this.distance = '';
        this.rate = '';
        this.rating = '';
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        this.interpreterAllRequest('1');
        this.GetAllPagesPermission();
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200))
            .subscribe(value => {
            this.filerData(value);
        });
    }
    /*========== Filter Start Here========*/
    filerData(val) {
        if (val) {
            val = val.toLowerCase();
        }
        else {
            console.log("xxxxxxx", this.filteredUser);
            return this.filteredUser = [...this.userData];
        }
        const columns = Object.keys(this.userData[0]);
        if (!columns.length) {
            return;
        }
        const rows = this.userData.filter(function (d) {
            for (let i = 0; i <= columns.length; i++) {
                const column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredUser = rows;
    }
    /*========== Filter End Here========*/
    /*========== All Request List Start Here========*/
    interpreterAllRequest(e) {
        // this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        this.endDate = this.range.value.end_date;
        this.status = this.request_status.value;
        this.searchStatus = this.status;
        // console.log("statusssss",this.searchStatus );
        this.email_formdata = this.search_email.value;
        this.searchEmail = this.email_formdata;
        //  alert(this.status);
        this.service.interpreterAllRequestList(this.searchStatus == 'select' ? '' : this.searchStatus, this.searchEmail, this.startDate, this.endDate)
            .subscribe(res => {
            console.log("============interpreterAllRequestList", res);
            if (res['status'] == '1') {
                console.log("api response", res);
                this.list_Obj = res['data'];
                this.userData = [...res['data']];
                this.filteredUser = this.list_Obj;
            }
            else {
                this.list_Obj = [];
                this.userData = [];
                this.filteredUser = [];
            }
        });
    }
    /*========== All Request List End Here========*/
    /*========== Detail Start Here========*/
    viewDetail(request_id) {
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(res => {
            if (res['status'] == 1) {
                this.view_obj = res['data'][0];
                console.log("api data", this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                this.router.navigate(['/request-scheduler/details', request_id]);
            }
            else {
                this.resp_msg = res;
                this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
            }
        });
    }
    GetAllPagesPermission() {
        this.service.get('getClientRoleMenusForPages/' + JSON.parse(localStorage.getItem('roleId'))).subscribe(res => {
            this.PermissionData = res['data'];
            console.log('PermissionData', this.PermissionData);
            // for (var i = 0; i < this.PermissionData.length; ++i) {
            //                    var aa= document.getElementsByClassName('ClientViewId');
            //    if(this.PermissionData[i].module_id == 7){
            //        if(this.PermissionData[i].add_permission == 'true'){
            //          document.getElementById('ClientAddId').classList.remove('displayNone')
            //        }else{
            //          document.getElementById('ClientAddId').classList.add('displayNone')
            //       }
            //        if(this.PermissionData[i].view_permission == 'true'){
            //          for (var nk = 0; nk < aa.length; ++nk) {
            //          document.getElementsByClassName('ClientViewId')[nk].classList.remove('displayNone')
            //          }
            //        }else{
            //          for (var nk = 0; nk < aa.length; ++nk) {
            //          document.getElementsByClassName('ClientViewId')[nk].classList.add('displayNone')
            //          }
            //       }
            //    }else{
            //                 document.getElementById('ClientAddId').classList.add('displayNone')
            //         for (var nk = 0; nk < aa.length; ++nk) {
            //          document.getElementsByClassName('ClientViewId')[nk].classList.add('displayNone')
            //          }
            //    }
            //  } 
        });
    }
    /*========== Detail End Here========*/
    newRequest() {
        this.router.navigate(['/request-scheduler/all-request-schedular']);
    }
    //assign
    assignMyNearbyInterpreter(service_id, info) {
        // localStorage.setItem('assignData', JSON.stringify(info));
        // localStorage.setItem('serviceId', JSON.stringify(service_id));
        this.service.myNearbyInterpreter(service_id, info.language, this.searchNameEmail, this.distance, this.rate, this.rating).subscribe(res => {
            this.interpreter_obj = res['data'];
            console.log("interpreter_obj", this.interpreter_obj);
            // localStorage.setItem('viewDatainMap', JSON.stringify(this.view_interpreter));
            this.router.navigate(['/request-scheduler/interpreter-view', service_id]);
        });
    }
}
AllRequestListSchedularComponent.ɵfac = function AllRequestListSchedularComponent_Factory(t) { return new (t || AllRequestListSchedularComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AllRequestListSchedularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllRequestListSchedularComponent, selectors: [["app-all-request-list-schedular"]], decls: 41, vars: 7, consts: [[1, ""], [1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["id", "search", "placeholder", "Email", "type", "text", 1, "form-control", "form-control-rounded", 3, "formControl", "keyup"], [1, "col-md-2"], [1, "form-control", "form-control-rounded", 3, "formControl", "change"], ["disabled", "", "value", "select"], ["value", "0", 1, "black-text", "bg-warning"], ["value", "1", 1, "bg-black", "text-white"], ["value", "2", 1, "bg-primary", "text-white"], ["value", "3", 1, "bg-success", "black-text"], [1, "col-md-4", "dummy_text"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start_date", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end_date", "placeholder", "End date", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["id", "ClientAddId", 1, "col-md-2"], [1, "btn", "btn-primary", "float-right", 3, "click"], [1, "col-md-12", "requesttable"], [1, "card", "o-hidden"], ["style", "height: 500px; box-shadow: none", "class", "material fullscreen", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "rowClass", 4, "ngIf"], ["class", "col-md-12 text-center findnew", 4, "ngIf"], [1, "material", "fullscreen", 2, "height", "500px", "box-shadow", "none", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "rowClass"], ["name", "IR", "prop", "ir"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Client Name", "prop", "client_name"], ["name", "LOB", "prop", "lob_name"], ["name", "Assignment Type", "prop", "assignment_type", 3, "minWidth"], ["name", "Language", "prop", "lang_name"], [3, "width", "sortable", 4, "ngIf"], [3, "width", "sortable"], ["title", "Requested date"], [3, "title"], [4, "ngIf"], [1, "ClientViewId", "btn", "btn-outline-secondary", "mr-1", 3, "click"], ["class", "btn btn-outline-secondary ml-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-secondary", "ml-2", 3, "click"], [1, "col-md-12", "text-center", "findnew"], ["src", "../assets/images/nosearch.png"]], template: function AllRequestListSchedularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AllRequestListSchedularComponent_Template_input_keyup_12_listener($event) { return ctx.interpreterAllRequest($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestListSchedularComponent_Template_select_change_15_listener($event) { return ctx.interpreterAllRequest($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Broadcasting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-date-range-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function AllRequestListSchedularComponent_Template_input_dateChange_29_listener($event) { return ctx.interpreterAllRequest($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function AllRequestListSchedularComponent_Template_input_dateChange_30_listener($event) { return ctx.interpreterAllRequest($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-date-range-picker", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRequestListSchedularComponent_Template_button_click_35_listener() { return ctx.newRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AllRequestListSchedularComponent_ngx_datatable_39_Template, 23, 11, "ngx-datatable", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AllRequestListSchedularComponent_div_40_Template, 6, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.request_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredUser == null ? null : ctx.filteredUser.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list_Obj == null ? null : ctx.list_Obj.length) <= 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTableColumnCellDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".assign-color[_ngcontent-%COMP%] {\n  color: #00FFFF;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0px 8px !important;\n  border-radius: 15px !important;\n  outline: initial !important;\n  background: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #47404f;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  background: #fff;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 3px 0;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none !important;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-date-range-input {\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n  bottom: 7px;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::-moz-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::placeholder {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvYWxsLXJlcXVlc3QtbGlzdC1zY2hlZHVsYXIvYWxsLXJlcXVlc3QtbGlzdC1zY2hlZHVsYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0FBQ2pCOztBQUVBO0VBQ0ksMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2xCOztBQUVHO0VBQ0EsZ0JBQWdCO0FBQ25COztBQUNHO0VBQ0MsY0FBYztBQUVsQjs7QUFBRztFQUNDLHdCQUF3QjtBQUc1Qjs7QUFERztFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBSWY7O0FBREc7RUFDQSxjQUFjO0FBSWpCOztBQUxHO0VBQ0EsY0FBYztBQUlqQjs7QUFMRztFQUNBLGNBQWM7QUFJakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXF1ZXN0LXNjaGVkdWxlci9hbGwtcmVxdWVzdC1saXN0LXNjaGVkdWxhci9hbGwtcmVxdWVzdC1saXN0LXNjaGVkdWxhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc3NpZ24tY29sb3J7XG4gICAgY29sb3I6IzAwRkZGRjtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tIHNlYXJjaCBjYWxlbmRhciBTdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4uZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgcGFkZGluZzogMHB4IDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGNvbG9yOiAjNDc0MDRmO1xuICAgXG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcbiAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDNweCAwO1xuICAgfVxuICAgLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cbiAgIC5kdW1teV90ZXh0IDo6bmctZGVlcCAgLm1hdC1kYXRlLXJhbmdlLWlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogN3B4O1xuICAgfVxuICAgXG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlcntcbiAgIGNvbG9yOiAjOWI5YjliO1xuICAgfVxuXG4gXG5cbiAgIC8vIC0tLS0tLS0tLS0tLS0tIHNlYXJjaCBjYWxlbmRhciBFbmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0vLyJdfQ== */", ".displayNone[_ngcontent-%COMP%] {\n        display: none !important;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllRequestListSchedularComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-request-list-schedular',
                templateUrl: './all-request-list-schedular.component.html',
                styleUrls: ['./all-request-list-schedular.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "YiLU":
/*!****************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/complete-request/complete-request.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CompleteRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteRequestComponent", function() { return CompleteRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");


















function CompleteRequestComponent_ngx_datatable_23_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " IR ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r22 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.ir, " ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Client Name ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r24 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r24.client_name, " ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " LOB ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r26 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r26.lob_name, " ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Assignment Type ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r28 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r28.assignment_type, " ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Language ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r30 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.lang_name, " ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Interpreter ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r32 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r32.interpreter_name, " ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Requested date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", row_r34.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, row_r34.created_at, "MM/dd/yyyy"));
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Status ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Completed Request ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Action ");
} }
function CompleteRequestComponent_ngx_datatable_23_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteRequestComponent_ngx_datatable_23_ng_template_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const row_r38 = ctx.row; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.viewDetail(row_r38.ris_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompleteRequestComponent_ngx_datatable_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleteRequestComponent_ngx_datatable_23_ng_template_2_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompleteRequestComponent_ngx_datatable_23_ng_template_3_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompleteRequestComponent_ngx_datatable_23_ng_template_5_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompleteRequestComponent_ngx_datatable_23_ng_template_6_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompleteRequestComponent_ngx_datatable_23_ng_template_8_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompleteRequestComponent_ngx_datatable_23_ng_template_9_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompleteRequestComponent_ngx_datatable_23_ng_template_11_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompleteRequestComponent_ngx_datatable_23_ng_template_12_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompleteRequestComponent_ngx_datatable_23_ng_template_14_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CompleteRequestComponent_ngx_datatable_23_ng_template_15_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompleteRequestComponent_ngx_datatable_23_ng_template_17_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CompleteRequestComponent_ngx_datatable_23_ng_template_18_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CompleteRequestComponent_ngx_datatable_23_ng_template_20_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CompleteRequestComponent_ngx_datatable_23_ng_template_21_Template, 3, 5, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngx-datatable-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CompleteRequestComponent_ngx_datatable_23_ng_template_23_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CompleteRequestComponent_ngx_datatable_23_ng_template_24_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngx-datatable-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CompleteRequestComponent_ngx_datatable_23_ng_template_26_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CompleteRequestComponent_ngx_datatable_23_ng_template_27_Template, 2, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("rowClass", ctx_r1.getRowClass)("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("rows", ctx_r1.filteredUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function CompleteRequestComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We couldn't find what you're looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CompleteRequestComponent {
    constructor(productService, modalService, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        // searchControl: FormControl = new FormControl();
        //search calendar
        this.search_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.getRowClass = (row) => {
            return {
                'completeRequest': row.status == "3",
            };
        };
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        // this.interpreterRequestData('1');
        this.getCompleteReq('1');
        // this.searchControl.valueChanges
        // .pipe(debounceTime(200))
        // .subscribe(value => {
        //   this.filerData(value);
        // });
    }
    // filerData(val) {
    //   if (val) {
    //     val = val.toLowerCase();
    //   } else {
    //     console.log("xxxxxxx",this.filteredUser);
    //     return this.filteredUser = [... this.userData];
    //   }
    //   const columns = Object.keys( this.userData[0]);
    //   if (!columns.length) {
    //     return;
    //   }
    //   const rows =  this.userData.filter(function(d) {
    //     for (let i = 0; i <= columns.length; i++) {
    //       const column = columns[i];
    //       // console.log(d[column]);
    //       if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
    //         return true;
    //       }
    //     }
    //   });
    //   this.filteredUser = rows;
    // }
    //   interpreterRequestData(e){
    //     this.allData = this.search_name.value;
    //     this.startDate = this.range.value.start_date;
    //     this.endDate = this.range.value.end_date;
    //     this.service.interpreterRequestList(this.roleId,this.userId,3,this.allData,
    //     this.startDate,this.endDate)
    //     .subscribe(res => {
    //       if(res['status']=='1'){
    //         console.log("api response",res);
    //         this.list_Obj = res['data'];
    //         this.userData = [...res['data']];
    //         // console.log("listttttttt", this.list_Obj);
    //         this.filteredUser = this.list_Obj;
    //       }
    //     });
    // }
    getCompleteReq(e) {
        this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        this.endDate = this.range.value.end_date;
        this.service.post("getCompleteReq", { role_id: this.roleId, user_id: this.userId, status: '4', search_info: this.allData, start_date: this.startDate, end_date: this.endDate })
            .subscribe(res => {
            if (res['status'] == '1') {
                console.log("api response=========================", res);
                this.list_Obj = res['data'];
                this.userData = [...res['data']];
                // console.log("listttttttt", this.list_Obj);
                this.filteredUser = this.list_Obj;
            }
        });
    }
    viewDetail(request_id) {
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(res => {
            if (res['status'] == 1) {
                this.view_obj = res['data'][0];
                console.log("api response", this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                this.router.navigate(['/request-scheduler/details', request_id]);
                // this.router.navigate(['/user-request/request-view',request_id])
            }
            else {
                this.resp_msg = res;
                this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
            }
        });
    }
}
CompleteRequestComponent.ɵfac = function CompleteRequestComponent_Factory(t) { return new (t || CompleteRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CompleteRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteRequestComponent, selectors: [["app-complete-request"]], decls: 25, vars: 6, consts: [[1, ""], [1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["id", "search", "placeholder", "Search", "type", "text", 1, "form-control", "form-control-rounded", 3, "formControl", "keyup"], [1, "col-md-4", "dummy_text"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start_date", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end_date", "placeholder", "End date", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-12"], [1, "card", "o-hidden", "requesttable", "greentablenew", "greentable"], ["style", "height: 500px; box-shadow: none", "class", "material fullscreen ", 3, "columnMode", "rowClass", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", 4, "ngIf"], ["class", "col-md-12 text-center findnew", 4, "ngIf"], [1, "material", "fullscreen", 2, "height", "500px", "box-shadow", "none", 3, "columnMode", "rowClass", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows"], ["name", "IR", "prop", "ir"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Client Name", "prop", "client_name"], ["name", "LOB", "prop", "lob_name"], ["name", "Assignment Type", "prop", "assignment_type"], ["name", "Interpreter", "prop", "requester_name"], [3, "width", "sortable"], ["title", "Requested date"], [3, "title"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "col-md-12", "text-center", "findnew"], ["src", "../assets/images/nosearch.png"]], template: function CompleteRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CompleteRequestComponent_Template_input_keyup_12_listener($event) { return ctx.getCompleteReq($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CompleteRequestComponent_Template_input_dateChange_16_listener($event) { return ctx.getCompleteReq($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CompleteRequestComponent_Template_input_dateChange_17_listener($event) { return ctx.getCompleteReq($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CompleteRequestComponent_ngx_datatable_23_Template, 28, 11, "ngx-datatable", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CompleteRequestComponent_div_24_Template, 7, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredUser == null ? null : ctx.filteredUser.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list_Obj == null ? null : ctx.list_Obj.length) <= 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnCellDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0px 8px !important;\n  border-radius: 15px !important;\n  outline: initial !important;\n  background: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #47404f;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  background: #fff;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 3px 0;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none !important;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-date-range-input {\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n  bottom: 7px;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::-moz-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::placeholder {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvY29tcGxldGUtcmVxdWVzdC9jb21wbGV0ZS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0FBQWxCOztBQUdHO0VBQ0EsZ0JBQWdCO0FBQW5COztBQUVHO0VBQ0MsY0FBYztBQUNsQjs7QUFDRztFQUNDLHdCQUF3QjtBQUU1Qjs7QUFBRztFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBR2Y7O0FBQUc7RUFDQSxjQUFjO0FBR2pCOztBQUpHO0VBQ0EsY0FBYztBQUdqQjs7QUFKRztFQUNBLGNBQWM7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXF1ZXN0LXNjaGVkdWxlci9jb21wbGV0ZS1yZXF1ZXN0L2NvbXBsZXRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLSBzZWFyY2ggY2FsZW5kYXIgU3RhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIHBhZGRpbmc6IDBweCA4cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBjb2xvcjogIzQ3NDA0ZjtcbiAgIFxuICAgfVxuICAgLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgfVxuICAgLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAzcHggMDtcbiAgIH1cbiAgIC5kdW1teV90ZXh0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDdweDtcbiAgIH1cbiAgIFxuICAgLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XG4gICBjb2xvcjogIzliOWI5YjtcbiAgIH1cbiAgIC8vIC0tLS0tLS0tLS0tLS0tIHNlYXJjaCBjYWxlbmRhciBFbmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0vLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleteRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-complete-request',
                templateUrl: './complete-request.component.html',
                styleUrls: ['./complete-request.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Z0oT":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/all-request-schedular/all-request-schedular.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AllRequestSchedularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRequestSchedularComponent", function() { return AllRequestSchedularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/validations.service */ "i8sq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ "hqYv");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-base */ "4SUy");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "10VE");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-mask */ "bOtU");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';




























const _c0 = ["search"];
function AllRequestSchedularComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IR is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.newRequestForm.controls["ir"].errors.required);
} }
function AllRequestSchedularComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 73);
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r33.fullName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AllRequestSchedularComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 73);
} if (rf & 2) {
    const notFound_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AllRequestSchedularComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Client Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r5.newRequestForm.controls["client_name"].errors.required);
} }
function AllRequestSchedularComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Requested By is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r6.newRequestForm.controls["requested_by"].errors.required);
} }
function AllRequestSchedularComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Request Date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r8.newRequestForm.controls["request_date"].errors.required);
} }
function AllRequestSchedularComponent_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lob_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lob_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lob_r35 == null ? null : lob_r35.name, " ");
} }
function AllRequestSchedularComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOB is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r10.newRequestForm.controls["lob"].errors.required);
} }
function AllRequestSchedularComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestSchedularComponent_div_67_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assign_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", assign_r38.assignment_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", assign_r38 == null ? null : assign_r38.assignment_name, " ");
} }
function AllRequestSchedularComponent_div_67_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assignment Type is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r37.newRequestForm.controls["assignment_type"].errors.required);
} }
function AllRequestSchedularComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assignment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_div_67_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onChangeAssign($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Assignment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllRequestSchedularComponent_div_67_option_7_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllRequestSchedularComponent_div_67_div_8_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.assignment_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.newRequestForm.controls["assignment_type"].errors && (!ctx_r12.newRequestForm.controls["assignment_type"].pristine || ctx_r12.submitted || ctx_r12.newRequestForm.controls["assignment_type"].touched));
} }
function AllRequestSchedularComponent_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plat_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", plat_r41.platform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", plat_r41 == null ? null : plat_r41.platform, " ");
} }
function AllRequestSchedularComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Platform is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r14.newRequestForm.controls["platform"].errors.required);
} }
function AllRequestSchedularComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Simultaneous Interpreting is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r15.newRequestForm.controls["receivers_required"].errors.required);
} }
function AllRequestSchedularComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How many recievers?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestSchedularComponent_option_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r42 == null ? null : lang_r42.name, " ");
} }
function AllRequestSchedularComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Language is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r18.newRequestForm.controls["language"].errors.required);
} }
function AllRequestSchedularComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assignment Date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r20.newRequestForm.controls["assignment_date"].errors.required);
} }
function AllRequestSchedularComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "From Time is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r21.newRequestForm.controls["from_time"].errors.required);
} }
function AllRequestSchedularComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To Time is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r22.newRequestForm.controls["to_time"].errors.required);
} }
function AllRequestSchedularComponent_div_137_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isd_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", isd_r45.phonecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", isd_r45 == null ? null : isd_r45.name, " (+", isd_r45 == null ? null : isd_r45.phonecode, ") ");
} }
function AllRequestSchedularComponent_div_137_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r44.newRequestForm.controls["vci_opi_phone_code"].errors.required);
} }
function AllRequestSchedularComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllRequestSchedularComponent_div_137_option_8_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllRequestSchedularComponent_div_137_div_9_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.country_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.newRequestForm.controls["vci_opi_phone_code"].errors && (!ctx_r24.newRequestForm.controls["vci_opi_phone_code"].pristine || ctx_r24.submittedEdu || ctx_r24.newRequestForm.controls["vci_opi_phone_code"].touched));
} }
function AllRequestSchedularComponent_div_138_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cell Phone is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r46.newRequestForm.controls["vci_opi_cell_phone"].errors.required);
} }
function AllRequestSchedularComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cell Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllRequestSchedularComponent_div_138_div_4_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.newRequestForm.controls["vci_opi_cell_phone"].errors && (!ctx_r25.newRequestForm.controls["vci_opi_cell_phone"].pristine || ctx_r25.submittedEdu || ctx_r25.newRequestForm.controls["vci_opi_cell_phone"].touched));
} }
function AllRequestSchedularComponent_div_139_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Line is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r47.newRequestForm.controls["line"].errors.required);
} }
function AllRequestSchedularComponent_div_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllRequestSchedularComponent_div_139_div_5_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.newRequestForm.controls["line"].errors && (!ctx_r26.newRequestForm.controls["line"].pristine || ctx_r26.submittedEdu || ctx_r26.newRequestForm.controls["line"].touched));
} }
function AllRequestSchedularComponent_div_140_div_17_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Every is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r57.newRequestForm.controls["every"].errors.required);
} }
function AllRequestSchedularComponent_div_140_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Every");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Week(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllRequestSchedularComponent_div_140_div_17_div_7_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.newRequestForm.controls["every"].errors && (!ctx_r48.newRequestForm.controls["every"].pristine || ctx_r48.submitted || ctx_r48.newRequestForm.controls["every"].touched));
} }
function AllRequestSchedularComponent_div_140_div_18_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_div_140_div_18_div_5_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const i_r60 = ctx.index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r61.changeCheckbox(i_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "result", result_r59.day_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "result", result_r59.day_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r59.day, " ");
} }
function AllRequestSchedularComponent_div_140_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllRequestSchedularComponent_div_140_div_18_div_5_Template, 4, 3, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r49.days_Obj);
} }
function AllRequestSchedularComponent_div_140_div_19_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_div_140_div_19_div_5_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const i_r65 = ctx.index; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r66.changeCheckbox(i_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "result", result_r64.day_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "result", result_r64.day_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r64.day, " ");
} }
function AllRequestSchedularComponent_div_140_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllRequestSchedularComponent_div_140_div_19_div_5_Template, 4, 3, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r50.days_Obj);
} }
function AllRequestSchedularComponent_div_140_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start Date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r52.newRequestForm.controls["event_start_date"].errors.required);
} }
function AllRequestSchedularComponent_div_140_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r54.newRequestForm.controls["event_end_date"].errors.required);
} }
function AllRequestSchedularComponent_div_140_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start Time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r55.newRequestForm.controls["event_start_time"].errors.required);
} }
function AllRequestSchedularComponent_div_140_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r56.newRequestForm.controls["event_end_time"].errors.required);
} }
function AllRequestSchedularComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Repeats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_div_140_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.newRepeat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Daily");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllRequestSchedularComponent_div_140_div_17_Template, 8, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllRequestSchedularComponent_div_140_div_18_Template, 6, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllRequestSchedularComponent_div_140_div_19_Template, 6, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRequestSchedularComponent_div_140_Template_input_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return _r51.open(); })("click", function AllRequestSchedularComponent_div_140_Template_input_click_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.startWithAssignment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-datepicker", null, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AllRequestSchedularComponent_div_140_div_29_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRequestSchedularComponent_div_140_Template_input_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return _r53.open(); })("change", function AllRequestSchedularComponent_div_140_Template_input_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.start_end_date($event); })("click", function AllRequestSchedularComponent_div_140_Template_input_click_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.endWithAssignment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-datepicker-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker", null, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AllRequestSchedularComponent_div_140_div_38_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ejs-timepicker", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AllRequestSchedularComponent_div_140_div_44_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "ejs-timepicker", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AllRequestSchedularComponent_div_140_div_49_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.every_show_hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.days2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r27.minDate)("matDatepicker", _r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.newRequestForm.controls["event_start_date"].errors && (!ctx_r27.newRequestForm.controls["event_start_date"].pristine || ctx_r27.submitted || ctx_r27.newRequestForm.controls["event_start_date"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r27.minDate)("matDatepicker", _r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.newRequestForm.controls["event_end_date"].errors && (!ctx_r27.newRequestForm.controls["event_end_date"].pristine || ctx_r27.submitted || ctx_r27.newRequestForm.controls["event_end_date"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx_r27.interval);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.newRequestForm.controls["event_start_time"].errors && (!ctx_r27.newRequestForm.controls["event_start_time"].pristine || ctx_r27.submitted || ctx_r27.newRequestForm.controls["event_start_time"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx_r27.interval)("min", ctx_r27.newRequestForm.value.event_start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.newRequestForm.controls["event_end_time"].errors && (!ctx_r27.newRequestForm.controls["event_end_time"].pristine || ctx_r27.submitted || ctx_r27.newRequestForm.controls["event_end_time"].touched));
} }
function AllRequestSchedularComponent_div_141_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contact Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r75.educationRequestForm.controls["name_of_contact_person"].errors.required);
} }
function AllRequestSchedularComponent_div_141_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isd_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", isd_r84.phonecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", isd_r84 == null ? null : isd_r84.name, " (+", isd_r84 == null ? null : isd_r84.phonecode, ") ");
} }
function AllRequestSchedularComponent_div_141_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r77.educationRequestForm.controls["phone_code"].errors.required);
} }
function AllRequestSchedularComponent_div_141_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cell Phone is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r78.educationRequestForm.controls["cell_phone"].errors.required);
} }
function AllRequestSchedularComponent_div_141_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r79.educationRequestForm.controls["email"].errors.required);
} }
function AllRequestSchedularComponent_div_141_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " School/Building Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r80.educationRequestForm.controls["building_name"].errors.required);
} }
function AllRequestSchedularComponent_div_141_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Building Address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r81.educationRequestForm.controls["building_address"].errors.required);
} }
function AllRequestSchedularComponent_div_141_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Room is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r82.educationRequestForm.controls["room"].errors.required);
} }
function AllRequestSchedularComponent_div_141_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IR General Notes is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r83.educationRequestForm.controls["notes"].errors.required);
} }
function AllRequestSchedularComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllRequestSchedularComponent_div_141_div_7_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllRequestSchedularComponent_div_141_option_18_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllRequestSchedularComponent_div_141_div_19_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cell Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllRequestSchedularComponent_div_141_div_24_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AllRequestSchedularComponent_div_141_div_29_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "School/Building Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AllRequestSchedularComponent_div_141_div_35_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "School/Building Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AllRequestSchedularComponent_div_141_div_40_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Suite/Room/Room #");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AllRequestSchedularComponent_div_141_div_45_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IR General Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AllRequestSchedularComponent_div_141_div_51_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r28.educationRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["name_of_contact_person"].errors && (!ctx_r28.educationRequestForm.controls["name_of_contact_person"].pristine || ctx_r28.submittedEdu || ctx_r28.educationRequestForm.controls["name_of_contact_person"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.country_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["phone_code"].errors && (!ctx_r28.educationRequestForm.controls["phone_code"].pristine || ctx_r28.submittedEdu || ctx_r28.educationRequestForm.controls["phone_code"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["cell_phone"].errors && (!ctx_r28.educationRequestForm.controls["cell_phone"].pristine || ctx_r28.submittedEdu || ctx_r28.educationRequestForm.controls["cell_phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["email"].errors && (!ctx_r28.educationRequestForm.controls["email"].pristine || ctx_r28.submitted || ctx_r28.educationRequestForm.controls["email"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["building_name"].errors && (!ctx_r28.educationRequestForm.controls["building_name"].pristine || ctx_r28.submittedEdu || ctx_r28.educationRequestForm.controls["building_name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["building_address"].errors && (!ctx_r28.educationRequestForm.controls["building_address"].pristine || ctx_r28.submittedEdu || ctx_r28.educationRequestForm.controls["building_address"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["room"].errors && (!ctx_r28.educationRequestForm.controls["room"].pristine || ctx_r28.submittedEdu || ctx_r28.educationRequestForm.controls["room"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.educationRequestForm.controls["notes"].errors && (!ctx_r28.educationRequestForm.controls["notes"].pristine || ctx_r28.submittedEdu || ctx_r28.educationRequestForm.controls["notes"].touched));
} }
function AllRequestSchedularComponent_div_142_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Practice Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r85.medicalRequestForm.controls["practice_name"].errors.required);
} }
function AllRequestSchedularComponent_div_142_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Provider Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r86.medicalRequestForm.controls["provider_name"].errors.required);
} }
function AllRequestSchedularComponent_div_142_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isd_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", isd_r92.phonecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", isd_r92 == null ? null : isd_r92.name, " (+", isd_r92 == null ? null : isd_r92.phonecode, ") ");
} }
function AllRequestSchedularComponent_div_142_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r88.medicalRequestForm.controls["phone_code"].errors.required);
} }
function AllRequestSchedularComponent_div_142_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cell Phone is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r89.medicalRequestForm.controls["cell_phone"].errors.required);
} }
function AllRequestSchedularComponent_div_142_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Room is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r90.medicalRequestForm.controls["room"].errors.required);
} }
function AllRequestSchedularComponent_div_142_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IR General Notes is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r91.medicalRequestForm.controls["notes"].errors.required);
} }
function AllRequestSchedularComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Practice Name (Clinic, Hospital, ect)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllRequestSchedularComponent_div_142_div_7_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Provider Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllRequestSchedularComponent_div_142_div_12_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AllRequestSchedularComponent_div_142_option_23_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllRequestSchedularComponent_div_142_div_24_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cell Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AllRequestSchedularComponent_div_142_div_29_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AllRequestSchedularComponent_div_142_div_35_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "IR General Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AllRequestSchedularComponent_div_142_div_41_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r29.medicalRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.medicalRequestForm.controls["practice_name"].errors && (!ctx_r29.medicalRequestForm.controls["practice_name"].pristine || ctx_r29.submittedMed || ctx_r29.medicalRequestForm.controls["practice_name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.medicalRequestForm.controls["provider_name"].errors && (!ctx_r29.medicalRequestForm.controls["provider_name"].pristine || ctx_r29.submittedMed || ctx_r29.medicalRequestForm.controls["provider_name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.country_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.medicalRequestForm.controls["phone_code"].errors && (!ctx_r29.medicalRequestForm.controls["phone_code"].pristine || ctx_r29.submittedMed || ctx_r29.medicalRequestForm.controls["phone_code"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.medicalRequestForm.controls["cell_phone"].errors && (!ctx_r29.medicalRequestForm.controls["cell_phone"].pristine || ctx_r29.submittedMed || ctx_r29.medicalRequestForm.controls["cell_phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.medicalRequestForm.controls["room"].errors && (!ctx_r29.medicalRequestForm.controls["room"].pristine || ctx_r29.submittedMed || ctx_r29.medicalRequestForm.controls["room"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.medicalRequestForm.controls["notes"].errors && (!ctx_r29.medicalRequestForm.controls["notes"].pristine || ctx_r29.submittedMed || ctx_r29.medicalRequestForm.controls["notes"].touched));
} }
function AllRequestSchedularComponent_div_143_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contact Name at Assignment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r93.communityRequestForm.controls["caseworker_firstname"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Case Worker Last Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r94.communityRequestForm.controls["caseworker_lastname"].errors.required);
} }
function AllRequestSchedularComponent_div_143_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isd_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", isd_r112.phonecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", isd_r112 == null ? null : isd_r112.name, " (+", isd_r112 == null ? null : isd_r112.phonecode, ") ");
} }
function AllRequestSchedularComponent_div_143_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r96.communityRequestForm.controls["phone_code"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cell Phone is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r97.communityRequestForm.controls["cell_phone"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contact Name of Person at Assignment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r98.communityRequestForm.controls["name_of_contact_person"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Position is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r99.communityRequestForm.controls["position"].errors.required);
} }
function AllRequestSchedularComponent_div_143_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isd_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", isd_r113.phonecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", isd_r113 == null ? null : isd_r113.name, " (+", isd_r113 == null ? null : isd_r113.phonecode, ") ");
} }
function AllRequestSchedularComponent_div_143_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r101.communityRequestForm.controls["contact_person_phone_code"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cell Phone is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r102.communityRequestForm.controls["contact_person_cellphone"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Case Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r103.communityRequestForm.controls["case_name"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Client First Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r104.communityRequestForm.controls["client_firstname"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Client Last Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r105.communityRequestForm.controls["client_lastname"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trails/Case Number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r106.communityRequestForm.controls["trails"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home Visit is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r107.communityRequestForm.controls["home_visit"].errors.required);
} }
function AllRequestSchedularComponent_div_143_div_97_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 148, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function AllRequestSchedularComponent_div_143_div_97_Template_input_keydown_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestSchedularComponent_div_143_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Apt #");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestSchedularComponent_div_143_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Practice Name (Clinic, Hospital,ect)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Provider Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 151, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function AllRequestSchedularComponent_div_143_div_99_Template_input_keydown_enter_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Suite/Room/Room #");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllRequestSchedularComponent_div_143_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IR General Notes is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r111.communityRequestForm.controls["notes"].errors.required);
} }
function AllRequestSchedularComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Case Worker First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllRequestSchedularComponent_div_143_div_7_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Case Worker Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllRequestSchedularComponent_div_143_div_12_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AllRequestSchedularComponent_div_143_option_23_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllRequestSchedularComponent_div_143_div_24_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cell Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AllRequestSchedularComponent_div_143_div_29_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact Name of Person at Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AllRequestSchedularComponent_div_143_div_35_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Position 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Position 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AllRequestSchedularComponent_div_143_div_46_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AllRequestSchedularComponent_div_143_option_57_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AllRequestSchedularComponent_div_143_div_58_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cell Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AllRequestSchedularComponent_div_143_div_63_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Case Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AllRequestSchedularComponent_div_143_div_69_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Client First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AllRequestSchedularComponent_div_143_div_74_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Client Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, AllRequestSchedularComponent_div_143_div_79_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Trails/Case Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AllRequestSchedularComponent_div_143_div_84_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Home Visit?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_div_143_Template_input_change_91_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.homevisit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_div_143_Template_input_change_94_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.homevisit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AllRequestSchedularComponent_div_143_div_96_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AllRequestSchedularComponent_div_143_div_97_Template, 5, 0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AllRequestSchedularComponent_div_143_div_98_Template, 4, 0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, AllRequestSchedularComponent_div_143_div_99_Template, 18, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "IR General Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "textarea", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, AllRequestSchedularComponent_div_143_div_105_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r30.communityRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["caseworker_firstname"].errors && (!ctx_r30.communityRequestForm.controls["caseworker_firstname"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["caseworker_firstname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["caseworker_lastname"].errors && (!ctx_r30.communityRequestForm.controls["caseworker_lastname"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["caseworker_lastname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.country_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["phone_code"].errors && (!ctx_r30.communityRequestForm.controls["phone_code"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["phone_code"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["cell_phone"].errors && (!ctx_r30.communityRequestForm.controls["cell_phone"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["cell_phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["name_of_contact_person"].errors && (!ctx_r30.communityRequestForm.controls["name_of_contact_person"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["name_of_contact_person"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["position"].errors && (!ctx_r30.communityRequestForm.controls["position"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["position"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.country_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["contact_person_phone_code"].errors && (!ctx_r30.communityRequestForm.controls["contact_person_phone_code"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["contact_person_phone_code"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["contact_person_cellphone"].errors && (!ctx_r30.communityRequestForm.controls["contact_person_cellphone"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["contact_person_cellphone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["case_name"].errors && (!ctx_r30.communityRequestForm.controls["case_name"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["case_name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["client_firstname"].errors && (!ctx_r30.communityRequestForm.controls["client_firstname"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["client_firstname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["client_lastname"].errors && (!ctx_r30.communityRequestForm.controls["client_lastname"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["client_lastname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["trails"].errors && (!ctx_r30.communityRequestForm.controls["trails"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["trails"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["home_visit"].errors && (!ctx_r30.communityRequestForm.controls["home_visit"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["home_visit"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.value.home_visit == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.value.home_visit == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.value.home_visit == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.communityRequestForm.controls["notes"].errors && (!ctx_r30.communityRequestForm.controls["notes"].pristine || ctx_r30.submittedComm || ctx_r30.communityRequestForm.controls["notes"].touched));
} }
function AllRequestSchedularComponent_div_144_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contact Name at Assignment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r123.legalRequestForm.controls["name_of_contact_person"].errors.required);
} }
function AllRequestSchedularComponent_div_144_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isd_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", isd_r132.phonecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", isd_r132 == null ? null : isd_r132.name, " (+", isd_r132 == null ? null : isd_r132.phonecode, ") ");
} }
function AllRequestSchedularComponent_div_144_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r125.legalRequestForm.controls["phone_code"].errors.required);
} }
function AllRequestSchedularComponent_div_144_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cell Phone Number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r126.legalRequestForm.controls["cell_phone"].errors.required);
} }
function AllRequestSchedularComponent_div_144_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r127.legalRequestForm.controls["email"].errors.required);
} }
function AllRequestSchedularComponent_div_144_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " School/Building Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r128.legalRequestForm.controls["building_name"].errors.required);
} }
function AllRequestSchedularComponent_div_144_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Building Address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r129.legalRequestForm.controls["building_address"].errors.required);
} }
function AllRequestSchedularComponent_div_144_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Room is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r130.legalRequestForm.controls["room"].errors.required);
} }
function AllRequestSchedularComponent_div_144_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IR General Notes is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r131.legalRequestForm.controls["notes"].errors.required);
} }
function AllRequestSchedularComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Name at Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllRequestSchedularComponent_div_144_div_7_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllRequestSchedularComponent_div_144_option_18_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllRequestSchedularComponent_div_144_div_19_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cell Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllRequestSchedularComponent_div_144_div_24_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AllRequestSchedularComponent_div_144_div_29_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Building/Office Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AllRequestSchedularComponent_div_144_div_35_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Building/Office Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AllRequestSchedularComponent_div_144_div_40_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Suite/Room/Room #");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AllRequestSchedularComponent_div_144_div_45_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IR General Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AllRequestSchedularComponent_div_144_div_51_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r31.legalRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["name_of_contact_person"].errors && (!ctx_r31.legalRequestForm.controls["name_of_contact_person"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["name_of_contact_person"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.country_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["phone_code"].errors && (!ctx_r31.legalRequestForm.controls["phone_code"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["phone_code"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["cell_phone"].errors && (!ctx_r31.legalRequestForm.controls["cell_phone"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["cell_phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["email"].errors && (!ctx_r31.legalRequestForm.controls["email"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["email"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["building_name"].errors && (!ctx_r31.legalRequestForm.controls["building_name"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["building_name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["building_address"].errors && (!ctx_r31.legalRequestForm.controls["building_address"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["building_address"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["room"].errors && (!ctx_r31.legalRequestForm.controls["room"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["room"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.legalRequestForm.controls["notes"].errors && (!ctx_r31.legalRequestForm.controls["notes"].pristine || ctx_r31.submittedLeg || ctx_r31.legalRequestForm.controls["notes"].touched));
} }
function AllRequestSchedularComponent_div_145_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contact Name at Assignment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r133.otherRequestForm.controls["name_of_contact_person"].errors.required);
} }
function AllRequestSchedularComponent_div_145_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isd_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", isd_r142.phonecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", isd_r142 == null ? null : isd_r142.name, " (+", isd_r142 == null ? null : isd_r142.phonecode, ") ");
} }
function AllRequestSchedularComponent_div_145_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r135.otherRequestForm.controls["phone_code"].errors.required);
} }
function AllRequestSchedularComponent_div_145_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cell Phone Number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r136.otherRequestForm.controls["cell_phone"].errors.required);
} }
function AllRequestSchedularComponent_div_145_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r137.otherRequestForm.controls["email"].errors.required);
} }
function AllRequestSchedularComponent_div_145_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " School/Building Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r138.otherRequestForm.controls["building_name"].errors.required);
} }
function AllRequestSchedularComponent_div_145_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Building Address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r139.otherRequestForm.controls["building_address"].errors.required);
} }
function AllRequestSchedularComponent_div_145_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Room is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r140.otherRequestForm.controls["room"].errors.required);
} }
function AllRequestSchedularComponent_div_145_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IR General Notes is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r141.otherRequestForm.controls["notes"].errors.required);
} }
function AllRequestSchedularComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Name at Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllRequestSchedularComponent_div_145_div_7_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllRequestSchedularComponent_div_145_option_18_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllRequestSchedularComponent_div_145_div_19_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cell Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllRequestSchedularComponent_div_145_div_24_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AllRequestSchedularComponent_div_145_div_29_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Building/Office Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AllRequestSchedularComponent_div_145_div_35_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Building/Office Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AllRequestSchedularComponent_div_145_div_40_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Suite/Room/Room #");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AllRequestSchedularComponent_div_145_div_45_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IR General Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AllRequestSchedularComponent_div_145_div_51_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r32.otherRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["name_of_contact_person"].errors && (!ctx_r32.otherRequestForm.controls["name_of_contact_person"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["name_of_contact_person"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.country_Obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["phone_code"].errors && (!ctx_r32.otherRequestForm.controls["phone_code"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["phone_code"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["cell_phone"].errors && (!ctx_r32.otherRequestForm.controls["cell_phone"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["cell_phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["email"].errors && (!ctx_r32.otherRequestForm.controls["email"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["email"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["building_name"].errors && (!ctx_r32.otherRequestForm.controls["building_name"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["building_name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["building_address"].errors && (!ctx_r32.otherRequestForm.controls["building_address"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["building_address"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["room"].errors && (!ctx_r32.otherRequestForm.controls["room"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["room"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.otherRequestForm.controls["notes"].errors && (!ctx_r32.otherRequestForm.controls["notes"].pristine || ctx_r32.submittedOther || ctx_r32.otherRequestForm.controls["notes"].touched));
} }
//enable ripple style
Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_8__["enableRipple"])(true);
class AllRequestSchedularComponent {
    // form name end here
    constructor(validation, fb, toastr, router, dl, service, http, ngZone, mapsAPILoader) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.dl = dl;
        this.service = service;
        this.http = http;
        this.ngZone = ngZone;
        this.mapsAPILoader = mapsAPILoader;
        this.clientObj = [];
        this.simultaneous_var = false;
        this.assignment_var = false;
        this.days = false;
        this.start_end = true;
        this.every_show_hide = true;
        this.formatString = 'HH:mm';
        this.interval = 5;
        // maps the local data column to fields property
        this.localFields = { value: 'name' };
        this.data1 = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.vci_opi = false;
        // show hide variable start
        this.showEductionForm = false;
        this.showMedicalForm = false;
        this.showLegalForm = false;
        this.showCommunityForm = false;
        this.showOtherForm = false;
        this.keyword = 'name';
        this.minDate = new Date();
        /*==========  Country Code for Mobile End Here========*/
        /*==========Client name list start Here========*/
        this.countries = [
            {
                id: 1,
                name: 'Albania',
            },
        ];
    }
    ngOnInit() {
        this.CountryList();
        this.createForm1();
        this.createForm2();
        this.createForm3();
        this.createForm4();
        this.createForm5();
        this.createForm6();
        this.allClientList();
        // this.allAssignmentTypeList();
        this.allPlatformList();
        this.allLanguageList();
        this.allDayList();
        this.date_func();
        this.assign_date_func();
        this.getIRList();
        this.getGooleAddress1();
        this.allLobList();
        this.scheduler_id = JSON.parse(localStorage.getItem('userId'));
        this.entry_By_data = JSON.parse(localStorage.getItem('loginData'));
        this.newRequestForm.get('entered_by').patchValue(this.entry_By_data.first_name);
        this.editId = JSON.parse(localStorage.getItem('rowId'));
    }
    /*==========google api load Places Autocomplete function start here========*/
    getGooleAddress1() {
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    this.new_address = place['formatted_address'];
                    console.log("address", this.new_address);
                    this.sec_address = place['formatted_address'];
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // console.log("place-",place[0].formatted_address);
                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    console.log("latitude-", this.latitude);
                    console.log("longitude-", this.longitude);
                    this.zoom = 12;
                });
            });
        });
    }
    /*==========google api load Places Autocomplete function end here========*/
    /*==========Step Form Value Start Here========*/
    createForm1() {
        this.newRequestForm = this.fb.group({
            ir: ['', this.validation.onlyRequired_validator],
            entered_by: ['', this.validation.onlyRequired_validator],
            client_name: ['', this.validation.onlyRequired_validator],
            // requested_by:['', this.validation.onlyRequired_validator],
            request_date: ['', this.validation.onlyRequired_validator],
            platform: ['', this.validation.onlyRequired_validator],
            assignment_type: ['', this.validation.onlyRequired_validator],
            // simultaneous:[''],
            receivers_required: ['', this.validation.onlyRequired_validator],
            language: ['', this.validation.onlyRequired_validator],
            assignment_date: ['', this.validation.onlyRequired_validator],
            from_time: ['', this.validation.onlyRequired_validator],
            to_time: ['', this.validation.onlyRequired_validator],
            recurrent_assignment: [''],
            // name_of_contact_person: ['', this.validation.onlyRequired_validator],
            // cell_phone: ['', this.validation.onlyRequired_validator],
            // building_name: ['', this.validation.onlyRequired_validator],
            // building_address: ['', this.validation.onlyRequired_validator],
            // room: ['', this.validation.onlyRequired_validator],
            // notes: ['', this.validation.onlyRequired_validator],
            // phone_code: ['', this.validation.onlyRequired_validator],
            //  name_of_contact_person: [''],
            // cell_phone: [''],
            // building_name: [''],
            // building_address: [''],
            // room: [''],
            // notes: [''],
            // phone_code: [''],
            // caseworker_name:[''],
            // caseworker_lastname:[''],
            // position:[''],
            // contact_person_cellphone:[''],
            // case_name:[''],
            // client_firstname:[''],
            // client_lastname:[''],
            // trails:[''],
            // home_visit:[''],
            // apt:[''],
            how_many_receivers: [''],
            event_start_time: [''],
            event_end_time: [''],
            event_start_date: [''],
            event_end_date: [''],
            repeats: [''],
            every: [''],
            event_duration: [''],
            event_at: [''],
            scheduler_id: [''],
            requested_by: [''],
            lob: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            address: [''],
            vci_opi_phone_code: [1],
            vci_opi_cell_phone: [''],
            line: [''],
        });
    }
    createForm2() {
        this.educationRequestForm = this.fb.group({
            name_of_contact_person: ['', this.validation.onlyRequired_validator],
            cell_phone: ['', this.validation.onlyRequired_validator],
            building_name: ['', this.validation.onlyRequired_validator],
            building_address: ['', this.validation.onlyRequired_validator],
            room: ['', this.validation.onlyRequired_validator],
            notes: ['', this.validation.onlyRequired_validator],
            phone_code: [1, this.validation.onlyRequired_validator],
            email: ['', this.validation.onlyRequired_validator],
            address: [''],
            latitude: [''],
            longitude: [''],
        });
    }
    createForm3() {
        this.communityRequestForm = this.fb.group({
            caseworker_firstname: ['', this.validation.onlyRequired_validator],
            caseworker_lastname: ['', this.validation.onlyRequired_validator],
            position: ['', this.validation.onlyRequired_validator],
            contact_person_phone_code: [1, this.validation.onlyRequired_validator],
            contact_person_cellphone: [, this.validation.onlyRequired_validator],
            phone_code: [1, this.validation.onlyRequired_validator],
            name_of_contact_person: ['', this.validation.onlyRequired_validator],
            cell_phone: ['', this.validation.onlyRequired_validator],
            case_name: ['', this.validation.onlyRequired_validator],
            client_firstname: ['', this.validation.onlyRequired_validator],
            client_lastname: ['', this.validation.onlyRequired_validator],
            trails: ['', this.validation.onlyRequired_validator],
            home_visit: ['', this.validation.onlyRequired_validator],
            apt: [''],
            address: [''],
            practice_name: [''],
            provider_name: [''],
            provider_address: [''],
            room: [''],
            notes: ['', this.validation.onlyRequired_validator],
            latitude: [''],
            longitude: [''],
            provider_latitude: [''],
            provider_longitude: [''],
        });
    }
    createForm4() {
        this.medicalRequestForm = this.fb.group({
            practice_name: ['', this.validation.onlyRequired_validator],
            provider_name: ['', this.validation.onlyRequired_validator],
            phone_code: [1, this.validation.onlyRequired_validator],
            cell_phone: ['', this.validation.onlyRequired_validator],
            room: ['', this.validation.onlyRequired_validator],
            notes: ['', this.validation.onlyRequired_validator],
            address: [''],
            latitude: [''],
            longitude: [''],
        });
    }
    createForm5() {
        this.legalRequestForm = this.fb.group({
            name_of_contact_person: ['', this.validation.onlyRequired_validator],
            cell_phone: ['', this.validation.onlyRequired_validator],
            building_name: ['', this.validation.onlyRequired_validator],
            building_address: ['', this.validation.onlyRequired_validator],
            room: ['', this.validation.onlyRequired_validator],
            notes: ['', this.validation.onlyRequired_validator],
            phone_code: [1, this.validation.onlyRequired_validator],
            email: ['', this.validation.onlyRequired_validator],
        });
    }
    createForm6() {
        this.otherRequestForm = this.fb.group({
            name_of_contact_person: ['', this.validation.onlyRequired_validator],
            cell_phone: ['', this.validation.onlyRequired_validator],
            building_name: ['', this.validation.onlyRequired_validator],
            building_address: ['', this.validation.onlyRequired_validator],
            room: ['', this.validation.onlyRequired_validator],
            notes: ['', this.validation.onlyRequired_validator],
            phone_code: [1, this.validation.onlyRequired_validator],
            email: ['', this.validation.onlyRequired_validator],
        });
    }
    /*==========Step Form Value End Here========*/
    /*========== IR Start Here========*/
    getIRList() {
        this.service.get('getLastRISEntry')
            .subscribe(res => {
            this.ir_Obj = res['data'];
            this.newRequestForm.get('ir').patchValue(this.ir_Obj.req);
        });
    }
    /*========== IR end Here========*/
    /*========== Country Code for Mobile Start Here========*/
    CountryList() {
        this.service.getCountryMobileCode().subscribe(res => {
            if (res['status'] == '1') {
                this.country_Obj = res['data'];
                console.log("=================", this.country_Obj);
                this.default_code = this.country_Obj[1].id;
            }
        });
    }
    allClientList() {
        this.service.get('getAllClients').subscribe(res => {
            this.clientObj = res['data'];
        });
        this.filterRegions = this.newRequestForm.get('client_name').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => this.getRegions(value)));
    }
    getRegions(name) {
        return this.clientObj.filter((x) => x.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1);
    }
    /*==========Client name list end Here========*/
    /*==========LOB list start Here========*/
    allLobList() {
        this.service.get('getAllLOB')
            .subscribe(res => {
            this.lob_Obj = res['data'];
        });
    }
    /*==========LOB list end Here========*/
    /*==========Assignment Type list start Here========*/
    // allAssignmentTypeList() {
    //   this.service.get('getAllAssignmentTypes')
    //     .subscribe(res => {
    //       this.assignment_Obj = res['data'];
    //     });
    // }
    /*==========Assignment Type list end Here========*/
    /*==========Platform start Here========*/
    allPlatformList() {
        this.service.get('getAllPlatforms').subscribe(res => {
            this.platform_Obj = res['data'];
        });
    }
    /*==========Platform end Here========*/
    /*==========Language start Here========*/
    allLanguageList() {
        this.service.get('getAllLanguages').subscribe(res => { this.language_Obj = res['data']; });
    }
    /*==========Language end Here========*/
    /*==========Days api start Here========*/
    allDayList() {
        this.service.get('getDays')
            .subscribe(res => {
            this.days_Obj = res['data'];
        });
    }
    /*==========Days api end Here========*/
    onChangeRequest($event) {
    }
    onChangeClient(e) {
    }
    onChangeAssign($event) {
    }
    onChangeLanguage($event) {
    }
    /*==========Home visit function start Here========*/
    homevisit(e) {
        if (this.communityRequestForm.value.home_visit == '1' || this.communityRequestForm.value.home_visit == '0') {
            setTimeout(() => {
                console.log("=====", this.searchElementRef);
                // this.getGooleAddress1();
            }, 500);
        }
        if (e.target.value == '1') {
            this.communityRequestForm.controls['address'].setValue('');
            this.communityRequestForm.controls['apt'].setValue('');
        }
        if (e.target.value == '0') {
            this.communityRequestForm.controls['practice_name'].setValue('');
            this.communityRequestForm.controls['provider_name'].setValue('');
            this.communityRequestForm.controls['room'].setValue('');
            this.communityRequestForm.controls['provider_address'].setValue('');
        }
    }
    /*==========Home visit function end Here========*/
    /*==========LOB function start Here========*/
    onChangeLob(e) {
        this.service.get('getAllAssignmentTypes/' + this.newRequestForm.value.lob).subscribe(res => { this.assignment_Obj = res['data']; });
        if (e.target.value == '8') {
            this.showEductionForm = true;
            this.showMedicalForm = false;
            this.showLegalForm = false;
            this.showCommunityForm = false;
            this.showOtherForm = false;
        }
        if (e.target.value == '3') {
            this.showMedicalForm = true;
            this.showEductionForm = false;
            this.showLegalForm = false;
            this.showCommunityForm = false;
            this.showOtherForm = false;
            setTimeout(() => {
                console.log("=====", this.searchElementRef);
                // this.getGooleAddress();
            }, 500);
        }
        if (e.target.value == '2') {
            this.showMedicalForm = false;
            this.showEductionForm = false;
            this.showLegalForm = false;
            this.showCommunityForm = true;
            this.showOtherForm = false;
        }
        if (e.target.value == '1') {
            this.showMedicalForm = false;
            this.showEductionForm = false;
            this.showLegalForm = true;
            this.showCommunityForm = false;
            this.showOtherForm = false;
        }
        if (e.target.value == '9') {
            this.showMedicalForm = false;
            this.showEductionForm = false;
            this.showCommunityForm = false;
            this.showLegalForm = false;
            this.showOtherForm = true;
        }
    }
    /*==========LOB function end Here========*/
    /*========== Recurrent Assignment function start here ========*/
    newRecurrent(ev) {
        this.recurrent = ev.target.value;
        if (this.recurrent == '1') {
            this.assignment_var = true;
        }
        else {
            this.assignment_var = false;
        }
    }
    /*========== Recurrent Assignment function end here ========*/
    /*==========Repeats Function start here ========*/
    newRepeat(event) {
        this.dailyData = event.target.value;
        if (this.dailyData == '1') {
            this.event_at = [0, 1, 2, 3, 4, 5, 6];
            this.days = true;
            this.start_end = false;
            this.every_show_hide = false;
            this.days2 = false;
        }
        else if (this.dailyData == '2') {
            this.every_show_hide = true;
            this.days = false;
            this.start_end = true;
            this.days2 = true;
        }
        else if (this.dailyData == '3') {
            this.every_show_hide = false;
        }
        else if (this.dailyData == '4') {
            this.every_show_hide = false;
        }
        else {
            this.days = false;
            this.start_end = true;
            this.every_show_hide = true;
        }
    }
    /*==========Repeats Function end here ========*/
    /*==========Platform Function start here ========*/
    vciOPILine(e) {
        if (e.target.value == "VCI + OPI")
            this.vci_opi = true;
        else
            this.vci_opi = false;
    }
    newSimultaneous(e) {
        console.log(e.target.value);
        this.myvar = e.target.value;
        if (this.myvar == 1 && this.newRequestForm.value.platform == 'On-Site') {
            this.simultaneous_var = true;
        }
        else {
            this.simultaneous_var = false;
        }
    }
    /*==========platform Function end here ========*/
    /*==========Client Name Function start here ========*/
    changeClient(data) {
        console.log(data);
        this.newRequestForm.get('requested_by').patchValue(data.contact_person_name);
        // this.client_id = this.clientObj[e]['id'];
    }
    /*==========Client Name Function end here ========*/
    changeCheckbox(i) {
    }
    getLineDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.newRequestForm.value);
            if (this.newRequestForm.value.assignment_date != '' && this.newRequestForm.value.from_time != '' && this.newRequestForm.value.platform == "VCI + OPI") {
                var newTime = moment__WEBPACK_IMPORTED_MODULE_9__(this.newRequestForm.value.from_time).add(30, 'm').toDate();
                this.newRequestForm.value.from_time = moment__WEBPACK_IMPORTED_MODULE_9__(newTime).format("LT");
                try {
                    var result = yield this.service.post('getDataByAssignmentDate', { assignment_date: this.newRequestForm.value.assignment_date, from_time: this.newRequestForm.value.from_time }).toPromise();
                    if (result['status'] == true) {
                        for (var i = 0; i < result['data'].length; i++) {
                            if (i == 16) {
                                this.toastr.success("Lines are already in use");
                                break;
                            }
                            if (result['data'][i].line == i + 1) {
                                this.lineData = result['data'][i].line + 1;
                                this.newRequestForm.get('line').patchValue('RingCentral ' + this.lineData);
                                break;
                            }
                        }
                        this.toastr.success(result['msg']);
                    }
                    else {
                        this.lineData = 1;
                        this.newRequestForm.get('line').patchValue('RingCentral ' + this.lineData);
                        this.toastr.warning(result['msg']);
                    }
                }
                catch (err) {
                    this.toastr.warning('Something went wrong from server/api');
                }
            }
        });
    }
    /*==========Today and future date function start here========*/
    date_func() {
        if (document.getElementsByName("setTodaysDate") != null) {
            var today = new Date().toISOString().split('T')[0];
            if (document.getElementsByName("setTodaysDate")[0] != undefined) {
                document.getElementsByName("setTodaysDate")[0].setAttribute('max', today);
            }
        }
    }
    assign_date_func() {
        if (document.getElementsByName("assignDate") != null) {
            var date = new Date().toISOString().split('T')[0];
            if (document.getElementsByName("assignDate")[0] != undefined) {
                document.getElementsByName("assignDate")[0].setAttribute('min', date);
            }
        }
    }
    startWithAssignment(e) {
        if (this.newRequestForm.value.assignment_date == '' || this.newRequestForm.value.assignment_date == 'undefined') {
            this.toastr.error("Select Assignment Date", '', { timeOut: 2000 });
            return false;
        }
        if (document.getElementsByName("event_start_d") != null) {
            var date = new Date().toISOString().split('T')[0];
            if (document.getElementsByName("event_start_d")[0] != undefined) {
                document.getElementsByName("event_start_d")[0].setAttribute('min', this.newRequestForm.value.assignment_date);
            }
        }
    }
    endWithAssignment(e) {
        if (this.newRequestForm.value.event_start_date == '' || this.newRequestForm.value.event_start_date == 'undefined') {
            this.toastr.error("Select Start Date", '', { timeOut: 2000 });
            return false;
        }
        if (document.getElementsByName("event_end_d") != null) {
            var date = new Date().toISOString().split('T')[0];
            if (document.getElementsByName("event_end_d")[0] != undefined) {
                document.getElementsByName("event_end_d")[0].setAttribute('min', this.newRequestForm.value.event_start_date);
            }
        }
    }
    /*==========Today and future date function end here========*/
    /*==========Start and end time valid function start here========*/
    start_end_date($eve) {
        var beginningDate = this.newRequestForm.value.event_start_date;
        var endDate = this.newRequestForm.value.event_end_date;
        if (beginningDate > endDate) {
            this.newRequestForm.controls['event_start_date'].setValue('');
            this.newRequestForm.controls['event_end_date'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningDate == endDate) {
            this.newRequestForm.controls['event_start_date'].setValue('');
            this.newRequestForm.controls['event_end_date'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningDate < endDate) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    }
    start_end_time_repeats(e) {
        var beginningTimeRep = this.newRequestForm.value.event_start_time;
        var endTimeRep = this.newRequestForm.value.event_end_time;
        if (beginningTimeRep > endTimeRep) {
            this.newRequestForm.controls['event_start_time'].setValue('');
            this.newRequestForm.controls['event_end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTimeRep == endTimeRep) {
            this.newRequestForm.controls['event_start_time'].setValue('');
            this.newRequestForm.controls['event_end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTimeRep < endTimeRep) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    }
    /*==========Start and end time valid function end here========*/
    /*======================All Form submitted function start here==============================*/
    saveUser() {
        console.log("=============Form", this.newRequestForm.value);
        this.submitted = true;
        if (this.showEductionForm) {
            this.submittedEdu = true;
        }
        if (this.showMedicalForm == true) {
            this.submittedMed = true;
        }
        if (this.showCommunityForm) {
            this.submittedComm = true;
        }
        if (this.showLegalForm) {
            this.submittedLeg = true;
        }
        if (this.showOtherForm) {
            this.submittedOther = true;
        }
        if ((this.showEductionForm && this.educationRequestForm.invalid && this.newRequestForm.invalid) ||
            (this.showMedicalForm && this.medicalRequestForm.invalid && this.newRequestForm.invalid) ||
            (this.showCommunityForm && this.communityRequestForm.invalid && this.newRequestForm.invalid) ||
            (this.showLegalForm && this.legalRequestForm.invalid && this.newRequestForm.invalid) ||
            (this.showOtherForm && this.otherRequestForm.invalid && this.newRequestForm.invalid)) {
            return;
        }
        else {
            if (this.newRequestForm.invalid) {
                return;
            }
        }
        this.newRequestForm.value.from_time = moment__WEBPACK_IMPORTED_MODULE_9__(this.newRequestForm.value.from_time).format("LT");
        ;
        this.newRequestForm.value.to_time = moment__WEBPACK_IMPORTED_MODULE_9__(this.newRequestForm.value.to_time).format("LT");
        this.newRequestForm.value.event_start_time = moment__WEBPACK_IMPORTED_MODULE_9__(this.newRequestForm.value.event_start_time).format("LT");
        this.newRequestForm.value.event_end_time = moment__WEBPACK_IMPORTED_MODULE_9__(this.newRequestForm.value.event_end_time).format("LT");
        this.newRequestForm.value.event_at = this.event_at;
        this.newRequestForm.value.scheduler_id = this.scheduler_id;
        this.newRequestForm.value.client_id = this.newRequestForm.value.client_name.id;
        this.newRequestForm.value.client_name = this.newRequestForm.value.client_name.fullName;
        this.newRequestForm.value.latitude = this.latitude;
        this.newRequestForm.value.longitude = this.longitude;
        this.newRequestForm.value.address = this.new_address;
        if (this.showEductionForm) {
            this.newRequestForm.value.education = this.educationRequestForm.value;
        }
        if (this.showLegalForm) {
            this.newRequestForm.value.legal = this.legalRequestForm.value;
        }
        if (this.showOtherForm) {
            this.newRequestForm.value.others = this.otherRequestForm.value;
        }
        if (this.showMedicalForm) {
            // this.medicalRequestForm.value.latitude = this.latitude;
            // this.medicalRequestForm.value.longitude = this.longitude;
            // this.medicalRequestForm.value.address = this.new_address;
            this.newRequestForm.value.medical = this.medicalRequestForm.value;
        }
        if (this.showCommunityForm) {
            // this.communityRequestForm.value.latitude = this.latitude;
            // this.communityRequestForm.value.longitude = this.longitude;
            // this.communityRequestForm.value.address = this.new_address;
            this.newRequestForm.value.community = this.communityRequestForm.value;
        }
        console.log("============form", this.newRequestForm.value);
        this.service.post('enterNewInterpreterRequestBasicTab', this.newRequestForm.value).subscribe(res => {
            if (res['status'] == true) {
                this.save_obj = res;
                this.save_Msg = res;
                this.toastr.success(this.save_Msg.msg, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                this.router.navigate(['/request-scheduler/all-request-list-schedular']);
            }
        });
    }
    /*==========================All Form submitted function end here==========================*/
    /*==========================Google Api function start here==========================*/
    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 8;
                this.getAddress(this.latitude, this.longitude);
            });
        }
    }
    markerDragEnd($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        console.log("latitude-", this.latitude);
        console.log("longitude-", this.longitude);
        this.getAddress(this.latitude, this.longitude);
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    /*==========================Google Api function end here==========================*/
    selectEvent(item) {
        console.log(item);
        // do something with selected item
        this.newRequestForm.get('client_name').patchValue(item);
        this.newRequestForm.get('requested_by').patchValue(item.contact_person_name);
    }
    onChangeSearch(search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
        // do something
    }
}
AllRequestSchedularComponent.ɵfac = function AllRequestSchedularComponent_Factory(t) { return new (t || AllRequestSchedularComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__["DataLayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"])); };
AllRequestSchedularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllRequestSchedularComponent, selectors: [["app-all-request-schedular"]], viewQuery: function AllRequestSchedularComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    } }, decls: 150, vars: 40, consts: [[1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12", "all_request"], [1, "card", "mb-4"], [1, "card-body"], [1, "col-md-12", "topbtn", 2, "align-items", "center", "justify-content", "center"], [1, "new-interpriter"], [1, "basictap-main"], [1, "right-buttton", "float-right"], ["routerLink", "/client/client-add", 1, "botton-fst", "btn", "btn-primary", "mb-2", "ml-2", "float-right"], [1, "button-sec", "btn", "btn-primary", "mb-2", "float-right"], [3, "formGroup"], [1, "row", "pl-4"], [1, "col-md-5", "form-group", "mb-3", "firstir"], ["for", "Last"], ["type", "text", "formControlName", "ir", "placeholder", "IR #", "disabled", "", 1, "form-control"], ["class", "error-msg", 4, "ngIf"], ["type", "text", "formControlName", "entered_by", "placeholder", "Entered By", "disabled", "", 1, "form-control"], [1, "row", "dummy_text"], [1, "col-sm-4", "form-group", "mb-3"], ["placeholder", "Search Client Name", "historyIdentifier", "clientObj", "formControlName", "client_name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-sm-4", "form-group", "mb-3", "req_form"], [1, "form-group", "form-field"], ["type", "text", "formControlName", "requested_by", "placeholder", "Requested By", "disabled", "", 1, "form-control"], [1, "col-sm-4", "form-group", "mb-3", "req_date"], ["appearance", "none"], ["matInput", "", "formControlName", "request_date", 3, "max", "matDatepicker", "click"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-sm-2", "form-group", "mb-3"], ["formControlName", "lob", "id", "lob", "name", "lob", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-sm-2 form-group mb-3", 4, "ngIf"], ["formControlName", "platform", "id", "platform", "name", "platform", 1, "form-control", 3, "change"], ["value", ""], [1, "col-sm-", "form-group", "mb-3"], ["data-toggle", "tooltip", "title", "Simultaneous", 1, "fas", "fa-eye"], [1, "form-check"], ["for", "simultaneous_radio1", 1, "form-check-label"], ["formControlName", "receivers_required", "type", "radio", "id", "simultaneous_radio1", "value", "1", "checked", "", 1, "form-check-input", "radio-inline", 3, "change"], ["matTooltip", "Simultaneous", "for", "simultaneous_radio2", 1, "form-check-label", "pl-5"], ["formControlName", "receivers_required", "type", "radio", "id", "simultaneous_radio2", "value", "0", 1, "form-check-input", "radio-inline", 3, "change"], ["class", "col-md-2 form-group mb-3", 4, "ngIf"], ["formControlName", "language", "id", "language", "name", "language", 1, "form-control", 3, "change"], [1, "col-sm-4", "form-group", "mb-3", "assign_date"], [1, "date_view"], ["matInput", "", "formControlName", "assignment_date", 3, "min", "matDatepicker", "selectedChanged", "click"], ["pickerr", ""], [1, "s_Time"], ["id", "txtStartTime", "placeholder", "From Time", "formControlName", "from_time", 3, "step", "blur"], [1, "e_Time"], ["id", "txtEndTime", "placeholder", "To Time", "formControlName", "to_time", 3, "step", "min"], ["for", "Address"], ["type", "text", "formControlName", "address", "placeholder", "Search Nearest Location", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 1, "form-control", 3, "keydown.enter"], ["search", ""], ["for", "gridRadios1", 1, "form-check-label"], ["formControlName", "recurrent_assignment", "type", "radio", "id", "gridRadios1", "value", "1", "checked", "", 1, "form-check-input", "radio-inline", 3, "change"], ["for", "gridRadios2", 1, "form-check-label", "pl-5"], ["formControlName", "recurrent_assignment", "type", "radio", "id", "gridRadios2", "value", "0", 1, "form-check-input", "radio-inline", 3, "change"], ["class", "col-md-2", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "offset-lg-4", 4, "ngIf"], [4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-12"], ["type", "button", 1, "btn", "btn-primary", "float-right", 3, "click"], [1, "error-msg"], [3, "hidden"], [3, "innerHTML"], [3, "value"], ["type", "text", "placeholder", "", 1, "form-control"], ["formControlName", "assignment_type", "id", "assignment_type", "name", "assignment_type", 1, "form-control", 3, "change"], [1, "col-md-2", "form-group", "mb-3"], ["type", "text", "formControlName", "how_many_receivers", "placeholder", "How many receivers?", 1, "form-control"], [1, "col-md-2"], ["formControlName", "vci_opi_phone_code", 1, "form-control", "country_code"], ["value", "", "selected", "", "disabled", ""], ["value", "1"], [1, "col-md-4"], ["for", " Phone No."], ["placeholder", "Line", "type", "text", "mask", "(000) 000-0000", "formControlName", "vci_opi_cell_phone", "onkeypress", "if(this.value.length==15) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "placeholder", "Cell Phone No.", 1, "form-control"], ["for", " line"], ["disabled", "", "type", "text", "formControlName", "line", "placeholder", "Line", 1, "form-control"], [1, "offset-lg-4"], [1, "col-sm-6", "borderfull"], [1, "col-sm-12", "form-group", "mb-3"], [1, "form-group", "form-field", "rep_lab"], ["formControlName", "repeats", 1, "form-control", 3, "change"], ["value", "2"], ["value", "3"], ["value", "4"], ["class", "col-sm-12 form-group mb-3", 4, "ngIf"], ["class", "row new_row", 4, "ngIf"], [1, "col-sm-12", "form-group", "mb-3", "border_label"], ["id", "StartTime", "matInput", "", "formControlName", "event_start_date", "name", "event_start_d", 3, "min", "matDatepicker", "click"], ["picker2", ""], ["id", "End", "matInput", "", "formControlName", "event_end_date", "name", "event_end_d", 3, "min", "matDatepicker", "click", "change"], ["picker3", ""], ["id", "StartTime", "placeholder", "StartTime", "formControlName", "event_start_time", 3, "step"], ["id", "EndTime", "placeholder", "End Time", "formControlName", "event_end_time", 3, "step", "min"], [1, "form-group", "form-field", "border_label", "span_lab"], ["type", "text", "formControlName", "every", "onkeypress", "if(this.value.length==1) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "placeholder", "Every", 1, "form-control"], [1, "row", "new_row"], [1, "form-check", "form-check-inline"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "checked", "", "disabled", "", 1, "form-check-input", 3, "id", "change"], [1, "newlabel", "form-check-label", "checkbox-inline", 3, "for"], ["type", "checkbox", 1, "form-check-input", 3, "id", "change"], [1, "col-md-4", "form-group", "mb-3"], ["type", "text", "formControlName", "name_of_contact_person", "placeholder", "Contact Name", 1, "form-control"], ["formControlName", "phone_code", 1, "form-control", "country_code"], [1, "col-md-8"], ["type", "text", "mask", "(000) 000-0000", "formControlName", "cell_phone", "onkeypress", "if(this.value.length==15) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "placeholder", "Cell Phone No.", 1, "form-control"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control"], ["type", "text", "formControlName", "building_name", "placeholder", "School/Building Name", 1, "form-control"], ["type", "text", "formControlName", "building_address", "placeholder", "Building Address", 1, "form-control"], ["type", "text", "formControlName", "room", "placeholder", "Suite/Room/Room", 1, "form-control"], ["type", "text", "formControlName", "notes", "placeholder", "IR General Notes", 1, "form-control"], ["type", "text", "formControlName", "practice_name", "placeholder", "Practice Name", 1, "form-control"], ["type", "text", "formControlName", "provider_name", "placeholder", "Provider Name", 1, "form-control"], ["type", "text", "formControlName", "room", "placeholder", "Room", 1, "form-control"], ["type", "hidden", "formControlName", "latitude", 1, "form-control"], ["type", "hidden", "formControlName", "longitude", 1, "form-control"], ["type", "text", "formControlName", "caseworker_firstname", "placeholder", "Case Worker First Name", 1, "form-control"], ["type", "text", "formControlName", "caseworker_lastname", "placeholder", "Case Worker Last Name", 1, "form-control"], ["type", "text", "formControlName", "name_of_contact_person", "placeholder", "Contact Name of Person at Assignment", 1, "form-control"], ["formControlName", "position", 1, "form-control"], ["value", "Position 1"], ["value", "Position 2"], ["formControlName", "contact_person_phone_code", 1, "form-control", "country_code"], ["type", "text", "mask", "(000) 000-0000", "formControlName", "contact_person_cellphone", "onkeypress", "if(this.value.length==15) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "placeholder", "Cell Phone No.", 1, "form-control"], [1, "col-md-3", "form-group", "mb-3"], ["type", "text", "formControlName", "case_name", "placeholder", "Case Name", 1, "form-control"], [1, "col-sm-3", "form-group", "mb-3"], ["type", "text", "formControlName", "client_firstname", "placeholder", "Client First Name", 1, "form-control"], ["type", "text", "formControlName", "client_lastname", "placeholder", "Client Last Name", 1, "form-control"], ["type", "text", "formControlName", "trails", "placeholder", "Trails/Case Number", 1, "form-control"], ["formControlName", "home_visit", "type", "radio", "id", "gridRadios11", "value", "1", "checked", "", 1, "form-check-input", "radio-inline", 3, "change"], ["formControlName", "home_visit", "type", "radio", "id", "gridRadios22", "value", "0", 1, "form-check-input", "radio-inline", 3, "change"], ["class", "col-sm-4 form-group mb-3", 4, "ngIf"], ["class", "col-md-4 form-group mb-3", 4, "ngIf"], ["type", "hidden", "formControlName", "provider_latitude", 1, "form-control"], ["type", "hidden", "formControlName", "provider_longitude", 1, "form-control"], ["type", "text", "id", "address02", "formControlName", "address", "placeholder", "Search Nearest Location", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 1, "form-control", 3, "keydown.enter"], ["type", "text", "formControlName", "apt", "placeholder", "Apt", 1, "form-control"], ["type", "text", "formControlName", "practice_name", "placeholder", "Practice Name (Clinic, Hospital,ect)", 1, "form-control"], ["type", "text", "id", "address03", "formControlName", "provider_address", "placeholder", "Search Nearest Location", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 1, "form-control", 3, "keydown.enter"], ["type", "text", "formControlName", "name_of_contact_person", "placeholder", "Contact Name at Assignment", 1, "form-control"], ["type", "text", "formControlName", "building_name", "placeholder", "Building/Office Name", 1, "form-control"], ["type", "text", "formControlName", "building_address", "placeholder", "Building/Office Address", 1, "form-control"]], template: function AllRequestSchedularComponent_Template(rf, ctx) { if (rf & 1) {
        const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request Scheduler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter New Interpreter Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+ Add Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+ Add Requester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "IR #:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AllRequestSchedularComponent_div_28_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Entered By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ng-autocomplete", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function AllRequestSchedularComponent_Template_ng_autocomplete_selected_37_listener($event) { return ctx.selectEvent($event); })("inputChanged", function AllRequestSchedularComponent_Template_ng_autocomplete_inputChanged_37_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function AllRequestSchedularComponent_Template_ng_autocomplete_inputFocused_37_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AllRequestSchedularComponent_ng_template_38_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AllRequestSchedularComponent_ng_template_40_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AllRequestSchedularComponent_div_42_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Requested By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AllRequestSchedularComponent_div_48_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Request Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRequestSchedularComponent_Template_input_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r7.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-datepicker-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-datepicker", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AllRequestSchedularComponent_div_57_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "LOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_Template_select_change_63_listener($event) { return ctx.onChangeLob($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AllRequestSchedularComponent_option_64_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AllRequestSchedularComponent_div_65_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AllRequestSchedularComponent_div_66_Template, 5, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AllRequestSchedularComponent_div_67_Template, 9, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_Template_select_change_72_listener($event) { ctx.newSimultaneous($event); return ctx.vciOPILine($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AllRequestSchedularComponent_option_75_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AllRequestSchedularComponent_div_76_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Simultaneous Interpreting? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_Template_input_change_83_listener($event) { return ctx.newSimultaneous($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_Template_input_change_86_listener($event) { return ctx.newSimultaneous($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AllRequestSchedularComponent_div_88_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, AllRequestSchedularComponent_div_89_Template, 4, 0, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_Template_select_change_95_listener($event) { return ctx.onChangeLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AllRequestSchedularComponent_option_98_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, AllRequestSchedularComponent_div_99_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Assignment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChanged", function AllRequestSchedularComponent_Template_input_selectedChanged_104_listener() { return ctx.getLineDetails(); })("click", function AllRequestSchedularComponent_Template_input_click_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](107); return _r19.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "mat-datepicker-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "mat-datepicker", null, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, AllRequestSchedularComponent_div_108_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "From Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ejs-timepicker", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AllRequestSchedularComponent_Template_ejs_timepicker_blur_113_listener() { return ctx.getLineDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, AllRequestSchedularComponent_div_114_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "To Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "ejs-timepicker", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, AllRequestSchedularComponent_div_120_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function AllRequestSchedularComponent_Template_input_keydown_enter_125_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Recurrent Assignment?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_Template_input_change_132_listener($event) { return ctx.newRecurrent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllRequestSchedularComponent_Template_input_change_135_listener($event) { return ctx.newRecurrent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, AllRequestSchedularComponent_div_137_Template, 10, 2, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, AllRequestSchedularComponent_div_138_Template, 5, 1, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, AllRequestSchedularComponent_div_139_Template, 6, 1, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, AllRequestSchedularComponent_div_140_Template, 50, 16, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, AllRequestSchedularComponent_div_141_Template, 52, 10, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, AllRequestSchedularComponent_div_142_Template, 44, 8, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, AllRequestSchedularComponent_div_143_Template, 110, 20, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, AllRequestSchedularComponent_div_144_Template, 52, 10, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, AllRequestSchedularComponent_div_145_Template, 52, 10, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRequestSchedularComponent_Template_button_click_148_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newRequestForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["ir"].errors && (!ctx.newRequestForm.controls["ir"].pristine || ctx.submitted || ctx.newRequestForm.controls["ir"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.clientObj)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["client_name"].errors && (!ctx.newRequestForm.controls["client_name"].pristine || ctx.submitted || ctx.newRequestForm.controls["client_name"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["requested_by"].errors && (!ctx.newRequestForm.controls["requested_by"].pristine || ctx.submitted || ctx.newRequestForm.controls["requested_by"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.minDate)("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["request_date"].errors && (!ctx.newRequestForm.controls["request_date"].pristine || ctx.submitted || ctx.newRequestForm.controls["request_date"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lob_Obj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["lob"].errors && (!ctx.newRequestForm.controls["lob"].pristine || ctx.submitted || ctx.newRequestForm.controls["lob"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.value.lob == "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.value.lob != "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.platform_Obj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["platform"].errors && (!ctx.newRequestForm.controls["platform"].pristine || ctx.submitted || ctx.newRequestForm.controls["platform"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["receivers_required"].errors && (!ctx.newRequestForm.controls["receivers_required"].pristine || ctx.submitted || ctx.newRequestForm.controls["receivers_required"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.value.platform == "On-Site" && ctx.newRequestForm.value.receivers_required == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.language_Obj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["language"].errors && (!ctx.newRequestForm.controls["language"].pristine || ctx.submitted || ctx.newRequestForm.controls["language"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["assignment_date"].errors && (!ctx.newRequestForm.controls["assignment_date"].pristine || ctx.submitted || ctx.newRequestForm.controls["assignment_date"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.interval);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["from_time"].errors && (!ctx.newRequestForm.controls["from_time"].pristine || ctx.submitted || ctx.newRequestForm.controls["from_time"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.interval)("min", ctx.newRequestForm.value.from_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newRequestForm.controls["to_time"].errors && (!ctx.newRequestForm.controls["to_time"].pristine || ctx.submitted || ctx.newRequestForm.controls["to_time"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vci_opi == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vci_opi == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vci_opi == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assignment_var);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEductionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMedicalForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCommunityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLegalForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOtherForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_18__["TimePickerComponent"], ngx_mask__WEBPACK_IMPORTED_MODULE_19__["MaskDirective"]], styles: [".dummy_text ::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0px 14px !important;\n  border-radius: 15px !important;\n  outline: initial !important;\n  border: 1px solid #dedede !important;\n  background: #f8f9fa;\n  height: 32px;\n  color: #47404f;\n  width: 470px !important;\n}\n\n.dummy_text .mat-input-element {\n  border: 1px solid #ced4da !important;\n  background: #f8f9fa;\n  height: 34px;\n  width: 470px !important;\n  position: relative;\n  bottom: 0px;\n  border-radius: 0.25rem;\n}\n\n.dummy_text .mat-form-field-infix {\n  border-top: 0 solid transparent;\n  bottom: 5px !important;\n}\n\n.dummy_text .mat-form-field {\n  width: 100% !important;\n}\n\n.dummy_text ::ng-deep .mat-form-field-underline {\n  background: #fff;\n}\n\n.dummy_text ::ng-deep .mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 3px 0;\n}\n\n.dummy_text ::ng-deep .mat-form-field-underline {\n  display: none !important;\n}\n\n.dummy_text ::ng-deep .mat-date-range-input {\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n  bottom: 7px;\n}\n\n.dummy_text ::ng-deep .mat-input-element::-moz-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text ::ng-deep .mat-input-element:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text ::ng-deep .mat-input-element::placeholder {\n  color: #9b9b9b;\n}\n\n.country_code {\n  -webkit-appearance: auto;\n     -moz-appearance: auto;\n          appearance: auto;\n}\n\n.s_Time {\n  border: 1px solid #ced4da !important;\n  background: #f8f9fa;\n  height: 36px;\n  width: 100% !important;\n  position: relative;\n  bottom: 4px;\n  border-radius: 0.25rem;\n  top: -1px;\n  padding: 0px 10px;\n}\n\n.e_Time {\n  border: 1px solid #ced4da !important;\n  background: #f8f9fa;\n  height: 36px;\n  width: 100% !important;\n  position: relative;\n  bottom: 4px;\n  border-radius: 0.25rem;\n  top: -1px;\n  padding: 0px 10px;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  top: -34px !important;\n}\n\n.mat-autocomplete-panel {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  bottom: 21px !important;\n}\n\n.heading {\n  display: none;\n}\n\n::ng-deep .mat-input-underline {\n  display: none;\n}\n\n.mat-input-underline {\n  display: none;\n}\n\n.all_request .date_view {\n  width: 100%;\n}\n\n.assign_date .mat-form-field-infix {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 352px;\n  border-top: 0;\n  padding: 0px 0;\n}\n\n.assign_date .mat-input-element {\n  font: inherit;\n  background: #f8f9fa;\n  color: currentColor;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n  vertical-align: bottom;\n  text-align: inherit;\n  border: 1px solid #c5c5c5;\n  height: 33px;\n}\n\n.assign_date .mat-datepicker-toggle {\n  color: rgba(0, 0, 0, 0.54);\n  position: absolute;\n  z-index: 99;\n  bottom: -3px;\n  right: 2px;\n}\n\n.req_form .form-control {\n  width: 100%;\n}\n\n.borderfull .mat-input-element {\n  background: #f8f9fa;\n  border: 1px solid #ccc;\n  height: 34px;\n}\n\n.borderfull .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button {\n  display: block;\n  font-size: inherit;\n  width: 2.5em;\n  height: 2.5em;\n  position: absolute;\n  bottom: -2px;\n  right: -1px;\n}\n\n.borderfull button:focus {\n  outline: none;\n  outline: none;\n}\n\n.borderfull label {\n  width: 100%;\n}\n\n.rep_lab .form-control {\n  display: inline-block;\n  width: 100%;\n}\n\n.borderfull .form-check-inline .form-check-input {\n  height: 20px;\n  width: 30px;\n}\n\n.border_label .mat-form-field-infix {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 350px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvYWxsLXJlcXVlc3Qtc2NoZWR1bGFyL2FsbC1yZXF1ZXN0LXNjaGVkdWxhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDSSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDSSwrQkFBK0I7RUFDL0Isc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksY0FBYztBQUNsQjs7QUFFQTtFQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxjQUFjO0FBQ2xCOztBQUZBO0VBQ0ksY0FBYztBQUNsQjs7QUFGQTtFQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSx3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0ksb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7RUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLHVCQUF1QjtBQUMzQjs7QUFXQTtFQUNJLGFBQWE7QUFSakI7O0FBVUE7RUFDSSxhQUFhO0FBUGpCOztBQVNDO0VBQ0csYUFBYTtBQU5qQjs7QUFRQTtFQUF3QixXQUFXO0FBSm5DOztBQUtBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUZsQjs7QUFJQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7QUFEaEI7O0FBR0E7RUFDSSwwQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUFkOztBQUdBO0VBQ0ksV0FBVztBQUFmOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2hCOztBQUNBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNuQixZQUFZO0VBQ1gsV0FBVztBQUVmOztBQUFBO0VBQ0ksYUFBYTtFQUNiLGFBQWE7QUFHakI7O0FBREE7RUFBa0IsV0FBVztBQUs3Qjs7QUFKQTtFQUVJLHFCQUFxQjtFQUNyQixXQUFXO0FBTWY7O0FBSEE7RUFFSSxZQUFZO0VBQ1osV0FBVztBQUtmOztBQUhBO0VBRUksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFLaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXF1ZXN0LXNjaGVkdWxlci9hbGwtcmVxdWVzdC1zY2hlZHVsYXIvYWxsLXJlcXVlc3Qtc2NoZWR1bGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIHBhZGRpbmc6IDBweCAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgY29sb3I6ICM0NzQwNGY7XG4gICAgd2lkdGg6IDQ3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kdW1teV90ZXh0IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHdpZHRoOiA0NzBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZHVtbXlfdGV4dCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlci10b3A6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmR1bW15X3RleHQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAzcHggMDtcbn1cblxuLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDdweDtcbn1cblxuLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOWI5YjliO1xufVxuXG4uY291bnRyeV9jb2RlIHtcbiAgICBhcHBlYXJhbmNlOiBhdXRvO1xufVxuXG4uc19UaW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5lX1RpbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGEgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGhlaWdodDogMzZweDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHRvcDogLTFweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHRvcDogLTM0cHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjg3KTtcbiAgICBib3R0b206IDIxcHggIWltcG9ydGFudDtcbn1cblxuLy8gIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XG4vLyAgICAgdG9wOiAzNTBweCAhaW1wb3J0YW50O1xuLy8gfVxuLy8gICAuY2RrLW92ZXJsYXktcGFuZSB7XG5cbi8vICAgICB0b3A6IDM5NXB4ICFpbXBvcnRhbnQ7XG5cbi8vIH1cblxuLmhlYWRpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgLm1hdC1pbnB1dC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4gLm1hdC1pbnB1dC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uYWxsX3JlcXVlc3QgLmRhdGVfdmlld3t3aWR0aDogMTAwJTt9XG4uYXNzaWduX2RhdGUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDM1MnB4O1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgcGFkZGluZzogMHB4IDA7XG59XG4uYXNzaWduX2RhdGUgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNWM1YzU7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLmFzc2lnbl9kYXRlIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvdHRvbTogLTNweDtcbiAgICByaWdodDogMnB4O1xufVxuXG4ucmVxX2Zvcm0gLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYm9yZGVyZnVsbCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBoZWlnaHQ6IDM0cHg7XG59XG4uYm9yZGVyZnVsbCAubWF0LWZvcm0tZmllbGQ6bm90KC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSkgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgYm90dG9tOiAtMnB4O1xuICAgIHJpZ2h0OiAtMXB4O1xufVxuLmJvcmRlcmZ1bGwgIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmJvcmRlcmZ1bGwgbGFiZWx7d2lkdGg6IDEwMCU7fVxuLnJlcF9sYWIgLmZvcm0tY29udHJvbCB7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5ib3JkZXJmdWxsIC5mb3JtLWNoZWNrLWlubGluZSAuZm9ybS1jaGVjay1pbnB1dCB7XG5cbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG4uYm9yZGVyX2xhYmVsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDM1MHB4O1xuXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllRequestSchedularComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-request-schedular',
                templateUrl: './all-request-schedular.component.html',
                styleUrls: ['./all-request-schedular.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_shared_services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__["DataLayerService"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _agm_core__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"] }]; }, { searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search', { static: false }]
        }] }); })();


/***/ }),

/***/ "b61f":
/*!******************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/cancelled-request/cancelled-request.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CancelledRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelledRequestComponent", function() { return CancelledRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");








class CancelledRequestComponent {
    constructor(router, service, toastr) {
        this.router = router;
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    viewDetail(request_id) {
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(res => {
            if (res['status'] == 1) {
                this.view_obj = res['data'][0];
                console.log("view object apiii", this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                this.router.navigate(['/user-request/request-view', request_id]);
            }
            else {
                this.resp_msg = res;
                this.toastr.error(this.resp_msg.message, '', { timeOut: 2000 });
            }
        });
    }
}
CancelledRequestComponent.ɵfac = function CancelledRequestComponent_Factory(t) { return new (t || CancelledRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CancelledRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancelledRequestComponent, selectors: [["app-cancelled-request"]], decls: 11, vars: 0, consts: [[1, ""], [1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"]], template: function CancelledRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcXVlc3Qtc2NoZWR1bGVyL2NhbmNlbGxlZC1yZXF1ZXN0L2NhbmNlbGxlZC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelledRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cancelled-request',
                templateUrl: './cancelled-request.component.html',
                styleUrls: ['./cancelled-request.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "bH2/":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js ***!
  \***********************************************************************************************/
/*! exports provided: AutocompleteComponent, AutocompleteLibComponent, AutocompleteLibModule, HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibComponent", function() { return AutocompleteLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibModule", function() { return AutocompleteLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




const _c0 = ["searchInput"];
const _c1 = ["filteredListElement"];
const _c2 = ["historyListElement"];
function AutocompleteComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AutocompleteComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AutocompleteComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.heading);
} }
function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function AutocompleteComponent_li_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.select(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r14 = ctx_r21.index;
    const item_r13 = ctx_r21.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r15.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, item_r13, ctx_r15.toHighlight)));
} }
function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AutocompleteComponent_li_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.select(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r14 = ctx_r26.index;
    const item_r13 = ctx_r26.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r16.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, item_r13, ctx_r16.toHighlight, ctx_r16.searchKeyword)));
} }
function AutocompleteComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isTypeString(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isTypeString(item_r13));
} }
function AutocompleteComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.resetHistoryList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.historyHeading);
} }
function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AutocompleteComponent_li_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.select(item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r30 = ctx_r37.index;
    const item_r29 = ctx_r37.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r31.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
} }
function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AutocompleteComponent_li_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.select(item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r30 = ctx_r42.index;
    const item_r29 = ctx_r42.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r32.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
} }
function AutocompleteComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const idx_r30 = ctx.index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.removeHistoryItem(idx_r30, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isTypeString(item_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isTypeString(item_r29));
} }
function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AutocompleteComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.notFoundTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r9.notFoundText));
} }
function AutocompleteComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.handleOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "active": a0 }; };
const _c5 = function (a0, a1) { return { "is-hidden": a0, "is-visible": a1 }; };
class AutocompleteLibComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AutocompleteLibComponent.ɵfac = function AutocompleteLibComponent_Factory(t) { return new (t || AutocompleteLibComponent)(); };
AutocompleteLibComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteLibComponent, selectors: [["ng-autocomplete-lib"]], decls: 2, vars: 0, template: function AutocompleteLibComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " autocomplete-lib works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/** @nocollapse */
AutocompleteLibComponent.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-autocomplete-lib',
                template: `
    <p>
      autocomplete-lib works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Keyboard events
 * @type {?}
 */
const isArrowUp = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => keyCode === 38);
const ɵ0 = isArrowUp;
/** @type {?} */
const isArrowDown = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => keyCode === 40);
const ɵ1 = isArrowDown;
/** @type {?} */
const isArrowUpDown = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => isArrowUp(keyCode) || isArrowDown(keyCode));
const ɵ2 = isArrowUpDown;
/** @type {?} */
const isEnter = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => keyCode === 13);
const ɵ3 = isEnter;
/** @type {?} */
const isBackspace = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => keyCode === 8);
const ɵ4 = isBackspace;
/** @type {?} */
const isDelete = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => keyCode === 46);
const ɵ5 = isDelete;
/** @type {?} */
const isESC = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => keyCode === 27);
const ɵ6 = isESC;
/** @type {?} */
const isTab = (/**
 * @param {?} keyCode
 * @return {?}
 */
keyCode => keyCode === 9);
const ɵ7 = isTab;
class AutocompleteComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.renderer = renderer;
        this.query = ''; // search query
        // search query
        this.filteredList = []; // list of items
        // list of items
        this.historyList = []; // list of history items
        // list of history items
        this.isHistoryListVisible = true;
        this.selectedIdx = -1;
        this.toHighlight = '';
        this.notFound = false;
        this.isFocused = false;
        this.isOpen = false;
        this.isScrollToEnd = false;
        this.overlay = false;
        this.manualOpen = undefined;
        this.manualClose = undefined;
        // @Inputs
        /**
         * Data of items list.
         * It can be array of strings or array of objects.
         */
        this.data = [];
        // keyword to filter the list
        this.placeholder = '';
        this.heading = '';
        /**
         * Heading text of history list.
         * If it is null then history heading is hidden.
         */
        this.historyHeading = 'Recently selected';
        this.historyListMaxNumber = 15; // maximum number of items in the history list.
        // maximum number of items in the history list.
        this.notFoundText = 'Not found'; // set custom text when filter returns empty result
        // input disable/enable
        /**
         * The minimum number of characters the user must type before a search is performed.
         */
        this.minQueryLength = 1;
        /**
         * Focus first item in the list
         */
        this.focusFirst = false;
        // @Output events
        /**
         * Event that is emitted whenever an item from the list is selected.
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is changed.
         */
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is focused.
         */
        this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is cleared.
         */
        this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when scrolled to the end of items.
         */
        this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Propagates new value when model changes
         */
        this.propagateChange = (/**
         * @return {?}
         */
        () => {
        });
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
        this.elementRef = elementRef;
    }
    /**
     * Writes a new value from the form model into the view,
     * Updates model
     * @param {?=} value
     * @return {?}
     */
    writeValue(value = '') {
        this.query = value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
    }
    /**
     * Registers a handler that is called when something in the view has changed
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Registers a handler specifically for when a control receives a touch event
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Event that is called when the value of an input element is changed
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.propagateChange(event.target.value);
    }
    /**
     * Event that is called when the control status changes to or from DISABLED
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initEventStream();
        this.handleScroll();
    }
    /**
     * Set initial value
     * @param {?} value
     * @return {?}
     */
    setInitialValue(value) {
        if (this.initialValue) {
            this.select(value);
        }
    }
    /**
     * Update search results
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setInitialValue(this.initialValue);
        if (changes &&
            changes.data &&
            Array.isArray(changes.data.currentValue)) {
            this.handleItemsChange();
            if (!changes.data.firstChange && this.isFocused) {
                this.handleOpen();
            }
        }
    }
    /**
     * Items change
     * @return {?}
     */
    handleItemsChange() {
        this.isScrollToEnd = false;
        if (!this.isOpen) {
            return;
        }
        this.filteredList = this.data;
        this.notFound = !this.filteredList || this.filteredList.length === 0;
        // Filter list when updating data and panel is open
        if (this.isOpen) {
            this.filterList();
        }
    }
    /**
     * Filter data
     * @return {?}
     */
    filterList() {
        this.selectedIdx = -1;
        this.initSearchHistory();
        if (this.query != null && this.data) {
            this.toHighlight = this.query;
            this.filteredList = this.customFilter !== undefined ? this.customFilter([...this.data], this.query) : this.defaultFilterFunction();
            // If [focusFirst]="true" automatically focus the first match
            if (this.filteredList.length > 0 && this.focusFirst) {
                this.selectedIdx = 0;
            }
        }
        else {
            this.notFound = false;
        }
    }
    /**
     * Default filter function, used unless customFilter is provided
     * @return {?}
     */
    defaultFilterFunction() {
        return this.data.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (typeof item === 'string') {
                // string logic, check equality of strings
                return item.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }
            else if (typeof item === 'object' && item instanceof Object) {
                // object logic, check property equality
                return item[this.searchKeyword].toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }
        }));
    }
    /**
     * Check if item is a string in the list.
     * @param {?} item
     * @return {?}
     */
    isTypeString(item) {
        return typeof item === 'string';
    }
    /**
     * Select item in the list.
     * @param {?} item
     * @return {?}
     */
    select(item) {
        this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
        this.isOpen = true;
        this.overlay = false;
        this.selected.emit(item);
        this.propagateChange(item);
        if (this.initialValue) {
            // check if history already exists in localStorage and then update
            /** @type {?} */
            const history = window.localStorage.getItem(`${this.historyIdentifier}`);
            if (history) {
                /** @type {?} */
                let existingHistory = JSON.parse(localStorage[`${this.historyIdentifier}`]);
                if (!(existingHistory instanceof Array))
                    existingHistory = [];
                // check if selected item exists in existingHistory
                if (!existingHistory.some((/**
                 * @param {?} existingItem
                 * @return {?}
                 */
                (existingItem) => !this.isTypeString(existingItem)
                    ? existingItem[this.searchKeyword] == item[this.searchKeyword] : existingItem == item))) {
                    existingHistory.unshift(item);
                    localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory));
                    // check if items don't exceed max allowed number
                    if (existingHistory.length >= this.historyListMaxNumber) {
                        existingHistory.splice(existingHistory.length - 1, 1);
                        localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory));
                    }
                }
                else {
                    // if selected item exists in existingHistory swap to top in array
                    if (!this.isTypeString(item)) {
                        // object logic
                        /** @type {?} */
                        const copiedExistingHistory = existingHistory.slice();
                        // copy original existingHistory array
                        /** @type {?} */
                        const selectedIndex = copiedExistingHistory.map((/**
                         * @param {?} el
                         * @return {?}
                         */
                        (el) => el[this.searchKeyword])).indexOf(item[this.searchKeyword]);
                        copiedExistingHistory.splice(selectedIndex, 1);
                        copiedExistingHistory.splice(0, 0, item);
                        localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
                    }
                    else {
                        // string logic
                        /** @type {?} */
                        const copiedExistingHistory = existingHistory.slice();
                        copiedExistingHistory.splice(copiedExistingHistory.indexOf(item), 1);
                        copiedExistingHistory.splice(0, 0, item);
                        localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
                    }
                }
            }
            else {
                this.saveHistory(item);
            }
        }
        else {
            this.saveHistory(item);
        }
        this.handleClose();
    }
    /**
     * Document click
     * @param {?} e event
     * @return {?}
     */
    handleClick(e) {
        /** @type {?} */
        let clickedComponent = e.target;
        /** @type {?} */
        let inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
                if (this.filteredList.length) {
                    this.handleOpen();
                }
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.handleClose();
        }
    }
    /**
     * Handle body overlay
     * @return {?}
     */
    handleOverlay() {
        this.overlay = false;
    }
    /**
     * Scroll items
     * @return {?}
     */
    handleScroll() {
        this.renderer.listen(this.filteredListElement.nativeElement, 'scroll', (/**
         * @return {?}
         */
        () => {
            this.scrollToEnd();
        }));
    }
    /**
     * Define panel state
     * @param {?} event
     * @return {?}
     */
    setPanelState(event) {
        if (event) {
            event.stopPropagation();
        }
        // If controls are untouched
        if (typeof this.manualOpen === 'undefined'
            && typeof this.manualClose === 'undefined') {
            this.isOpen = false;
            this.handleOpen();
        }
        // If one of the controls is untouched and other is deactivated
        if (typeof this.manualOpen === 'undefined'
            && this.manualClose === false
            || typeof this.manualClose === 'undefined'
                && this.manualOpen === false) {
            this.isOpen = false;
            this.handleOpen();
        }
        // if controls are touched but both are deactivated
        if (this.manualOpen === false && this.manualClose === false) {
            this.isOpen = false;
            this.handleOpen();
        }
        // if open control is touched and activated
        if (this.manualOpen) {
            this.isOpen = false;
            this.handleOpen();
            this.manualOpen = false;
        }
        // if close control is touched and activated
        if (this.manualClose) {
            this.isOpen = true;
            this.handleClose();
            this.manualClose = false;
        }
    }
    /**
     * Manual controls
     * @return {?}
     */
    open() {
        this.manualOpen = true;
        this.isOpen = false;
        this.handleOpen();
    }
    /**
     * @return {?}
     */
    close() {
        this.manualClose = true;
        this.isOpen = true;
        this.handleClose();
    }
    /**
     * @return {?}
     */
    focus() {
        this.handleFocus(event);
    }
    /**
     * @return {?}
     */
    clear() {
        this.remove(event);
    }
    /**
     * Remove search query
     * @param {?} e
     * @return {?}
     */
    remove(e) {
        e.stopPropagation();
        this.query = '';
        this.inputCleared.emit();
        this.propagateChange(this.query);
        this.setPanelState(e);
        if (this.data && !this.data.length) {
            this.notFound = false;
        }
    }
    /**
     * Initialize historyList search
     * @return {?}
     */
    initSearchHistory() {
        this.isHistoryListVisible = false;
        if (this.historyIdentifier && !this.query) {
            /** @type {?} */
            const history = window.localStorage.getItem(`${this.historyIdentifier}`);
            if (history) {
                this.isHistoryListVisible = true;
                this.filteredList = [];
                this.historyList = history ? JSON.parse(history) : [];
            }
            else {
                this.isHistoryListVisible = false;
            }
        }
        else {
            this.isHistoryListVisible = false;
        }
    }
    /**
     * @return {?}
     */
    handleOpen() {
        if (this.isOpen || this.isOpen && !this.isLoading) {
            return;
        }
        // If data exists
        if (this.data && this.data.length) {
            this.isOpen = true;
            this.overlay = true;
            this.filterList();
            this.opened.emit();
        }
    }
    /**
     * @return {?}
     */
    handleClose() {
        if (!this.isOpen) {
            this.isFocused = false;
            return;
        }
        this.isOpen = false;
        this.overlay = false;
        this.filteredList = [];
        this.selectedIdx = -1;
        this.notFound = false;
        this.isHistoryListVisible = false;
        this.isFocused = false;
        this.closed.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleFocus(e) {
        this.searchInput.nativeElement.focus();
        if (this.isFocused) {
            return;
        }
        this.inputFocused.emit(e);
        // if data exists then open
        if (this.data && this.data.length) {
            this.setPanelState(event);
        }
        this.isFocused = true;
    }
    /**
     * @return {?}
     */
    scrollToEnd() {
        if (this.isScrollToEnd) {
            return;
        }
        /** @type {?} */
        const scrollTop = this.filteredListElement.nativeElement
            .scrollTop;
        /** @type {?} */
        const scrollHeight = this.filteredListElement.nativeElement
            .scrollHeight;
        /** @type {?} */
        const elementHeight = this.filteredListElement.nativeElement
            .clientHeight;
        /** @type {?} */
        const atBottom = scrollHeight === scrollTop + elementHeight;
        if (atBottom) {
            this.scrolledToEnd.emit();
            this.isScrollToEnd = true;
        }
    }
    /**
     * Initialize keyboard events
     * @return {?}
     */
    initEventStream() {
        this.inputKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e)));
        this.inputKeyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e)));
        this.listenEventStream();
    }
    /**
     * Listen keyboard events
     * @return {?}
     */
    listenEventStream() {
        // key up event
        this.inputKeyUp$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        e => !isArrowUpDown(e.keyCode) &&
            !isEnter(e.keyCode) &&
            !isESC(e.keyCode) &&
            !isTab(e.keyCode))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.debounceTime)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.onKeyUp(e);
        }));
        // cursor up & down
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        e => isArrowUpDown(e.keyCode)))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            e.preventDefault();
            this.onFocusItem(e);
        }));
        // enter keyup
        this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        e => isEnter(e.keyCode)))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            //this.onHandleEnter();
        }));
        // enter keydown
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        e => isEnter(e.keyCode)))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.onHandleEnter();
        }));
        // ESC
        this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        e => isESC(e.keyCode)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.onEsc();
        }));
        // TAB
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        e => isTab(e.keyCode)))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.onTab();
        }));
        // delete
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        e => isBackspace(e.keyCode) || isDelete(e.keyCode)))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.onDelete();
        }));
    }
    /**
     * on keyup == when input changed
     * @param {?} e event
     * @return {?}
     */
    onKeyUp(e) {
        this.notFound = false; // search results are unknown while typing
        // if input is empty
        if (!this.query) {
            this.notFound = false;
            this.inputChanged.emit(e.target.value);
            this.inputCleared.emit();
            this.setPanelState(e);
        }
        // note that '' can be a valid query
        if (!this.query && this.query !== '') {
            return;
        }
        // if query >= to minQueryLength
        if (this.query.length >= this.minQueryLength) {
            this.inputChanged.emit(e.target.value);
            this.filterList();
            // If no results found
            if (!this.filteredList.length && !this.isLoading) {
                this.notFoundText ? this.notFound = true : this.notFound = false;
            }
            if (this.data && !this.data.length) {
                this.isOpen = true;
            }
        }
    }
    /**
     * Keyboard arrow top and arrow bottom
     * @param {?} e event
     * @return {?}
     */
    onFocusItem(e) {
        // move arrow up and down on filteredList or historyList
        if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList
            /** @type {?} */
            const totalNumItem = this.filteredList.length;
            if (e.key === 'ArrowDown') {
                /** @type {?} */
                let sum = this.selectedIdx;
                sum = (this.selectedIdx === null) ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
            else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                    this.selectedIdx = 0;
                }
                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
        }
        else {
            // historyList
            /** @type {?} */
            const totalNumItem = this.historyList.length;
            if (e.key === 'ArrowDown') {
                /** @type {?} */
                let sum = this.selectedIdx;
                sum = (this.selectedIdx === null) ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
            else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                    this.selectedIdx = 0;
                }
                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
        }
    }
    /**
     * Scroll to focused item
     * * \@param index
     * @param {?} index
     * @return {?}
     */
    scrollToFocusedItem(index) {
        /** @type {?} */
        let listElement = null;
        // Define list element
        if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList element
            listElement = this.filteredListElement.nativeElement;
        }
        else {
            // historyList element
            listElement = this.historyListElement.nativeElement;
        }
        /** @type {?} */
        const items = Array.prototype.slice.call(listElement.childNodes).filter((/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            if (node.nodeType === 1) {
                // if node is element
                return node.className.includes('item');
            }
            else {
                return false;
            }
        }));
        if (!items.length) {
            return;
        }
        /** @type {?} */
        const listHeight = listElement.offsetHeight;
        /** @type {?} */
        const itemHeight = items[index].offsetHeight;
        /** @type {?} */
        const visibleTop = listElement.scrollTop;
        /** @type {?} */
        const visibleBottom = listElement.scrollTop + listHeight - itemHeight;
        /** @type {?} */
        const targetPosition = items[index].offsetTop;
        if (targetPosition < visibleTop) {
            listElement.scrollTop = targetPosition;
        }
        if (targetPosition > visibleBottom) {
            listElement.scrollTop = targetPosition - listHeight + itemHeight;
        }
    }
    /**
     * Select item on enter click
     * @return {?}
     */
    onHandleEnter() {
        // click enter to choose item from filteredList or historyList
        if (this.selectedIdx > -1) {
            if (!this.historyList.length || !this.isHistoryListVisible) {
                // filteredList
                this.query = !this.isTypeString(this.filteredList[this.selectedIdx])
                    ? this.filteredList[this.selectedIdx][this.searchKeyword]
                    : this.filteredList[this.selectedIdx];
                this.saveHistory(this.filteredList[this.selectedIdx]);
                this.select(this.filteredList[this.selectedIdx]);
            }
            else {
                // historyList
                this.query = !this.isTypeString(this.historyList[this.selectedIdx])
                    ? this.historyList[this.selectedIdx][this.searchKeyword]
                    : this.historyList[this.selectedIdx];
                this.saveHistory(this.historyList[this.selectedIdx]);
                this.select(this.historyList[this.selectedIdx]);
            }
        }
        this.isHistoryListVisible = false;
        this.handleClose();
    }
    /**
     * Esc click
     * @return {?}
     */
    onEsc() {
        this.searchInput.nativeElement.blur();
        this.handleClose();
    }
    /**
     * Tab click
     * @return {?}
     */
    onTab() {
        this.searchInput.nativeElement.blur();
        this.handleClose();
    }
    /**
     * Delete click
     * @return {?}
     */
    onDelete() {
        this.isOpen = true;
    }
    /**
     * Select item to save in localStorage
     * @param {?} selected
     * @return {?}
     */
    saveHistory(selected) {
        if (this.historyIdentifier) {
            // check if selected item exists in historyList
            if (!this.historyList.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => !this.isTypeString(item)
                ? item[this.searchKeyword] == selected[this.searchKeyword] : item == selected))) {
                this.saveHistoryToLocalStorage([selected, ...this.historyList]);
                // check if items don't exceed max allowed number
                if (this.historyList.length >= this.historyListMaxNumber) {
                    this.historyList.splice(this.historyList.length - 1, 1);
                    this.saveHistoryToLocalStorage([selected, ...this.historyList]);
                }
            }
            else {
                // if selected item exists in historyList swap to top in array
                if (!this.isTypeString(selected)) {
                    // object logic
                    /** @type {?} */
                    const copiedHistoryList = this.historyList.slice();
                    // copy original historyList array
                    /** @type {?} */
                    const selectedIndex = copiedHistoryList.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => item[this.searchKeyword])).indexOf(selected[this.searchKeyword]);
                    copiedHistoryList.splice(selectedIndex, 1);
                    copiedHistoryList.splice(0, 0, selected);
                    this.saveHistoryToLocalStorage([...copiedHistoryList]);
                }
                else {
                    // string logic
                    /** @type {?} */
                    const copiedHistoryList = this.historyList.slice();
                    copiedHistoryList.splice(this.historyList.indexOf(selected), 1);
                    copiedHistoryList.splice(0, 0, selected);
                    this.saveHistoryToLocalStorage([...copiedHistoryList]);
                }
            }
        }
    }
    /**
     * Save item in localStorage
     * @param {?} selected
     * @return {?}
     */
    saveHistoryToLocalStorage(selected) {
        window.localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(selected));
    }
    /**
     * Remove item from localStorage
     * @param {?} index
     * @param {?} e event
     * @return {?}
     */
    removeHistoryItem(index, e) {
        e.stopPropagation();
        this.historyList = this.historyList.filter((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        (v, i) => i !== index));
        this.saveHistoryToLocalStorage(this.historyList);
        if (this.historyList.length == 0) {
            window.localStorage.removeItem(`${this.historyIdentifier}`);
            this.filterList();
        }
    }
    /**
     * Reset localStorage
     * @param {?} e event
     * @return {?}
     */
    resetHistoryList(e) {
        e.stopPropagation();
        this.historyList = [];
        window.localStorage.removeItem(`${this.historyIdentifier}`);
        this.filterList();
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["ng-autocomplete"]], contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
    } }, viewQuery: function AutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteredListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.historyListElement = _t.first);
    } }, hostAttrs: [1, "ng-autocomplete"], hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { data: "data", placeholder: "placeholder", heading: "heading", historyHeading: "historyHeading", historyListMaxNumber: "historyListMaxNumber", notFoundText: "notFoundText", minQueryLength: "minQueryLength", focusFirst: "focusFirst", disabled: "disabled", searchKeyword: "searchKeyword", initialValue: "initialValue", historyIdentifier: "historyIdentifier", isLoading: "isLoading", debounceTime: "debounceTime", customFilter: "customFilter", itemTemplate: "itemTemplate", notFoundTemplate: "notFoundTemplate" }, outputs: { selected: "selected", inputChanged: "inputChanged", inputFocused: "inputFocused", inputCleared: "inputCleared", opened: "opened", closed: "closed", scrolledToEnd: "scrolledToEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => AutocompleteComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 22, consts: [[1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "autocomplete", "off", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus", "blur"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], [1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], [1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) { return ctx.query = $event; })("input", function AutocompleteComponent_Template_input_input_2_listener($event) { return ctx.onChange($event); })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) { return ctx.handleFocus($event); })("blur", function AutocompleteComponent_Template_input_blur_2_listener($event) { return ctx.onTouched($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutocompleteComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteComponent_div_5_Template, 13, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutocompleteComponent_div_7_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteComponent_li_10_Template, 3, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutocompleteComponent_div_12_Template, 6, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AutocompleteComponent_li_15_Template, 6, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AutocompleteComponent_div_16_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AutocompleteComponent_div_17_Template, 1, 0, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c5, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredList.length > 0 && ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c5, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlay);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]]; }, pipes: function () { return [HighlightPipe]; }, styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"], encapsulation: 2 });
/** @nocollapse */
AutocompleteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
AutocompleteComponent.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput',] }],
    filteredListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filteredListElement',] }],
    historyListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['historyListElement',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchKeyword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    historyIdentifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    historyHeading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    historyListMaxNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minQueryLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focusFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputFocused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputCleared: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrolledToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-autocomplete',
                template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput\n           type=\"text\"\n           placeholder={{placeholder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           (blur)=onTouched($event)\n           [disabled]=\"disabled\"\n           autocomplete=\"off\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"autocomplete-overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                         * @return {?}
                         */() => AutocompleteComponent)),
                        multi: true
                    }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    '(document:click)': 'handleClick($event)',
                    'class': 'ng-autocomplete'
                },
                styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], historyHeading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], historyListMaxNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minQueryLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focusFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputFocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputCleared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrolledToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }], filteredListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filteredListElement']
        }], historyListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['historyListElement']
        }], searchKeyword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], historyIdentifier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], debounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HighlightPipe {
    /**
     * @param {?} text
     * @param {?} search
     * @param {?=} searchKeyword
     * @return {?}
     */
    transform(text, search, searchKeyword) {
        /** @type {?} */
        let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        pattern = pattern.split(' ').filter((/**
         * @param {?} t
         * @return {?}
         */
        (t) => {
            return t.length > 0;
        })).join('|');
        /** @type {?} */
        const regex = new RegExp(pattern, 'gi');
        if (!search) {
            return text;
        }
        if (searchKeyword) {
            /** @type {?} */
            const name = text[searchKeyword].replace(regex, (/**
             * @param {?} match
             * @return {?}
             */
            (match) => `<b>${match}</b>`));
            // copy original object
            /** @type {?} */
            const text2 = Object.assign({}, text);
            // set bold value into searchKeyword of copied object
            text2[searchKeyword] = name;
            return text2;
        }
        else {
            return search ? text.replace(regex, (/**
             * @param {?} match
             * @return {?}
             */
            (match) => `<b>${match}</b>`)) : text;
        }
    }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "highlight", type: HighlightPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'highlight'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutocompleteLibModule {
}
AutocompleteLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutocompleteLibModule });
AutocompleteLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AutocompleteLibModule_Factory(t) { return new (t || AutocompleteLibModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteLibModule, { declarations: function () { return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]; }, exports: function () { return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
                exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-ng-autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-ng-autocomplete.js.map

/***/ }),

/***/ "lIoM":
/*!************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/request-detail/request-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: RequestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailComponent", function() { return RequestDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/http.service */ "Tdnt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "bOtU");









function RequestDetailComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.data == null ? null : ctx_r0.data.vci_opi_phone_code, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r0.data == null ? null : ctx_r0.data.vci_opi_cell_phone, "(000) 000-0000"), "");
} }
function RequestDetailComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data == null ? null : ctx_r1.data.line);
} }
function RequestDetailComponent_tr_85_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Daily");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_85_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_85_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_85_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repeats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestDetailComponent_tr_85_td_3_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestDetailComponent_tr_85_td_4_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestDetailComponent_tr_85_td_5_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestDetailComponent_tr_85_td_6_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.data == null ? null : ctx_r2.data.repeats) == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.data == null ? null : ctx_r2.data.repeats) == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.data == null ? null : ctx_r2.data.repeats) == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.data == null ? null : ctx_r2.data.repeats) == "4");
} }
function RequestDetailComponent_tr_86_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_86_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Second Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_86_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Third Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_86_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fourth Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Every");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestDetailComponent_tr_86_td_3_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestDetailComponent_tr_86_td_4_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestDetailComponent_tr_86_td_5_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestDetailComponent_tr_86_td_6_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.data == null ? null : ctx_r3.data.every) == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.data == null ? null : ctx_r3.data.every) == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.data == null ? null : ctx_r3.data.every) == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.data == null ? null : ctx_r3.data.every) == "4");
} }
function RequestDetailComponent_tr_87_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Daily");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monday, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tuesday, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wednesay, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thursday, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Friday, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Saturday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sunday, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_87_td_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestDetailComponent_tr_87_td_4_span_1_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestDetailComponent_tr_87_td_4_span_1_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestDetailComponent_tr_87_td_4_span_1_span_3_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestDetailComponent_tr_87_td_4_span_1_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestDetailComponent_tr_87_td_4_span_1_span_5_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestDetailComponent_tr_87_td_4_span_1_span_6_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestDetailComponent_tr_87_td_4_span_1_span_7_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r43 == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r43 == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r43 == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r43 == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r43 == "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r43 == "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r43 == "0");
} }
function RequestDetailComponent_tr_87_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestDetailComponent_tr_87_td_4_span_1_Template, 8, 7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.event_at);
} }
function RequestDetailComponent_tr_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestDetailComponent_tr_87_td_3_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestDetailComponent_tr_87_td_4_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.len == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.len != 7);
} }
function RequestDetailComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Event Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r5.data == null ? null : ctx_r5.data.event_start_date, "MM-dd-yyyy"));
} }
function RequestDetailComponent_tr_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Event End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r6.data == null ? null : ctx_r6.data.event_end_date, "MM-dd-yyyy"));
} }
function RequestDetailComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Event Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.data == null ? null : ctx_r7.data.event_start_time);
} }
function RequestDetailComponent_tr_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Event End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.data == null ? null : ctx_r8.data.event_end_time);
} }
function RequestDetailComponent_h5_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_h5_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_h5_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_h5_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_h5_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reassign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_h5_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailComponent_tr_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Caseworker worker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.data == null ? null : ctx_r15.data.caseworker_name);
} }
function RequestDetailComponent_tr_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cell Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r16.data == null ? null : ctx_r16.data.phone_code, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r16.data == null ? null : ctx_r16.data.cellphone_contact_person, "(000) 000-0000"), " ");
} }
function RequestDetailComponent_tr_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Name of Person at Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.data == null ? null : ctx_r17.data.name_of_contact_person);
} }
function RequestDetailComponent_tr_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.data == null ? null : ctx_r18.data.email);
} }
function RequestDetailComponent_tr_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Practice Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.data == null ? null : ctx_r19.data.practice_name);
} }
function RequestDetailComponent_tr_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.data == null ? null : ctx_r20.data.position);
} }
function RequestDetailComponent_tr_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Provider Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.data == null ? null : ctx_r21.data.provider_name);
} }
function RequestDetailComponent_tr_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r22.data == null ? null : ctx_r22.data.contact_person_phone_code, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r22.data == null ? null : ctx_r22.data.contact_person_cellphone, "(000) 000-0000"), " ");
} }
function RequestDetailComponent_tr_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Case Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.data == null ? null : ctx_r23.data.building_name);
} }
function RequestDetailComponent_tr_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.data == null ? null : ctx_r24.data.clientName);
} }
function RequestDetailComponent_tr_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trails/Case Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.data == null ? null : ctx_r25.data.trails);
} }
function RequestDetailComponent_tr_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home Visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r26.data == null ? null : ctx_r26.data.home_visit) ? "Yes" : "No");
} }
function RequestDetailComponent_tr_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.data == null ? null : ctx_r27.data.address);
} }
function RequestDetailComponent_tr_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "School/Building Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.data == null ? null : ctx_r28.data.building_address);
} }
function RequestDetailComponent_tr_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.data == null ? null : ctx_r29.data.notes);
} }
function RequestDetailComponent_div_122_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngb-rating", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", s_r52.profile_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", s_r52.first_name, " ", s_r52.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("rate", s_r52.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r52.review);
} }
function RequestDetailComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestDetailComponent_div_122_div_4_Template, 10, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.ratingsArr);
} }
function RequestDetailComponent_div_123_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngb-rating", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", s_r55.profile_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", s_r55.first_name, " ", s_r55.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("rate", s_r55.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r55.review);
} }
function RequestDetailComponent_div_123_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestDetailComponent_div_123_div_5_div_1_Template, 8, 6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r55 = ctx.$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r55.user_id == ctx_r53.userId);
} }
function RequestDetailComponent_div_123_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngb-rating", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", s_r58.profile_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", s_r58.first_name, " ", s_r58.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("rate", s_r58.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r58.review);
} }
function RequestDetailComponent_div_123_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestDetailComponent_div_123_div_7_div_1_Template, 8, 6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r58 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r58.user_id != ctx_r54.userId);
} }
function RequestDetailComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestDetailComponent_div_123_div_5_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestDetailComponent_div_123_div_7_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.ratingsArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.ratingsArr);
} }
class RequestDetailComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.event_at = [];
        this.userId = localStorage.getItem('userId');
        this.showFalse = 0;
        this.ratingsArr = [];
        this.id = route.snapshot.params['id'];
    }
    ngOnInit() {
        this.getRequestDetails();
        this.getRatings();
    }
    GetAllPagesPermission() {
        this.service.get('getClientRoleMenusForPages/' + JSON.parse(localStorage.getItem('roleId'))).subscribe(res => {
            var count = 0;
            for (var i = 0; i < res['data'].length; ++i) {
                if (res['data'][i].module_id == 7) {
                    if (res['data'][i].view_permission == 'false') {
                        this.router.navigate(['/client-request/all-request-list']);
                    }
                    else {
                        count = count + 1;
                        alert(count);
                    }
                }
                else {
                    let obj = res['data'].find(o => o.module_id === 7);
                    alert(JSON.stringify(obj));
                    if (count == 0) {
                        this.router.navigate(['/client-request/all-request-list']);
                    }
                }
            }
        });
    }
    getRequestDetails() {
        this.service.get("getRequestDetails/" + this.id).subscribe((res) => {
            this.data = res['data'][0];
            console.log("==========this.data", this.data);
            if (this.data.recurrent_assignment == "1") {
                if (this.data.repeats == "1" || this.data.repeats == "2") {
                    this.event_at = this.data.event_at.split(",");
                    this.len = this.event_at.length;
                }
            }
        });
    }
    getRatings() {
        this.service.get("getRatings/" + this.id).subscribe((res) => {
            this.ratingsArr = res['data'];
            for (var i = 0; i < res['data'].length; ++i) {
                if (res['data'][i].user_id == this.userId) {
                    this.showFalse = 1;
                }
            }
        });
    }
}
RequestDetailComponent.ɵfac = function RequestDetailComponent_Factory(t) { return new (t || RequestDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RequestDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestDetailComponent, selectors: [["app-request-detail"]], decls: 124, vars: 52, consts: [[1, "row", "mb-3"], [1, "col-md-6"], [1, "card"], [1, "card-body"], ["id", "print-area"], [1, "font-weight-bold"], [1, "mt-3", "mb-4", "border-top"], [1, "request_Tab", "userstable", "mb-3", "mb-sm-0"], [4, "ngIf"], ["class", "font-weight-bold progress_btn text-warning", 4, "ngIf"], ["class", "font-weight-bold progress_btn assign-color", 4, "ngIf"], ["class", "font-weight-bold progress_btn text-primary", 4, "ngIf"], ["class", "font-weight-bold progress_btn text-success", 4, "ngIf"], ["class", "font-weight-bold progress_btn text-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "font-weight-bold", "progress_btn", "text-warning"], [1, "font-weight-bold", "progress_btn", "assign-color"], [1, "font-weight-bold", "progress_btn", "text-primary"], [1, "font-weight-bold", "progress_btn", "text-success"], [1, "font-weight-bold", "progress_btn", "text-danger"], [1, "text-lowercase"], [1, "row"], [1, "col-sm-12"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], [1, "card", "card-profile-1", "mb-5"], [1, "card-body", "text-center"], [1, "avatar", "box-shadow-2", "mb-3"], ["onerror", "this.src='./assets/images/avatar.jpg';", 3, "src"], [1, "m-0"], [1, "newrating", "ratingdetails", 3, "max", "rate"], ["class", "card card-profile-1 mb-5", 4, "ngFor", "ngForOf"], ["class", "card card-profile-1", 4, "ngFor", "ngForOf"], ["class", "card-body text-center", 4, "ngIf"], [1, "card", "card-profile-1"]], template: function RequestDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "IR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enterd By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Requested By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Requested Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Assignment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RequestDetailComponent_tr_47_Template, 6, 5, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RequestDetailComponent_tr_48_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Simultaneous Interpreting?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Assignment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "From Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "To Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Recurrent Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Request Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, RequestDetailComponent_tr_85_Template, 7, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, RequestDetailComponent_tr_86_Template, 7, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, RequestDetailComponent_tr_87_Template, 5, 2, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, RequestDetailComponent_tr_88_Template, 6, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, RequestDetailComponent_tr_89_Template, 6, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, RequestDetailComponent_tr_90_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, RequestDetailComponent_tr_91_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Appointment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, RequestDetailComponent_h5_97_Template, 2, 0, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, RequestDetailComponent_h5_98_Template, 2, 0, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, RequestDetailComponent_h5_99_Template, 2, 0, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, RequestDetailComponent_h5_100_Template, 2, 0, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, RequestDetailComponent_h5_101_Template, 2, 0, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, RequestDetailComponent_h5_102_Template, 2, 0, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, RequestDetailComponent_tr_107_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, RequestDetailComponent_tr_108_Template, 6, 5, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, RequestDetailComponent_tr_109_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, RequestDetailComponent_tr_110_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, RequestDetailComponent_tr_111_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, RequestDetailComponent_tr_112_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, RequestDetailComponent_tr_113_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, RequestDetailComponent_tr_114_Template, 6, 5, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, RequestDetailComponent_tr_115_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, RequestDetailComponent_tr_116_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, RequestDetailComponent_tr_117_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, RequestDetailComponent_tr_118_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, RequestDetailComponent_tr_119_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, RequestDetailComponent_tr_120_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, RequestDetailComponent_tr_121_Template, 5, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, RequestDetailComponent_div_122_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, RequestDetailComponent_div_123_Template, 8, 2, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.ir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.entered_by);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.client_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.requested_by);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 46, ctx.data == null ? null : ctx.data.request_date, "MM-dd-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.assignment_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.platform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.platform) == "VCI + OPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.platform) == "VCI + OPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.data == null ? null : ctx.data.receivers_required) ? "Yes" : "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](64, 49, ctx.data == null ? null : ctx.data.assignment_date, "MM-dd-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.from_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.to_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.data == null ? null : ctx.data.recurrent_assignment) == "1" ? "YES" : "NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.created_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.recurrent_assignment) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.recurrent_assignment) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.event_at) != null && (ctx.data == null ? null : ctx.data.recurrent_assignment) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.recurrent_assignment) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.recurrent_assignment) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.recurrent_assignment) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.recurrent_assignment) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.status) == "0" && ((ctx.data == null ? null : ctx.data.ir_isReject) == "0" || (ctx.data == null ? null : ctx.data.ir_isReject) == null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.status) == "1" && ((ctx.data == null ? null : ctx.data.ir_isReject) == "0" || (ctx.data == null ? null : ctx.data.ir_isReject) == null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.status) == "2" && ((ctx.data == null ? null : ctx.data.ir_isReject) == "0" || (ctx.data == null ? null : ctx.data.ir_isReject) == null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.status) == "3" && ((ctx.data == null ? null : ctx.data.ir_isReject) == "0" || (ctx.data == null ? null : ctx.data.ir_isReject) == null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.status) == "4" && ((ctx.data == null ? null : ctx.data.ir_isReject) == "0" || (ctx.data == null ? null : ctx.data.ir_isReject) == null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.ir_isReject) == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.caseworker_name) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.cellphone_contact_person) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.name_of_contact_person) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.email) != null && (ctx.data == null ? null : ctx.data.email) != "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.practice_name) != null && (ctx.data == null ? null : ctx.data.practice_name) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.position) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.provider_name) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.contact_person_phone_code) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.building_name) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.clientName) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.trails) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.home_visit) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.address) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.building_address) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.notes) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratingsArr.length > 0 && ctx.showFalse == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratingsArr.length > 0 && ctx.showFalse == 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRating"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"]], styles: [".notes_text[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.assign-color[_ngcontent-%COMP%] {\n  color: #00FFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvcmVxdWVzdC1kZXRhaWwvcmVxdWVzdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7RUFDSSxjQUFhO0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvcmVxdWVzdC1kZXRhaWwvcmVxdWVzdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZXNfdGV4dHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLmFzc2lnbi1jb2xvcntcbiAgICBjb2xvcjojMDBGRkZGO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-detail',
                templateUrl: './request-detail.component.html',
                styleUrls: ['./request-detail.component.scss']
            }]
    }], function () { return [{ type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "p4GS":
/*!************************************************************************************!*\
  !*** ./src/app/views/request-scheduler/accept-request/accept-request.component.ts ***!
  \************************************************************************************/
/*! exports provided: AcceptRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptRequestComponent", function() { return AcceptRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");


















function AcceptRequestComponent_ngx_datatable_23_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " IR ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r27 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r27.ir, " ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Client Name ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r29 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r29.client_name, " ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " LOB ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r31 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.lob_name, " ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Assignment Type ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r33 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r33.assignment_type, " ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Language ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r35 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r35.lang_name, " ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Interpreter ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r37 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r37.interpreter_name, " ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Requested date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", row_r39.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, row_r39.created_at, "MM/dd/yyyy"));
} }
function AcceptRequestComponent_ngx_datatable_23_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Status ");
} }
function AcceptRequestComponent_ngx_datatable_23_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " In Progress ");
} }
function AcceptRequestComponent_ngx_datatable_23_ngx_datatable_column_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AcceptRequestComponent_ngx_datatable_23_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AcceptRequestComponent_ngx_datatable_23_ngx_datatable_column_22_ng_template_2_Template, 1, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Action ");
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx_r49.reminder_popup_open(row_r45.user_id, row_r45.ris_id, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx_r52.trackingLinkSend(row_r45.user_id, row_r45.ris_id, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tracking link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx_r55.requestComplete(row_r45.ris_id, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcceptRequestComponent_ngx_datatable_23_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ngx_datatable_23_ng_template_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const row_r45 = ctx.row; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.viewDetail(row_r45.ris_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_2_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_3_Template, 2, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AcceptRequestComponent_ngx_datatable_23_ng_template_25_button_4_Template, 2, 0, "button", 37);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.roleId == "1" || ctx_r25.roleId == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.roleId != "1" && ctx_r25.roleId != "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.roleId != "1" && ctx_r25.roleId != "4");
} }
function AcceptRequestComponent_ngx_datatable_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AcceptRequestComponent_ngx_datatable_23_ng_template_2_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AcceptRequestComponent_ngx_datatable_23_ng_template_3_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AcceptRequestComponent_ngx_datatable_23_ng_template_5_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AcceptRequestComponent_ngx_datatable_23_ng_template_6_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AcceptRequestComponent_ngx_datatable_23_ng_template_8_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AcceptRequestComponent_ngx_datatable_23_ng_template_9_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AcceptRequestComponent_ngx_datatable_23_ng_template_11_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AcceptRequestComponent_ngx_datatable_23_ng_template_12_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AcceptRequestComponent_ngx_datatable_23_ng_template_14_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AcceptRequestComponent_ngx_datatable_23_ng_template_15_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable-column", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AcceptRequestComponent_ngx_datatable_23_ng_template_17_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AcceptRequestComponent_ngx_datatable_23_ng_template_18_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AcceptRequestComponent_ngx_datatable_23_ng_template_20_Template, 2, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AcceptRequestComponent_ngx_datatable_23_ng_template_21_Template, 3, 5, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AcceptRequestComponent_ngx_datatable_23_ngx_datatable_column_22_Template, 3, 2, "ngx-datatable-column", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AcceptRequestComponent_ngx_datatable_23_ng_template_24_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AcceptRequestComponent_ngx_datatable_23_ng_template_25_Template, 5, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("rows", ctx_r1.filteredUser)("rowClass", ctx_r1.getRowClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.roleId == "1" || ctx_r1.roleId == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120)("sortable", false);
} }
function AcceptRequestComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We couldn't find what you're looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcceptRequestComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_25_Template_button_click_3_listener() { const modal_r60 = ctx.$implicit; return modal_r60.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure? you want to Completed task?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_25_Template_button_click_11_listener() { const modal_r60 = ctx.$implicit; return modal_r60.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_25_Template_button_click_13_listener() { const modal_r60 = ctx.$implicit; return modal_r60.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcceptRequestComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_27_Template_button_click_3_listener() { const modal_r64 = ctx.$implicit; return modal_r64.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_27_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.email_check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_27_Template_input_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.sms_check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Push ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_27_Template_input_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.push_check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Call ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_27_Template_input_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.call_Check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_27_Template_button_click_30_listener() { const modal_r64 = ctx.$implicit; return modal_r64.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_27_Template_button_click_32_listener() { const modal_r64 = ctx.$implicit; return modal_r64.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.noteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.ReadOnlyStyleGuideNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.ReadOnlyStyleGuideNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.ReadOnlyStyleGuideNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.call_check);
} }
function AcceptRequestComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_29_Template_button_click_3_listener() { const modal_r73 = ctx.$implicit; return modal_r73.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure? you want to send tracking link?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_29_Template_button_click_11_listener() { const modal_r73 = ctx.$implicit; return modal_r73.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestComponent_ng_template_29_Template_button_click_13_listener() { const modal_r73 = ctx.$implicit; return modal_r73.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AcceptRequestComponent {
    constructor(productService, modalService, fb, toastr, service, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.fb = fb;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.ReadOnlyStyleGuideNotes = false;
        this.call_check = false;
        // searchControl: FormControl = new FormControl();
        //search calendar
        this.search_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.getRowClass = (row) => {
            return {
                'progressRequest': row.status == "2",
            };
        };
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        // console.log("userId-",this.userId)
        // console.log("roleId-",this.roleId)
        this.interpreterRequestData('1');
        // this.searchControl.valueChanges
        //   .pipe(debounceTime(200))
        //   .subscribe(value => {
        //     this.filerData(value);
        //   });
        this.createForm();
        /*this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        this.array_Obj = this.roleData['data'][0];
        if(this.array_Obj.id){
          this.array_Obj = this.roleData['data'][0];
          console.log("roleData", this.array_Obj);
        }
        */
    }
    /*========== Form Value Start Here========*/
    createForm() {
        this.noteForm = this.fb.group({
            notes: ['']
        });
    }
    /*========== Form Value End Here========*/
    // filerData(val) {
    //   if (val) {
    //     val = val.toLowerCase();
    //   } else {
    //     console.log("xxxxxxx", this.filteredUser);
    //     return this.filteredUser = [... this.userData];
    //   }
    //   const columns = Object.keys(this.userData[0]);
    //   if (!columns.length) {
    //     return;
    //   }
    //   const rows = this.userData.filter(function (d) {
    //     for (let i = 0; i <= columns.length; i++) {
    //       const column = columns[i];
    //       // console.log(d[column]);
    //       if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
    //         return true;
    //       }
    //     }
    //   });
    //   this.filteredUser = rows;
    // }
    interpreterRequestData(e) {
        this.allData = this.search_name.value;
        this.startDate = this.range.value.start_date;
        this.endDate = this.range.value.end_date;
        this.service.interpreterRequestList(this.roleId, this.userId, 2, this.allData, this.startDate, this.endDate)
            .subscribe(res => {
            console.log("==============resssss", res);
            if (res['status'] == '1') {
                console.log("api response", res);
                this.list_Obj = res['data'];
                this.userData = [...res['data']];
                // console.log("listttttttt", this.list_Obj);
                this.filteredUser = this.list_Obj;
            }
        });
        console.log("=======================filter", this.filteredUser);
    }
    // request completed by interpreter
    requestComplete(id, modal) {
        console.log("idddddddddd", id);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
            this.service.interpreterReqCompleted({ id: id, userId: this.userId })
                .subscribe(res => {
                this.msg = res;
                if (res['status'] == '1') {
                    this.toastr.success(this.msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
                    this.router.navigate(['/interpreter-request/completed-list']);
                }
                // else{
                //   this.toastr.success(this.status_msg.message,'', { timeOut: 1000 });
                //   this.router.navigate(['/interpreter-request/list']);
                // }
            });
        }, (reason) => {
        });
    }
    //send reminder
    reminder_popup_open(id, risId, modal) {
        console.log("iddddddd", id, risId);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
            this.service.getReminderRequest(id, risId, this.noteForm.value.notes)
                .subscribe(res => {
                this.reminder = res;
                // this.msg.message = res;
                console.log("reminder form", this.reminder);
                if (res['status'] == 1) {
                    this.toastr.success(this.reminder.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                    this.router.navigate(['/interpreter-request/accept-list']);
                }
            });
        }, (reason) => {
        });
    }
    // trackingLinkSend(row.ris_id, linkConfirmModal)
    trackingLinkSend(id, risId, modal) {
        console.log("iddddddd", id, risId);
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
            this.service.interpreterTrackingLinkSend(id, risId).subscribe(res => {
                this.resp_msg = res;
                // this.msg.message = res;
                console.log("reminder form", this.reminder);
                if (res['status'] == 1) {
                    this.toastr.success(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                    this.router.navigate(['/interpreter-request/accept-list']);
                }
                else {
                    this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
                    this.router.navigate(['/interpreter-request/accept-list']);
                }
            });
        }, (reason) => {
        });
    }
    call_Check() {
        if (this.ReadOnlyStyleGuideNotes) {
            this.ReadOnlyStyleGuideNotes = false;
        }
        else {
            this.ReadOnlyStyleGuideNotes = true;
        }
    }
    email_check() {
        if (this.call_check) {
            this.call_check = false;
        }
        else {
            this.call_check = true;
        }
    }
    sms_check() {
        if (this.call_check) {
            this.call_check = true;
        }
        else {
            this.call_check = false;
        }
    }
    push_check() {
        if (this.call_check) {
            this.call_check = true;
        }
        else {
            this.call_check = false;
        }
    }
    viewDetail(request_id) {
        console.log("id--", request_id);
        this.service.getRequestDetail(request_id).subscribe(res => {
            if (res['status'] == 1) {
                this.view_obj = res['data'][0];
                console.log("api data", this.view_obj);
                localStorage.setItem('userViewData', JSON.stringify(this.view_obj));
                this.router.navigate(['/request-scheduler/details', request_id]);
                // this.router.navigate(['/user-request/request-view', request_id]);
            }
            else {
                this.resp_msg = res;
                this.toastr.error(this.resp_msg.message, '', { timeOut: 2000, positionClass: 'toast-top-center' });
            }
        });
    }
}
AcceptRequestComponent.ɵfac = function AcceptRequestComponent_Factory(t) { return new (t || AcceptRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AcceptRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcceptRequestComponent, selectors: [["app-accept-request"]], decls: 31, vars: 6, consts: [[1, ""], [1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["id", "search", "placeholder", "Search", "type", "text", 1, "form-control", "form-control-rounded", 3, "formControl", "keyup"], [1, "col-md-4", "dummy_text"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start_date", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end_date", "placeholder", "End date", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-12", "requesttable", "bluetable", "bluetablenew"], [1, "card", "o-hidden"], ["style", "height: 500px; box-shadow: none", "class", "material fullscreen", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "rowClass", 4, "ngIf"], ["class", "col-md-12 text-center", 4, "ngIf"], ["completeConfirmModal", ""], ["reminderConfirmModal", ""], ["linkConfirmModal", ""], [1, "material", "fullscreen", 2, "height", "500px", "box-shadow", "none", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "rowClass"], ["name", "IR", "prop", "ir"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Client Name", "prop", "client_name"], ["name", "LOB", "prop", "lob_name"], ["name", "Assignment Type", "prop", "assignment_type"], ["name", "Language", "prop", "lang_name"], ["name", "Interpreter Name", "prop", "interpreter_name"], [3, "width", "sortable", 4, "ngIf"], [3, "width", "sortable"], ["title", "Requested date"], [3, "title"], [1, "btn", "btn-outline-secondary", "mr-1", 3, "click"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger ml-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-outline-danger", "ml-2", 3, "click"], [1, "col-md-12", "text-center"], ["src", "../assets/images/nosearch.png"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"], [3, "formGroup"], ["formControlName", "notes", "rows", "3", "placeholder", "Optional", 1, "form-control"], [1, "form-group", "check_box"], [1, "container"], ["id", "check1", "type", "checkbox", 3, "disabled", "click"], [1, "checkmark"], ["id", "check2", "type", "checkbox", 3, "disabled", "click"], ["id", "check3", "type", "checkbox", 3, "disabled", "click"], ["id", "check4", "type", "checkbox", 3, "disabled", "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-success", "btn-rounded", 3, "click"]], template: function AcceptRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AcceptRequestComponent_Template_input_keyup_12_listener($event) { return ctx.interpreterRequestData($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function AcceptRequestComponent_Template_input_dateChange_16_listener($event) { return ctx.interpreterRequestData($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function AcceptRequestComponent_Template_input_dateChange_17_listener($event) { return ctx.interpreterRequestData($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AcceptRequestComponent_ngx_datatable_23_Template, 26, 10, "ngx-datatable", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AcceptRequestComponent_div_24_Template, 7, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AcceptRequestComponent_ng_template_25_Template, 15, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AcceptRequestComponent_ng_template_27_Template, 34, 5, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AcceptRequestComponent_ng_template_29_Template, 15, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredUser == null ? null : ctx.filteredUser.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list_Obj == null ? null : ctx.list_Obj.length) <= 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".check_box[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0px 8px !important;\n  border-radius: 15px !important;\n  outline: initial !important;\n  background: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #47404f;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  background: #fff;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 3px 0;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none !important;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-date-range-input {\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n  bottom: 7px;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::-moz-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n.dummy_text[_ngcontent-%COMP%]     .mat-input-element::placeholder {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWVzdC1zY2hlZHVsZXIvYWNjZXB0LXJlcXVlc3QvYWNjZXB0LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2xCOztBQUVHO0VBQ0EsZ0JBQWdCO0FBQ25COztBQUNHO0VBQ0MsY0FBYztBQUVsQjs7QUFBRztFQUNDLHdCQUF3QjtBQUc1Qjs7QUFERztFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBSWY7O0FBREc7RUFDQSxjQUFjO0FBSWpCOztBQUxHO0VBQ0EsY0FBYztBQUlqQjs7QUFMRztFQUNBLGNBQWM7QUFJakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXF1ZXN0LXNjaGVkdWxlci9hY2NlcHQtcmVxdWVzdC9hY2NlcHQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja19ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tIHNlYXJjaCBjYWxlbmRhciBTdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4uZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgcGFkZGluZzogMHB4IDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGNvbG9yOiAjNDc0MDRmO1xuICAgXG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcbiAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICB9XG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDNweCAwO1xuICAgfVxuICAgLmR1bW15X3RleHQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cbiAgIC5kdW1teV90ZXh0IDo6bmctZGVlcCAgLm1hdC1kYXRlLXJhbmdlLWlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogN3B4O1xuICAgfVxuICAgXG4gICAuZHVtbXlfdGV4dCA6Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlcntcbiAgIGNvbG9yOiAjOWI5YjliO1xuICAgfVxuICAgLy8gLS0tLS0tLS0tLS0tLS0gc2VhcmNoIGNhbGVuZGFyIEVuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS8vIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcceptRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accept-request',
                templateUrl: './accept-request.component.html',
                styleUrls: ['./accept-request.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-request-scheduler-request-scheduler-module.js.map