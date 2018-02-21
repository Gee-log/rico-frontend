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
  current_user: any = this._userService.getUsers();
  error_message: string;

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _userService: UserService) { }

  ngOnInit() {

    // check current user
    this.checkCurrentUser();

  }
  // VALIDATE CURRENT USER
  checkCurrentUser() {

    // set fake token in localStorage first ** this versy important
    localStorage.setItem('token', JSON.stringify({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }));

    if (this.current_user['username'] && this.current_user['username'] !== null) {
      this._router.navigate(['/']);
    }

  }
  // LOGIN
  login() {

    this._authenticationService.login(this.model.username, this.model.password)
      .then(result => {

        if (result === true) {


          this._userService.getUserRoles().then((data) => {

            localStorage.setItem('User_data', JSON.stringify({
              'username': data['username'], 'email': data['email'],
              'role': data['role']
            }));

            this._router.navigate(['/']);

          });


        } else {

          document.getElementById('error').classList.remove('hide');
          this.error_message = 'Username or password is incorrect';

        }


      });

  }
  // VALIDATE INPUT TO ENABLE / DISABLE LOGIN BUTTON
  validateLoginButton() {

    if (this.model.username && this.model.password) {
      return true;

    } else {
      document.getElementById('error').classList.add('hide');
      return false;
    }

  }
  // CATCH USER'S EVENT PRESS ENTER
  catchEnter(e) {

    // IF KEYUP EVENT IS "ENTER"
    if (e.keyCode === 13) {

      // CHECK USERNAME AND PASSWORD NOT NULL OR BLANK
      if ((this.model.username && this.model.username !== '') && (this.model.password && this.model.password !== '')) {
        this.login();
      }

    }

  }

}
