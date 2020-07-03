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
  
  constructor(private orderService:OrderService) {}
}