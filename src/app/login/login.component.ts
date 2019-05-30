import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AlertService } from '../shared/alert.service';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
  `]
})
export class LoginComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  username: any;
  password: any;
  isRemember = false;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    const remberUsername = localStorage.getItem('rememberUsername');
    if (remberUsername) {
      this.username = remberUsername;
    }
  }

  async doLogin() {
    if (this.username && this.password) {
      try {
        const rs: any = await this.loginService.doLogin(this.username, this.password);
        if (rs.ok) {
          if (this.isRemember) {
            localStorage.setItem('rememberUsername', this.username);
          } else {
            localStorage.removeItem('rememberUsername');
          }

          sessionStorage.setItem('token', rs.token);

          const decodedToken = this.jwtHelper.decodeToken(rs.token);
          sessionStorage.setItem('firstName', decodedToken.firstName);
          sessionStorage.setItem('lastName', decodedToken.lastName);

          this.router.navigateByUrl('/pos');
        } else {
          this.alertService.error(rs.error);
        }
      } catch (error) {
        console.log(error);
        this.alertService.error();
      }
    } else {
      this.alertService.error('กรุณาระบุชื่อผู้ใช้งานและรหัสผ่าน');
    }

  }

}
