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
import { ContactService } from '../contact.service';
let ContactGridComponent = /** @class */ (() => {
    let ContactGridComponent = class ContactGridComponent {
        constructor(contactService) {
            this.contactService = contactService;
            this.page = 1;
            this.contacts = [];
        }
        ngOnInit() {
            this.contactService.getContacts()
                .subscribe((res) => {
                this.contacts = res;
            });
        }
    };
    ContactGridComponent = __decorate([
        Component({
            selector: 'app-contact-grid',
            templateUrl: './contact-grid.component.html',
            styleUrls: ['./contact-grid.component.scss']
        }),
        __metadata("design:paramtypes", [ContactService])
    ], ContactGridComponent);
    return ContactGridComponent;
})();
export { ContactGridComponent };
//# sourceMappingURL=contact-grid.component.js.map