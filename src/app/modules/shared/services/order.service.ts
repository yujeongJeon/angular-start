import { Injectable } from "@angular/core";
import {add, map} from '../../../utils/util';

@Injectable()
export class OrderService{
  // 나중에 reducer로 분리할 State
  orderByArray:Array<string> = [];
  orderById: { [key:string]: Order.OrderDetail } = {};

  addCoffee(coffee:Product.Coffee){
    const {productId} = coffee;

    this.orderByArray.push(coffee.productId);
    
    const targetOrder = this.orderById[productId];

    const currentCount = targetOrder
    ? targetOrder.count+1
    : 1
    
    this.orderById[coffee.productId] = {
      ...coffee,
      count: currentCount
    }
  }

  deleteCoffee(coffee:Product.Coffee) {
    const {productId} = coffee;

    const idx = this.orderByArray.findIndex(id => id === productId);

    idx > -1 && this.orderByArray.splice(idx, 1);

    this.orderById[productId].count--;

    if (this.orderById[productId].count <= 0) {
      delete this.orderById[productId];
    } 
  }

  removeCoffee(productId:string) {
    delete this.orderById[productId];
    this.orderByArray = this.orderByArray.filter(id => id !== productId)
  }

  get totalCount () {
    return this.orderByArray.length;
  }

  get totalPrice () {
    const coffees = Object.values(this.orderById);
    
    const calcPrices = coffees.map(coffee => coffee.count * (coffee.isSale ? coffee.salePrice : coffee.price));

    return add(calcPrices, 0);
  }

  getCoffee(id){
    return this.orderById[id];
  }

  removeAll(){
    this.orderByArray = [];
    this.orderById = {};
  }

  get orderList ():Order.OrderDetail[] {
    const orderSet = new Set(this.orderByArray);
    return map(orderSet, id => this.getCoffee(id));
  }
}