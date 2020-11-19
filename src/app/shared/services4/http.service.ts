import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { LanguageAddEditModels } from '../models/language-model/language-add-edit-models';
import { UserAddEdit } from '../models/users-model/user-add-edit';
import { RoleAddEdit } from '../models/permission-model/role-add-edit';
import { ModuleAddEdit } from '../models/permission-model/module-add-edit';
import { UserroleEdit } from '../models/roleset-model/userrole-edit';
import { LanguageImport } from '../models/language-model/language-import';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public httpOptions;
  // public options;
  public url = environment.apiUrl;
  constructor(private http: HttpClient,private router:Router) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }
  

  importLanguage(addInfo: LanguageImport): Observable<any> {
    return this.http.post(this.url + '/cesco/importLang',addInfo,this.httpOptions);
  }

 
 userRoleadd(updateInfo: UserroleEdit): Observable<any> {
  return this.http.post(this.url + '/cesco/userRoleAdd'  ,updateInfo,this.httpOptions);
 }

  editPemisssion(id): Observable<any> {
    return this.http.post(this.url + '/cesco/getPermission',{id:id},this.httpOptions);
  }



  /*=====Role Section Apis Start======*/
   getRoleList(): Observable<any> {
     return this.http.get(this.url + '/cesco/getuserRole', this.httpOptions);
   }

   getRoleAdd(addInfo: RoleAddEdit): Observable<any> {
     return this.http.post(this.url + '/cesco/saveUserRole',addInfo,this.httpOptions);
   }

   getRoleUpadte(updateInfo: RoleAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/updateuserRole',updateInfo,this.httpOptions);
   }

   getRoleDelete(id): Observable<any> {
    return this.http.post(this.url + '/cesco/removerole',{id:id},this.httpOptions);
   }

   /*=====Role Section Apis End======*/




  /*=====Module Section Apis Start======*/
   getModuleList(): Observable<any> {
     return this.http.get(this.url + '/cesco/getmodule', this.httpOptions);
   }

   moduleAdd(addInfo: ModuleAddEdit): Observable<any> {
     return this.http.post(this.url + '/cesco/saveModule',addInfo,this.httpOptions);
   }

   moduleUpadte(updateInfo: ModuleAddEdit): Observable<any> {
    return this.http.post(this.url + '/cesco/updatemodule',updateInfo,this.httpOptions);
   }

   moduleDelete(id): Observable<any> {
    return this.http.post(this.url + '/cesco/removemodule',{id:id},this.httpOptions);
   }

   /*=====Module Section Apis End======*/







   /*=====Language Section Apis Start======*/
   getLanguageList(): Observable<any> {
     return this.http.get(this.url + '/cesco/getlanguages', this.httpOptions);
   }

   getLanguagAdd(addInfo: LanguageAddEditModels): Observable<any> {
     return this.http.post(this.url + '/cesco/savelanguage',addInfo,this.httpOptions);
   }

   getLanguagUpadte(updateInfo: LanguageAddEditModels): Observable<any> {
    return this.http.post(this.url + '/cesco/updatelanguage',updateInfo,this.httpOptions);
   }

   getLanguagDelete(id): Observable<any> {
    return this.http.post(this.url + '/cesco/removelanguage',{id:id},this.httpOptions);
   }

   /*=====Language Section Apis End======*/

    /*=====User Section Apis Start======*/

    getUserList(): Observable<any> {
      return this.http.get(this.url + '/cesco/getlanguages', this.httpOptions);
    }
 
    getUserAdd(useraddInfo: UserAddEdit): Observable<any> {
      return this.http.post(this.url + '/cesco/savelanguage',useraddInfo,this.httpOptions);
    }
 
    getUserUpadte(userupdateInfo: UserAddEdit): Observable<any> {
     return this.http.post(this.url + '/cesco/updatelanguage',userupdateInfo,this.httpOptions);
    }
 
    getUserDelete(id): Observable<any> {
     return this.http.post(this.url + '/cesco/removelanguage',{id:id},this.httpOptions);
    }

     /*=====User Section Apis End======*/
}
