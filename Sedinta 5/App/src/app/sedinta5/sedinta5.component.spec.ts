import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedinta5Component } from './sedinta5.component';

describe('Sedinta5Component', () => {
  let component: Sedinta5Component;
  let fixture: ComponentFixture<Sedinta5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sedinta5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sedinta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
