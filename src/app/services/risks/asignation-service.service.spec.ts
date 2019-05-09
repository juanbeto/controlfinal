import { TestBed } from '@angular/core/testing';

import { AsignationServiceService } from './asignation-service.service';

describe('AsignationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignationServiceService = TestBed.get(AsignationServiceService);
    expect(service).toBeTruthy();
  });
});
