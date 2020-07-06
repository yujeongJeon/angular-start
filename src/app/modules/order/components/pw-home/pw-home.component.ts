import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { Router } from '@angular/router';
import { PAYMENT_CODE } from './../../consts';
import { OrderService } from './../../../shared/services/order.service';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { moneyIcon } from '../../../../utils/products';
import { Unsubscribable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
})
export class PwHomeComponent implements AfterViewInit {
  ico = moneyIcon;
  payment: PAYMENT_CODE = PAYMENT_CODE.NOTHING;
  subs:Unsubscribable[]=[];

  @ViewChild('orderBtn', {static: true})
  orderBtn: ElementRef<HTMLButtonElement>;

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

  constructor(
    private orderService: OrderService,
    private storageService: LocalStorageService,
    private router: Router
  ) {}

  ngAfterViewInit(){
    const btn = this.orderBtn.nativeElement;

    this.subs.push(
      fromEvent(btn, 'click').pipe(
        tap(_=> this.storageService.append('orders', {
          orderList: this.orderList,
          totalCount: this.orderService.totalCount,
          totalPrice: this.totalPrice,
          payment: this.payment,
          name: 'newjeong',
          extraRequirement: '얼음은 적게 주세요'
        })),
        tap(_ => alert('주문이 정상적으로 완료되었습니다.'))
      ).subscribe(
        _ => {
          this.orderService.removeAll();
          this.router.navigate(['/']);
        }
      )
    )
  }
}
