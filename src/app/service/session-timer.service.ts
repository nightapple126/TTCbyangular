import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class SessionTimerService {
  public intervalObserver: any;
  constructor() { 
    this.intervalObserver = Observable.create(observer => {
      setInterval(() => {
        observer.next(new Date());
      }, 1000, {  observer : observer });
    
      // Any cleanup logic might go here
      return () => console.log('disposed')
    });
  }


}
