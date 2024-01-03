import { Component, Input } from '@angular/core';
import { ChatRoomModel } from 'src/app/models/chatroom-model';

@Component({
  selector: 'app-chat-room-card',
  templateUrl: './chat-room-card.component.html',
  styleUrls: [
    './chat-room-card.component.css',
    './chat-room-card.responsive.component.css',
  ],
})
export class ChatRoomCardComponent {
  @Input() room: ChatRoomModel = {id: 0, name: ''};
}
