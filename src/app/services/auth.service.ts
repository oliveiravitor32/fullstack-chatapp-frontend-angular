import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, map } from 'rxjs';
import { AuthUser } from '../models/authUser';
import { AuthModel } from '../models/auth-model';
import { JwtHelperService } from '@auth0/angular-jwt';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  register(payload: AuthUser): Observable<any> {
    const body = JSON.stringify(payload);

    return this.http.post(apiUrl + '/auth/register', body, this.httpOptions);
  }

  login(payload: AuthUser) {
    const body = JSON.stringify(payload);

    return this.http
      .post<AuthModel>(apiUrl + '/auth/login', body, this.httpOptions)
      .pipe(
        map((resp: AuthModel) => {
          sessionStorage.setItem('token', 'Bearer ' + resp.token);
          sessionStorage.setItem('nickname', resp.nickname);
          return resp;
        })
      );
  }

  isUserSignedin() {
    const jwtHelper = new JwtHelperService();

    if (sessionStorage.getItem('token')) {
      const isTokenExpired = jwtHelper.isTokenExpired(
        sessionStorage.getItem('token')
      );

      if (!isTokenExpired) {
        return true;
      }
    }
    return false;
  }
}
