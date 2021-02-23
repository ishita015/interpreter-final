var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, ElementRef, HostListener, Input, Inject } from '@angular/core';
import { SidebarHelperService } from '../services/sidebar-helper.service';
import { Utils } from '../utils';
let SidebarContainerDirective = /** @class */ (() => {
    let SidebarContainerDirective = class SidebarContainerDirective {
        constructor(el, _sidenavHelperService) {
            this.el = el;
            this._sidenavHelperService = _sidenavHelperService;
            this.nativeEl = this.el.nativeElement;
            this.nativeEl.className += ' sidebar-container';
        }
        ngOnInit() {
        }
    };
    __decorate([
        Input('appSidebarContainer'),
        __metadata("design:type", String)
    ], SidebarContainerDirective.prototype, "id", void 0);
    SidebarContainerDirective = __decorate([
        Directive({
            selector: '[appSidebarContainer]'
        }),
        __metadata("design:paramtypes", [ElementRef,
            SidebarHelperService])
    ], SidebarContainerDirective);
    return SidebarContainerDirective;
})();
export { SidebarContainerDirective };
let SidebarContentDirective = /** @class */ (() => {
    let SidebarContentDirective = class SidebarContentDirective {
        constructor(el, _sidenavHelperService, container) {
            this.el = el;
            this._sidenavHelperService = _sidenavHelperService;
            this.container = container;
            this.nativeEl = this.el.nativeElement;
            this.container.content = this;
            this.nativeEl.className += ' sidebar-content';
        }
        createBackdrop() {
        }
    };
    __decorate([
        Input('appSidebarContent'),
        __metadata("design:type", String)
    ], SidebarContentDirective.prototype, "id", void 0);
    SidebarContentDirective = __decorate([
        Directive({
            selector: '[appSidebarContent]'
        }),
        __param(2, Inject(SidebarContainerDirective)),
        __metadata("design:paramtypes", [ElementRef,
            SidebarHelperService,
            SidebarContainerDirective])
    ], SidebarContentDirective);
    return SidebarContentDirective;
})();
export { SidebarContentDirective };
let SidebarDirective = /** @class */ (() => {
    let SidebarDirective = class SidebarDirective {
        constructor(el, _sidenavHelperService, container) {
            this.el = el;
            this._sidenavHelperService = _sidenavHelperService;
            this.container = container;
            this.align = 'left';
            this.mode = 'side';
            this.nativeEl = this.el.nativeElement;
            this.containerNativeEl = this.container.el.nativeElement;
            this.contentNativeEl = this.container.content.el.nativeElement;
            this.nativeEl.className += ' sidebar';
        }
        ngOnInit() {
            this.width = this.el.nativeElement.offsetWidth + 'px';
            this._sidenavHelperService.setSidenav(this.id, this);
            this.initSidebar();
        }
        onResize(event) {
            this.initSidebar();
        }
        initSidebar() {
            this.closed = Utils.isMobile();
            if (this.closed) {
                this.close();
            }
            else {
                this.open();
            }
        }
        open() {
            if (this.align === 'left') {
                this.nativeEl.style.left = 0;
                if (!Utils.isMobile()) {
                    this.contentNativeEl.style.marginLeft = this.width;
                }
            }
            else if (this.align === 'right') {
                this.nativeEl.style.right = 0;
                if (!Utils.isMobile()) {
                    this.contentNativeEl.style.marginRight = this.width;
                }
            }
            this.closed = false;
        }
        close() {
            if (this.align === 'left') {
                this.nativeEl.style.left = '-' + this.width;
                this.contentNativeEl.style.marginLeft = 0;
            }
            else if (this.align === 'right') {
                this.nativeEl.style.right = '-' + this.width;
                this.contentNativeEl.style.marginRight = 0;
            }
            this.closed = true;
        }
        toggle() {
            if (this.closed) {
                this.open();
            }
            else {
                this.close();
            }
        }
    };
    __decorate([
        Input('align'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "align", void 0);
    __decorate([
        Input('mode'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "mode", void 0);
    __decorate([
        Input('appSidebar'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "id", void 0);
    __decorate([
        Input('closed'),
        __metadata("design:type", Boolean)
    ], SidebarDirective.prototype, "closed", void 0);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    SidebarDirective = __decorate([
        Directive({
            selector: '[appSidebar]'
        }),
        __param(2, Inject(SidebarContainerDirective)),
        __metadata("design:paramtypes", [ElementRef,
            SidebarHelperService,
            SidebarContainerDirective])
    ], SidebarDirective);
    return SidebarDirective;
})();
export { SidebarDirective };
let SidebarTogglerDirective = /** @class */ (() => {
    let SidebarTogglerDirective = class SidebarTogglerDirective {
        constructor(_sidenavHelperService) {
            this._sidenavHelperService = _sidenavHelperService;
        }
        onClick() {
            this._sidenavHelperService.getSidenav(this.id).toggle();
        }
    };
    __decorate([
        Input('appSidebarToggler'),
        __metadata("design:type", Object)
    ], SidebarTogglerDirective.prototype, "id", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SidebarTogglerDirective.prototype, "onClick", null);
    SidebarTogglerDirective = __decorate([
        Directive({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [SidebarHelperService])
    ], SidebarTogglerDirective);
    return SidebarTogglerDirective;
})();
export { SidebarTogglerDirective };
//# sourceMappingURL=sidebar.directive.js.map