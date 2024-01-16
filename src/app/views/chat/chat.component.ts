import { ChatService } from '../../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatRoomModel } from 'src/app/models/chatroom-model';
import { MessageModel } from 'src/app/models/message-model';
import { AccountService } from 'src/app/services/account.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { SendMessageModel } from 'src/app/models/send-message-model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css', './chat.responsive.component.css'],
})
export class ChatComponent implements OnDestroy {
  room: ChatRoomModel = { id: 0, name: '' };
  mySendMessage = new FormControl('');
  allMessages: MessageModel[] = [];

  actualUser: String = '';

  load: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private accountService: AccountService,
    private webSocketService: WebsocketService
  ) {
    //this.getAllMessages();
    this.actualUser = this.accountService.getActualUser();
  }

  connectWb() {
    console.log('Connect wb button');
    this.webSocketService.connect();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    /*
    console.log('send message: ' + this.mySendMessage.value);
    this.webSocketService.sendMessage(
      this.mySendMessage.value || 'default message'
    ); */
    //this.webSocketService.joinRoom();
  }

  getAllMessages() {
    this.load = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.chatService.joinTheChat(id).subscribe({
      next: (resp) => {
        this.room = resp;
        console.log(this.room);
        this.chatService.actualChatRoom.next(resp);
        this.chatService.getAllMessages(this.room.id).subscribe({
          next: (resp) => {
            this.allMessages = resp;
            this.load = false;

            this.joinTheChat();
          },
        });
      },
    });
  }

  joinTheChat() {
    console.log('ué');
  }

  ngOnDestroy(): void {
    console.log('Destroy socket');
    this.chatService.actualChatRoom.next({ id: 0, name: '' });
    this.webSocketService.closeConnection();
  }
}
