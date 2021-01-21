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
var AddCalenderComponent = /** @class */ (function () {
    function AddCalenderComponent(validation, fb, toastr, router, service) {
        this.validation = validation;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
    }
    AddCalenderComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.date_func();
        this.Id = JSON.parse(localStorage.getItem('userId'));
    };
    /*==========Today and future date function start here========*/
    AddCalenderComponent.prototype.date_func = function () {
        var today = new Date().toISOString().split('T')[0];
        document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
    };
    /*==========Today and future date function end here========*/
    /*========== Form Value Start Here========*/
    AddCalenderComponent.prototype.createForm = function () {
        this.addCalForm = this.fb.group({
            title: ['', this.validation.onlyRequired_validator],
            start_time: ['', this.validation.onlyRequired_validator],
            date: ['', this.validation.onlyRequired_validator],
            description: ['', this.validation.onlyRequired_validator],
            end_time: ['', this.validation.onlyRequired_validator]
        });
    };
    /*========== Form Value End Here========*/
    /*==========Start and end time valid function start here========*/
    AddCalenderComponent.prototype.start_end_time = function (e) {
        var beginningTime = this.addCalForm.value.start_time;
        var endTime = this.addCalForm.value.end_time;
        // var beginningTime = moment(this.addCalForm.value.start_time, 'h:mma');
        // var endTime = moment(this.addCalForm.value.end_time, 'h:mma');
        if (beginningTime > endTime) {
            this.addCalForm.controls['start_time'].setValue('');
            this.addCalForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime == endTime) {
            this.addCalForm.controls['start_time'].setValue('');
            this.addCalForm.controls['end_time'].setValue('');
            this.toastr.error("Invalid Time", '', { timeOut: 2000 });
        }
        if (beginningTime < endTime) {
            // this.toastr.success("Valid Time ",'', { timeOut: 2000 });
        }
    };
    /*==========Start and end time valid function end here========*/
    AddCalenderComponent.prototype.addCalender = function () {
        var _this = this;
        console.log("form value", this.addCalForm.value);
        this.submitted = true;
        if (this.addCalForm.invalid) {
            return;
        }
        this.submitted = false;
        this.addCalForm.value.user_id = this.Id;
        this.service.getAddCalender(this.addCalForm.value)
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
    AddCalenderComponent = __decorate([
        Component({
            selector: 'app-add-calender',
            templateUrl: './add-calender.component.html',
            styleUrls: ['./add-calender.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            FormBuilder,
            ToastrService,
            Router,
            HttpService])
    ], AddCalenderComponent);
    return AddCalenderComponent;
}());
export { AddCalenderComponent };
//# sourceMappingURL=add-calender.component.js.map