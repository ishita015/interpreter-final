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
import { User, ChatService } from '../chat.service';
import { HttpService } from "../../../shared/services/http.service";
import { Router } from '@angular/router';
import { VariablesService } from 'src/app/shared/services/variables.service';
let ChatLeftSidebarComponent = /** @class */ (() => {
    let ChatLeftSidebarComponent = class ChatLeftSidebarComponent {
        constructor(chatService, service, router, variable) {
            this.chatService = chatService;
            this.service = service;
            this.router = router;
            this.variable = variable;
            this.isSidenavOpen = true;
            this.currentUser = new User();
        }
        ngOnInit() {
            this.login_data = JSON.parse(localStorage.getItem('loginData'));
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.getContactList();
        }
        getContactList() {
            this.service.getContactData(this.userId)
                .subscribe(res => {
                if (res['status'] == 1) {
                    this.contacts = res['data'];
                }
            });
        }
        getChatByContact(contact) {
            this.variable.user_chat_img = true;
            console.log("select contact", contact);
            this.variable.loadingCollection = true;
            this.service.changeMessage(contact);
            if (contact.group_id == '0') {
                console.log("group_id", contact.group_id);
                // send request
                this.service.requestSend(this.userId, contact.id).subscribe(res => {
                    if (res['status'] == 1) {
                        this.getContactList();
                    }
                });
            }
        }
    };
    ChatLeftSidebarComponent = __decorate([
        Component({
            selector: 'app-chat-left-sidebar',
            templateUrl: './chat-left-sidebar.component.html',
            styleUrls: ['./chat-left-sidebar.component.scss']
        }),
        __metadata("design:paramtypes", [ChatService, HttpService, Router, VariablesService])
    ], ChatLeftSidebarComponent);
    return ChatLeftSidebarComponent;
})();
export { ChatLeftSidebarComponent };
//# sourceMappingURL=chat-left-sidebar.component.js.map