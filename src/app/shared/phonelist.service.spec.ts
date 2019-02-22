import { TestBed, inject } from '@angular/core/testing';

import { PhonelistService } from './phonelist.service';

describe('PhonelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonelistService]
    });
  });

  it('should be created', inject([PhonelistService], (service: PhonelistService) => {
    expect(service).toBeTruthy();
  }));
});
