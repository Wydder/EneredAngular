import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassGameAppComponent } from './pass-game-app.component';

describe('PassGameAppComponent', () => {
  let component: PassGameAppComponent;
  let fixture: ComponentFixture<PassGameAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassGameAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassGameAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
