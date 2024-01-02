import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { RegisterUser } from '../models/registerUser';
import { Observable, catchError, map, throwError } from 'rxjs';

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

  register(payload: RegisterUser): Observable<any> {
    const body = JSON.stringify(payload);

    return this.http.post(apiUrl + '/auth/register', body, this.httpOptions);
  }

  /*
  login(payload) {
    const body = JSON.stringify(payload);
    sessionStorage.setItem('token', 'Bearer ' + resp.token);
    sessionStorage.setItem('nickname', resp.nickname);

    return this.http.post(apiUrl + '/auth/register', body, this.httpOptions).pipe();
  } */
}
