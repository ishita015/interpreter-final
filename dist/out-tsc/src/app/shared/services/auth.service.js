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
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
var AuthService = /** @class */ (function () {
    function AuthService(store, http, router) {
        this.store = store;
        this.http = http;
        this.router = router;
        //Only for demo purpose
        this.authenticated = true;
        this.url = environment.apiUrl;
        this.checkAuth();
    }
    AuthService.prototype.checkAuth = function () {
        // this.authenticated = this.store.getItem("demo_login_status");
    };
    AuthService.prototype.isAuthenticated = function () {
        var id = this.getUserId();
        var x = false;
        if (id) {
            return true;
        }
        return false;
    };
    AuthService.prototype.getUserId = function () {
        return JSON.parse(localStorage.getItem('userId'));
    };
    AuthService.prototype.signin = function (loginInfo) {
        return this.http.post(this.url + '/cesco/userlogin', loginInfo, this.httpOptions);
        // this.authenticated = true;
        // this.store.setItem("demo_login_status", true);
        // return of({}).pipe(delay(1500));
    };
    AuthService.prototype.signout = function () {
        this.authenticated = false;
        this.store.setItem("demo_login_status", false);
        localStorage.clear();
        this.router.navigateByUrl("/sessions/signin");
    };
    AuthService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [LocalStoreService,
            HttpClient,
            Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map