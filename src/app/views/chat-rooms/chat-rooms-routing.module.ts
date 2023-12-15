import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomsComponent } from './chat-rooms.component';

const routes: Routes = [{ path: '', component: ChatRoomsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoomsRoutingModule {}
