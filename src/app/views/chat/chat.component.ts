import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  message = new FormControl('');

  onSubmit(event: Event): void {
    event.preventDefault();
  }
}
