import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: [
    './chat-rooms.component.css',
    './chat-rooms.responsive.component.css',
  ],
})
export class ChatRoomsComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
