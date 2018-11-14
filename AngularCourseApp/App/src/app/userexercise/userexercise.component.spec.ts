import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexerciseComponent } from './userexercise.component';

describe('UserexerciseComponent', () => {
  let component: UserexerciseComponent;
  let fixture: ComponentFixture<UserexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
