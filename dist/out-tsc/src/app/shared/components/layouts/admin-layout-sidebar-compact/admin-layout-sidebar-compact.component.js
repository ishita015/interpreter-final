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
import { NavigationService } from '../../../services/navigation.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
var AdminLayoutSidebarCompactComponent = /** @class */ (function () {
    function AdminLayoutSidebarCompactComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    AdminLayoutSidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                _this.moduleLoading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                _this.moduleLoading = false;
            }
        });
    };
    AdminLayoutSidebarCompactComponent = __decorate([
        Component({
            selector: 'app-admin-layout-sidebar-compact',
            templateUrl: './admin-layout-sidebar-compact.component.html',
            styleUrls: ['./admin-layout-sidebar-compact.component.scss']
        }),
        __metadata("design:paramtypes", [NavigationService,
            SearchService,
            Router])
    ], AdminLayoutSidebarCompactComponent);
    return AdminLayoutSidebarCompactComponent;
}());
export { AdminLayoutSidebarCompactComponent };
//# sourceMappingURL=admin-layout-sidebar-compact.component.js.map