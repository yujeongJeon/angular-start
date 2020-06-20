import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-view-order-item',
  templateUrl: './view-order-item.component.html',
  styleUrls: ['./view-order-item.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewOrderItemComponent {
  @Input() order?:Order.OrderDetail;

  get price(){
    return this.order.isSale ? this.order.salePrice : this.order.price;
  }

  get count(){
    return this.order.count;
  }
}