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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
let ModalsComponent = /** @class */ (() => {
    let ModalsComponent = class ModalsComponent {
        constructor(modalService) {
            this.modalService = modalService;
        }
        ngOnInit() {
        }
        open(content) {
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
                .result.then((result) => {
                console.log(result);
            }, (reason) => {
                console.log('Err!', reason);
            });
        }
        openSmall(content) {
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
                .result.then((result) => {
                console.log(result);
            }, (reason) => {
                console.log('Err!', reason);
            });
        }
        confirm(content) {
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
                .result.then((result) => {
                this.confirmResut = `Closed with: ${result}`;
            }, (reason) => {
                this.confirmResut = `Dismissed with: ${reason}`;
            });
        }
    };
    ModalsComponent = __decorate([
        Component({
            selector: 'app-modals',
            templateUrl: './modals.component.html',
            styleUrls: ['./modals.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal])
    ], ModalsComponent);
    return ModalsComponent;
})();
export { ModalsComponent };
//# sourceMappingURL=modals.component.js.map