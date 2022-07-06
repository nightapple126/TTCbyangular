import { TestBed, inject } from '@angular/core/testing';

import { LoginInterceptorService } from './login-interceptor.service';

describe('LoginInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginInterceptorService]
    });
  });

  it('should be created', inject([LoginInterceptorService], (service: LoginInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
