import { TestBed } from '@angular/core/testing';

import { Autoservice2Service } from './autoservice2.service';

describe('Autoservice2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Autoservice2Service = TestBed.get(Autoservice2Service);
    expect(service).toBeTruthy();
  });
});
