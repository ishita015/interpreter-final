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
var FullscreenTableComponent = /** @class */ (function () {
    function FullscreenTableComponent(productService) {
        this.productService = productService;
    }
    FullscreenTableComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProducts();
    };
    FullscreenTableComponent = __decorate([
        Component({
            selector: 'app-fullscreen-table',
            templateUrl: './fullscreen-table.component.html',
            styleUrls: ['./fullscreen-table.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService])
    ], FullscreenTableComponent);
    return FullscreenTableComponent;
}());
export { FullscreenTableComponent };
//# sourceMappingURL=fullscreen-table.component.js.map