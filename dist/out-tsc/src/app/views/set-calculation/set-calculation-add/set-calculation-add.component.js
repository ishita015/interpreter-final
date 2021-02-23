var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExcelServicesService } from '../../../shared/services/excel-services.service';
let SetCalculationAddComponent = /** @class */ (() => {
    let SetCalculationAddComponent = class SetCalculationAddComponent {
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
    };
    SetCalculationAddComponent = __decorate([
        Component({
            selector: 'app-set-calculation-add',
            templateUrl: './set-calculation-add.component.html',
            styleUrls: ['./set-calculation-add.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            ExcelServicesService,
            Router,
            HttpService])
    ], SetCalculationAddComponent);
    return SetCalculationAddComponent;
})();
export { SetCalculationAddComponent };
//# sourceMappingURL=set-calculation-add.component.js.map