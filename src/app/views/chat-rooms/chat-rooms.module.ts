import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomsRoutingModule } from './chat-rooms-routing.module';
import { ChatRoomsComponent } from './chat-rooms.component';
import { ChatRoomCardComponent } from './chat-room-card/chat-room-card.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

@NgModule({
  declarations: [ChatRoomsComponent, ChatRoomCardComponent],
  imports: [CommonModule, ChatRoomsRoutingModule, SharedComponentsModule],
  exports: [ChatRoomsComponent, ChatRoomCardComponent],
})
export class ChatRoomsModule {}
