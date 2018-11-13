import { TestBed } from '@angular/core/testing';

import { Autoservice1Service } from './autoservice1.service';

describe('Autoservice1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Autoservice1Service = TestBed.get(Autoservice1Service);
    expect(service).toBeTruthy();
  });
});
