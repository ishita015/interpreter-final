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
let HttpService = /** @class */ (() => {
    let HttpService = class HttpService {
        constructor(http, router) {
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
        importLanguage(addInfo) {
            return this.http.post(this.url + '/cesco/importLang', addInfo, this.httpOptions);
        }
        userRoleadd(updateInfo) {
            return this.http.post(this.url + '/cesco/userRoleAdd', updateInfo, this.httpOptions);
        }
        editPemisssion(id) {
            return this.http.post(this.url + '/cesco/getPermission', { id: id }, this.httpOptions);
        }
        /*=====Role Section Apis Start======*/
        getRoleList() {
            return this.http.get(this.url + '/cesco/getuserRole', this.httpOptions);
        }
        getRoleAdd(addInfo) {
            return this.http.post(this.url + '/cesco/saveUserRole', addInfo, this.httpOptions);
        }
        getRoleUpadte(updateInfo) {
            return this.http.post(this.url + '/cesco/updateuserRole', updateInfo, this.httpOptions);
        }
        getRoleDelete(id) {
            return this.http.post(this.url + '/cesco/removerole', { id: id }, this.httpOptions);
        }
        /*=====Role Section Apis End======*/
        /*=====Module Section Apis Start======*/
        getModuleList() {
            return this.http.get(this.url + '/cesco/getmodule', this.httpOptions);
        }
        moduleAdd(addInfo) {
            return this.http.post(this.url + '/cesco/saveModule', addInfo, this.httpOptions);
        }
        moduleUpadte(updateInfo) {
            return this.http.post(this.url + '/cesco/updatemodule', updateInfo, this.httpOptions);
        }
        moduleDelete(id) {
            return this.http.post(this.url + '/cesco/removemodule', { id: id }, this.httpOptions);
        }
        /*=====Module Section Apis End======*/
        /*=====Language Section Apis Start======*/
        getLanguageList() {
            return this.http.get(this.url + '/cesco/getlanguages', this.httpOptions);
        }
        getLanguagAdd(addInfo) {
            return this.http.post(this.url + '/cesco/savelanguage', addInfo, this.httpOptions);
        }
        getLanguagUpadte(updateInfo) {
            return this.http.post(this.url + '/cesco/updatelanguage', updateInfo, this.httpOptions);
        }
        getLanguagDelete(id) {
            return this.http.post(this.url + '/cesco/removelanguage', { id: id }, this.httpOptions);
        }
        /*=====Language Section Apis End======*/
        /*=====User Section Apis Start======*/
        getUserList() {
            return this.http.get(this.url + '/cesco/getlanguages', this.httpOptions);
        }
        getUserAdd(useraddInfo) {
            return this.http.post(this.url + '/cesco/savelanguage', useraddInfo, this.httpOptions);
        }
        getUserUpadte(userupdateInfo) {
            return this.http.post(this.url + '/cesco/updatelanguage', userupdateInfo, this.httpOptions);
        }
        getUserDelete(id) {
            return this.http.post(this.url + '/cesco/removelanguage', { id: id }, this.httpOptions);
        }
    };
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], HttpService);
    return HttpService;
})();
export { HttpService };
//# sourceMappingURL=http.service.js.map