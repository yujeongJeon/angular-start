import { Router } from '@angular/router';
import { PAYMENT_CODE } from './../../consts';
import {
  Component,
  OnInit,
} from '@angular/core';
import { moneyIcon } from '../../../../utils/products';
import { Subject } from 'rxjs';
import {
  tap,
  take,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State, getOrderItemList, getTotalInfo } from '../../../../reducers';
import * as orderActions from '../../../shared/actions/order.actions';

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
})
export class PwHomeComponent implements OnInit {
  ico = moneyIcon;
  payment: PAYMENT_CODE = PAYMENT_CODE.NOTHING;
  loading$: boolean = false;

  orders$ = this.store$.select(getOrderItemList);
  totalInfo$ = this.store$.select(getTotalInfo);

  subject: Subject<{name:string;requirement:string;payment:PAYMENT_CODE}> = new Subject();

  createNewOrder() {
    this.subject.next({
      name: 'newjeong',
      requirement: '얼음 적게, 빨대 주지마세요. 컵홀더 꼭 해주세요',
      payment: this.payment
    })
  }

  ngOnInit() {
    this.subject.pipe(
      take(1),
      tap(() => this.setLoading(true)),
    ).subscribe(({name, requirement, payment}) => ({
      next: this.store$.dispatch(orderActions.createNewOrder({
        name, requirement, payment
      }))
    }))
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
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
    private store$: Store<State>,
    private router: Router
  ) {}

  setLoading(status) {
    this.loading$ = status;
  }
}
