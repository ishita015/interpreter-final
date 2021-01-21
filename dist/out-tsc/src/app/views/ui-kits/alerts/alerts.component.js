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
import { ToastrService } from 'ngx-toastr';
var ALERTS = [{
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
var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(toastr) {
        this.toastr = toastr;
        this.mainAlert = true;
    }
    AlertsComponent.prototype.ngOnInit = function () {
        this.alerts = __spread(ALERTS);
        this.alertCards = __spread(ALERTS);
    };
    AlertsComponent.prototype.closeAlert = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertsComponent.prototype.closeAlertCard = function (alert) {
        this.alertCards.splice(this.alertCards.indexOf(alert), 1);
    };
    AlertsComponent.prototype.success = function () {
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 300000 });
    };
    AlertsComponent.prototype.warning = function () {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.info = function () {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.error = function () {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.successBar = function () {
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.warningBar = function () {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.infoBar = function () {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.errorBar = function () {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
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
}());
export { AlertsComponent };
//# sourceMappingURL=alerts.component.js.map