import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:Http) {
    console.log('http');
    this.http = http;
  }

  public getAllProducts() {
    console.log('service');
    return this.http.get('./assets/data/products.json');
  }
}