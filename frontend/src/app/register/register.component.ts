// ANGULAR MODULE
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Api Service
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  gender: boolean = false; // Gender value
  email: String = null; // Email value
  username: String = null; // Username value
  password: String = null; // Password value
  confirm_password: String = null; // Confirm password value

  error_message: String = 'Password does not match';

  // DISABLE BUTTON
  signup_button_disable: boolean = true;

  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
  }
  // SEND SIGN UP
  signUp() {

    if (this.password !== this.confirm_password) {
      this.error_message = 'Password does not match';
      document.getElementById('error-box').classList.remove('hide');

    } else {

      this.ApiService.create_user(this.email, this.username, this.password).then((data) => {

        if (data['status'] === 'error') {
          console.log(data);
          document.getElementById('error-box').classList.remove('hide');
          this.error_message = data['error'];
        } else {
          this.router.navigate(['/']);
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

    this.router.navigate(['/']);

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
