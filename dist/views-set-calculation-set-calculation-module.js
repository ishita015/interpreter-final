(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-set-calculation-set-calculation-module"],{

/***/ "HFpx":
/*!*************************************************************************!*\
  !*** ./src/app/views/set-calculation/set-calculation-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SetCalculationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCalculationRoutingModule", function() { return SetCalculationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _set_calculation_add_set_calculation_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-calculation-add/set-calculation-add.component */ "PLFQ");





const routes = [
    { path: 'set-calculation-add', component: _set_calculation_add_set_calculation_add_component__WEBPACK_IMPORTED_MODULE_2__["SetCalculationAddComponent"] },
];
class SetCalculationRoutingModule {
}
SetCalculationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SetCalculationRoutingModule });
SetCalculationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SetCalculationRoutingModule_Factory(t) { return new (t || SetCalculationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SetCalculationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetCalculationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PLFQ":
/*!********************************************************************************************!*\
  !*** ./src/app/views/set-calculation/set-calculation-add/set-calculation-add.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SetCalculationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCalculationAddComponent", function() { return SetCalculationAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/validations.service */ "i8sq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _shared_services_excel_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/excel-services.service */ "oa8T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");















function SetCalculationAddComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "After Hours %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Weekend %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Holidays %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Minute %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Rush Fee %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Weekend After Hours %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Holiday After Hours %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCalculationAddComponent_div_25_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addCal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.calcutionForm);
} }
function SetCalculationAddComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "After Hours %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Weekend %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Holidays %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Minute %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Rush Fee %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Weekend After Hours %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Holiday After Hours %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SetCalculationAddComponent_div_26_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.start_end_time($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCalculationAddComponent_div_26_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addSpecialOffer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.SpecialForm);
} }
class SetCalculationAddComponent {
    constructor(validation, fb, toastr, excelService, router, service) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.excelService = excelService;
        this.router = router;
        this.service = service;
        this.setcal_form = true;
        this.specialoff_form = false;
        this.excel = [];
        this.specialOffer = [];
        this.excel1 = [];
    }
    ngOnInit() {
        this.createForm();
        this.createForm1();
        this.detailCal();
        this.detailSpecial();
    }
    /*===================================== Default Calcution Start Here =============================*/
    /*========== set calcution Form Value Start Here========*/
    createForm() {
        this.calcutionForm = this.fb.group({
            after_hours: [''],
            weekend: [''],
            holidays: [''],
            last_minute: [''],
            rush_fee: [''],
            weekend_after_hours: [''],
            holiday_after_hours: [''],
            type: ['1']
        });
    }
    /*==========set calcution Form Value End Here========*/
    /*==========add set calcution start Here========*/
    addCal() {
        this.service.getCalAdd(this.calcutionForm.value)
            .subscribe(res => {
            if (res['status'] == 1) {
                this.cal_Obj = res;
                this.cal_Msg = res;
                this.detailCal();
                this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
            else {
                this.cal_Obj = res;
                this.cal_Msg = res;
                this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
    }
    /*==========add set calcution end Here========*/
    /*==========edit set calcution start Here========*/
    patchValue() {
        this.calcutionForm.get('after_hours').patchValue(this.detail_Obj.after_hours);
        this.calcutionForm.get('weekend').patchValue(this.detail_Obj.weekend);
        this.calcutionForm.get('holidays').patchValue(this.detail_Obj.holidays);
        this.calcutionForm.get('last_minute').patchValue(this.detail_Obj.last_minute);
        this.calcutionForm.get('rush_fee').patchValue(this.detail_Obj.rush_fee);
        this.calcutionForm.get('weekend_after_hours').patchValue(this.detail_Obj.weekend_after_hours);
        this.calcutionForm.get('holiday_after_hours').patchValue(this.detail_Obj.holiday_after_hours);
    }
    /*==========edit set calcution start End========*/
    /*==========detail set calcution start Here========*/
    detailCal() {
        this.service.getCalDeatil('1').subscribe(res => {
            if (res['status'] == 1) {
                this.detail_Obj = res['data'][0];
                this.patchValue();
            }
        });
    }
    /*==========detail set calcution End Here========*/
    /*==========Update set calcution Start Here========*/
    updateCal() {
        this.service.calUpadte(this.calcutionForm.value)
            .subscribe(res => {
            if (res['status'] == 1) {
                this.cal_Obj = res;
                this.cal_Msg = res;
                this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
            else {
                this.cal_Obj = res;
                this.cal_Msg = res;
                this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
    }
    /*==========Update set calcution End Here========*/
    /*========== tabs function Start Here========*/
    setCal() {
        this.setcal_form = true;
        this.specialoff_form = false;
    }
    defaultCal() {
        this.specialoff_form = true;
        this.setcal_form = false;
    }
    /*========== tabs function End Here========*/
    /*======================================= Default Calcution End Here ================================*/
    /*===================================== Special Offer Start Here =============================*/
    /*==========Start and end time valid function start here========*/
    start_end_time(e) {
        var beginningTime = this.SpecialForm.value.start_date;
        var endTime = this.SpecialForm.value.end_date;
        if (beginningTime > endTime) {
            this.SpecialForm.controls['start_date'].setValue('');
            this.SpecialForm.controls['end_date'].setValue('');
            this.toastr.error("Invalid Date", '', { timeOut: 2000 });
        }
        if (beginningTime == endTime) {
            this.SpecialForm.controls['start_date'].setValue('');
            this.SpecialForm.controls['end_date'].setValue('');
            this.toastr.error("Invalid Date", '', { timeOut: 2000 });
        }
        if (beginningTime < endTime) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    }
    /*==========Start and end time valid function end here========*/
    // formatDate(userDate) {
    //   return (new Date(userDate).toJSON().slice(0,10).split('-').reverse().join('-')); 
    // }
    /*========== Special Offer Form Value Start Here========*/
    createForm1() {
        this.SpecialForm = this.fb.group({
            after_hours: [''],
            weekend: [''],
            holidays: [''],
            last_minute: [''],
            rush_fee: [''],
            weekend_after_hours: [''],
            holiday_after_hours: [''],
            start_date: [''],
            end_date: [''],
            type: ['2']
        });
    }
    /*==========Special Offer Form Value End Here========*/
    /*==========add Special Offer start Here========*/
    addSpecialOffer() {
        this.service.specialAdd(this.SpecialForm.value)
            .subscribe(res => {
            if (res['status'] == 1) {
                this.cal_Obj = res;
                console.log("ddddddddddd", this.cal_Obj);
                this.cal_Msg = res;
                this.detailSpecial();
                this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
            else {
                this.cal_Obj = res;
                this.cal_Msg = res;
                this.toastr.success(this.cal_Msg.message, '', { timeOut: 1000, positionClass: 'toast-top-center' });
            }
        });
    }
    /*==========add Special Offer end Here========*/
    /*==========detail Special Offer start Here========*/
    detailSpecial() {
        this.service.getSpecialDetail('2').subscribe(res => {
            if (res['status'] == 1) {
                this.special_Obj = res['data'][0];
                this.specialPatchValue();
            }
        });
    }
    /*==========detail Special Offer End Here========*/
    /*==========edit Special Offer start Here========*/
    specialPatchValue() {
        var start_date = new Date(this.special_Obj.start_date).toJSON().slice(0, 10).split('/').reverse().join('/');
        console.log("start date", start_date);
        var end_date = new Date(this.special_Obj.end_date).toJSON().slice(0, 10).split('/').reverse().join('/');
        console.log("end date", end_date);
        this.SpecialForm.get('after_hours').patchValue(this.special_Obj.after_hours);
        this.SpecialForm.get('weekend').patchValue(this.special_Obj.weekend);
        this.SpecialForm.get('holidays').patchValue(this.special_Obj.holidays);
        this.SpecialForm.get('last_minute').patchValue(this.special_Obj.last_minute);
        this.SpecialForm.get('rush_fee').patchValue(this.special_Obj.rush_fee);
        this.SpecialForm.get('weekend_after_hours').patchValue(this.special_Obj.weekend_after_hours);
        this.SpecialForm.get('holiday_after_hours').patchValue(this.special_Obj.holiday_after_hours);
        this.SpecialForm.get('start_date').patchValue(start_date);
        this.SpecialForm.get('end_date').patchValue(end_date);
    }
    /*==========edit Special Offer start End========*/
    exportAsXLSX() {
        this.service.defaultCalExcel('1').subscribe(res => {
            if (res['status'] == 1) {
                this.excel_obj = res['data'];
                this.excel_obj.forEach(row => {
                    this.excel.push(row);
                });
                this.excelService.exportAsExcelFile(this.excel, 'sample');
            }
        });
    }
    // this.service.defaultCalExcel('1').subscribe(res => {
    //   console.log("excel",res);
    //   if (res['status'] == 1) {
    //   this.excel_obj = res['data'];
    //   console.log("excelssssssssss", this.excel);
    //   for(let i=0; i < this.excel_obj.length; i++){ 
    //     // this.excel.push(row);
    //     this.excel.push({
    //       After_hours:this.excel_obj[i].after_hours,
    //       weekend:this.excel_obj[i].weekend,
    //       holidays: this.excel_obj[i].holidays,
    //       last_minute:this.excel_obj[i].last_minute,
    //       rush_fee:this.excel_obj[i].rush_fee,
    //       weekend_after_hours:this.excel_obj[i].weekend_after_hours,
    //       holiday_after_hours:this.excel_obj[i].holiday_after_hours,
    //       created_at:this.excel_obj[i].created_at
    //    })
    //   } 
    //   console.log("clicked the excel:", this.excel);
    // }
    //  });
    exportAsXLSX1() {
        this.service.defaultCalExcel('2').subscribe(res => {
            this.excel_obj1 = res['data'];
            this.excel_obj1.forEach(row => {
                this.excel1.push(row);
            });
            this.excelService.exportAsExcelFile(this.excel1, 'sample');
        });
    }
}
SetCalculationAddComponent.ɵfac = function SetCalculationAddComponent_Factory(t) { return new (t || SetCalculationAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_excel_services_service__WEBPACK_IMPORTED_MODULE_6__["ExcelServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
SetCalculationAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetCalculationAddComponent, selectors: [["app-set-calculation-add"]], decls: 27, vars: 4, consts: [[1, "breadcrumb"], [1, "heading"], [1, "separator-breadcrumb", "border-top"], [1, "row", "dashboard_block", "pro_info"], [1, "col-lg-3", "col-md-6", "col-sm-6", 3, "click"], [1, "card", "card_grr", "card-icon-bg", "card-icon-bg-primary", "o-hidden", "mb-4", 3, "ngClass"], [1, "card-body", "text-center"], [1, "content"], [1, "cardtext", "mb-0"], [1, "col-lg-6", "col-md-6", "col-sm-6", "excel-btn"], [1, "btn", "btn-info", "text-right", 3, "click"], [1, "btn", "btn-info", "text-right", "ml-2", 3, "click"], [1, "col-lg-2", "col-md-2", "col-sm-2"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6", "form-group", "mb-3"], ["for", "name"], ["type", "text", "onkeypress", "if(this.value.length==4) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "after_hours", "placeholder", "After Hours %", 1, "form-control"], ["type", "text", "onkeypress", "if(this.value.length==4) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "weekend", "placeholder", "Weekend", 1, "form-control"], ["for", "address"], ["type", "text", "onkeypress", "if(this.value.length==4) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "holidays", "placeholder", "Holidays %", 1, "form-control"], ["type", "text", "onkeypress", "if(this.value.length==4) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "last_minute", "placeholder", "Last Minute %", 1, "form-control"], ["type", "text", "onkeypress", "if(this.value.length==4) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "rush_fee", "placeholder", "Rush Fee %", 1, "form-control"], ["type", "text", "onkeypress", "if(this.value.length==4) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "weekend_after_hours", "placeholder", "Weekend After Hours %", 1, "form-control"], ["type", "text", "onkeypress", "if(this.value.length==4) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "holiday_after_hours", "placeholder", "Holiday After Hours %", 1, "form-control"], [1, "form-group", "row"], [1, "col-sm-12"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-3", "form-group", "mb-3"], ["for", "Start"], ["type", "date", "formControlName", "start_date", "placeholder", "Start Date", 1, "form-control"], ["for", "End"], ["type", "date", "formControlName", "end_date", "placeholder", "End Date", 1, "form-control", 3, "change"]], template: function SetCalculationAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Set Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCalculationAddComponent_Template_div_click_7_listener() { return ctx.setCal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Default Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCalculationAddComponent_Template_div_click_13_listener() { return ctx.defaultCal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Custom Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCalculationAddComponent_Template_button_click_20_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Default Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCalculationAddComponent_Template_button_click_22_listener() { return ctx.exportAsXLSX1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Custom Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SetCalculationAddComponent_div_25_Template, 41, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SetCalculationAddComponent_div_26_Template, 49, 1, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setcal_form ? "activegreen" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.specialoff_form ? "activegreen" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setcal_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.specialoff_form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: [".excel-btn[_ngcontent-%COMP%] {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2V0LWNhbGN1bGF0aW9uL3NldC1jYWxjdWxhdGlvbi1hZGQvc2V0LWNhbGN1bGF0aW9uLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zZXQtY2FsY3VsYXRpb24vc2V0LWNhbGN1bGF0aW9uLWFkZC9zZXQtY2FsY3VsYXRpb24tYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLWJ0bntcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetCalculationAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set-calculation-add',
                templateUrl: './set-calculation-add.component.html',
                styleUrls: ['./set-calculation-add.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _shared_services_excel_services_service__WEBPACK_IMPORTED_MODULE_6__["ExcelServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "wZgM":
/*!*****************************************************************!*\
  !*** ./src/app/views/set-calculation/set-calculation.module.ts ***!
  \*****************************************************************/
/*! exports provided: SetCalculationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCalculationModule", function() { return SetCalculationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _set_calculation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-calculation-routing.module */ "HFpx");
/* harmony import */ var _set_calculation_add_set_calculation_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-calculation-add/set-calculation-add.component */ "PLFQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






class SetCalculationModule {
}
SetCalculationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SetCalculationModule });
SetCalculationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SetCalculationModule_Factory(t) { return new (t || SetCalculationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _set_calculation_routing_module__WEBPACK_IMPORTED_MODULE_2__["SetCalculationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SetCalculationModule, { declarations: [_set_calculation_add_set_calculation_add_component__WEBPACK_IMPORTED_MODULE_3__["SetCalculationAddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _set_calculation_routing_module__WEBPACK_IMPORTED_MODULE_2__["SetCalculationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetCalculationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_set_calculation_add_set_calculation_add_component__WEBPACK_IMPORTED_MODULE_3__["SetCalculationAddComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _set_calculation_routing_module__WEBPACK_IMPORTED_MODULE_2__["SetCalculationRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-set-calculation-set-calculation-module.js.map