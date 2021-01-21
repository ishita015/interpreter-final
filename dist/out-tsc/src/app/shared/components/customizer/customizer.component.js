var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { Component } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { CustomizerService } from "../../services/customizer.service";
import { Router } from "@angular/router";
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(navService, customizer, router) {
        this.navService = navService;
        this.customizer = customizer;
        this.router = router;
        this.isOpen = true;
        this.colors = [];
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav = __spread(this.navService.defaultMenu);
        this.layouts = this.customizer.layouts;
        this.colors = this.customizer.colors;
        if (!this.customizer.selectedLayout) {
            this.layouts.forEach(function (layout) {
                if (layout.active) {
                    _this.selectLayout(layout);
                }
            });
        }
        if (!this.customizer.selectedSidebarColor) {
            this.colors.forEach(function (color) {
                if (color.active) {
                    _this.selectSidebarColor(color);
                }
            });
        }
    };
    CustomizerComponent.prototype.ngOnDestroy = function () { };
    CustomizerComponent.prototype.selectLayout = function (selectedLayout) {
        this.customizer.selectedLayout = selectedLayout;
        this.customizer.modifySidebarUrls(this.nav, selectedLayout.name);
        // this.navService.menuItems.next(this.nav);
        this.changeLayoutRoute(selectedLayout.name);
        // reset color on layout change
        if (this.customizer.selectedSidebarColor) {
            this.selectSidebarColor(this.customizer.selectedSidebarColor);
        }
    };
    CustomizerComponent.prototype.selectSidebarColor = function (color) {
        var _this = this;
        setTimeout(function () {
            var adminWrap = document.querySelector(".app-admin-wrap");
            var selectedColor = __assign({}, _this.customizer.selectedSidebarColor);
            _this.customizer.removeClass(adminWrap, selectedColor.sidebarClass);
            _this.customizer.addClass(adminWrap, color.sidebarClass);
            _this.customizer.selectedSidebarColor = color;
        }, 40);
    };
    CustomizerComponent.prototype.changeLayoutRoute = function (route) {
        var currentRoute = this.router.url;
        var changedRoute = this.customizer.replaceUrlString(route, currentRoute);
        this.router.navigateByUrl(changedRoute);
    };
    CustomizerComponent.prototype.toggleDir = function () {
        this.customizer.toggleDir(this.isRTL);
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
}());
export { CustomizerComponent };
//# sourceMappingURL=customizer.component.js.map