var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { filter } from "rxjs/operators";
var CustomizerService = /** @class */ (function () {
    function CustomizerService(router) {
        var _this = this;
        this.router = router;
        this.layouts = [
            {
                title: "Sidebar Compact",
                name: "applayout-sidebar-compact",
                img: "./assets/images/screenshots/02_preview.png",
                active: false
            },
            {
                title: "Sidebar Large",
                name: "applayout-sidebar-large",
                img: "./assets/images/screenshots/04_preview.png",
                active: true
            }
        ];
        this.colors = [
            {
                sidebarClass: "sidebar-gradient-purple-indigo",
                class: "gradient-purple-indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-blue",
                class: "gradient-black-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-gray",
                class: "gradient-black-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-steel-gray",
                class: "gradient-steel-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-dark-purple",
                class: "dark-purple",
                active: true
            },
            {
                sidebarClass: "sidebar-slate-gray",
                class: "slate-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-midnight-blue",
                class: "midnight-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-blue",
                class: "blue",
                active: false
            },
            {
                sidebarClass: "sidebar-indigo",
                class: "indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-pink",
                class: "pink",
                active: false
            },
            {
                sidebarClass: "sidebar-red",
                class: "red",
                active: false
            },
            {
                sidebarClass: "sidebar-purple",
                class: "purple",
                active: false
            }
        ];
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }))
            .subscribe(function (event) {
            if (event.url.indexOf("applayout-") === -1) {
                if (event.url.indexOf("sessions") !== -1) {
                    return;
                }
                var url = "/" + _this.selectedLayout.name + event.url;
                _this.router.navigateByUrl(url);
            }
        });
    }
    CustomizerService.prototype.modifySidebarUrls = function (nav, selectedLayoutName) {
        var _this = this;
        nav.forEach(function (item) {
            if (item.state && item.state.indexOf("sessions") !== -1) {
                return;
            }
            if (item.type === "link" && item.state.indexOf("applayout-") === -1) {
                item.state = "/" + selectedLayoutName + item.state;
            }
            else if (item.type === "link") {
                item.state = _this.replaceUrlString(selectedLayoutName, item.state);
            }
            if (item.type === "dropDown" && item.sub) {
                _this.modifySidebarUrls(item.sub, selectedLayoutName);
            }
        });
    };
    CustomizerService.prototype.replaceUrlString = function (inputString, fullString) {
        var currentRoute = fullString;
        var routeArray = currentRoute.split("/");
        routeArray = routeArray.map(function (r) {
            if (r.indexOf("applayout-") !== -1) {
                return inputString;
            }
            return r;
        });
        return routeArray.join("/");
    };
    CustomizerService.prototype.removeClass = function (el, className) {
        if (!el || el.length === 0)
            return;
        if (!el.length) {
            el.classList.remove(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
            }
        }
    };
    CustomizerService.prototype.addClass = function (el, className) {
        if (!el)
            return;
        if (!el.length) {
            el.classList.add(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
            }
        }
    };
    CustomizerService.prototype.findClosest = function (el, className) {
        if (!el)
            return;
        while (el) {
            var parent = el.parentElement;
            if (parent && this.hasClass(parent, className)) {
                return parent;
            }
            el = parent;
        }
    };
    CustomizerService.prototype.hasClass = function (el, className) {
        if (!el)
            return;
        return ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1);
    };
    CustomizerService.prototype.toggleClass = function (el, className) {
        if (!el)
            return;
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
        else {
            this.addClass(el, className);
        }
    };
    CustomizerService.prototype.toggleDir = function (isRTL) {
        var html = document.getElementsByTagName('html')[0];
        if (!html) {
            return;
        }
        if (isRTL) {
            html.setAttribute('dir', 'rtl');
        }
        else {
            html.setAttribute('dir', 'ltr');
        }
    };
    CustomizerService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [Router])
    ], CustomizerService);
    return CustomizerService;
}());
export { CustomizerService };
//# sourceMappingURL=customizer.service.js.map