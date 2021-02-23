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
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
let FilterTableComponent = /** @class */ (() => {
    let FilterTableComponent = class FilterTableComponent {
        constructor(productService) {
            this.productService = productService;
            this.searchControl = new FormControl();
        }
        ngOnInit() {
            this.productService.getProducts()
                .subscribe((res) => {
                this.products = [...res];
                this.filteredProducts = res;
            });
            this.searchControl.valueChanges
                .pipe(debounceTime(200))
                .subscribe(value => {
                this.filerData(value);
            });
        }
        filerData(val) {
            if (val) {
                val = val.toLowerCase();
            }
            else {
                return this.filteredProducts = [...this.products];
            }
            const columns = Object.keys(this.products[0]);
            if (!columns.length) {
                return;
            }
            const rows = this.products.filter(function (d) {
                for (let i = 0; i <= columns.length; i++) {
                    const column = columns[i];
                    // console.log(d[column]);
                    if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                        return true;
                    }
                }
            });
            this.filteredProducts = rows;
        }
    };
    FilterTableComponent = __decorate([
        Component({
            selector: 'app-filter-table',
            templateUrl: './filter-table.component.html',
            styleUrls: ['./filter-table.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService])
    ], FilterTableComponent);
    return FilterTableComponent;
})();
export { FilterTableComponent };
//# sourceMappingURL=filter-table.component.js.map