import { OrderService } from './../../../shared/services/order.service';
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PwHomeComponent {
  get orderList(){
    return this.orderService.orderList;
  }

  get totalCount(){
    return this.orderService.total;
  }

  get totalPrice(){
    return this.orderService.totalPrice;
  }

  removeCoffee (productId) {
    this.orderService.removeCoffee(productId);
  }
  
  constructor(private orderService:OrderService) {}
}