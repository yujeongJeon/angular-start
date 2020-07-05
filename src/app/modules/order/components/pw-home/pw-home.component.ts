import { Router } from '@angular/router';
import { PAYMENT_CODE } from './../../consts';
import { OrderService } from './../../../shared/services/order.service';
import { Component } from '@angular/core';
import { moneyIcon } from '../../../../utils/products';

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
})
export class PwHomeComponent {
  ico = moneyIcon;

  payment: PAYMENT_CODE = PAYMENT_CODE.NOTHING;

  get orderList() {
    return this.orderService.orderList;
  }

  get totalPrice() {
    return this.orderService.totalPrice;
  }

  getPrice(order: Order.OrderDetail) {
    const flatPrice = order.isSale ? order.salePrice : order.price;
    return flatPrice * order.count;
  }

  getPaymentCode(payment): PAYMENT_CODE {
    switch (payment) {
      case 1:
        return PAYMENT_CODE.CARD;
      case 2:
        return PAYMENT_CODE.PHONE;
      case 3:
        return PAYMENT_CODE.ONSITE;
      default:
        return PAYMENT_CODE.NOTHING;
    }
  }

  setPayment(payment) {
    const paymentCode = this.getPaymentCode(payment);

    this.payment === paymentCode
      ? (this.payment = PAYMENT_CODE.NOTHING)
      : (this.payment = paymentCode);
  }

  cancelOrder() {
    this.router.navigate(['/']);
  }

  constructor(private orderService: OrderService, private router: Router) {}
}
