import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()
export class RegisterComponent implements OnInit {

  // create method for form biding
  registerForm: FormGroup = new FormGroup({
    signupEmail: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, [Validators.required]),
    signupPassword: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  });

  constructor(private _routes: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  register() {
    if (!this.registerForm.valid ||
      (this.registerForm.controls.signupPassword.value !== this.registerForm.controls.confirmPassword.value)) {
      console.log('All requried data is not entered.' + JSON.stringify(this.registerForm.value));
      return false;
    }
    console.log('registering user' + JSON.stringify(this.registerForm.value));
    this._userService.registerUser(JSON.stringify(this.registerForm.value))
      .subscribe(data => { console.log(data); this._routes.navigate(['/login']); },
        error => console.error(error)
      );

  }

  navigateToLogin() {
    this._routes.navigate(['/login']);
  }
}
