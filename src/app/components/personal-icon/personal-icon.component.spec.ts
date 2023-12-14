import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalIconComponent } from './personal-icon.component';

describe('PersonalIconComponent', () => {
  let component: PersonalIconComponent;
  let fixture: ComponentFixture<PersonalIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalIconComponent]
    });
    fixture = TestBed.createComponent(PersonalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
