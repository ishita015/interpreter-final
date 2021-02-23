var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { NavigationService } from "src/app/shared/services/navigation.service";
import { SearchService } from "src/app/shared/services/search.service";
import { AuthService } from "src/app/shared/services/auth.service";
let HeaderSidebarCompactComponent = /** @class */ (() => {
    let HeaderSidebarCompactComponent = class HeaderSidebarCompactComponent {
        constructor(navService, searchService, auth) {
            this.navService = navService;
            this.searchService = searchService;
            this.auth = auth;
            this.notifications = [
                {
                    icon: "i-Speach-Bubble-6",
                    title: "New message",
                    badge: "3",
                    text: "James: Hey! are you busy?",
                    time: new Date(),
                    status: "primary",
                    link: "/chat"
                },
                {
                    icon: "i-Receipt-3",
                    title: "New order received",
                    badge: "$4036",
                    text: "1 Headphone, 3 iPhone x",
                    time: new Date("11/11/2018"),
                    status: "success",
                    link: "/tables/full"
                },
                {
                    icon: "i-Empty-Box",
                    title: "Product out of stock",
                    text: "Headphone E67, R98, XL90, Q77",
                    time: new Date("11/10/2018"),
                    status: "danger",
                    link: "/tables/list"
                },
                {
                    icon: "i-Data-Power",
                    title: "Server up!",
                    text: "Server rebooted successfully",
                    time: new Date("11/08/2018"),
                    status: "success",
                    link: "/dashboard/v2"
                },
                {
                    icon: "i-Data-Block",
                    title: "Server down!",
                    badge: "Resolved",
                    text: "Region 1: Server crashed!",
                    time: new Date("11/06/2018"),
                    status: "danger",
                    link: "/dashboard/v3"
                }
            ];
        }
        ngOnInit() { }
        toggelSidebar() {
            const state = this.navService.sidebarState;
            state.sidenavOpen = !state.sidenavOpen;
            state.childnavOpen = !state.childnavOpen;
        }
        signout() {
            this.auth.signout();
        }
    };
    HeaderSidebarCompactComponent = __decorate([
        Component({
            selector: "app-header-sidebar-compact",
            templateUrl: "./header-sidebar-compact.component.html",
            styleUrls: ["./header-sidebar-compact.component.scss"]
        }),
        __metadata("design:paramtypes", [NavigationService,
            SearchService,
            AuthService])
    ], HeaderSidebarCompactComponent);
    return HeaderSidebarCompactComponent;
})();
export { HeaderSidebarCompactComponent };
//# sourceMappingURL=header-sidebar-compact.component.js.map