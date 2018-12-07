import { TestBed } from '@angular/core/testing';

import { MAWSService } from './maws.service';

describe('MAWSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MAWSService = TestBed.get(MAWSService);
    expect(service).toBeTruthy();
  });
});
