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
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent(dl, modalService, toastr) {
        this.dl = dl;
        this.modalService = modalService;
        this.toastr = toastr;
    }
    InvoiceListComponent.prototype.ngOnInit = function () {
        this.loadInvoices();
    };
    InvoiceListComponent.prototype.loadInvoices = function () {
        var _this = this;
        this.dl.getInvoices()
            .subscribe(function (res) {
            _this.invoices = res;
        });
    };
    InvoiceListComponent.prototype.deleteInvoice = function (id, modal) {
        var _this = this;
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.dl.deleteInvoice(id)
                .subscribe(function (res) {
                _this.toastr.success('Invoice Deleted!', 'Success!', { timeOut: 3000 });
                _this.loadInvoices();
            });
        }, function (reason) {
        });
    };
    InvoiceListComponent = __decorate([
        Component({
            selector: 'app-invoice-list',
            templateUrl: './invoice-list.component.html',
            styleUrls: ['./invoice-list.component.scss']
        }),
        __metadata("design:paramtypes", [DataLayerService,
            NgbModal,
            ToastrService])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());
export { InvoiceListComponent };
//# sourceMappingURL=invoice-list.component.js.map