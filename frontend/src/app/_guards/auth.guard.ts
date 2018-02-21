// ANGULAR Module
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router) { }

  canActivate() {

    // logged in so return true
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    // not logged in so redirect to login page
    this._router.navigate(['/login']);
    return false;
  }

}
