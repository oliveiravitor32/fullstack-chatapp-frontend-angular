import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatRoomModel } from '../models/chatroom-model';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public actualChatRoom = new BehaviorSubject<ChatRoomModel>({
    id: 0,
    name: '',
  });

  public actualChatRoom$ = this.actualChatRoom.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  joinTheChat(id: string | null): Observable<ChatRoomModel> {
    return this.http.get<ChatRoomModel>(
      apiUrl + `/chatroom/${id}`,
      this.httpOptions
    );
  }
}
