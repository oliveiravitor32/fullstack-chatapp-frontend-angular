import { Component, OnInit } from '@angular/core';
import { MenuControlService } from 'src/app/service/menu-control.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: [
    './side-bar-menu.component.css',
    './side-bar-menu.responsive.component.css',
  ],
})
export class SideBarMenuComponent implements OnInit {
  statusMenu: boolean = false;
  inChatRooms: boolean = false;

  constructor(
    private router: Router,
    private menuControlService: MenuControlService,
    private route: ActivatedRoute
  ) {
    this.menuControlService.openSideBarMenu$.subscribe((state: boolean) => {
      this.statusMenu = state;
    });
  }

  ngOnInit(): void {
    const componentName = this.route.snapshot.component?.name;
    if (componentName === 'ChatRoomsComponent') {
      this.inChatRooms = true;
    }
  }

  toggleMenu() {
    this.menuControlService.openSideBarMenu();
  }

  navigateToChatRooms() {
    this.router.navigate(['/chatrooms']);
  }

  navigateToChat() {
    this.router.navigate(['/chatrooms/chat']);
  }
}