import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageAppComponent } from './garage-app.component';

describe('GarageAppComponent', () => {
  let component: GarageAppComponent;
  let fixture: ComponentFixture<GarageAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
