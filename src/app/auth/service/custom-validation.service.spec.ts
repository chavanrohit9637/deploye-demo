import { TestBed } from '@angular/core/testing';

import { CustomvalidationService } from './custom-validation.service';

describe('CustomValidationService', () => {
  let service: CustomvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
