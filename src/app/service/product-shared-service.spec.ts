import { TestBed, inject } from '@angular/core/testing';

import { ProductSharedService } from './product-shared-service';

describe('ProductSharedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSharedService]
    });
  });

  it('should be created', inject([ProductSharedService], (service: ProductSharedService) => {
    expect(service).toBeTruthy();
  }));
});
