import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: any) { }

  doLogin(username: any, password: any) {
    const url = `${this.apiUrl}/login/admin`;
    const body: any = {
      username: username,
      password: password
    };

    return this.http.post(url, body).toPromise();
  }
}
