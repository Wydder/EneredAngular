import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedinta3Component } from './sedinta3.component';

describe('Sedinta3Component', () => {
  let component: Sedinta3Component;
  let fixture: ComponentFixture<Sedinta3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sedinta3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sedinta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
