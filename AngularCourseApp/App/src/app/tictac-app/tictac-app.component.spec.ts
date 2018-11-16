import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictacAppComponent } from './tictac-app.component';

describe('TictacAppComponent', () => {
  let component: TictacAppComponent;
  let fixture: ComponentFixture<TictacAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictacAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictacAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
