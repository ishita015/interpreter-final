import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageAddEditModels } from '../models/language-model/language-add-edit-models';
import { UserAddEdit } from '../models/users-model/user-add-edit';
import { RoleAddEdit } from '../models/permission-model/role-add-edit';
import { ModuleAddEdit } from '../models/permission-model/module-add-edit';
import { UserroleEdit } from '../models/roleset-model/userrole-edit';
import { LanguageImport } from '../models/language-model/language-import';
import { AdminProfile } from '../models/admin-profile';
import { ChangePassword } from '../models/change-password';
import { Socket } from 'ngx-socket-io';
import { Chat } from '../models/chat';
import { AddCalender } from '../models/add-calender';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public httpOptions;
  public httpFormData;

  // currentDocument = this.socket.fromEvent<Chat>('document');
  // documents = this.socket.fromEvent<string[]>('documents');


  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  // public options;
  public url = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router, private socket: Socket) {

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


  //-----------socket start



  public sendMessage(message, sender_id, receiver_id, group_id) {
    this.socket.emit('sendChat', message, sender_id, receiver_id, group_id);
  }


  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('responce_chat', (message) => {
        observer.next(message);
      });
    });
  }

  public typingMessageEmit(group_id,sender_id) {
    this.socket.emit('typing', group_id,sender_id);
  }



  public typingMessageOn = () => {
    return Observable.create((observer) => {
      this.socket.on('typing', (message) => {
        observer.next(message);
      });
    });
  }



  requestSend(user_id, request_user_id): Observable<any> {
    return this.http.post(this.url + '/cesco/sendRequest', { user_id: user_id, request_user_id: request_user_id }, this.httpOptions);
  }


  getUserChat(user_id, group_id): Observable<any> {
    return this.http.post(this.url + '/cesco/getChatData', { user_id: user_id, group_id: group_id }, this.httpOptions);
  }



  getContactData(user_id): Observable<any> {
    return this.http.post(this.url + '/cesco/getContactList', { user_id: user_id }, this.httpOptions);
  }


  //------------socket end


  requestAssignAllInterpreter(request_id,allInterpreter): Observable<any> {
    return this.http.post(this.url + '/cesco/assignAllInterpreter', {request_id:request_id,allInterpreter:allInterpreter}, this.httpOptions);
  }



  removeLocalEvents(user_id,event_id): Observable<any> {
    return this.http.post(this.url + '/cesco/deleteLocalEvent', { user_id: user_id,event_id:event_id }, this.httpOptions);
  }


  interpreterLocalEvents(user_id): Observable<any> {
    return this.http.post(this.url + '/cesco/getInterpreterEvents', { user_id: user_id }, this.httpOptions);
  }



  getLangSelectInterpreter(language_id): Observable<any> {
    return this.http.post(this.url + '/cesco/getSelectLangInterpreter', { language_id: language_id }, this.httpOptions);
  }



  interpreterReqReply(user_id, ris_id, res_type): Observable<any> {
    return this.http.post(this.url + '/cesco/interpreterRequestReply', { user_id: user_id, ris_id: ris_id, res_type: res_type }, this.httpOptions);
  }


  interpreterRequestList(role_id, user_id, status): Observable<any> {
    return this.http.post(this.url + '/cesco/getRequestForInterpreter', { role_id: role_id, user_id: user_id, status: status }, this.httpOptions);
  }




  interpreterRejectList(role_id, user_id, status): Observable<any> {
    return this.http.post(this.url + '/cesco/getRejectDataInterpreter', { role_id: role_id, user_id: user_id, status: status }, this.httpOptions);
  }






  myNearbyInterpreter(service_id, language, searchNameEmail, distance, rate, rating): Observable<any> {
    return this.http.post(this.url + '/cesco/getNearbyInterpreter', { service_id: service_id, language: language, searchNameEmail: searchNameEmail, distance: distance, rate: rate, rating: rating }, this.httpOptions);
  }



  getUserRequest(): Observable<any> {
    return this.http.get(this.url + '/cesco/getRequestData', this.httpOptions);
  }



  importLanguage(importData): Observable<any> {
    return this.http.post(this.url + '/cesco/importLang', importData);
  }




  userRoleadd(updateInfo: UserroleEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/userRoleAdd', updateInfo, this.httpOptions);
  }

  editPemisssion(id): Observable<any> {
    return this.http.post(this.url + '/cesco/getPermission', { id: id }, this.httpOptions);
  }



  /*=====Role Section Apis Start======*/
  getRoleList(): Observable<any> {
    return this.http.get(this.url + '/cesco/getuserRole', this.httpOptions);
  }

  getRoleAdd(addInfo: RoleAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/saveUserRole', addInfo, this.httpOptions);
  }

  getRoleUpadte(updateInfo: RoleAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/updateuserRole', updateInfo, this.httpOptions);
  }

  getRoleDelete(id): Observable<any> {
    return this.http.post(this.url + '/cesco/removerole', { id: id }, this.httpOptions);
  }

  /*=====Role Section Apis End======*/


  interpreterDashboardData(userId): Observable<any> {
    return this.http.post(this.url + '/cesco/getIntAccReqDashboardData', { userId: userId }, this.httpOptions);
  }



  /*=====Module Section Apis Start======*/
  getModuleList(): Observable<any> {
    return this.http.get(this.url + '/cesco/getmodule', this.httpOptions);
  }

  moduleAdd(addInfo: ModuleAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/saveModule', addInfo, this.httpOptions);
  }

  moduleUpadte(updateInfo: ModuleAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/updatemodule', updateInfo, this.httpOptions);
  }

  moduleDelete(id): Observable<any> {
    return this.http.post(this.url + '/cesco/removemodule', { id: id }, this.httpOptions);
  }

  /*=====Module Section Apis End======*/






  /*=====Interpreter Section Apis Start======*/
  roleList(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getRole');
  }





  getAllUserList(): Observable<any> {
    return this.http.get(this.url + '/cesco/getAllUser', this.httpOptions);
  }



  getInterpreterList(): Observable<any> {
    return this.http.get(this.url + '/cesco/getInterpreter', this.httpOptions);
  }

  // getLanguagAdd(addInfo: LanguageAddEditModels): Observable<any> {
  //   return this.http.post(this.url + '/cesco/savelanguage',addInfo,this.httpOptions);
  // }

  // interpreterAdd(interaddInfo: UserAddEdit): Observable<any> {
  //   return this.http.post(this.url + '/cesco/saveInterpreter', interaddInfo, this.httpOptions);
  // }

  interpreterAdd(interaddInfo: UserAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/saveInterpreter', interaddInfo);
  }


  // getUserUpadte(userupdateInfo: UserAddEdit): Observable<any> {
  //  return this.http.post(this.url + '/cesco/updatelanguage',userupdateInfo,this.httpOptions);
  // }


  updateInterpreter(userupdateInfo: UserAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/updateInterpreter', userupdateInfo);
  }




  statusUpdate(status, id): Observable<any> {
    return this.http.post(this.url + '/cesco/statusUpdate', { status: status, id: id }, this.httpOptions);
  }


  getRequestDetail(request_id): Observable<any> {
    return this.http.post(this.url + '/cesco/getRequestDetails', { request_id: request_id }, this.httpOptions);
  }


  getInterpreterDetail(id): Observable<any> {
    return this.http.post(this.url + '/cesco/getInterpreterDetail', { id: id }, this.httpOptions);
  }

  sendInterpreterRequest(interpreter_id, service_id): Observable<any> {
    return this.http.post(this.url + '/cesco/requestSendtoInterpreter', { interpreter_id: interpreter_id, service_id: service_id });
  }



  checkUserEmail(email): Observable<any> {
    return this.http.post(this.url + '/cesco/checkeEmail', { email: email }, this.httpOptions);
  }

  getInterpreterLang(id): Observable<any> {
    return this.http.post(this.url + '/cesco/getInterpreterLanguage', { id: id }, this.httpOptions);
  }

  getInterpreterTime(id): Observable<any> {
    return this.http.post(this.url + '/cesco/getInterpreterDatatime', { id: id }, this.httpOptions);
  }

  checkLanguage(code): Observable<any> {
    return this.http.post(this.url + '/cesco/checkLanguage', { code: code }, this.httpOptions);
  }

  langStatusUpdate(status, id): Observable<any> {
    return this.http.post(this.url + '/cesco/langStatusUpdate', { status: status, id: id }, this.httpOptions);
  }

  getLanguageList(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getlanguages');
  }

  getLanguagAdd(addInfo: LanguageAddEditModels): Observable<any> {
    return this.http.post(this.url + '/cesco/savelanguage', addInfo, this.httpOptions);
  }

  getLanguagUpadte(updateInfo: LanguageAddEditModels): Observable<any> {
    return this.http.post(this.url + '/cesco/updatelanguage', updateInfo, this.httpOptions);
  }

  getLanguagDelete(id): Observable<any> {
    return this.http.post(this.url + '/cesco/removelanguage', { id: id }, this.httpOptions);
  }

  /*=====Language Section Apis End======*/

  /*=====User Section Apis Start======*/

  getUserList(): Observable<any> {
    return this.http.get(this.url + '/cesco/getlanguages', this.httpOptions);
  }

  getUserAdd(useraddInfo: UserAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/savelanguage', useraddInfo, this.httpOptions);
  }

  getUserUpadte(userupdateInfo: UserAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/updatelanguage', userupdateInfo, this.httpOptions);
  }

  getUserDelete(id): Observable<any> {
    return this.http.post(this.url + '/cesco/removelanguage', { id: id }, this.httpOptions);
  }

  /*=====User Section Apis End======*/


  /*=====Dashboard Section Apis Start======*/
  getdashboardInterpreter(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalInterpreter');
  }


  getdashboardUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalUser');
  }


  getdashboardLanguage(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalLanguage');
  }

  totalRequest(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalRequest');
  }


  totalAssign(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalAssign');
  }


  totalInprogress(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalInprogress');
  }

  totalComplete(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalComplete');
  }

  totalCancelled(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cesco/getTotalCancelled');
  }



  //for interpreter dashboard

  newRequestCount(userId): Observable<any> {
    return this.http.post(this.url + '/cesco/getNewRequestCount', { userId: userId }, this.httpOptions);
  }


  acceptRequestCount(userId): Observable<any> {
    return this.http.post(this.url + '/cesco/getAcceptRequest', { userId: userId }, this.httpOptions);
  }


  rejectRequestCount(userId): Observable<any> {
    return this.http.post(this.url + '/cesco/getRejectRequest', { userId: userId }, this.httpOptions);
  }

  completeRequestCount(userId): Observable<any> {
    return this.http.post(this.url + '/cesco/getCompleteRequest', { userId: userId }, this.httpOptions);
  }

  cancelledRequestCount(userId): Observable<any> {
    // return this.http.get<any[]>(this.url + '/cesco/getCancelledRequest');
    return this.http.post(this.url + '/cesco/getCancelledRequest', { userId: userId }, this.httpOptions);
  }



  interpreterReqCompleted(id, userId): Observable<any> {
    return this.http.post(this.url + '/cesco/interpreterRequestComplete', { id: id, userId: userId }, this.httpOptions);
  }


  /*=====Dashboard Section Apis End======*/


  /*=====Profile Section Apis Start======*/

  getProfileUpadte(profileupdateInfo: AdminProfile): Observable<any> {
    return this.http.post(this.url + '/cesco/profileUpdate', profileupdateInfo);
  }

  changePassword(changepassInfo: ChangePassword): Observable<any> {
    return this.http.post(this.url + '/cesco/changePassword', changepassInfo, this.httpOptions);
  }
  /*=====Profile Section Apis End======*/

  /*=====Request Section Apis Start======*/
  getReminderRequest(user_id, ris_id, notes): Observable<any> {
    return this.http.post(this.url + '/cesco/adminReminderForinterpreter', { user_id: user_id, ris_id: ris_id, notes: notes }, this.httpOptions);
  }

  /*=====Request Section Apis End======*/

/*=====Add Calender Section Apis Start======*/
getAddCalender(addInfo: AddCalender): Observable<any> {
  return this.http.post(this.url + '/cesco/addInterpreterEvents', addInfo);
}

interpreterViewEvents(user_id,event_id): Observable<any> {
  return this.http.post(this.url + '/cesco/getLocalEventsData', { user_id: user_id, event_id: event_id }, this.httpOptions);
}
getUpdateCalender(addInfo: AddCalender): Observable<any> {
  return this.http.post(this.url + '/cesco/updateInterpreterEvents',  addInfo);
}
/*=====Add Calender Apis End======*/


}
