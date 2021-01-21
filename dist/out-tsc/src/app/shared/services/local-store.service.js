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
var LocalStoreService = /** @class */ (function () {
    function LocalStoreService() {
        this.ls = window.localStorage;
    }
    LocalStoreService.prototype.setItem = function (key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    };
    LocalStoreService.prototype.getItem = function (key) {
        var value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            // console.log(e)
            return null;
        }
    };
    LocalStoreService.prototype.clear = function () {
        this.ls.clear();
    };
    LocalStoreService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalStoreService);
    return LocalStoreService;
}());
export { LocalStoreService };
//# sourceMappingURL=local-store.service.js.map