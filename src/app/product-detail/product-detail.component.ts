import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductSharedService } from '../service/product-shared-service';
import * as _ from 'lodash';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  objectKeys;
  constructor(private productSharedService: ProductSharedService) { }

  ngOnInit() {
    this.objectKeys = Object.keys;
    console.log('In product detail init');
    console.log(this.productSharedService.getSelectedProduct());
    this.product = this.productSharedService.getSelectedProduct();
    console.log(this.product);
  }

}
