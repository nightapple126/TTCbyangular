import { TestBed, inject } from '@angular/core/testing';

import { StoreCartService } from './store-cart.service';

describe('StoreCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreCartService]
    });
  });

  it('should be created', inject([StoreCartService], (service: StoreCartService) => {
    expect(service).toBeTruthy();
  }));
});
