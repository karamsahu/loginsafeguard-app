import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: String;
  loginAttemptsCount: String;
  constructor(private _router: Router, private _userService: UserService) {
    this._userService.user()
      .subscribe(
        data => this.setDashboardData(data),
        error => this._router.navigate(['/login'])
      );
  }

  setDashboardData(data) {
    this.username = data.username;
    this.loginAttemptsCount = data.creationDate; // todo
  }
  ngOnInit() {
  }

  logout() {
    this._userService.logout().subscribe(
      data => { console.log(data); this._router.navigate(['/login']); },
      error => console.log(error)
    );
  }

}
