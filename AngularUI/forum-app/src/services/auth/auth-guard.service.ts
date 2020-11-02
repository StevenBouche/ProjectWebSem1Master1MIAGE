import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  async canActivate(): Promise<boolean> {
    var auth : boolean = await this.auth.isAuthenticated();
    if (!auth) {
      this.router.navigate(['/auth']);
      console.log(false)
      return false;
    }
    console.log(true)
    return true;
  }

}