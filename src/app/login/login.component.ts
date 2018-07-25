import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _userSerivce: UserService) { }

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
    // todo : validate from databae and use logger
    if (!this.loginForm.valid) {
      console.log('logged in succesfully' + JSON.stringify(this.loginForm.value));
      return false;
    }
    this._userSerivce.loginUser(JSON.stringify(this.loginForm.value))
      .subscribe(
        data => { console.log(data); this._router.navigate(['/dashboard']); },
        error => {console.log(error); }
      );
  }
}
