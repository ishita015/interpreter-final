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
let HttpService = /** @class */ (() => {
    let HttpService = class HttpService {
        constructor(http, router, socket) {
            this.http = http;
            this.router = router;
            this.socket = socket;
            // currentDocument = this.socket.fromEvent<Chat>('document');
            // documents = this.socket.fromEvent<string[]>('documents');
            this.messageSource = new BehaviorSubject('default message');
            this.currentMessage = this.messageSource.asObservable();
            // public options;
            this.url = environment.apiUrl;
            this.getMessages = () => {
                return Observable.create((observer) => {
                    this.socket.on('responce_chat', (message) => {
                        observer.next(message);
                    });
                });
            };
            this.typingMessageOn = () => {
                return Observable.create((observer) => {
                    this.socket.on('typing', (message) => {
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
        changeMessage(message) {
            this.messageSource.next(message);
        }
        //-----------socket start
        sendMessage(message, sender_id, receiver_id, group_id, msg_type) {
            this.socket.emit('sendChat', message, sender_id, receiver_id, group_id, msg_type);
        }
        typingMessageEmit(group_id, sender_id) {
            this.socket.emit('typing', group_id, sender_id);
        }
        interpreterTrackingLinkSend(user_id, request_id) {
            return this.http.post(this.url + '/cesco/sendTrackingLink', { user_id: user_id, request_id: request_id }, this.httpOptions);
        }
        requestSend(user_id, request_user_id) {
            return this.http.post(this.url + '/cesco/sendRequest', { user_id: user_id, request_user_id: request_user_id }, this.httpOptions);
        }
        getUserChat(user_id, group_id) {
            return this.http.post(this.url + '/cesco/getChatData', { user_id: user_id, group_id: group_id }, this.httpOptions);
        }
        getContactData(user_id) {
            return this.http.post(this.url + '/cesco/getContactList', { user_id: user_id }, this.httpOptions);
        }
        getSingleImage(importData) {
            return this.http.post(this.url + '/cesco/uploadChatImage', importData);
        }
        //------------socket end
        requestAssignAllInterpreter(request_id, allInterpreter) {
            return this.http.post(this.url + '/cesco/assignAllInterpreter', { request_id: request_id, allInterpreter: allInterpreter }, this.httpOptions);
        }
        removeLocalEvents(user_id, event_id) {
            return this.http.post(this.url + '/cesco/deleteLocalEvent', { user_id: user_id, event_id: event_id }, this.httpOptions);
        }
        interpreterLocalEvents(user_id) {
            return this.http.post(this.url + '/cesco/getInterpreterEvents', { user_id: user_id }, this.httpOptions);
        }
        getLangSelectInterpreter(language_id) {
            return this.http.post(this.url + '/cesco/getSelectLangInterpreter', { language_id: language_id }, this.httpOptions);
        }
        interpreterReqReply(user_id, ris_id, res_type) {
            return this.http.post(this.url + '/cesco/interpreterRequestReply', { user_id: user_id, ris_id: ris_id, res_type: res_type }, this.httpOptions);
        }
        interpreterRequestList(role_id, user_id, status, search_info, start_date, end_date) {
            return this.http.post(this.url + '/cesco/getRequestForInterpreter', {
                role_id: role_id, user_id: user_id,
                status: status, search_info: search_info, start_date: start_date, end_date: end_date
            }, this.httpOptions);
        }
        AllPendingRequest(search_info, start_date, end_date, userId) {
            return this.http.post(this.url + '/cesco/getAllPendingRequest', { search_info: search_info, start_date: start_date, end_date: end_date, userId: userId }, this.httpOptions);
        }
        interpreterAllRequestList(status, search_email, start_date, end_date) {
            return this.http.post(this.url + '/cesco/getAllAssignment', {
                status: status,
                search_email: search_email, start_date: start_date, end_date: end_date
            }, this.httpOptions);
        }
        interpreterRejectList(role_id, user_id, status) {
            return this.http.post(this.url + '/cesco/getRejectDataInterpreter', { role_id: role_id, user_id: user_id, status: status }, this.httpOptions);
        }
        myNearbyInterpreter(service_id, language, searchNameEmail, distance, rate, rating) {
            return this.http.post(this.url + '/cesco/getNearbyInterpreter', { service_id: service_id, language: language, searchNameEmail: searchNameEmail, distance: distance, rate: rate, rating: rating }, this.httpOptions);
        }
        getUserRequest(search_info, start_date, end_date) {
            return this.http.post(this.url + '/cesco/getRequestData', { search_info: search_info, start_date: start_date, end_date: end_date }, this.httpOptions);
        }
        importLanguage(importData) {
            return this.http.post(this.url + '/cesco/importLang', importData);
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
        interpreterDashboardData(userId) {
            return this.http.post(this.url + '/cesco/getIntAccReqDashboardData', { userId: userId }, this.httpOptions);
        }
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
        /*=====Interpreter Section Apis Start======*/
        roleList() {
            return this.http.get(this.url + '/cesco/getRole');
        }
        getAllUserList() {
            return this.http.get(this.url + '/cesco/getAllUser', this.httpOptions);
        }
        getInterpreterList(id, type, search_info, start_date, end_date) {
            return this.http.post(this.url + '/cesco/getInterpreter', { id: id, type: type, search_info: search_info, start_date: start_date, end_date: end_date }, this.httpOptions);
        }
        // getInterpreterList(id,type,name,start_date,end_date): Observable<any> {
        //   return this.http.post(this.url + '/cesco/getInterpreter',{id:id,type:type,name:name,start_date:start_date,end_date:end_date} ,this.httpOptions);
        // }
        // getLanguagAdd(addInfo: LanguageAddEditModels): Observable<any> {
        //   return this.http.post(this.url + '/cesco/savelanguage',addInfo,this.httpOptions);
        // }
        // interpreterAdd(interaddInfo: UserAddEdit): Observable<any> {
        //   return this.http.post(this.url + '/cesco/saveInterpreter', interaddInfo, this.httpOptions);
        // }
        userName(first_name, last_name) {
            return this.http.post(this.url + '/cesco/getUsername', { first_name: first_name, last_name: last_name }, this.httpOptions);
        }
        interpreterAdd(interaddInfo) {
            return this.http.post(this.url + '/cesco/saveInterpreter', interaddInfo);
        }
        // getUserUpadte(userupdateInfo: UserAddEdit): Observable<any> {
        //  return this.http.post(this.url + '/cesco/updatelanguage',userupdateInfo,this.httpOptions);
        // }
        updateInterpreter(userupdateInfo) {
            return this.http.post(this.url + '/cesco/updateInterpreter', userupdateInfo);
        }
        statusUpdate(status, id) {
            return this.http.post(this.url + '/cesco/statusUpdate', { status: status, id: id }, this.httpOptions);
        }
        getRequestDetail(request_id) {
            return this.http.post(this.url + '/cesco/getRequestDetails', { request_id: request_id }, this.httpOptions);
        }
        getNoOfInterpreter(request_id) {
            return this.http.post(this.url + '/cesco/interpreterForAssignrequest', { request_id: request_id }, this.httpOptions);
        }
        getInterpreterDetail(id) {
            return this.http.post(this.url + '/cesco/getInterpreterDetail', { id: id }, this.httpOptions);
        }
        sendInterpreterRequest(interpreter_id, service_id) {
            return this.http.post(this.url + '/cesco/requestSendtoInterpreter', { interpreter_id: interpreter_id, service_id: service_id });
        }
        checkUserEmail(email) {
            return this.http.post(this.url + '/cesco/checkeEmail', { email: email }, this.httpOptions);
        }
        getInterpreterLang(id) {
            return this.http.post(this.url + '/cesco/getInterpreterLanguage', { id: id }, this.httpOptions);
        }
        getInterpreterTime(id) {
            return this.http.post(this.url + '/cesco/getInterpreterDatatime', { id: id }, this.httpOptions);
        }
        checkLanguage(code) {
            return this.http.post(this.url + '/cesco/checkLanguage', { code: code }, this.httpOptions);
        }
        langStatusUpdate(status, id) {
            return this.http.post(this.url + '/cesco/langStatusUpdate', { status: status, id: id }, this.httpOptions);
        }
        getLanguageList() {
            return this.http.get(this.url + '/cesco/getlanguages');
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
        /*=====User Section Apis End======*/
        /*=====Dashboard Section Apis Start======*/
        getdashboardInterpreter() {
            return this.http.get(this.url + '/cesco/getTotalInterpreter');
        }
        getdashboardUsers() {
            return this.http.get(this.url + '/cesco/getTotalUser');
        }
        getdashboardLanguage() {
            return this.http.get(this.url + '/cesco/getTotalLanguage');
        }
        totalRequest() {
            return this.http.get(this.url + '/cesco/getTotalRequest');
        }
        allRequest() {
            return this.http.get(this.url + '/cesco/getAllRequest');
        }
        totalAssign() {
            return this.http.get(this.url + '/cesco/getTotalAssign');
        }
        totalInprogress() {
            return this.http.get(this.url + '/cesco/getTotalInprogress');
        }
        totalComplete() {
            return this.http.get(this.url + '/cesco/getTotalComplete');
        }
        totalCancelled() {
            return this.http.get(this.url + '/cesco/getTotalCancelled');
        }
        //for interpreter dashboard
        newRequestCount(userId) {
            return this.http.post(this.url + '/cesco/getNewRequestCount', { userId: userId }, this.httpOptions);
        }
        acceptRequestCount(userId) {
            return this.http.post(this.url + '/cesco/getAcceptRequest', { userId: userId }, this.httpOptions);
        }
        rejectRequestCount(userId) {
            return this.http.post(this.url + '/cesco/getRejectRequest', { userId: userId }, this.httpOptions);
        }
        completeRequestCount(userId) {
            return this.http.post(this.url + '/cesco/getCompleteRequest', { userId: userId }, this.httpOptions);
        }
        cancelledRequestCount(userId) {
            // return this.http.get<any[]>(this.url + '/cesco/getCancelledRequest');
            return this.http.post(this.url + '/cesco/getCancelledRequest', { userId: userId }, this.httpOptions);
        }
        interpreterReqCompleted(id, userId) {
            return this.http.post(this.url + '/cesco/interpreterRequestComplete', { id: id, userId: userId }, this.httpOptions);
        }
        /*=====Dashboard Section Apis End======*/
        /*=====Profile Section Apis Start======*/
        interpreterLanguage(addlangInfo) {
            return this.http.post(this.url + '/cesco/addInterpreterLanguage', addlangInfo, this.httpOptions);
        }
        interpreterDocupload(doc_data) {
            return this.http.post(this.url + '/cesco/uploadInterpreterDoc', doc_data);
        }
        getProfileUpadte(profileupdateInfo) {
            return this.http.post(this.url + '/cesco/profileUpdate', profileupdateInfo);
        }
        getCountryMobileCode() {
            return this.http.get(this.url + '/cesco/getCountryCode', this.httpOptions);
        }
        getStateCode(country_id) {
            return this.http.post(this.url + '/cesco/getstate', { country_id: country_id }, this.httpOptions);
        }
        getCityCode(state_id) {
            return this.http.post(this.url + '/cesco/getCity', { state_id: state_id }, this.httpOptions);
        }
        changePassword(changepassInfo) {
            return this.http.post(this.url + '/cesco/changePassword', changepassInfo, this.httpOptions);
        }
        /*=====Profile Section Apis End======*/
        /*=====Request Section Apis Start======*/
        getReminderRequest(user_id, ris_id, notes) {
            return this.http.post(this.url + '/cesco/adminReminderForinterpreter', { user_id: user_id, ris_id: ris_id, notes: notes }, this.httpOptions);
        }
        /*=====Request Section Apis End======*/
        /*=====Add Calender Section Apis Start======*/
        getAddCalender(addInfo) {
            return this.http.post(this.url + '/cesco/addInterpreterEvents', addInfo);
        }
        interpreterViewEvents(user_id, event_id) {
            return this.http.post(this.url + '/cesco/getLocalEventsData', { user_id: user_id, event_id: event_id }, this.httpOptions);
        }
        getUpdateCalender(addInfo) {
            return this.http.post(this.url + '/cesco/updateInterpreterEvents', addInfo);
        }
        /*=====Add Calender Apis End======*/
        /*=====Banking Apis Start======*/
        getBankingAdd(addBankInfo) {
            return this.http.post(this.url + '/cesco/addBankingInfo', addBankInfo);
        }
        bankingUpdate(updateBankInfo) {
            return this.http.post(this.url + '/cesco/updateBankingInfo', updateBankInfo);
        }
        /*=====Banking Apis End======*/
        /*=====Interpreter Profile Apis Start======*/
        addInterpreterAssignmentSetting(addProfileInfo) {
            return this.http.post(this.url + '/cesco/addAssignmentSetting', addProfileInfo);
        }
        getProfileDetail(interpreter_id) {
            return this.http.post(this.url + '/cesco/getInterpreterProfile', { interpreter_id: interpreter_id });
        }
        getAssignmentSettingByInterpreterId(interpreter_id) {
            return this.http.post(this.url + '/cesco/getAssignmentSettingByInterpreterId', { interpreter_id: interpreter_id });
        }
        getUserLanguage(interpreter_id) {
            return this.http.get(this.url + '/cesco/getUserLanguage/' + interpreter_id);
        }
        /*=====Interpreter Profile Apis End======*/
        /*=====set calculation Apis Start======*/
        getCalAdd(calInfo) {
            return this.http.post(this.url + '/cesco/saveCalculation', calInfo);
        }
        getCalDeatil(type) {
            return this.http.post(this.url + '/cesco/getPriceCalculation', { type: type }, this.httpOptions);
        }
        calUpadte(calInfo) {
            return this.http.post(this.url + '/cesco/updateCalculation', calInfo);
        }
        /*=====set calculation Apis End======*/
        /*=====Special Offers Apis Start======*/
        specialAdd(specialInfo) {
            return this.http.post(this.url + '/cesco/saveCalculation', specialInfo);
        }
        getSpecialDetail(type) {
            return this.http.post(this.url + '/cesco/getPriceCalculation', { type: type }, this.httpOptions);
        }
        defaultCalExcel(log_type) {
            return this.http.post(this.url + '/cesco/getLogPrice', { log_type: log_type }, this.httpOptions);
        }
        /*=====Special Offers Apis End======*/
        /*=====Routing no. Apis start======*/
        getRoutingNumber(code) {
            return this.http.get('https://www.routingnumbers.info/api/data.json?rn=' + code);
        }
        /*=====Routing no. Apis end======*/
        /*=====Base Rate Details Apis Start======*/
        baseRateDetail(id) {
            return this.http.post(this.url + '/cesco/baseRateDetail', { id: id }, this.httpOptions);
        }
        /*=====Base Rate Details Apis End======*/
        /*=====Step Form Apis Start======*/
        getLanguage() {
            return this.http.get(this.url + '/cesco/getlanguages');
        }
        getStepTwelveForm(step1Info) {
            return this.http.post(this.url + '/cesco/addServiceTwelve', step1Info);
        }
        /*=====Step Form Apis Start======*/
        post(url, value) {
            const URL = this.url + '/cesco/' + url;
            const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
            return this.http.post(URL, value, httpOptions);
        }
        get(url1) {
            console.log(this.url + '/cesco/' + url1);
            const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
            return this.http.get(this.url + '/cesco/' + url1, httpOptions);
        }
    };
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router, Socket])
    ], HttpService);
    return HttpService;
})();
export { HttpService };
//# sourceMappingURL=http.service.js.map