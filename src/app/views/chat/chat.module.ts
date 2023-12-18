import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { ReceivedMessageComponent } from './received-message/received-message.component';
import { MessageEventsComponent } from './message-events/message-events.component';

@NgModule({
  declarations: [ChatComponent, SentMessageComponent, ReceivedMessageComponent, MessageEventsComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedComponentsModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [ChatComponent],
})
export class ChatModule {}
