import { ChatService } from './../../service/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatRoomModel } from 'src/app/models/chatroom-model';
import { MessageModel } from 'src/app/models/message-model';
import { AccountService } from 'src/app/service/account.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css', './chat.responsive.component.css'],
})
export class ChatComponent implements OnDestroy {
  room: ChatRoomModel = { id: 0, name: '' };
  sendMessage = new FormControl('');
  allMessages: MessageModel[] = [];

  actualUser: String | null = '';

  load: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private accountService: AccountService
  ) {
    this.joinTheChat();
    this.actualUser = this.accountService.actualUser;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  joinTheChat() {
    this.load = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.chatService.joinTheChat(id).subscribe({
      next: (resp) => {
        this.room = resp;
        this.chatService.actualChatRoom.next(resp);
        this.getAllMessages();
      },
    });
  }

  getAllMessages() {
    this.chatService.getAllMessages(this.room.id).subscribe({
      next: (resp) => {
        this.allMessages = resp;
        this.load = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.chatService.actualChatRoom.next({ id: 0, name: '' });
  }
}
