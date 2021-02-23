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
import { HttpService } from "../../../../../shared/services/http.service";
let SidebarLargeComponent = /** @class */ (() => {
    let SidebarLargeComponent = class SidebarLargeComponent {
        constructor(service, router, navService) {
            this.service = service;
            this.router = router;
            this.navService = navService;
            setTimeout(() => {
                this.psContainerSecSidebar = this.psContainers.toArray()[1];
            });
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
                var roleType = localStorage.getItem('roleId');
                if (roleType == '1') {
                    // this.nav = items.v1
                    this.service.get('getAdminRoleMenus/' + roleType).subscribe(res => {
                        for (var i = 0; i < res['data'].length; ++i) {
                            if (res['data'][i].sub != null) {
                                // res['data'][i].sub=JSON.parse(res['data'][i].sub)
                            }
                        }
                        this.nav = res['data'];
                    });
                }
                else {
                    this.service.get('getUserRoleMenus/' + roleType).subscribe(res => {
                        for (var i = 0; i < res['data'].length; ++i) {
                            if (res['data'][i].sub != null) {
                                // res['data'][i].sub=JSON.parse(res['data'][i].sub)
                            }
                        }
                        this.nav = res['data'];
                    });
                }
                // if(roleType == '2'){
                //   this.nav = items.v2
                //  }
                //  if(roleType == '3'){
                //    this.service.get('getUserRoleMenus/'+roleType).subscribe(res => {
                //     for (var i = 0; i < res['data'].length; ++i) {
                //        if(res['data'][i].sub != null){
                //            // res['data'][i].sub=JSON.parse(res['data'][i].sub)
                //        }
                //     }
                //   this.nav = res['data']
                //   })
                // }
                // console.log('dev',this.nav)
                // console.log('------',roleType)
                this.setActiveFlag();
            });
        }
        selectItem(item) {
            this.navService.sidebarState.childnavOpen = true;
            this.navService.selectedItem = item;
            this.setActiveMainItem(item);
            // Scroll to top secondary sidebar
            setTimeout(() => {
                this.psContainerSecSidebar.update();
                this.psContainerSecSidebar.scrollToTop(0, 400);
            });
        }
        closeChildNav() {
            this.navService.sidebarState.childnavOpen = false;
            this.setActiveFlag();
        }
        onClickChangeActiveFlag(item) {
            this.setActiveMainItem(item);
        }
        openLink(link) {
            this.router.navigate([link]);
            //     window.location.href="http://192.168.0.56:4200/#/"+link
            //     console.log(link);
            this.router.navigateByUrl('/dashboard/v1', { skipLocationChange: true }).then(() => {
                this.router.navigate([link]);
            });
        }
        setActiveMainItem(item) {
            this.nav.forEach(i => {
                i.active = false;
            });
            item.active = true;
        }
        setActiveFlag() {
            if (window && window.location) {
                if (this.nav != undefined) {
                    const activeRoute = window.location.hash || window.location.pathname;
                    this.nav.forEach(item => {
                        item.active = false;
                        if (activeRoute.indexOf(item.state) !== -1) {
                            this.navService.selectedItem = item;
                            item.active = true;
                        }
                        if (item.sub != undefined) {
                            // console.log('============item.sub==========', item.sub)
                            item.sub.forEach(subItem => {
                                subItem.active = false;
                                if (activeRoute.indexOf(subItem.state) !== -1) {
                                    this.navService.selectedItem = item;
                                    item.active = true;
                                }
                                if (subItem.sub) {
                                    subItem.sub.forEach(subChildItem => {
                                        if (activeRoute.indexOf(subChildItem.state) !== -1) {
                                            this.navService.selectedItem = item;
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
        onResize(event) {
            this.updateSidebar();
        }
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
        __metadata("design:paramtypes", [HttpService,
            Router, NavigationService])
    ], SidebarLargeComponent);
    return SidebarLargeComponent;
})();
export { SidebarLargeComponent };
//# sourceMappingURL=sidebar-large.component.js.map