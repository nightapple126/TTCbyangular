import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService {
  public logInTime:Date;
  constructor() {
    this.logInTime = new Date();
   }
}
