import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PersonalIconComponent } from './components/personal-icon/personal-icon.component';
import { ChatRoomsComponent } from './views/chat-rooms/chat-rooms.component';
import { ChatComponent } from './views/chat/chat.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginRegisterModule } from './views/login-register/login-register.module';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ChatRoomsComponent,
    PersonalIconComponent,
    ChatComponent,
    PersonalCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LoginRegisterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
