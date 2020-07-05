import { Router } from '@angular/router';
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

  gotoOrder(){
    this.router.navigate(['order']);
  }
  
  constructor(private orderService:OrderService, private router:Router) {}
}