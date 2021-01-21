var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener, ViewChildren, QueryList } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { filter } from 'rxjs/operators';
import { Utils } from '../../../../utils';
var SidebarLargeComponent = /** @class */ (function () {
    function SidebarLargeComponent(router, navService) {
        var _this = this;
        this.router = router;
        this.navService = navService;
        setTimeout(function () {
            _this.psContainerSecSidebar = _this.psContainers.toArray()[1];
        });
    }
    SidebarLargeComponent.prototype.ngOnInit = function () {
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
            var roleType = localStorage.getItem('roleId');
            console.log('items', items);
            if (roleType == '1') {
                _this.nav = items.v1;
            }
            else {
                _this.nav = items.v2;
            }
            // console.log('dev',this.nav)
            // console.log('------',roleType)
            _this.setActiveFlag();
        });
    };
    SidebarLargeComponent.prototype.selectItem = function (item) {
        var _this = this;
        this.navService.sidebarState.childnavOpen = true;
        this.navService.selectedItem = item;
        this.setActiveMainItem(item);
        // Scroll to top secondary sidebar
        setTimeout(function () {
            _this.psContainerSecSidebar.update();
            _this.psContainerSecSidebar.scrollToTop(0, 400);
        });
    };
    SidebarLargeComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarLargeComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarLargeComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (i) {
            i.active = false;
        });
        item.active = true;
    };
    SidebarLargeComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.navService.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.navService.selectedItem = item;
                            item.active = true;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.navService.selectedItem = item;
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
    SidebarLargeComponent.prototype.updateSidebar = function () {
        if (Utils.isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarLargeComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    __decorate([
        ViewChildren(PerfectScrollbarDirective),
        __metadata("design:type", QueryList)
    ], SidebarLargeComponent.prototype, "psContainers", void 0);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarLargeComponent.prototype, "onResize", null);
    SidebarLargeComponent = __decorate([
        Component({
            selector: 'app-sidebar-large',
            templateUrl: './sidebar-large.component.html',
            styleUrls: ['./sidebar-large.component.scss']
        }),
        __metadata("design:paramtypes", [Router, NavigationService])
    ], SidebarLargeComponent);
    return SidebarLargeComponent;
}());
export { SidebarLargeComponent };
//# sourceMappingURL=sidebar-large.component.js.map