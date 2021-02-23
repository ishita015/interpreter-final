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
let DemoTestComponent = /** @class */ (() => {
    let DemoTestComponent = class DemoTestComponent {
        constructor() { }
        ngOnInit() {
            this.dataRe = JSON.parse(localStorage.getItem('permissionInfo'));
            console.log("yes is working", this.dataRe[0]);
        }
    };
    DemoTestComponent = __decorate([
        Component({
            selector: 'app-demo-test',
            templateUrl: './demo-test.component.html',
            styleUrls: ['./demo-test.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DemoTestComponent);
    return DemoTestComponent;
})();
export { DemoTestComponent };
//# sourceMappingURL=demo-test.component.js.map