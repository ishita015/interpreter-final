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
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
var InterpreterTrackingComponent = /** @class */ (function () {
    function InterpreterTrackingComponent(router, service, validation, toastr, fb, route) {
        this.router = router;
        this.service = service;
        this.validation = validation;
        this.toastr = toastr;
        this.fb = fb;
        this.route = route;
        this.markers = [];
        this.lat = 22.719568;
        this.lng = 75.857727;
        this.zoom = 8;
    }
    // trackingCode
    InterpreterTrackingComponent.prototype.ngOnInit = function () {
        //get tracking code in url
        this.trackingCode = this.route.snapshot.params.trackingCode;
        this.service.updatelocation(this.trackingCode);
        this.getInterpreterLocation();
    };
    // markers: marker[] = [
    //   {
    //     lat: 51.673858,
    //     lng: 7.815982,
    //     label: 'A',
    //     draggable: true
    //   },
    // ]
    // first_name: "gokul"
    // interpreter_id: 24
    // last_name: "rathod"
    // latitude: 22.7025137
    // longitude: 76.1305457
    // unique_code: "I8WVximpygwesWvQfzT1DtspNzFxdF"
    InterpreterTrackingComponent.prototype.getInterpreterLocation = function () {
        var _this = this;
        this.service.interpreterTracking(this.trackingCode).subscribe(function (res) {
            console.log("api response", res);
            _this.msg = res;
            if (_this.msg.status == 1) {
                _this.location_Obj = res['data'][0];
                console.log("full response", _this.location_Obj);
                var fullname = _this.location_Obj.first_name + " " + _this.location_Obj.last_name;
                _this.markers = [
                    {
                        lat: _this.location_Obj.latitude,
                        lng: _this.location_Obj.longitude,
                        label: fullname,
                        // id:this.location_Obj,
                        // mobile:this.location_Obj.cell_phone,
                        // address:this.assignInfo.lang_name,
                        // email:this.assignInfo.email,
                        draggable: true,
                        visible: false,
                        opacity: 0.7
                    }
                ];
                console.log("markers", _this.markers);
            }
            else {
                _this.toastr.error(_this.location_Obj.message, '', { timeOut: 1000 });
            }
            // console.log("my testing", this.language_Obj);
        });
    };
    // interpreterTracking
    // google maps zoom level
    // initial center position for the map
    InterpreterTrackingComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    var _a, _b;
    InterpreterTrackingComponent = __decorate([
        Component({
            selector: 'app-interpreter-tracking',
            templateUrl: './interpreter-tracking.component.html',
            styleUrls: ['./interpreter-tracking.component.css']
        }),
        __metadata("design:paramtypes", [Router, typeof (_a = typeof CommonService !== "undefined" && CommonService) === "function" ? _a : Object, typeof (_b = typeof ValidationsService !== "undefined" && ValidationsService) === "function" ? _b : Object, ToastrService,
            FormBuilder,
            ActivatedRoute])
    ], InterpreterTrackingComponent);
    return InterpreterTrackingComponent;
}());
export { InterpreterTrackingComponent };
//# sourceMappingURL=interpreter-tracking.component.js.map