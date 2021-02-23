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
import { FormBuilder, FormControl } from '@angular/forms';
// import { MouseEvent } from '@agm/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
let InterpreterListComponent = /** @class */ (() => {
    let InterpreterListComponent = class InterpreterListComponent {
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
            this.router.navigate(['/user-request/request-view', this.assignInfo.id]);
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
            console.log("list_Obj==============", this.list_Obj);
            this.service.requestAssignAllInterpreter(this.serviceid, this.list_Obj).subscribe(res => {
                console.log("res", res);
                this.requestStatus = res;
                if (res['status'] == '1') {
                    this.router.navigate(['/user-request/list']);
                    this.toastr.success(this.requestStatus.message, '', { timeOut: 2000 });
                }
                else {
                    this.router.navigate(['/user-request/list']);
                    this.toastr.error(this.requestStatus.message, '', { timeOut: 2000 });
                }
            });
        }
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
            ActivatedRoute,
            HttpService])
    ], InterpreterListComponent);
    return InterpreterListComponent;
})();
export { InterpreterListComponent };
//# sourceMappingURL=interpreter-list.component.js.map