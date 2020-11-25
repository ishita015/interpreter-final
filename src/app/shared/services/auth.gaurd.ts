import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/sessions/signin']);
      return false;
    }
    return true;
    // if (this.auth.authenticated) {
    //   return true;
    // } else {
    //   this.router.navigateByUrl('/sessions/signin');
    // }
  }
}
