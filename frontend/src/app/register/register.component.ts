// ANGULAR MODULE
import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

// Api Service
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges, DoCheck {

  // LOGGED-IN USER'S VARIABLE
  logged_in_email: string;
  logged_in_username: string;
  logged_in_role: string;

  // CREATED USER'S VARIABLE
  gender: boolean = false; // Gender value
  email: string; // Email value
  role: string = 'Admin'; // Role value, set default is admin
  username: string; // Username value
  password: string; // Password value
  confirm_password: string; // Confirm password value

  roles: Array<string> = [
    'Admin',
    'Staff',
    'User'
  ];

  // ERROR MESSAGE
  error_message: string = 'Password does not match';

  // DISABLE BUTTON
  signup_button_disable: boolean = true;
  admin_button_disable: boolean = true;
  staff_button_disable: boolean = true;
  user_button_disable: boolean = true;

  constructor(
    private _router: Router,
    private _apiService: ApiService,
    private _userService: UserService) { }

  ngOnInit() {

    this.checkUserRole();

  }

  ngOnChanges() {

  }

  ngDoCheck() {

    if (this.logged_in_role === 'Admin') {
      this.admin_button_disable = false;
      this.staff_button_disable = false;
      this.user_button_disable = false;
    }

  }
  // CHECK USER'S ROLE
  checkUserRole() {

    this._userService.getUserRoles().then((data) => {
      this.logged_in_username = data['username'];
      this.logged_in_role = data['role'];
      this.logged_in_email = data['email'];
    });

  }
  // SEND SIGN UP
  signUp() {

    if (this.password !== this.confirm_password) {
      this.error_message = 'Password does not match';
      document.getElementById('error-box').classList.remove('hide');

    } else {

      this._apiService.create_user(this.email, this.username, this.password, this.role).then((data) => {

        if (data['status'] === 'error') {
          console.log(data);
          document.getElementById('error-box').classList.remove('hide');
          this.error_message = data['error'];

        } else {
          this._router.navigate(['/login']);
        }

      });

    }

  }
  // VALIDATE PASSWORD'S VALUE
  validate_password() {

    if (this.password && this.confirm_password) {

      if (this.password.length >= 8 && this.confirm_password.length >= 8) {
        this.signup_button_disable = true;
        return true;
      }

    }

    this.signup_button_disable = false;
    return false;

  }
  // VALIDATE USERNAME'S VALUE
  validate_username() {

    if (this.username) {

      if (this.username.length >= 8) {
        return true;
      }

    }

    return false;

  }
  // ROUTE BACK TO PREVIOUS PAGE
  routeBack() {

    localStorage.clear();
    this._router.navigate(['/login']);

  }
  // CHECK PASSWORD'S VALUE LENGTH
  check_password_length() {

    if (this.validate_password() === true) {
      return 'mat-checkbox-anim-unchecked-checked mat-checkbox-checked';
    }

    return '';

  }
  // CHECK USERNAME'S VALUE LENGTH
  check_username_length() {

    if (this.validate_username() === true) {
      return 'mat-checkbox-anim-unchecked-checked mat-checkbox-checked';
    }

    return '';

  }
  // UNLOCK SIGNUP BUTTON
  signup_button_unlock() {

    if (this.email && this.username && this.password && this.confirm_password) {

      if ((!document.getElementById('email').classList.contains('ng-invalid')
        && !document.getElementById('username').classList.contains('ng-invalid')
        && !document.getElementById('password').classList.contains('ng-invalid')
        && !document.getElementById('confirm_password').classList.contains('ng-invalid'))
        && (document.getElementById('username_checkbox').classList.contains('mat-checkbox-checked')
          && document.getElementById('password_checkbox').classList.contains('mat-checkbox-checked'))) {

        return false;

      }

    }

    return true;

  }
  // HIDE ERROR BOX
  hideErrorbox() {

    if (this.email === '' || this.username === ''
      || this.password === '' || this.confirm_password === '') {

      return 'hide';

    }

    return '';

  }

}
