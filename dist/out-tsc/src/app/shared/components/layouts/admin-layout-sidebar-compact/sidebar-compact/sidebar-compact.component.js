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
let SidebarCompactComponent = /** @class */ (() => {
    let SidebarCompactComponent = class SidebarCompactComponent {
        constructor(router, navService) {
            this.router = router;
            this.navService = navService;
        }
        ngOnInit() {
            this.updateSidebar();
            // CLOSE SIDENAV ON ROUTE CHANGE
            this.router.events
                .pipe(filter(event => event instanceof NavigationEnd))
                .subscribe(routeChange => {
                this.closeChildNav();
                if (Utils.isMobile()) {
                    this.navService.sidebarState.sidenavOpen = false;
                }
            });
            this.navService.menuItems$.subscribe(items => {
                // this.nav = items;
                this.setActiveFlag();
            });
        }
        selectItem(item) {
            this.navService.sidebarState.childnavOpen = true;
            this.selectedItem = item;
            this.setActiveMainItem(item);
        }
        closeChildNav() {
            this.navService.sidebarState.childnavOpen = false;
            this.setActiveFlag();
        }
        onClickChangeActiveFlag(item) {
            this.setActiveMainItem(item);
        }
        setActiveMainItem(item) {
            this.nav.forEach(item => {
                item.active = false;
            });
            item.active = true;
        }
        setActiveFlag() {
            if (window && window.location) {
                const activeRoute = window.location.hash || window.location.pathname;
                this.nav.forEach(item => {
                    item.active = false;
                    if (activeRoute.indexOf(item.state) !== -1) {
                        this.selectedItem = item;
                        item.active = true;
                    }
                    if (item.sub) {
                        item.sub.forEach(subItem => {
                            subItem.active = false;
                            if (activeRoute.indexOf(subItem.state) !== -1) {
                                this.selectedItem = item;
                                item.active = true;
                                // subItem.active = true;
                                // debugger;
                            }
                            if (subItem.sub) {
                                subItem.sub.forEach(subChildItem => {
                                    if (activeRoute.indexOf(subChildItem.state) !== -1) {
                                        this.selectedItem = item;
                                        item.active = true;
                                        subItem.active = true;
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
        updateSidebar() {
            if (Utils.isMobile()) {
                this.navService.sidebarState.sidenavOpen = false;
                this.navService.sidebarState.childnavOpen = false;
            }
            else {
                this.navService.sidebarState.sidenavOpen = true;
            }
        }
        toggelSidebar() {
            const state = this.navService.sidebarState;
            state.sidenavOpen = !state.sidenavOpen;
            state.childnavOpen = !state.childnavOpen;
        }
        onResize(event) {
            this.updateSidebar();
        }
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
})();
export { SidebarCompactComponent };
//# sourceMappingURL=sidebar-compact.component.js.map