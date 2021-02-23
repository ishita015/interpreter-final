var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewChildren, Input } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ChatService, User } from '../chat.service';
import { NgForm } from '@angular/forms';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { HttpService } from 'src/app/shared/services/http.service';
import { VariablesService } from 'src/app/shared/services/variables.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
let ChatContentsComponent = /** @class */ (() => {
    let ChatContentsComponent = class ChatContentsComponent {
        constructor(chatService, service, sanitizer, modalService, variable) {
            this.chatService = chatService;
            this.service = service;
            this.sanitizer = sanitizer;
            this.modalService = modalService;
            this.variable = variable;
            this.user = new User();
            this.activeContact = new User();
            this.incomingmsg = [];
            this.messageList = [];
            this.msg = '';
            this.selectedFile = null;
            this.url = '';
            this.color = 'red';
            this.img = '';
        }
        ngOnInit() {
            this.userId = JSON.parse(localStorage.getItem('userId'));
            this.loggeduser = JSON.parse(localStorage.getItem('loggeduser'));
            this.login_data = JSON.parse(localStorage.getItem('loginData'));
            this.service.currentMessage.subscribe(message => {
                this.message = (message) ? message : '';
                this.userChat();
            });
            this.service
                .getMessages()
                .subscribe((res) => {
                this.messageList.push(res);
                this.scrollToBottom();
            });
        }
        ngOnDestroy() {
            if (this.userUpdateSub) {
                this.userUpdateSub.unsubscribe();
            }
            if (this.chatSelectSub) {
                this.chatSelectSub.unsubscribe();
            }
            if (this.chatUpdateSub) {
                this.chatUpdateSub.unsubscribe();
            }
        }
        /*==========Single Image Function Start Here========*/
        onSingleFileChange(event) {
            this.selectedFile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', this.selectedFile);
            this.service.getSingleImage(formData).subscribe(res => {
                console.log("imagesssssssssss", res);
                if (res['status'] == 1) {
                    this.service.sendMessage(res['data'], this.userId, this.message.id, this.message.group_id, 'image');
                }
            });
        }
        /*==========Single Image Function End Here========*/
        userChat() {
            this.service.getUserChat(this.userId, this.message.group_id)
                .subscribe(res => {
                if (res['status'] == 1) {
                    this.chat_Obj = res['data'];
                    this.messageList = this.chat_Obj;
                }
                else {
                    this.messageList = [];
                }
            });
        }
        singleImageUpload() {
            console.log("imagesss file", this.selectedFile);
        }
        message_send(e) {
            console.log(e);
            this.textForm = this.msgForm.form.value.message;
            if (this.textForm != '' && this.textForm != undefined && this.textForm != null) {
                this.service.sendMessage(this.textForm, this.userId, this.message.id, this.message.group_id, 'text');
            }
            this.msgForm.form.reset();
        }
        initMsgForm() {
            setTimeout(() => {
                this.msgForm.reset();
                this.msgInput.first.nativeElement.focus();
                this.scrollToBottom();
            });
        }
        scrollToBottom() {
            setTimeout(() => {
                this.psContainer.update();
                this.psContainer.scrollToBottom(0, 400);
            });
        }
        changeStyle(e) {
            console.log("ppppppp");
        }
        downloadUrl(url, fileName) {
            const a = document.createElement('a');
            console.log(a);
            a.href = url;
            console.log(url);
            a.click();
            a.download = url;
            //a.target="_self"
            document.body.appendChild(a);
            a.style = 'display: none';
        }
        imgview(e) {
            console.log("images", e);
            window.open(e);
        }
    };
    __decorate([
        Input('matSidenav'),
        __metadata("design:type", Object)
    ], ChatContentsComponent.prototype, "matSidenav", void 0);
    __decorate([
        ViewChild(PerfectScrollbarDirective),
        __metadata("design:type", PerfectScrollbarDirective)
    ], ChatContentsComponent.prototype, "psContainer", void 0);
    __decorate([
        ViewChild('imageModal', { static: true }),
        __metadata("design:type", Object)
    ], ChatContentsComponent.prototype, "imageModal", void 0);
    __decorate([
        ViewChildren('msgInput'),
        __metadata("design:type", Object)
    ], ChatContentsComponent.prototype, "msgInput", void 0);
    __decorate([
        ViewChild('msgForm'),
        __metadata("design:type", NgForm)
    ], ChatContentsComponent.prototype, "msgForm", void 0);
    ChatContentsComponent = __decorate([
        Component({
            selector: 'app-chat-contents',
            templateUrl: './chat-contents.component.html',
            styleUrls: ['./chat-contents.component.scss'],
            animations: [SharedAnimations]
        }),
        __metadata("design:paramtypes", [ChatService,
            HttpService,
            DomSanitizer,
            NgbModal,
            VariablesService])
    ], ChatContentsComponent);
    return ChatContentsComponent;
})();
export { ChatContentsComponent };
//# sourceMappingURL=chat-contents.component.js.map