import { TestBed, inject } from '@angular/core/testing';

import { IntObservableService } from './int-observable.service';

describe('IntBservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntObservableService]
    });
  });

  it('should be created', inject([IntObservableService], (service: IntObservableService) => {
    expect(service).toBeTruthy();
  }));
});
