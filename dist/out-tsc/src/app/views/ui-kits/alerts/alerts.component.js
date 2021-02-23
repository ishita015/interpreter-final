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
import { ToastrService } from 'ngx-toastr';
const ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    }, {
        type: 'info',
        message: 'This is an info alert',
    }, {
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
let AlertsComponent = /** @class */ (() => {
    let AlertsComponent = class AlertsComponent {
        constructor(toastr) {
            this.toastr = toastr;
            this.mainAlert = true;
        }
        ngOnInit() {
            this.alerts = [...ALERTS];
            this.alertCards = [...ALERTS];
        }
        closeAlert(alert) {
            this.alerts.splice(this.alerts.indexOf(alert), 1);
        }
        closeAlertCard(alert) {
            this.alertCards.splice(this.alertCards.indexOf(alert), 1);
        }
        success() {
            this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 300000 });
        }
        warning() {
            this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000 });
        }
        info() {
            this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000 });
        }
        error() {
            this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000 });
        }
        successBar() {
            this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
        }
        warningBar() {
            this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
        }
        infoBar() {
            this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
        }
        errorBar() {
            this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
        }
    };
    AlertsComponent = __decorate([
        Component({
            selector: 'app-alerts',
            templateUrl: './alerts.component.html',
            styleUrls: ['./alerts.component.scss']
        }),
        __metadata("design:paramtypes", [ToastrService])
    ], AlertsComponent);
    return AlertsComponent;
})();
export { AlertsComponent };
//# sourceMappingURL=alerts.component.js.map