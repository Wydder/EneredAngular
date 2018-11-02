import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedinta2Component } from './sedinta2.component';

describe('Sedinta2Component', () => {
  let component: Sedinta2Component;
  let fixture: ComponentFixture<Sedinta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sedinta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sedinta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
