import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMenuComponent } from './side-bar-menu.component';

describe('SideBarComponent', () => {
  let component: SideBarMenuComponent;
  let fixture: ComponentFixture<SideBarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarMenuComponent],
    });
    fixture = TestBed.createComponent(SideBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
