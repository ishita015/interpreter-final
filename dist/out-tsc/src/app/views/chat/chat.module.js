var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ChatLeftSidebarComponent } from './chat-left-sidebar/chat-left-sidebar.component';
import { ChatContentsComponent } from './chat-contents/chat-contents.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                SharedDirectivesModule,
                SharedPipesModule,
                FormsModule,
                PerfectScrollbarModule,
                ChatRoutingModule
            ],
            declarations: [ChatComponent, ChatLeftSidebarComponent, ChatContentsComponent]
        })
    ], ChatModule);
    return ChatModule;
}());
export { ChatModule };
//# sourceMappingURL=chat.module.js.map