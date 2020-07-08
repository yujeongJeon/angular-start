import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { Router } from '@angular/router';
import { PAYMENT_CODE } from './../../consts';
import { OrderService } from './../../../shared/services/order.service';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { moneyIcon } from '../../../../utils/products';
import { Unsubscribable, fromEvent, of, Subject } from 'rxjs';
import {
  tap,
  delay,
  timeout,
  catchError,
  concatMap,
  take,
  takeWhile,
} from 'rxjs/operators';

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
})
export class PwHomeComponent implements AfterViewInit, OnDestroy {
  ico = moneyIcon;
  payment: PAYMENT_CODE = PAYMENT_CODE.NOTHING;
  subs: Unsubscribable[] = [];
  loading$: boolean = false;

  @ViewChild('orderBtn', { static: true })
  orderBtn: ElementRef<HTMLButtonElement>;

  get orderList() {
    return this.orderService.orderList;
  }

  get totalPrice() {
    return this.orderService.totalPrice;
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
    this.payment = paymentCode
  }

  cancelOrder() {
    this.router.navigate(['/']);
  }

  constructor(
    private orderService: OrderService,
    private storageService: LocalStorageService,
    private router: Router
  ) {}

  setLoading(status) {
    this.loading$ = status;
  }

  saveOrder() {
    const subject = new Subject<{ [key: string]: string }>();

    of(this.orderList)
      .pipe(
        takeWhile((list) => list.length > 0),
        tap((_) => {
          this.storageService.append('orders', {
            orderList: this.orderList,
            totalCount: this.orderService.totalCount,
            totalPrice: this.totalPrice,
            payment: this.payment,
            name: 'newjeong',
            extraRequirement: '얼음은 적게 주세요',
          });
        }),
        delay(1000),
      )
      .subscribe(() => {
        subject.next({ status: '1000' });
      });

    return subject.asObservable();
  }

  ngOnDestroy() {
    this.subs.map((sub) => sub.unsubscribe());
  }

  ngAfterViewInit() {
    const btn = this.orderBtn.nativeElement;

    this.subs.push(
      fromEvent(btn, 'click')
        .pipe(
          take(1),
          tap((_) => this.setLoading(true)),
          concatMap(() =>
            this.saveOrder().pipe(
              timeout(5000),
              catchError((e) => of({ status: '9000' }))
            )
          )
        )
        .subscribe(({ status }) => {
          this.setLoading(false);

          switch (status) {
            case '1000':
              this.orderService.removeAll();
              this.router.navigate(['/order/complete']);
              break;
            case '9000':
              this.router.navigate(['/order/failure']);
              break;
            default:
              break;
          }
        })
    );
  }
}
