import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ProductSharedService } from '../service/product-shared-service';
import { StoreCartService } from '../service/store-cart.service';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: Product;
  
  @Output()
  onAddToCart = new EventEmitter<Product>();

  constructor(private router: Router, private productSharedService: ProductSharedService) { }

  ngOnInit() {
  }

  onProductTileSelect(product: Product) {
    console.log('Showing selected product detail ' + product.description);
    this.productSharedService.setSelectedproduct(product);
  }

  onAddProduct(product: Product) {
    this.onAddToCart.emit(product);
  }
}
