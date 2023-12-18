import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEventsComponent } from './message-events.component';

describe('MessageEventsComponent', () => {
  let component: MessageEventsComponent;
  let fixture: ComponentFixture<MessageEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageEventsComponent]
    });
    fixture = TestBed.createComponent(MessageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
