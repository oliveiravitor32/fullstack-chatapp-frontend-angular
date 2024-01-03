import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatRoomModel } from '../models/chatroom-model';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageModel } from '../models/message-model';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  token: string | null = sessionStorage.getItem('token');

  public actualChatRoom = new BehaviorSubject<ChatRoomModel>({
    id: 0,
    name: '',
  });

  public actualChatRoom$ = this.actualChatRoom.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };

  constructor(private http: HttpClient) {}

  joinTheChat(id: string | null): Observable<ChatRoomModel> {
    return this.http.get<ChatRoomModel>(
      apiUrl + `/chatroom/${id}`,
      this.httpOptions
    );
  }

  getAllMessages(id: number) {
    return this.http.get<MessageModel[]>(
      apiUrl + `/chatroom/${id}/messages`,
      this.httpOptions
    );
  }
}
