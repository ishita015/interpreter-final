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
let InvoiceListComponent = /** @class */ (() => {
    let InvoiceListComponent = class InvoiceListComponent {
        constructor(dl, modalService, toastr) {
            this.dl = dl;
            this.modalService = modalService;
            this.toastr = toastr;
        }
        ngOnInit() {
            this.loadInvoices();
        }
        loadInvoices() {
            this.dl.getInvoices()
                .subscribe(res => {
                this.invoices = res;
            });
        }
        deleteInvoice(id, modal) {
            this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.dl.deleteInvoice(id)
                    .subscribe(res => {
                    this.toastr.success('Invoice Deleted!', 'Success!', { timeOut: 3000 });
                    this.loadInvoices();
                });
            }, (reason) => {
            });
        }
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
})();
export { InvoiceListComponent };
//# sourceMappingURL=invoice-list.component.js.map