var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
let AdminLayoutSidebarLargeComponent = /** @class */ (() => {
    let AdminLayoutSidebarLargeComponent = class AdminLayoutSidebarLargeComponent {
        constructor(navService, searchService, router) {
            this.navService = navService;
            this.searchService = searchService;
            this.router = router;
        }
        ngOnInit() {
            this.router.events.subscribe(event => {
                if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                    this.moduleLoading = true;
                }
                if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                    this.moduleLoading = false;
                }
            });
        }
    };
    __decorate([
        ViewChild(PerfectScrollbarDirective, { static: true }),
        __metadata("design:type", PerfectScrollbarDirective)
    ], AdminLayoutSidebarLargeComponent.prototype, "perfectScrollbar", void 0);
    AdminLayoutSidebarLargeComponent = __decorate([
        Component({
            selector: 'app-admin-layout-sidebar-large',
            templateUrl: './admin-layout-sidebar-large.component.html',
            styleUrls: ['./admin-layout-sidebar-large.component.scss']
        }),
        __metadata("design:paramtypes", [NavigationService,
            SearchService,
            Router])
    ], AdminLayoutSidebarLargeComponent);
    return AdminLayoutSidebarLargeComponent;
})();
export { AdminLayoutSidebarLargeComponent };
//# sourceMappingURL=admin-layout-sidebar-large.component.js.map