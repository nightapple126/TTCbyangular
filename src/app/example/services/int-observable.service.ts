import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class IntObservableService {
  public intObserver: any;
  constructor() {
    this.intObserver = Observable.create(observer => {
      setInterval(() => {
        observer.next(Math.round(Math.random() * 100));
      }, 1000, { observer: observer });

      // Any cleanup logic might go here
      return () => console.log('disposed')
    });
  }
}
