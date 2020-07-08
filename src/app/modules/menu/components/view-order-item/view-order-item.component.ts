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
}