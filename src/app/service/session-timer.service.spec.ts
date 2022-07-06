import { TestBed, inject } from '@angular/core/testing';

import { SessionTimerService } from './session-timer.service';

describe('SessionTimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionTimerService]
    });
  });

  it('should be created', inject([SessionTimerService], (service: SessionTimerService) => {
    expect(service).toBeTruthy();
  }));
});
