import { TestBed, inject } from '@angular/core/testing';

import { StockPriceService } from './stock-price.service';

describe('StockPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockPriceService]
    });
  });

  it('should be created', inject([StockPriceService], (service: StockPriceService) => {
    expect(service).toBeTruthy();
  }));
});
