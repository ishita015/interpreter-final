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
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var ComposeDialogComponent = /** @class */ (function () {
    function ComposeDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ComposeDialogComponent.prototype.ngOnInit = function () {
    };
    ComposeDialogComponent = __decorate([
        Component({
            selector: 'app-compose-dialog',
            templateUrl: './compose-dialog.component.html',
            styleUrls: ['./compose-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], ComposeDialogComponent);
    return ComposeDialogComponent;
}());
export { ComposeDialogComponent };
//# sourceMappingURL=compose-dialog.component.js.map