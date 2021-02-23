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
import { NavigationService } from "../../services/navigation.service";
import { CustomizerService } from "../../services/customizer.service";
import { Router } from "@angular/router";
let CustomizerComponent = /** @class */ (() => {
    let CustomizerComponent = class CustomizerComponent {
        constructor(navService, customizer, router) {
            this.navService = navService;
            this.customizer = customizer;
            this.router = router;
            this.isOpen = true;
            this.colors = [];
        }
        ngOnInit() {
            this.nav = [...this.navService.defaultMenu];
            this.layouts = this.customizer.layouts;
            this.colors = this.customizer.colors;
            if (!this.customizer.selectedLayout) {
                this.layouts.forEach(layout => {
                    if (layout.active) {
                        this.selectLayout(layout);
                    }
                });
            }
            if (!this.customizer.selectedSidebarColor) {
                this.colors.forEach(color => {
                    if (color.active) {
                        this.selectSidebarColor(color);
                    }
                });
            }
        }
        ngOnDestroy() { }
        selectLayout(selectedLayout) {
            this.customizer.selectedLayout = selectedLayout;
            this.customizer.modifySidebarUrls(this.nav, selectedLayout.name);
            // this.navService.menuItems.next(this.nav);
            this.changeLayoutRoute(selectedLayout.name);
            // reset color on layout change
            if (this.customizer.selectedSidebarColor) {
                this.selectSidebarColor(this.customizer.selectedSidebarColor);
            }
        }
        selectSidebarColor(color) {
            setTimeout(() => {
                let adminWrap = document.querySelector(".app-admin-wrap");
                let selectedColor = Object.assign({}, this.customizer.selectedSidebarColor);
                this.customizer.removeClass(adminWrap, selectedColor.sidebarClass);
                this.customizer.addClass(adminWrap, color.sidebarClass);
                this.customizer.selectedSidebarColor = color;
            }, 40);
        }
        changeLayoutRoute(route) {
            let currentRoute = this.router.url;
            let changedRoute = this.customizer.replaceUrlString(route, currentRoute);
            this.router.navigateByUrl(changedRoute);
        }
        toggleDir() {
            this.customizer.toggleDir(this.isRTL);
        }
    };
    CustomizerComponent = __decorate([
        Component({
            selector: "app-customizer",
            templateUrl: "./customizer.component.html",
            styleUrls: ["./customizer.component.scss"]
        }),
        __metadata("design:paramtypes", [NavigationService,
            CustomizerService,
            Router])
    ], CustomizerComponent);
    return CustomizerComponent;
})();
export { CustomizerComponent };
//# sourceMappingURL=customizer.component.js.map