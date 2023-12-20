import { Component } from '@angular/core';
import { MenuControlService } from 'src/app/service/menu-control.service';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: [
    './side-bar-menu.component.css',
    './side-bar-menu.responsive.component.css',
  ],
})
export class SideBarMenuComponent {
  statusMenu: boolean = false;

  constructor(private menuControlService: MenuControlService) {
    this.menuControlService.openSideBarMenu$.subscribe((state: boolean) => {
      this.statusMenu = state;
    });
  }

  toggleMenu() {
    this.menuControlService.openSideBarMenu();
  }
}
