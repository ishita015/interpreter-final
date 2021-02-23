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
let NavigationService = /** @class */ (() => {
    let NavigationService = class NavigationService {
        constructor() {
            this.sidebarState = {
                sidenavOpen: true,
                childnavOpen: false
            };
            this.defaultMenu = [
                {
                    name: 'Dashboard',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    type: 'link',
                    icon: 'i-Bar-Chart',
                    state: '/dashboard/v1',
                },
                {
                    name: 'Language',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    type: 'dropDown',
                    icon: 'i-Library',
                    sub: [
                        { icon: 'i-Bell', name: 'Language-List', state: '/languages/list', type: 'link' },
                        { icon: 'i-Split-Horizontal-2-Window', name: 'Import Language', state: '/languages/excelImport', type: 'link' },
                    ]
                },
                {
                    name: 'Interpreter',
                    // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    type: 'link',
                    icon: 'i-Add-User',
                    state: '/users/user-list',
                },
                {
                    name: 'Role & Permission',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    type: 'link',
                    icon: 'i-Library',
                    state: '/permission/rolelist',
                },
            ];
            // sets iconMenu as default;
            this.menuItems = new BehaviorSubject(this.defaultMenu);
            // navigation component has subscribed to this Observable
            this.menuItems$ = this.menuItems.asObservable();
        }
    };
    NavigationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
})();
export { NavigationService };
//# sourceMappingURL=navigation.service.js.map