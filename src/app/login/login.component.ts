import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  loginForm: FormGroup = new FormGroup({
    loginEmail: new FormControl(null, Validators.required),
    loginPassword: new FormControl(null, Validators.required)
  });

  ngOnInit() {
  }
  // go to register view
  navigateToRegister() {
    this._router.navigate(['/register']);
  }

  // validate login input
  login() {
	//todo : validate from databae and use logger
    if (this.loginForm.valid && this.loginForm.controls.loginEmail.value === this.loginForm.controls.loginPassword.value) {
      console.log('logged in succesfully' + JSON.stringify(this.loginForm.value));
      return true;
    }
  }
}
