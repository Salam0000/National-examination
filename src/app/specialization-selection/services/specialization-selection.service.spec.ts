import { TestBed } from '@angular/core/testing';

import { SpecializationSelectionService } from './specialization-selection.service';

describe('SpecializationSelectionService', () => {
  let service: SpecializationSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecializationSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
