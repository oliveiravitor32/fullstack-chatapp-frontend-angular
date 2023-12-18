import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/login-register/login-register.module').then(
        (m) => m.LoginRegisterModule
      ),
  },
  {
    path: 'chatrooms',
    loadChildren: () =>
      import('./views/chat-rooms/chat-rooms.module').then(
        (m) => m.ChatRoomsModule
      ),
  },
  {
    path: 'chatrooms/chat',
    loadChildren: () =>
      import('./views/chat/chat.module').then((m) => m.ChatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
