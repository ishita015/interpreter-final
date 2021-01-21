var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var FeatherIconComponent = /** @class */ (function () {
    function FeatherIconComponent() {
    }
    FeatherIconComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            feather.replace();
        });
    };
    __decorate([
        Input('name'),
        __metadata("design:type", Object)
    ], FeatherIconComponent.prototype, "name", void 0);
    FeatherIconComponent = __decorate([
        Component({
            selector: 'feather-icon',
            templateUrl: './feather-icon.component.html',
            styleUrls: ['./feather-icon.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FeatherIconComponent);
    return FeatherIconComponent;
}());
export { FeatherIconComponent };
//# sourceMappingURL=feather-icon.component.js.map