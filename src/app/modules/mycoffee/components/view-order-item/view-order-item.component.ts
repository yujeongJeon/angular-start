import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-view-order-item',
  templateUrl: './view-order-item.component.html',
  styleUrls: ['./view-order-item.component.scss']
})
export class ViewOrderItemComponent {
  @Input() orderList:Order.OrderDetail[];

  get content ():string {
    let str = '';
    this.orderList.map((elem, idx) => {
      if (idx > 1) {
        str += ` 외 ${this.orderList.length - idx}건`;
        return str;
      }
      if (str.length > 0) str += ', ';
      str+=`${elem.title} ${elem.count}잔`
    })

    return str;
  }
}