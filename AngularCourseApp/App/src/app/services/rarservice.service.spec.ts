import { TestBed } from '@angular/core/testing';

import { RarserviceService } from './rarservice.service';

describe('RarserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RarserviceService = TestBed.get(RarserviceService);
    expect(service).toBeTruthy();
  });
});
