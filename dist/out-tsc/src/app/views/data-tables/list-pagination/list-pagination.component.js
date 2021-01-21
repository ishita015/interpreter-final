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
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
var ListPaginationComponent = /** @class */ (function () {
    function ListPaginationComponent(dl) {
        this.dl = dl;
        this.viewMode = 'list';
        this.page = 1;
        this.pageSize = 8;
        this.products = [];
    }
    ListPaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dl.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        });
    };
    ListPaginationComponent.prototype.selectAll = function (e) {
        var _this = this;
        this.products = this.products.map(function (p) {
            p.isSelected = _this.allSelected;
            return p;
        });
        if (this.allSelected) {
        }
        console.log(this.allSelected);
    };
    ListPaginationComponent = __decorate([
        Component({
            selector: 'app-list-pagination',
            templateUrl: './list-pagination.component.html',
            styleUrls: ['./list-pagination.component.scss'],
            animations: [SharedAnimations]
        }),
        __metadata("design:paramtypes", [DataLayerService])
    ], ListPaginationComponent);
    return ListPaginationComponent;
}());
export { ListPaginationComponent };
//# sourceMappingURL=list-pagination.component.js.map