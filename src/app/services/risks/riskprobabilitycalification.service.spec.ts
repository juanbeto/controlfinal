import { TestBed } from '@angular/core/testing';

import { RiskprobabilitycalificationService } from './riskprobabilitycalification.service';

describe('RiskprobabilitycalificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiskprobabilitycalificationService = TestBed.get(RiskprobabilitycalificationService);
    expect(service).toBeTruthy();
  });
});
