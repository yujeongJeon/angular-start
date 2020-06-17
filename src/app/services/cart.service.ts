import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  state = {
    data: {},
    count: 0,
    totalPrice: 0
  }

  addToCart (product) {
    !!this.state.data[product.id]
    ? (this.state.data[product.id].number++,
      this.state.data[product.id].total += product.price)
    : this.state.data[product.id] = {
      ...product,
      number: 1,
      total: product.price
    };

    this.state.count++;
    this.state.totalPrice+=product.price;
  }

  removeInCart (id) {
    const { number, total } = this.state.data[id];
    this.state.count -= number;
    this.state.totalPrice -= total;

    delete this.state.data[id];
    return this.getItems();
  }

  increase (id) {
    const { price } = this.state.data[id];

    this.state.data[id].number++;
    this.state.data[id].total += price;
    this.state.count++;
    this.state.totalPrice += price;
    return this.getItems();
  }

  decrease (id) {
    const { price } = this.state.data[id];

    this.state.count--;
    this.state.totalPrice -= price;

    this.state.data[id].number--;

    if (this.state.data[id].number === 0) {
      delete this.state.data[id];
    } else {
      this.state.data[id].total -= price;
    }
    return this.getItems();
  }

  getItems () {
    return {
      data: Object.keys(this.state.data).map(key => this.state.data[key]),
      count: this.state.count,
      totalPrice: this.state.totalPrice
    }
  }
}