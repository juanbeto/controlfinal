import { TestBed } from '@angular/core/testing';

import { PlanMejoramientoService } from './plan-mejoramiento.service';

describe('PlanMejoramientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanMejoramientoService = TestBed.get(PlanMejoramientoService);
    expect(service).toBeTruthy();
  });
});
