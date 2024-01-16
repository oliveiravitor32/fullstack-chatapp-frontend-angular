import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private readonly wsUrl = 'ws://localhost:8080/chat-socket';
  private socket$ = webSocket({
    url: this.wsUrl,
    openObserver: {
      next: () => {
        console.log('Connection ok');
      },
    },
  });

  constructor() {}

  connect() {}

  joinRoom() {}

  public closeConnection(): void {}

  public sendMessage(msg: String): void {}
}
