import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginRegisterModule } from './views/login-register/login-register.module';
import { ChatRoomsModule } from './views/chat-rooms/chat-rooms.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './views/chat/chat.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRegisterModule,
    ChatRoomsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
