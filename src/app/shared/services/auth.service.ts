import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { Login } from "../models/login";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;
  private url = environment.apiUrl;
  private httpOptions;
  constructor(private store: LocalStoreService, 
    private http: HttpClient,
    private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("demo_login_status");
  }

  public isAuthenticated(): boolean {
    const id = this.getUserId();
    let x = false;
    if(id){
        return true
    }
    return false
  }

  public getUserId(): string {
    return JSON.parse(localStorage.getItem('userId'));
  }
  
  signin(loginInfo: Login) {
    return this.http.post(this.url + '/cesco/userlogin',loginInfo, this.httpOptions);

    // this.authenticated = true;
    // this.store.setItem("demo_login_status", true);
    // return of({}).pipe(delay(1500));
  }
  signout() {
    
    this.authenticated = false;
    this.store.setItem("demo_login_status", false);
    localStorage.clear();
    this.router.navigateByUrl("/sessions/signin");
  }
}
