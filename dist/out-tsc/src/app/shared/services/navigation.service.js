var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
var NavigationService = /** @class */ (function () {
    function NavigationService(route) {
        this.route = route;
        this.sidebarState = {
            sidenavOpen: true,
            childnavOpen: false
        };
        this.id = JSON.parse(localStorage.getItem('userId'));
        //admin
        this.defaultMenu = [
            {
                name: 'Dashboard',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'link',
                icon: 'i-Bar-Chart',
                state: '/dashboard/v1',
            },
            {
                name: 'Languages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                type: 'dropDown',
                icon: 'i-Library',
                sub: [
                    { icon: 'i-Bell', name: 'Language List', state: '/languages/list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'Import Language', state: '/languages/excelImport', type: 'link' },
                ]
            },
            {
                name: 'User Role & Permissions',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                type: 'link',
                icon: 'i-Library',
                state: '/permission/rolelist',
            },
            {
                name: 'User management',
                type: 'link',
                icon: 'i-Add-User',
                state: '/users/user-list',
            },
            {
                name: 'Interpreter management',
                type: 'link',
                icon: 'i-Add-User',
                state: '/interpreter/interpreter-list',
            }, {
                name: 'Client management',
                type: 'link',
                icon: 'i-Add-User',
                state: '/client/client-list',
            },
            {
                name: 'Requests',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                type: 'dropDown',
                icon: 'i-Library',
                sub: [
                    { icon: 'i-Bell', name: 'All Request', state: '/interpreter-request/all-request-list', type: 'link' },
                    { icon: 'i-Bell', name: 'New Request', state: '/user-request/list', type: 'link' },
                    { icon: 'i-Bell', name: 'Broadcasting', state: '/interpreter-request/list', type: 'link' },
                    // { icon: 'i-Split-Horizontal-2-Window', name: 'Assign', state: '/interpreter-request/accept-list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'In Progress', state: '/interpreter-request/accept-list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'Completed', state: '/interpreter-request/completed-list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'Cancelled', state: '/interpreter-request/cancelled-list', type: 'link' },
                ]
            },
            {
                name: 'Set Calculation',
                type: 'link',
                icon: 'i-Add-User',
                state: '/set-calculation/set-calculation-add',
            },
            {
                name: 'Chat',
                type: 'link',
                icon: 'i-Add-User',
                state: '/chat/chat',
            },
        ];
        this.userMenu = [
            {
                name: 'Dashboard',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'link',
                icon: 'i-Bar-Chart',
                state: '/dashboard/v2',
            },
            {
                name: 'Requests',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                type: 'dropDown',
                icon: 'i-Library',
                sub: [
                    { icon: 'i-Bell', name: 'Broadcasting', state: '/interpreter-request/list', type: 'link' },
                    // { icon: 'i-Bell', name: 'New-Request', state: '/user-request/pending-request', type: 'link' },
                    // { icon: 'i-Bell', name: 'New Request', state: '/interpreter-request/list', type: 'link' },
                    // { icon: 'i-Split-Horizontal-2-Window', name: 'Assign', state: '/interpreter-request/accept-list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'In Progress', state: '/interpreter-request/accept-list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'Rejected', state: '/interpreter-request/reject-list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'Completed', state: '/interpreter-request/completed-list', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'Cancelled', state: '/interpreter-request/cancelled-list', type: 'link' },
                ]
            },
            {
                name: 'Chat',
                type: 'link',
                icon: 'i-Add-User',
                state: '/chat/chat',
            },
            {
                name: 'Profile',
                type: 'link',
                icon: 'i-Add-User',
                state: '/interpreter/interpreter-profile/' + this.id,
            },
        ];
        this.menuItems = new BehaviorSubject({ v1: this.defaultMenu, v2: this.userMenu });
        this.menuItems$ = this.menuItems.asObservable();
        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
    }
    // menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu); //SUPER ADMIN
    // menuItems$ = this.menuItems.asObservable();        
    NavigationService.prototype.ngOnInit = function () {
    };
    NavigationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], NavigationService);
    return NavigationService;
}());
export { NavigationService };
//# sourceMappingURL=navigation.service.js.map