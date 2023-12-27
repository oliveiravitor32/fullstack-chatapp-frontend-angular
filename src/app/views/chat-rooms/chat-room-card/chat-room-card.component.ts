import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-room-card',
  templateUrl: './chat-room-card.component.html',
  styleUrls: [
    './chat-room-card.component.css',
    './chat-room-card.responsive.component.css',
  ],
})
export class ChatRoomCardComponent {
  @Input() roomName: String = '';
}
