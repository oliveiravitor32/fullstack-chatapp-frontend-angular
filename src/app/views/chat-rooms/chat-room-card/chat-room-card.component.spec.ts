import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomCardComponent } from './chat-room-card.component';

describe('ChatRoomCardComponent', () => {
  let component: ChatRoomCardComponent;
  let fixture: ComponentFixture<ChatRoomCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatRoomCardComponent]
    });
    fixture = TestBed.createComponent(ChatRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
