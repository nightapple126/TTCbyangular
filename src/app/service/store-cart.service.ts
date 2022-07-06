import { Injectable, Output, EventEmitter } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../model/product';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StoreCartService {
  private CART_STORAGE_KEY: string = 'CART';
  productCount: number = 0;

  @Output() cartUpdate: EventEmitter<Product[]> = new EventEmitter();

  constructor(private storageService: StorageService) {
    this.notifyCartUpdate();
  }

  public addToCart(product: Product) {
    console.log('Adding product to storage');
    let cartItems = this.storageService.get(this.CART_STORAGE_KEY);
    if (cartItems) {
      if (_.findIndex(cartItems, { id: product.id }) < 0) {
        cartItems.push(product);
      }
    } else {
      cartItems = [product];
    }

    this.storageService.set(this.CART_STORAGE_KEY, cartItems);
    this.notifyCartUpdate();
  }

  public deleteFromCart(product: Product) {
    let cartItems = this.storageService.get(this.CART_STORAGE_KEY);
    if (cartItems) {
      cartItems.push(product);
    }
    this.notifyCartUpdate();
  }

  public getCartItems() {
    let cartItems = this.storageService.get(this.CART_STORAGE_KEY);
    if (cartItems) {
      return cartItems;
    } else {
      return [];
    }
  }

  public notifyCartUpdate() {
    console.log('Notify cart update event');
    let cartItems = this.getCartItems();
    this.productCount = cartItems.length;
    this.cartUpdate.emit(cartItems);
  }
}
