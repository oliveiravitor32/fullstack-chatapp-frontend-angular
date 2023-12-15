import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCardComponent } from './personal-card.component';

describe('PersonalCardComponent', () => {
  let component: PersonalCardComponent;
  let fixture: ComponentFixture<PersonalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCardComponent]
    });
    fixture = TestBed.createComponent(PersonalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
