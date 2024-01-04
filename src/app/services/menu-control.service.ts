import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuControlService {
  private openSideBarMenuSubject = new BehaviorSubject<boolean>(false);
  openSideBarMenu$ = this.openSideBarMenuSubject.asObservable();

  openSideBarMenu() {
    this.openSideBarMenuSubject.next(!this.openSideBarMenuSubject.value);
  }

  constructor() {}
}
