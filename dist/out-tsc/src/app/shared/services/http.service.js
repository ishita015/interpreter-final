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
import { BehaviorSubject, Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
var HttpService = /** @class */ (function () {
    function HttpService(http, router, socket) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.socket = socket;
        // currentDocument = this.socket.fromEvent<Chat>('document');
        // documents = this.socket.fromEvent<string[]>('documents');
        this.messageSource = new BehaviorSubject('default message');
        this.currentMessage = this.messageSource.asObservable();
        // public options;
        this.url = environment.apiUrl;
        this.getMessages = function () {
            return Observable.create(function (observer) {
                _this.socket.on('responce_chat', function (message) {
                    observer.next(message);
                });
            });
        };
        this.typingMessageOn = function () {
            return Observable.create(function (observer) {
                _this.socket.on('typing', function (message) {
                    observer.next(message);
                });
            });
        };
        // set json format 
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        // set form data format
        this.httpFormData = {
            headers: new HttpHeaders({
                'Content-Type': 'application/form-data',
            })
        };
    }
    HttpService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    //-----------socket start
    HttpService.prototype.sendMessage = function (message, sender_id, receiver_id, group_id, msg_type) {
        this.socket.emit('sendChat', message, sender_id, receiver_id, group_id, msg_type);
    };
    HttpService.prototype.typingMessageEmit = function (group_id, sender_id) {
        this.socket.emit('typing', group_id, sender_id);
    };
    HttpService.prototype.interpreterTrackingLinkSend = function (user_id, request_id) {
        return this.http.post(this.url + '/cesco/sendTrackingLink', { user_id: user_id, request_id: request_id }, this.httpOptions);
    };
    HttpService.prototype.requestSend = function (user_id, request_user_id) {
        return this.http.post(this.url + '/cesco/sendRequest', { user_id: user_id, request_user_id: request_user_id }, this.httpOptions);
    };
    HttpService.prototype.getUserChat = function (user_id, group_id) {
        return this.http.post(this.url + '/cesco/getChatData', { user_id: user_id, group_id: group_id }, this.httpOptions);
    };
    HttpService.prototype.getContactData = function (user_id) {
        return this.http.post(this.url + '/cesco/getContactList', { user_id: user_id }, this.httpOptions);
    };
    HttpService.prototype.getSingleImage = function (importData) {
        return this.http.post(this.url + '/cesco/uploadChatImage', importData);
    };
    //------------socket end
    HttpService.prototype.requestAssignAllInterpreter = function (request_id, allInterpreter) {
        return this.http.post(this.url + '/cesco/assignAllInterpreter', { request_id: request_id, allInterpreter: allInterpreter }, this.httpOptions);
    };
    HttpService.prototype.removeLocalEvents = function (user_id, event_id) {
        return this.http.post(this.url + '/cesco/deleteLocalEvent', { user_id: user_id, event_id: event_id }, this.httpOptions);
    };
    HttpService.prototype.interpreterLocalEvents = function (user_id) {
        return this.http.post(this.url + '/cesco/getInterpreterEvents', { user_id: user_id }, this.httpOptions);
    };
    HttpService.prototype.getLangSelectInterpreter = function (language_id) {
        return this.http.post(this.url + '/cesco/getSelectLangInterpreter', { language_id: language_id }, this.httpOptions);
    };
    HttpService.prototype.interpreterReqReply = function (user_id, ris_id, res_type) {
        return this.http.post(this.url + '/cesco/interpreterRequestReply', { user_id: user_id, ris_id: ris_id, res_type: res_type }, this.httpOptions);
    };
    HttpService.prototype.interpreterRequestList = function (role_id, user_id, status, search_info, start_date, end_date) {
        return this.http.post(this.url + '/cesco/getRequestForInterpreter', {
            role_id: role_id, user_id: user_id,
            status: status, search_info: search_info, start_date: start_date, end_date: end_date
        }, this.httpOptions);
    };
    HttpService.prototype.AllPendingRequest = function (search_info, start_date, end_date) {
        return this.http.post(this.url + '/cesco/getAllPendingRequest', { search_info: search_info, start_date: start_date, end_date: end_date }, this.httpOptions);
    };
    HttpService.prototype.interpreterAllRequestList = function (status, search_email, start_date, end_date) {
        return this.http.post(this.url + '/cesco/getAllAssignment', {
            status: status,
            search_email: search_email, start_date: start_date, end_date: end_date
        }, this.httpOptions);
    };
    HttpService.prototype.interpreterRejectList = function (role_id, user_id, status) {
        return this.http.post(this.url + '/cesco/getRejectDataInterpreter', { role_id: role_id, user_id: user_id, status: status }, this.httpOptions);
    };
    HttpService.prototype.myNearbyInterpreter = function (service_id, language, searchNameEmail, distance, rate, rating) {
        return this.http.post(this.url + '/cesco/getNearbyInterpreter', { service_id: service_id, language: language, searchNameEmail: searchNameEmail, distance: distance, rate: rate, rating: rating }, this.httpOptions);
    };
    HttpService.prototype.getUserRequest = function (search_info, start_date, end_date) {
        return this.http.post(this.url + '/cesco/getRequestData', { search_info: search_info, start_date: start_date, end_date: end_date }, this.httpOptions);
    };
    HttpService.prototype.importLanguage = function (importData) {
        return this.http.post(this.url + '/cesco/importLang', importData);
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
    HttpService.prototype.interpreterDashboardData = function (userId) {
        return this.http.post(this.url + '/cesco/getIntAccReqDashboardData', { userId: userId }, this.httpOptions);
    };
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
    /*=====Interpreter Section Apis Start======*/
    HttpService.prototype.roleList = function () {
        return this.http.get(this.url + '/cesco/getRole');
    };
    HttpService.prototype.getAllUserList = function () {
        return this.http.get(this.url + '/cesco/getAllUser', this.httpOptions);
    };
    HttpService.prototype.getInterpreterList = function (id, type, search_info, start_date, end_date) {
        return this.http.post(this.url + '/cesco/getInterpreter', { id: id, type: type, search_info: search_info, start_date: start_date, end_date: end_date }, this.httpOptions);
    };
    // getInterpreterList(id,type,name,start_date,end_date): Observable<any> {
    //   return this.http.post(this.url + '/cesco/getInterpreter',{id:id,type:type,name:name,start_date:start_date,end_date:end_date} ,this.httpOptions);
    // }
    // getLanguagAdd(addInfo: LanguageAddEditModels): Observable<any> {
    //   return this.http.post(this.url + '/cesco/savelanguage',addInfo,this.httpOptions);
    // }
    // interpreterAdd(interaddInfo: UserAddEdit): Observable<any> {
    //   return this.http.post(this.url + '/cesco/saveInterpreter', interaddInfo, this.httpOptions);
    // }
    HttpService.prototype.userName = function (first_name, last_name) {
        return this.http.post(this.url + '/cesco/getUsername', { first_name: first_name, last_name: last_name }, this.httpOptions);
    };
    HttpService.prototype.interpreterAdd = function (interaddInfo) {
        return this.http.post(this.url + '/cesco/saveInterpreter', interaddInfo);
    };
    // getUserUpadte(userupdateInfo: UserAddEdit): Observable<any> {
    //  return this.http.post(this.url + '/cesco/updatelanguage',userupdateInfo,this.httpOptions);
    // }
    HttpService.prototype.updateInterpreter = function (userupdateInfo) {
        return this.http.post(this.url + '/cesco/updateInterpreter', userupdateInfo);
    };
    HttpService.prototype.statusUpdate = function (status, id) {
        return this.http.post(this.url + '/cesco/statusUpdate', { status: status, id: id }, this.httpOptions);
    };
    HttpService.prototype.getRequestDetail = function (request_id) {
        return this.http.post(this.url + '/cesco/getRequestDetails', { request_id: request_id }, this.httpOptions);
    };
    HttpService.prototype.getNoOfInterpreter = function (request_id) {
        return this.http.post(this.url + '/cesco/interpreterForAssignrequest', { request_id: request_id }, this.httpOptions);
    };
    HttpService.prototype.getInterpreterDetail = function (id) {
        return this.http.post(this.url + '/cesco/getInterpreterDetail', { id: id }, this.httpOptions);
    };
    HttpService.prototype.sendInterpreterRequest = function (interpreter_id, service_id) {
        return this.http.post(this.url + '/cesco/requestSendtoInterpreter', { interpreter_id: interpreter_id, service_id: service_id });
    };
    HttpService.prototype.checkUserEmail = function (email) {
        return this.http.post(this.url + '/cesco/checkeEmail', { email: email }, this.httpOptions);
    };
    HttpService.prototype.getInterpreterLang = function (id) {
        return this.http.post(this.url + '/cesco/getInterpreterLanguage', { id: id }, this.httpOptions);
    };
    HttpService.prototype.getInterpreterTime = function (id) {
        return this.http.post(this.url + '/cesco/getInterpreterDatatime', { id: id }, this.httpOptions);
    };
    HttpService.prototype.checkLanguage = function (code) {
        return this.http.post(this.url + '/cesco/checkLanguage', { code: code }, this.httpOptions);
    };
    HttpService.prototype.langStatusUpdate = function (status, id) {
        return this.http.post(this.url + '/cesco/langStatusUpdate', { status: status, id: id }, this.httpOptions);
    };
    HttpService.prototype.getLanguageList = function () {
        return this.http.get(this.url + '/cesco/getlanguages');
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
    /*=====User Section Apis End======*/
    /*=====Dashboard Section Apis Start======*/
    HttpService.prototype.getdashboardInterpreter = function () {
        return this.http.get(this.url + '/cesco/getTotalInterpreter');
    };
    HttpService.prototype.getdashboardUsers = function () {
        return this.http.get(this.url + '/cesco/getTotalUser');
    };
    HttpService.prototype.getdashboardLanguage = function () {
        return this.http.get(this.url + '/cesco/getTotalLanguage');
    };
    HttpService.prototype.totalRequest = function () {
        return this.http.get(this.url + '/cesco/getTotalRequest');
    };
    HttpService.prototype.allRequest = function () {
        return this.http.get(this.url + '/cesco/getAllRequest');
    };
    HttpService.prototype.totalAssign = function () {
        return this.http.get(this.url + '/cesco/getTotalAssign');
    };
    HttpService.prototype.totalInprogress = function () {
        return this.http.get(this.url + '/cesco/getTotalInprogress');
    };
    HttpService.prototype.totalComplete = function () {
        return this.http.get(this.url + '/cesco/getTotalComplete');
    };
    HttpService.prototype.totalCancelled = function () {
        return this.http.get(this.url + '/cesco/getTotalCancelled');
    };
    //for interpreter dashboard
    HttpService.prototype.newRequestCount = function (userId) {
        return this.http.post(this.url + '/cesco/getNewRequestCount', { userId: userId }, this.httpOptions);
    };
    HttpService.prototype.acceptRequestCount = function (userId) {
        return this.http.post(this.url + '/cesco/getAcceptRequest', { userId: userId }, this.httpOptions);
    };
    HttpService.prototype.rejectRequestCount = function (userId) {
        return this.http.post(this.url + '/cesco/getRejectRequest', { userId: userId }, this.httpOptions);
    };
    HttpService.prototype.completeRequestCount = function (userId) {
        return this.http.post(this.url + '/cesco/getCompleteRequest', { userId: userId }, this.httpOptions);
    };
    HttpService.prototype.cancelledRequestCount = function (userId) {
        // return this.http.get<any[]>(this.url + '/cesco/getCancelledRequest');
        return this.http.post(this.url + '/cesco/getCancelledRequest', { userId: userId }, this.httpOptions);
    };
    HttpService.prototype.interpreterReqCompleted = function (id, userId) {
        return this.http.post(this.url + '/cesco/interpreterRequestComplete', { id: id, userId: userId }, this.httpOptions);
    };
    /*=====Dashboard Section Apis End======*/
    /*=====Profile Section Apis Start======*/
    HttpService.prototype.interpreterLanguage = function (addlangInfo) {
        return this.http.post(this.url + '/cesco/addInterpreterLanguage', addlangInfo, this.httpOptions);
    };
    HttpService.prototype.interpreterDocupload = function (doc_data) {
        return this.http.post(this.url + '/cesco/uploadInterpreterDoc', doc_data);
    };
    HttpService.prototype.getProfileUpadte = function (profileupdateInfo) {
        return this.http.post(this.url + '/cesco/profileUpdate', profileupdateInfo);
    };
    HttpService.prototype.getCountryMobileCode = function () {
        return this.http.get(this.url + '/cesco/getCountryCode', this.httpOptions);
    };
    HttpService.prototype.getStateCode = function (country_id) {
        return this.http.post(this.url + '/cesco/getstate', { country_id: country_id }, this.httpOptions);
    };
    HttpService.prototype.getCityCode = function (state_id) {
        return this.http.post(this.url + '/cesco/getCity', { state_id: state_id }, this.httpOptions);
    };
    HttpService.prototype.changePassword = function (changepassInfo) {
        return this.http.post(this.url + '/cesco/changePassword', changepassInfo, this.httpOptions);
    };
    /*=====Profile Section Apis End======*/
    /*=====Request Section Apis Start======*/
    HttpService.prototype.getReminderRequest = function (user_id, ris_id, notes) {
        return this.http.post(this.url + '/cesco/adminReminderForinterpreter', { user_id: user_id, ris_id: ris_id, notes: notes }, this.httpOptions);
    };
    /*=====Request Section Apis End======*/
    /*=====Add Calender Section Apis Start======*/
    HttpService.prototype.getAddCalender = function (addInfo) {
        return this.http.post(this.url + '/cesco/addInterpreterEvents', addInfo);
    };
    HttpService.prototype.interpreterViewEvents = function (user_id, event_id) {
        return this.http.post(this.url + '/cesco/getLocalEventsData', { user_id: user_id, event_id: event_id }, this.httpOptions);
    };
    HttpService.prototype.getUpdateCalender = function (addInfo) {
        return this.http.post(this.url + '/cesco/updateInterpreterEvents', addInfo);
    };
    /*=====Add Calender Apis End======*/
    /*=====Banking Apis Start======*/
    HttpService.prototype.getBankingAdd = function (addBankInfo) {
        return this.http.post(this.url + '/cesco/addBankingInfo', addBankInfo);
    };
    HttpService.prototype.bankingUpdate = function (updateBankInfo) {
        return this.http.post(this.url + '/cesco/updateBankingInfo', updateBankInfo);
    };
    /*=====Banking Apis End======*/
    /*=====Interpreter Profile Apis Start======*/
    HttpService.prototype.addInterpreterAssignmentSetting = function (addProfileInfo) {
        return this.http.post(this.url + '/cesco/addAssignmentSetting', addProfileInfo);
    };
    HttpService.prototype.getProfileDetail = function (interpreter_id) {
        return this.http.post(this.url + '/cesco/getInterpreterProfile', { interpreter_id: interpreter_id });
    };
    HttpService.prototype.getAssignmentSettingByInterpreterId = function (interpreter_id) {
        return this.http.post(this.url + '/cesco/getAssignmentSettingByInterpreterId', { interpreter_id: interpreter_id });
    };
    HttpService.prototype.getUserLanguage = function (interpreter_id) {
        return this.http.get(this.url + '/cesco/getUserLanguage/' + interpreter_id);
    };
    /*=====Interpreter Profile Apis End======*/
    /*=====set calculation Apis Start======*/
    HttpService.prototype.getCalAdd = function (calInfo) {
        return this.http.post(this.url + '/cesco/saveCalculation', calInfo);
    };
    HttpService.prototype.getCalDeatil = function (type) {
        return this.http.post(this.url + '/cesco/getPriceCalculation', { type: type }, this.httpOptions);
    };
    HttpService.prototype.calUpadte = function (calInfo) {
        return this.http.post(this.url + '/cesco/updateCalculation', calInfo);
    };
    /*=====set calculation Apis End======*/
    /*=====Special Offers Apis Start======*/
    HttpService.prototype.specialAdd = function (specialInfo) {
        return this.http.post(this.url + '/cesco/saveCalculation', specialInfo);
    };
    HttpService.prototype.getSpecialDetail = function (type) {
        return this.http.post(this.url + '/cesco/getPriceCalculation', { type: type }, this.httpOptions);
    };
    HttpService.prototype.defaultCalExcel = function (log_type) {
        return this.http.post(this.url + '/cesco/getLogPrice', { log_type: log_type }, this.httpOptions);
    };
    /*=====Special Offers Apis End======*/
    /*=====Routing no. Apis start======*/
    HttpService.prototype.getRoutingNumber = function (code) {
        return this.http.get('https://www.routingnumbers.info/api/data.json?rn=' + code);
    };
    /*=====Routing no. Apis end======*/
    HttpService.prototype.post = function (url, value) {
        var URL = this.url + '/cesco/' + url;
        var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(URL, value, httpOptions);
    };
    HttpService.prototype.get = function (url1) {
        console.log(this.url + '/cesco/' + url1);
        var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.get(this.url + '/cesco/' + url1, httpOptions);
    };
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router, Socket])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map