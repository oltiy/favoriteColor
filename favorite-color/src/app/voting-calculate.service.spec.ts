import { TestBed } from '@angular/core/testing';

import { VotingCalculateService } from './voting-calculate.service';

describe('VotingCalculateService', () => {
  let service: VotingCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
