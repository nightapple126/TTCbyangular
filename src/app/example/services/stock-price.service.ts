import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {
  stockPriceObserver: any;
  count: number = 0;
  constructor() {
    this.stockPriceObserver = Observable.create(observer => {
      setInterval(() => {
        console.log('Cold Observable Pushing new data : ' + this.count++);
        observer.next(this.getNowStockPrice());
      }, 1000, { observer: observer });

      // Any cleanup logic might go here
      return () => console.log('disposed')
    });
  }

  getNowStockPrice() {
    return {
      count: this.count,
      name: 'SBI',
      price: ((1 + Math.random()) * 300),
      change: Math.random(),
      volume: Math.random() * 1000
    }
  }
}
