import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ct-order-list',
  templateUrl: './ct-order-list.component.html',
  styleUrls: ['./ct-order-list.component.scss']
})
export class CtOrderListComponent {
  @Input() orders;

  get totalPrice():number {
    return this.orders.reduce((total: number, order: Order.OrderDetail): number => {
      const thisPrice = order.isSale ? order.salePrice : order.price;
      total += thisPrice * order.count;
      return total;
    }, 0);
  }
}
