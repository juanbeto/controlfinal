import { TestBed } from '@angular/core/testing';

import { RisksService } from './risks.service';

describe('RisksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RisksService = TestBed.get(RisksService);
    expect(service).toBeTruthy();
  });
});
