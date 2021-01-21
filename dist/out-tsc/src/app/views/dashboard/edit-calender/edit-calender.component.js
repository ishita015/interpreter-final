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
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from 'frontend/src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
var EditCalenderComponent = /** @class */ (function () {
    function EditCalenderComponent(validation, fb, toastr, router, service) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
    }
    EditCalenderComponent.prototype.ngOnInit = function () {
        this.edit_date = JSON.parse(localStorage.getItem('editData'));
        console.log("eeeeeeeeeeeee", this.edit_date);
        this.createForm();
        this.patchValue();
        this.date_func();
    };
    /*========== Form Value Start Here========*/
    EditCalenderComponent.prototype.createForm = function () {
        this.editCalForm = this.fb.group({
            title: ['', this.validation.onlyRequired_validator],
            start_time: ['', this.validation.onlyRequired_validator],
            date: ['', this.validation.onlyRequired_validator],
            description: ['', this.validation.onlyRequired_validator],
            end_time: ['', this.validation.onlyRequired_validator],
            id: ['']
        });
    };
    /*========== Form Value End Here========*/
    /*========== Edit Input Value Start Here========*/
    EditCalenderComponent.prototype.patchValue = function () {
        this.editCalForm.get('title').patchValue(this.edit_date.title);
        this.editCalForm.get('start_time').patchValue(this.edit_date.start_time);
        this.editCalForm.get('date').patchValue(this.edit_date.date);
        this.editCalForm.get('description').patchValue(this.edit_date.description);
        this.editCalForm.get('end_time').patchValue(this.edit_date.end_time);
    };
    /*==========Edit Input Value End Here========*/
    /*==========Start and end time valid function start here========*/
    EditCalenderComponent.prototype.start_end_time = function (e) {
        var beginningTime = this.editCalForm.value.start_time;
        var endTime = this.editCalForm.value.end_time;
        // var beginningTime = moment(this.editCalForm.value.start_time, 'h:mma');
        // var endTime = moment(this.editCalForm.value.end_time, 'h:mma');
        if (beginningTime > endTime) {
            // this.editCalForm.controls['start_time'].setValue('');
            this.editCalForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime == endTime) {
            // this.editCalForm.controls['start_time'].setValue('');
            this.editCalForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime < endTime) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    };
    /*==========Start and end time valid function end here========*/
    /*==========Today and future date function start here========*/
    EditCalenderComponent.prototype.date_func = function () {
        var today = new Date().toISOString().split('T')[0];
        document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
    };
    /*==========Today and future date function end here========*/
    EditCalenderComponent.prototype.editCalender = function () {
        var _this = this;
        console.log("form value", this.editCalForm.value);
        this.submitted = true;
        if (this.editCalForm.invalid) {
            return;
        }
        this.submitted = false;
        this.editCalForm.value.id = this.edit_date.id;
        this.service.getUpdateCalender(this.editCalForm.value)
            .subscribe(function (res) {
            if (res['status'] == '0') {
                console.log("api response", res);
                _this.data_Obj = res;
                _this.data_Msg = res;
                _this.toastr.success(_this.data_Msg.message, '', { timeOut: 1000 });
                _this.router.navigate(['/dashboard/v2']);
            }
            else {
                console.log("api response", res);
                _this.data_Obj = res;
                _this.data_Msg = res;
                _this.toastr.success(_this.data_Msg.message, '', { timeOut: 1000 });
                // this.router.navigate(['/login'])
                _this.router.navigate(['/dashboard/v2']);
            }
        });
    };
    EditCalenderComponent = __decorate([
        Component({
            selector: 'app-edit-calender',
            templateUrl: './edit-calender.component.html',
            styleUrls: ['./edit-calender.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], EditCalenderComponent);
    return EditCalenderComponent;
}());
export { EditCalenderComponent };
//# sourceMappingURL=edit-calender.component.js.map