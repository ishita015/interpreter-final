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
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../../services/common.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
var RateReviewComponent = /** @class */ (function () {
    function RateReviewComponent(route, service, fb, router, toastr, validation) {
        this.route = route;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.validation = validation;
        this.currentRate = 0;
    }
    RateReviewComponent.prototype.ngOnInit = function () {
        this.ratingkey = this.route.snapshot.params.uniqueCode;
        console.log("verifykey", this.ratingkey);
        this.createForm1();
    };
    /*==========Step Form Value Start Here========*/
    RateReviewComponent.prototype.createForm1 = function () {
        this.ratingForm = this.fb.group({
            rating: ['', this.validation.onlyRequired_validator],
            unique_code: [''],
            review: [''],
        });
    };
    /*==========Step Form Value End Here========*/
    RateReviewComponent.prototype.submitForm1 = function () {
        var _this = this;
        console.log("form", this.ratingForm.value);
        this.submitted = true;
        if (this.ratingForm.invalid) {
            return;
        }
        this.submitted = false;
        this.ratingForm.value.unique_code = this.ratingkey;
        console.log(this.ratingForm.value);
        this.service.getRating(this.ratingForm.value)
            .subscribe(function (res) {
            console.log("api response", res);
            if (res['status'] == 1) {
                _this.rate_Obj = res;
                console.log("ressss", _this.rate_Obj);
                _this.toastr.success(_this.rate_Obj.message, '', { timeOut: 2000 });
            }
            else {
                _this.toastr.error(res['message'], '', { timeOut: 2000 });
            }
        });
    };
    var _a;
    RateReviewComponent = __decorate([
        Component({
            selector: 'app-rate-review',
            templateUrl: './rate-review.component.html',
            styleUrls: ['./rate-review.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            CommonService,
            FormBuilder,
            Router,
            ToastrService, typeof (_a = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _a : Object])
    ], RateReviewComponent);
    return RateReviewComponent;
}());
export { RateReviewComponent };
//# sourceMappingURL=rate-review.component.js.map