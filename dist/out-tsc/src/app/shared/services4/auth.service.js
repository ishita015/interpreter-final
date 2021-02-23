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
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
let AuthService = /** @class */ (() => {
    let AuthService = class AuthService {
        constructor(store, router) {
            this.store = store;
            this.router = router;
            //Only for demo purpose
            this.authenticated = true;
            this.checkAuth();
        }
        checkAuth() {
            // this.authenticated = this.store.getItem("demo_login_status");
        }
        getuser() {
            return of({});
        }
        signin(credentials) {
            this.authenticated = true;
            this.store.setItem("demo_login_status", true);
            return of({}).pipe(delay(1500));
        }
        signout() {
            this.authenticated = false;
            this.store.setItem("demo_login_status", false);
            this.router.navigateByUrl("/sessions/signin");
        }
    };
    AuthService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [LocalStoreService, Router])
    ], AuthService);
    return AuthService;
})();
export { AuthService };
//# sourceMappingURL=auth.service.js.map