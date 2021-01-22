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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComposeDialogComponent } from '../compose-dialog/compose-dialog.component';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(dl, modalService) {
        this.dl = dl;
        this.modalService = modalService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.mails$ = this.dl.getMails();
    };
    MessagesComponent.prototype.select = function (mail) {
        this.selected = mail;
    };
    MessagesComponent.prototype.openComposeModal = function () {
        this.modalService.open(ComposeDialogComponent, { size: 'lg', centered: true });
    };
    MessagesComponent = __decorate([
        Component({
            selector: 'app-messages',
            templateUrl: './messages.component.html',
            styleUrls: ['./messages.component.scss'],
            animations: [SharedAnimations]
        }),
        __metadata("design:paramtypes", [DataLayerService,
            NgbModal])
    ], MessagesComponent);
    return MessagesComponent;
}());
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map