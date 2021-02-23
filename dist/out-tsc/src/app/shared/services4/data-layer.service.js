var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';
let DataLayerService = /** @class */ (() => {
    let DataLayerService = class DataLayerService {
        constructor(http) {
            this.http = http;
        }
        getInvoices() {
            return this.http.get('/api/invoices');
        }
        getInvoice(id) {
            return this.http.get('/api/invoices/' + id);
        }
        saveInvoice(invoice) {
            if (invoice.id) {
                return this.http.put('/api/invoices/' + invoice.id, invoice);
            }
            else {
                invoice.id = Utils.genId();
                return this.http.post('/api/invoices/', invoice);
            }
        }
        deleteInvoice(id) {
            return this.http.delete('/api/invoices/' + id);
        }
        getMails() {
            return this.http.get('/api/mails');
        }
        getCountries() {
            return this.http.get('/api/countries');
        }
        getProducts() {
            return this.http.get('api/products');
        }
    };
    DataLayerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DataLayerService);
    return DataLayerService;
})();
export { DataLayerService };
//# sourceMappingURL=data-layer.service.js.map