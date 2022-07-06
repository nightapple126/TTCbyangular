import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { ProductSharedService } from '../service/product-shared-service';
import { StoreCartService } from '../service/store-cart.service';
import * as _ from 'lodash';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  productSubscription:any;

  constructor(public productService: ProductService, public productSharedService: ProductSharedService,
    private storeCartService: StoreCartService) {
  }

  ngOnInit() {
    this.productSubscription = this.productService.getAllProducts().subscribe(products => {
      let cartItems = this.storeCartService.getCartItems();
      this.products = products.json();
      _.each(this.products, (product => {
        product.isAdded = _.findIndex(cartItems, { 'id': product.id }) > -1;
      }));
    });
  }

  addProductToCart(product) {
    product.isAdded = true;
    this.storeCartService.addToCart(product);
    console.log('Adding product ' + product.description + ' to the cart.');
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
