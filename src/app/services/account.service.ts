import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private actualUser = sessionStorage.getItem('nickname');
  constructor() {}

  getActualUser(): String {
    if (!this.actualUser) {
      //FIX AFTER
      //
      //
      //
      //
      return '';
    }
    return this.actualUser;
  }
}
