var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from "@angular/core";
import { NavigationService } from "../../../../services/navigation.service";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { Utils } from "../../../../utils";
var SidebarCompactComponent = /** @class */ (function () {
    function SidebarCompactComponent(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    SidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (Utils.isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
        });
        this.navService.menuItems$.subscribe(function (items) {
            // this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarCompactComponent.prototype.selectItem = function (item) {
        this.navService.sidebarState.childnavOpen = true;
        this.selectedItem = item;
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarCompactComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (item) {
            item.active = false;
        });
        item.active = true;
    };
    SidebarCompactComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.selectedItem = item;
                            item.active = true;
                            // subItem.active = true;
                            // debugger;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SidebarCompactComponent.prototype.updateSidebar = function () {
        if (Utils.isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarCompactComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        state.sidenavOpen = !state.sidenavOpen;
        state.childnavOpen = !state.childnavOpen;
    };
    SidebarCompactComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    __decorate([
        HostListener("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarCompactComponent.prototype, "onResize", null);
    SidebarCompactComponent = __decorate([
        Component({
            selector: "app-sidebar-compact",
            templateUrl: "./sidebar-compact.component.html",
            styleUrls: ["./sidebar-compact.component.scss"]
        }),
        __metadata("design:paramtypes", [Router, NavigationService])
    ], SidebarCompactComponent);
    return SidebarCompactComponent;
}());
export { SidebarCompactComponent };
//# sourceMappingURL=sidebar-compact.component.js.map