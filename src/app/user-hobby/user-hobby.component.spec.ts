import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserHobbyComponent} from './user-hobby.component';

describe('UserHobbyComponent', () => {
  let component: UserHobbyComponent;
  let fixture: ComponentFixture<UserHobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserHobbyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
