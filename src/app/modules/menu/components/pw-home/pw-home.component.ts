import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { products } from '../../../../utils/products';

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PwHomeComponent implements OnInit {
  _products?:Product.Coffee[]
  _orders:Order.OrderDetail[]=[]

  ngOnInit () {
    this._products = products;
  }

  addOrder(order:Order.OrderDetail){
    this._orders.push(order);
  }

  removeOrder(id) {
    const index = this._orders.findIndex(order => order.productId === id);
    index > -1 && this._orders.splice(index, 1);
  }
}