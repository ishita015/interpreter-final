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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
var HttpService = /** @class */ (function () {
    function HttpService(http, router) {
        this.http = http;
        this.router = router;
        // public options;
        this.url = environment.apiUrl;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    HttpService.prototype.importLanguage = function (addInfo) {
        return this.http.post(this.url + '/cesco/importLang', addInfo, this.httpOptions);
    };
    HttpService.prototype.userRoleadd = function (updateInfo) {
        return this.http.post(this.url + '/cesco/userRoleAdd', updateInfo, this.httpOptions);
    };
    HttpService.prototype.editPemisssion = function (id) {
        return this.http.post(this.url + '/cesco/getPermission', { id: id }, this.httpOptions);
    };
    /*=====Role Section Apis Start======*/
    HttpService.prototype.getRoleList = function () {
        return this.http.get(this.url + '/cesco/getuserRole', this.httpOptions);
    };
    HttpService.prototype.getRoleAdd = function (addInfo) {
        return this.http.post(this.url + '/cesco/saveUserRole', addInfo, this.httpOptions);
    };
    HttpService.prototype.getRoleUpadte = function (updateInfo) {
        return this.http.post(this.url + '/cesco/updateuserRole', updateInfo, this.httpOptions);
    };
    HttpService.prototype.getRoleDelete = function (id) {
        return this.http.post(this.url + '/cesco/removerole', { id: id }, this.httpOptions);
    };
    /*=====Role Section Apis End======*/
    /*=====Module Section Apis Start======*/
    HttpService.prototype.getModuleList = function () {
        return this.http.get(this.url + '/cesco/getmodule', this.httpOptions);
    };
    HttpService.prototype.moduleAdd = function (addInfo) {
        return this.http.post(this.url + '/cesco/saveModule', addInfo, this.httpOptions);
    };
    HttpService.prototype.moduleUpadte = function (updateInfo) {
        return this.http.post(this.url + '/cesco/updatemodule', updateInfo, this.httpOptions);
    };
    HttpService.prototype.moduleDelete = function (id) {
        return this.http.post(this.url + '/cesco/removemodule', { id: id }, this.httpOptions);
    };
    /*=====Module Section Apis End======*/
    /*=====Language Section Apis Start======*/
    HttpService.prototype.getLanguageList = function () {
        return this.http.get(this.url + '/cesco/getlanguages', this.httpOptions);
    };
    HttpService.prototype.getLanguagAdd = function (addInfo) {
        return this.http.post(this.url + '/cesco/savelanguage', addInfo, this.httpOptions);
    };
    HttpService.prototype.getLanguagUpadte = function (updateInfo) {
        return this.http.post(this.url + '/cesco/updatelanguage', updateInfo, this.httpOptions);
    };
    HttpService.prototype.getLanguagDelete = function (id) {
        return this.http.post(this.url + '/cesco/removelanguage', { id: id }, this.httpOptions);
    };
    /*=====Language Section Apis End======*/
    /*=====User Section Apis Start======*/
    HttpService.prototype.getUserList = function () {
        return this.http.get(this.url + '/cesco/getlanguages', this.httpOptions);
    };
    HttpService.prototype.getUserAdd = function (useraddInfo) {
        return this.http.post(this.url + '/cesco/savelanguage', useraddInfo, this.httpOptions);
    };
    HttpService.prototype.getUserUpadte = function (userupdateInfo) {
        return this.http.post(this.url + '/cesco/updatelanguage', userupdateInfo, this.httpOptions);
    };
    HttpService.prototype.getUserDelete = function (id) {
        return this.http.post(this.url + '/cesco/removelanguage', { id: id }, this.httpOptions);
    };
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map