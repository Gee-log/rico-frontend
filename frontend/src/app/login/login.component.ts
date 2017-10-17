// ANGULAR MODULE
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Api Service
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false; // <-- Not using right now
  error = '';
  current_user = this.userservice.getUsers();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userservice: UserService) { }

  ngOnInit() {
    // check current user
    this.checkCurrentUser();
    // reset login status
    // this.authenticationService.logout();
  }

  // VALIDATE CURRENT USER
  checkCurrentUser() {
    if (this.current_user) {
      this.router.navigate(['/']);
    }
  }
  // LOGIN
  login() {

    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .then(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          document.getElementById('error').classList.remove('hide');
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }

      });
  }
  // VALIDATE INPUT TO ENABLE / DISABLE LOGIN BUTTON
  validate_login_button() {

    if (this.model.username && this.model.password) {
      return true;
    } else {
      document.getElementById('error').classList.add('hide');
      return false;
    }

  }

}
