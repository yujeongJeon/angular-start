import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-view-order-item',
  templateUrl: './view-order-item.component.html',
  styleUrls: ['./view-order-item.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewOrderItemComponent {
  @Input() order?:Order.OrderDetail;
  @Output() removeItem = new EventEmitter<string>();

  get price(){
    const {isSale, salePrice, price, count}=this.order;
    
    const flatPrice = isSale ? salePrice : price;
    return flatPrice * count;
  }

  get count(){
    return this.order.count;
  }
}