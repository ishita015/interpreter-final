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
import { NavigationService } from '../../../../services/navigation.service';
import { SearchService } from '../../../../services/search.service';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
var HeaderSidebarLargeComponent = /** @class */ (function () {
    function HeaderSidebarLargeComponent(navService, searchService, router, auth) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
        this.auth = auth;
        this.notifications = [
            {
                icon: 'i-Speach-Bubble-6',
                title: 'New message',
                badge: '3',
                text: 'James: Hey! are you busy?',
                time: new Date(),
                status: 'primary',
                link: '/chat'
            },
            {
                icon: 'i-Receipt-3',
                title: 'New order received',
                badge: '$4036',
                text: '1 Headphone, 3 iPhone x',
                time: new Date('11/11/2018'),
                status: 'success',
                link: '/tables/full'
            },
            {
                icon: 'i-Empty-Box',
                title: 'Product out of stock',
                text: 'Headphone E67, R98, XL90, Q77',
                time: new Date('11/10/2018'),
                status: 'danger',
                link: '/tables/list'
            },
            {
                icon: 'i-Data-Power',
                title: 'Server up!',
                text: 'Server rebooted successfully',
                time: new Date('11/08/2018'),
                status: 'success',
                link: '/dashboard/v2'
            },
            {
                icon: 'i-Data-Block',
                title: 'Server down!',
                badge: 'Resolved',
                text: 'Region 1: Server crashed!',
                time: new Date('11/06/2018'),
                status: 'danger',
                link: '/dashboard/v3'
            }
        ];
    }
    HeaderSidebarLargeComponent.prototype.ngOnInit = function () {
        this.updatedata = JSON.parse(localStorage.getItem('loginData'));
        console.log("update data", this.updatedata.profile_img);
    };
    HeaderSidebarLargeComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        if (state.childnavOpen && state.sidenavOpen) {
            return state.childnavOpen = false;
        }
        if (!state.childnavOpen && state.sidenavOpen) {
            return state.sidenavOpen = false;
        }
        // item has child items
        if (!state.sidenavOpen && !state.childnavOpen
            && this.navService.selectedItem.type === 'dropDown') {
            state.sidenavOpen = true;
            setTimeout(function () {
                state.childnavOpen = true;
            }, 50);
        }
        // item has no child items
        if (!state.sidenavOpen && !state.childnavOpen) {
            state.sidenavOpen = true;
        }
    };
    HeaderSidebarLargeComponent.prototype.signout = function () {
        this.auth.signout();
    };
    HeaderSidebarLargeComponent.prototype.profile_btn = function () {
        this.router.navigate(['/profile/admin-profile']);
    };
    HeaderSidebarLargeComponent.prototype.chnage_pass_btn = function () {
        this.router.navigate(['/profile/change-password']);
    };
    HeaderSidebarLargeComponent = __decorate([
        Component({
            selector: 'app-header-sidebar-large',
            templateUrl: './header-sidebar-large.component.html',
            styleUrls: ['./header-sidebar-large.component.scss']
        }),
        __metadata("design:paramtypes", [NavigationService,
            SearchService,
            Router,
            AuthService])
    ], HeaderSidebarLargeComponent);
    return HeaderSidebarLargeComponent;
}());
export { HeaderSidebarLargeComponent };
//# sourceMappingURL=header-sidebar-large.component.js.map