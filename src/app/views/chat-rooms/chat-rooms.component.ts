import { Component, OnInit } from '@angular/core';
import { ChatRoomModel } from 'src/app/models/chatroom-model';
import { ChatRoomsService } from 'src/app/services/chatrooms.service';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: [
    './chat-rooms.component.css',
    './chat-rooms.responsive.component.css',
  ],
})
export class ChatRoomsComponent implements OnInit {
  menuOpen: boolean = false;
  load: boolean = false;

  rooms: ChatRoomModel[] = [];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private chatRoomsService: ChatRoomsService) {}

  ngOnInit(): void {
    this.load = true;
    this.chatRoomsService.getAllChatrooms().subscribe({
      next: (res) => {
        this.rooms = res;
        this.load = false;
      },
    });
  }
}
