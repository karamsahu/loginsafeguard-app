import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // create method for form biding
  registerForm: FormGroup = new FormGroup({
    signupEmail: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    signupPassword: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  });

  constructor(private _routes: Router) { }

  ngOnInit() {
  }

  register() {
    if (!this.registerForm.valid) {
      console.log('All requried data is not entered.' + JSON.stringify (this.registerForm.value));
      return false;
    }

    if (this.registerForm.controls.signupPassword.value !== this.registerForm.controls.confirmPassword.value) {
      console.log('Username and password must be same.' + JSON.stringify(this.registerForm.value));
      return false;
    }

  }

  navigateToLogin() {
    this._routes.navigate(['/login']);
  }
}
