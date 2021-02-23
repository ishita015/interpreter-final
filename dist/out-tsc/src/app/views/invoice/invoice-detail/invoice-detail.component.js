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
import { Utils } from 'src/app/shared/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { ToastrService } from 'ngx-toastr';
let InvoiceDetailComponent = /** @class */ (() => {
    let InvoiceDetailComponent = class InvoiceDetailComponent {
        constructor(route, router, fb, dl, toastr) {
            this.route = route;
            this.router = router;
            this.fb = fb;
            this.dl = dl;
            this.toastr = toastr;
            this.viewMode = 'edit';
            this.invoice = {};
        }
        ngOnInit() {
            this.id = this.route.snapshot.params['id'];
            this.isNew = !this.id;
            this.buildInvoiceForm(this.invoice);
            if (this.id) {
                this.viewMode = 'print';
                this.dl.getInvoice(this.id)
                    .subscribe(res => {
                    this.invoice = res;
                    this.buildInvoiceForm(this.invoice);
                    this.subTotal = this.calculateSubtotal(this.invoiceForm.value);
                });
            }
        }
        buildInvoiceForm(i = {}) {
            this.invoiceForm = this.fb.group({
                id: [i.id],
                orderNumber: [i.orderNumber],
                orderStatus: [i.orderStatus],
                currency: [i.currency],
                vat: [i.vat],
                orderDate: [i.orderDate ? Utils.dateToNgbDate(i.orderDate) : {}],
                billFrom: this.fb.group({
                    name: [i.billFrom ? i.billFrom.name : ''],
                    address: [i.billFrom ? i.billFrom.address : '']
                }),
                billTo: this.fb.group({
                    name: [i.billTo ? i.billTo.name : ''],
                    address: [i.billTo ? i.billTo.address : '']
                }),
                items: this.fb.array((() => {
                    if (!i.items) {
                        return [];
                    }
                    return i.items.map((item) => this.createItem(item));
                })())
            });
            // LINSTEN FOR VALUE CHANGES AND CALCULATE TOTAL
            if (this.invoiceFormSub) {
                this.invoiceFormSub.unsubscribe();
            }
            this.invoiceFormSub = this.invoiceForm.valueChanges
                .subscribe(formValue => {
                this.subTotal = this.calculateSubtotal(formValue);
            });
        }
        createItem(item = {}) {
            return this.fb.group({
                name: [item.name],
                unit: [item.unit],
                unitPrice: [item.unitPrice]
            });
        }
        addItem() {
            const control = this.invoiceForm.controls['items'];
            control.push(this.createItem());
        }
        removeItem(i) {
            const control = this.invoiceForm.controls['items'];
            control.removeAt(i);
        }
        saveInvoice() {
            this.saving = true;
            this.invoice = this.invoiceForm.value;
            this.invoice.orderDate = Utils.ngbDateToDate(this.invoiceForm.value.orderDate);
            this.dl.saveInvoice(this.invoiceForm.value)
                .subscribe((savedInvoice) => {
                this.viewMode = 'print';
                this.saving = false;
                this.toastr.success('Invoice Saved!', 'Success!', { timeOut: 3000 });
                if (this.isNew) {
                    this.router.navigateByUrl('/invoice/edit/' + savedInvoice.id);
                }
            });
        }
        calculateSubtotal(invoice) {
            let total = 0;
            invoice.items.forEach(i => {
                total += (i.unit * i.unitPrice);
            });
            return total;
        }
        print() {
            if (window) {
                window.print();
            }
        }
    };
    InvoiceDetailComponent = __decorate([
        Component({
            selector: 'app-invoice-detail',
            templateUrl: './invoice-detail.component.html',
            styleUrls: ['./invoice-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            FormBuilder,
            DataLayerService,
            ToastrService])
    ], InvoiceDetailComponent);
    return InvoiceDetailComponent;
})();
export { InvoiceDetailComponent };
//# sourceMappingURL=invoice-detail.component.js.map