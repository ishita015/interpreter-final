var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var GetValueByKeyPipe = /** @class */ (function () {
    function GetValueByKeyPipe() {
    }
    GetValueByKeyPipe.prototype.transform = function (value, id, property) {
        var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    };
    GetValueByKeyPipe = __decorate([
        Pipe({
            name: 'getValueByKey',
            pure: false
        })
    ], GetValueByKeyPipe);
    return GetValueByKeyPipe;
}());
export { GetValueByKeyPipe };
//# sourceMappingURL=get-value-by-key.pipe.js.map