import { getDateTime } from './../../../utils/util';
import { getTotalInfo } from './../../../reducers/index';
import { LocalStorageService } from '../../persist-state/services/local-storage.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getOrderItemList } from '../../../reducers';
import { tap, takeWhile } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class OrderService {
  _orders:Order.OrderItem[];
  _totalInfo:{count:number;price:number;}

  status$: BehaviorSubject<{
    status: string;
  }> = new BehaviorSubject({ status: '9000' });

  saveIntoLocalStorage({ name, requirement, payment }) {
    const { timeString, month } = getDateTime();

    of(this._orders)
      .pipe(
        takeWhile((list) => list.length > 0),
        tap((_) => {
          this.localService.append('orders', {
            orderList: this._orders,
            totalCount: this._totalInfo.count,
            totalPrice: this._totalInfo.price,
            payment: payment,
            name: name,
            extraRequirement: requirement,
            orderAt: timeString,
            orderMonth: month
          });
        }),
      )
      .subscribe(() => {
        this.status$.next({ status: '1000' });
      });

    return this.status$.asObservable();
  }

  constructor(
    private localService: LocalStorageService,
    private store$: Store<State>
  ) {
    this.store$.select(getOrderItemList).subscribe((orders) => {
      this._orders = orders.map(order => ({
        menu: order.menu,
        unitPrice: order.unitPrice,
        count: order.count
      }));
    });

    this.store$.select(getTotalInfo).subscribe((totalInfo) => {
      this._totalInfo = totalInfo;
    });
  }
}
