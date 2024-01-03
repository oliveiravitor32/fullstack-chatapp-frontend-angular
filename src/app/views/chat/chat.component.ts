import { ChatService } from './../../service/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatRoomModel } from 'src/app/models/chatroom-model';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css', './chat.responsive.component.css'],
})
export class ChatComponent {
  room: ChatRoomModel = { id: 0, name: '' };
  message = new FormControl('');

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    this.getChat();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  getChat() {
    const id = this.route.snapshot.paramMap.get('id');
    this.chatService.joinTheChat(id).subscribe({
      next: (resp) => {
        this.room = resp;
        this.chatService.actualChatRoom.next(resp);
      },
    });
  }
}
