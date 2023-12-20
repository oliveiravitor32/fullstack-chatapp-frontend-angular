import { Component } from '@angular/core';
import { MenuControlService } from 'src/app/service/menu-control.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.component.css'],
})
export class HeaderComponent {
  constructor(private menuControlService: MenuControlService) {}

  toggleMenu() {
    this.menuControlService.openSideBarMenu();
  }
}
