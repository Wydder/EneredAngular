import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoelementComponent } from './todoelement.component';

describe('TodoelementComponent', () => {
  let component: TodoelementComponent;
  let fixture: ComponentFixture<TodoelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
