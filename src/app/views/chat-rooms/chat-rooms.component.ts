import { Component, OnInit, HostListener } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css'],
})
export class ChatRoomsComponent implements OnInit {
  private resizeSubject = new Subject();
  private resizeSubscription;

  desktopWindow: boolean = true;

  constructor() {
    this.resizeSubscription = this.resizeSubject
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.detectDesktopScreenSize();
      });
  }

  ngOnInit(): void {
    this.detectDesktopScreenSize();
  }

  detectDesktopScreenSize() {
    const width = window.innerWidth;
    if (width <= 800) {
      this.desktopWindow = false;
    } else {
      this.desktopWindow = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resizeSubject.next(event);
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
}
