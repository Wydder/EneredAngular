import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedinta1Component } from './sedinta1.component';

describe('Sedinta1Component', () => {
  let component: Sedinta1Component;
  let fixture: ComponentFixture<Sedinta1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sedinta1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sedinta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
