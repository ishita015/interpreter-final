var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownAnchorDirective } from './dropdown-anchor.directive';
import { DropdownLinkDirective } from './dropdown-link.directive';
import { AppDropdownDirective } from './dropdown.directive';
import { ScrollToDirective } from './scroll-to.directive';
import { SidebarDirective, SidebarContainerDirective, SidebarContentDirective, SidebarTogglerDirective } from './sidebar.directive';
import { HighlightjsDirective } from './highlightjs.directive';
import { FullScreenWindowDirective } from './full-screen.directive';
const directives = [
    DropdownAnchorDirective,
    DropdownLinkDirective,
    AppDropdownDirective,
    ScrollToDirective,
    SidebarDirective,
    SidebarContainerDirective,
    SidebarContentDirective,
    SidebarTogglerDirective,
    HighlightjsDirective,
    FullScreenWindowDirective
];
let SharedDirectivesModule = /** @class */ (() => {
    let SharedDirectivesModule = class SharedDirectivesModule {
    };
    SharedDirectivesModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: directives,
            exports: directives
        })
    ], SharedDirectivesModule);
    return SharedDirectivesModule;
})();
export { SharedDirectivesModule };
//# sourceMappingURL=shared-directives.module.js.map