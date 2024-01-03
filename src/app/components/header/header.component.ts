import { ChatService } from './../../service/chat.service';
import { Component } from '@angular/core';

import { MenuControlService } from 'src/app/service/menu-control.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.component.css'],
})
export class HeaderComponent {
  chatRoomName: string = '';

  constructor(
    private menuControlService: MenuControlService,
    private chatService: ChatService
  ) {
    this.subscribeInChat();
  }

  toggleMenu() {
    this.menuControlService.openSideBarMenu();
  }

  subscribeInChat() {
    this.chatService.actualChatRoom$.subscribe({
      next: (res) => (res.name != null ? (this.chatRoomName = res.name) : ''),
    });
  }
}
