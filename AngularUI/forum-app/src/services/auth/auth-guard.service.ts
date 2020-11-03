import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    var auth : boolean = await this.auth.isAuthenticated();
    if (!auth && state.url == "/") {
      this.router.navigate(['/auth']);
      return false;
    } else if(auth && state.url == "/auth"){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}