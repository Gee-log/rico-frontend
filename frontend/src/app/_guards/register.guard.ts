// ANGULAR Module
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Api service
import { UserService } from '../services/user.service';

@Injectable()
export class RegisterGuard implements CanActivate {

  role: string = null;

  constructor(
    private _router: Router,
    private _userService: UserService) { }

  canActivate() {

    this._userService.getUserRoles().then((data) => {
      this.role = data['role'];
    });

    if (this.role === 'Admin') {
      // have permission so return true
      return true;
    }

    // no permission so redirect to login page
    return false;
  }

}
