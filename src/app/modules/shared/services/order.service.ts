import { Injectable } from '@angular/core';
import { add, map } from '../../../utils/util';

@Injectable()
export class OrderService {
  // 나중에 reducer로 분리할 State
  orderByArray: Array<string> = [];
  orderById: { [key: string]: Order.OrderDetail } = {};

  getUnitPrice(coffee: Product.Coffee, count) {
    const { isSale, salePrice, price } = coffee;
    const flatPrice = isSale ? salePrice : price;

    return flatPrice * count;
  }

  addCoffee(coffee: Product.Coffee) {
    const { productId } = coffee;

    this.orderByArray.push(coffee.productId);

    const targetOrder = this.orderById[productId];

    const nextCount = targetOrder ? targetOrder.count + 1 : 1;

    const nextUnitPrice = this.getUnitPrice(coffee, nextCount);

    this.orderById[coffee.productId] = {
      ...coffee,
      count: nextCount,
      unitPrice: nextUnitPrice,
    };
  }

  deleteCoffee(coffee: Product.Coffee) {
    const { productId } = coffee;

    const idx = this.orderByArray.findIndex((id) => id === productId);

    idx > -1 && this.orderByArray.splice(idx, 1);

    const nextCount = this.orderById[productId].count - 1;

    if (nextCount <= 0) {
      delete this.orderById[productId];
      return;
    }

    (this.orderById[productId].unitPrice = this.getUnitPrice(
      coffee,
      nextCount
    )),
      (this.orderById[productId].count = nextCount);
  }

  removeCoffee(productId: string) {
    delete this.orderById[productId];
    this.orderByArray = this.orderByArray.filter((id) => id !== productId);
  }

  get totalCount(): number {
    return this.orderByArray.length;
  }

  get totalPrice(): number {
    const coffees = Object.values(this.orderById);

    const calcPrices = coffees.map((coffee) => coffee.unitPrice);

    return add(calcPrices);
  }

  getCoffee(id) {
    return this.orderById[id];
  }

  removeAll() {
    this.orderByArray = [];
    this.orderById = {};
  }

  get orderList(): Order.OrderDetail[] {
    const orderSet = new Set(this.orderByArray);
    return map(orderSet, (id) => this.getCoffee(id));
  }
}
