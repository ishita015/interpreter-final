var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
// import { MouseEvent } from '@agm/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
var InterpreterListComponent = /** @class */ (function () {
    function InterpreterListComponent(formBuilder, toastr, modalService, router, service) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.router = router;
        this.service = service;
        // google maps zoom level
        this.zoom = 8;
        this.markers = [];
        this.searchNameEmail = '';
        this.distance = '';
        this.rate = '';
        this.rating = '';
        this.searchControl = new FormControl();
        this.distances = new FormControl();
        this.rates = new FormControl();
        this.ratings = new FormControl();
        this.search_name_email = new FormControl();
        // initial center position for the map
        // lat: number = 0;
        // lng: number = 0;
        this.scroll = false;
        this.lat = 22.7261762;
        this.lng = 76.1305457;
        this.serviceid = JSON.parse(localStorage.getItem('serviceId'));
    }
    InterpreterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignInfo = JSON.parse(localStorage.getItem('assignData'));
        this.service.currentMessage.subscribe(function (message) {
            _this.mapInfo = message;
            console.log("mapView", _this.mapInfo);
        });
        this.lat = this.assignInfo.latitude;
        this.lng = this.assignInfo.longitude;
        console.log("my testing lat long  --", this.assignInfo);
        this.language_id = this.assignInfo.language;
        this.assignMyNearbyInterpreter();
        // this.searchControl.valueChanges
        // .pipe(debounceTime(200))
        // .subscribe(value => {
        //   this.filerData(value);
        // });
    };
    InterpreterListComponent.prototype.clickedMarker = function (label, id, info, index, modal) {
        var _this = this;
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
                .result.then(function (result) {
                _this.service.sendInterpreterRequest(_this.requestId, _this.userId).subscribe(function (res) {
                    _this.requestStatus = res;
                    if (_this.requestStatus.status == 1) {
                        _this.toastr.success(_this.requestStatus.message, '', { timeOut: 2000 });
                        _this.router.navigate(['/user-request/list']);
                    }
                    else {
                        _this.toastr.error(_this.requestStatus.message, '', { timeOut: 2000 });
                    }
                });
            }, function (reason) {
            });
        }
        // console.log("userId, service_id",  this.userId );
        // console.log(`clicked the marker: ${id || index}`);
        // this.markers[index].visible = false;
    };
    InterpreterListComponent.prototype.mapClicked = function ($event) {
        console.log("eeeee", $event);
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
            visible: true,
            opacity: 0.4
        });
    };
    InterpreterListComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
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
    InterpreterListComponent.prototype.assignMyNearbyInterpreter = function () {
        var _this = this;
        this.distance_formdata = this.distances.value;
        this.rates_formdata = this.rates.value;
        this.ratings_formdata = this.ratings.value;
        this.namemail_formdata = this.search_name_email.value;
        this.distance = this.distance_formdata;
        this.searchNameEmail = this.namemail_formdata;
        this.rate = this.rates_formdata;
        this.rating = this.ratings_formdata;
        //  console.log("value set", this.distance);
        this.service.myNearbyInterpreter(this.serviceid, this.language_id, this.searchNameEmail, this.distance, this.rate, this.rating).subscribe(function (res) {
            if (res['status'] == 0) {
                _this.list_Obj = '';
                _this.userData = '';
                _this.filteredUser = '';
                _this.markers = [
                    {
                        lat: _this.assignInfo.latitude,
                        lng: _this.assignInfo.longitude,
                        label: _this.assignInfo.caseworker_name,
                        id: _this.assignInfo.id,
                        mobile: _this.assignInfo.cell_phone,
                        address: _this.assignInfo.lang_name,
                        email: _this.assignInfo.email,
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
                _this.markers = [
                    {
                        lat: _this.assignInfo.latitude,
                        lng: _this.assignInfo.longitude,
                        label: _this.assignInfo.caseworker_name,
                        id: _this.assignInfo.id,
                        mobile: _this.assignInfo.cell_phone,
                        address: _this.assignInfo.lang_name,
                        email: _this.assignInfo.email,
                        draggable: false,
                        visible: false,
                        opacity: 0.7
                    }
                ];
                _this.list_Obj = res['data'];
                _this.userData = __spread(res['data']);
                _this.filteredUser = _this.list_Obj;
                for (var i = 0; i < _this.list_Obj.length; i++) {
                    _this.markers.push({
                        lat: _this.list_Obj[i].latitude,
                        lng: _this.list_Obj[i].longitude,
                        label: _this.list_Obj[i].name,
                        id: _this.list_Obj[i].id,
                        mobile: _this.list_Obj[i].mobile,
                        address: _this.list_Obj[i].address,
                        email: _this.list_Obj[i].email,
                        draggable: false,
                        visible: false,
                        opacity: 0.7,
                        icon: "./assets/images/faces/placeholder.png"
                    });
                }
                console.log("clicked the marker:", _this.markers);
            }
        });
    };
    //}
    InterpreterListComponent.prototype.viewDetail = function () {
        this.router.navigate(['/user-request/request-view', this.assignInfo.id]);
    };
    InterpreterListComponent.prototype.requestDetail = function (id, data, modal) {
        var _this = this;
        this.requestId = id;
        this.userId = JSON.parse(localStorage.getItem('serviceId'));
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.service.sendInterpreterRequest(_this.requestId, _this.userId).subscribe(function (res) {
                _this.requestStatus = res;
                if (_this.requestStatus.status == 1) {
                    _this.nameShow = data.name;
                    _this.addressShow = data.address;
                    _this.mobileShow = data.mobile;
                    _this.emailShow = data.email;
                    _this.toastr.success(_this.requestStatus.message, '', { timeOut: 2000 });
                    _this.router.navigate(['/user-request/list']);
                }
                else {
                    _this.router.navigate(['/user-request/list']);
                    _this.toastr.error(_this.requestStatus.message, '', { timeOut: 2000 });
                }
            });
        }, function (reason) {
        });
    };
    InterpreterListComponent.prototype.assignAllInterpreter = function () {
        var _this = this;
        console.log("j", this.list_Obj);
        this.service.requestAssignAllInterpreter(this.serviceid, this.list_Obj).subscribe(function (res) {
            console.log("res", res);
            _this.requestStatus = res;
            if (res['status'] == '1') {
                _this.router.navigate(['/user-request/list']);
                _this.toastr.success(_this.requestStatus.message, '', { timeOut: 2000 });
            }
            else {
                _this.router.navigate(['/user-request/list']);
                _this.toastr.error(_this.requestStatus.message, '', { timeOut: 2000 });
            }
        });
    };
    InterpreterListComponent = __decorate([
        Component({
            selector: 'app-interpreter-list',
            templateUrl: './interpreter-list.component.html',
            styleUrls: ['./interpreter-list.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ToastrService,
            NgbModal,
            Router,
            HttpService])
    ], InterpreterListComponent);
    return InterpreterListComponent;
}());
export { InterpreterListComponent };
//# sourceMappingURL=interpreter-list.component.js.map