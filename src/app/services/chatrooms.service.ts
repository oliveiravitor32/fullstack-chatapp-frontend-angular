import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatRoomModel } from '../models/chatroom-model';
import { Observable, map, take } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ChatRoomsService {
  token: string | null = sessionStorage.getItem('token');
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };

  getAllChatrooms(): Observable<ChatRoomModel[]> {
    return this.http
      .get<ChatRoomModel[]>(apiUrl + '/chatroom/rooms', this.httpOptions)
      .pipe(take(1));
  }
}
