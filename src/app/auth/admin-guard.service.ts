import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  jwtHelper = new JwtHelperService();

  constructor(private router: Router) {
  }

  canActivate() {

    const token = sessionStorage.getItem('token');

    if (token) {
      const isExpired = this.jwtHelper.isTokenExpired(token);

      console.log('is expired: ', isExpired);

      if (isExpired) {
        this.router.navigate(['/login']);
        return false;
      } else {
        try {
          const jwtDecoded = this.jwtHelper.decodeToken(token);
          if (jwtDecoded) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        } catch (error) {
          console.log(error);
          this.router.navigate(['/login']);
          return false;
        }
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
