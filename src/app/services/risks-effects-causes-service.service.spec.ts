import { TestBed } from '@angular/core/testing';

import { RisksEffectsCausesServiceService } from './riskseffectscauses.service';

describe('RisksEffectsCausesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RisksEffectsCausesServiceService = TestBed.get(RisksEffectsCausesServiceService);
    expect(service).toBeTruthy();
  });
});
