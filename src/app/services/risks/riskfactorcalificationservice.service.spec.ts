import { TestBed } from '@angular/core/testing';

import { RiskfactorcalificationserviceService } from './riskfactorcalificationservice.service';

describe('RiskfactorcalificationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiskfactorcalificationserviceService = TestBed.get(RiskfactorcalificationserviceService);
    expect(service).toBeTruthy();
  });
});
