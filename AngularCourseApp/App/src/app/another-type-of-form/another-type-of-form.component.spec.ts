import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherTypeOfFormComponent } from './another-type-of-form.component';

describe('AnotherTypeOfFormComponent', () => {
  let component: AnotherTypeOfFormComponent;
  let fixture: ComponentFixture<AnotherTypeOfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherTypeOfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherTypeOfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
