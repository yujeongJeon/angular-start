import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart', // templateUrl, styleUrls에 있는 name과 같아야 함
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  items;
  count;
  totalPrice;

  constructor (private cartService: CartService) {

  }

  ngOnInit(): void {
    const { data, count, totalPrice } = this.cartService.getItems();
    this.items = data;
    this.count = count;
    this.totalPrice = totalPrice;
  }

  increase (id) {
    const { data, count, totalPrice } = this.cartService.increase(id);
    this.items = data;
    this.count = count;
    this.totalPrice = totalPrice;
  }

  decrease (id) {
    const { data, count, totalPrice } = this.cartService.decrease(id);
    this.items = data;
    this.count = count;
    this.totalPrice = totalPrice;
  }

  removeInCart (id) {
    const { data, count, totalPrice } = this.cartService.removeInCart(id);
    this.items = data;
    this.count = count;
    this.totalPrice = totalPrice;
  }
}