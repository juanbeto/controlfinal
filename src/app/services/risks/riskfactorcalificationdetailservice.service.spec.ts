import { TestBed } from '@angular/core/testing';

import { RiskfactorcalificationdetailserviceService } from './riskfactorcalificationdetailservice.service';

describe('RiskfactorcalificationdetailserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiskfactorcalificationdetailserviceService = TestBed.get(RiskfactorcalificationdetailserviceService);
    expect(service).toBeTruthy();
  });
});
