import { TestBed } from '@angular/core/testing';

import { RisksEffectsServiceService } from './riskseffects.service';

describe('RisksEffectsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RisksEffectsServiceService = TestBed.get(RisksEffectsServiceService);
    expect(service).toBeTruthy();
  });
});
