import { Component } from '@angular/core';
import { products } from '../utils/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductList {
  public products : Array<any> = products;

  constructor (private cartService:CartService) {

  }

  public addToCart (product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} 1잔을 주문 리스트에 추가하였습니다.`)
  }
}