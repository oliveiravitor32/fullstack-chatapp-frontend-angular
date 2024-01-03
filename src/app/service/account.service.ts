import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  actualUser = sessionStorage.getItem('nickname');
  constructor() {}
}
