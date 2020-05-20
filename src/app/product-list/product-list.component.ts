import { Component } from '@angular/core';
import { products } from '../utils/products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductList {
  public products : Array<any> = products;

  public addToCart (_id) : void {
    console.log(_id)
  }
}