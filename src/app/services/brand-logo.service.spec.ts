import { TestBed } from '@angular/core/testing';

import { BrandLogoService } from './brand-logo.service';

describe('brand-logo', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandLogoService = TestBed.get(BrandLogoService);
    expect(service).toBeTruthy();
  });
});
