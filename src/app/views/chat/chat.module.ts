import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
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
