import { Router } from '@angular/router';
import { OrderService } from './../services/order.service';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as orderActions from '../actions/order.actions';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()
export class OrderEffects {
  createNewOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderActions.createNewOrder),
      switchMap(({ name, requirement, payment }) =>
        this.orderService
          .saveIntoLocalStorage({ name, requirement, payment })
          .pipe(
            map(({ status }) => {
              switch (status) {
                case '1000':
                  return orderActions.createNewOrderComplete();
                default:
                  return orderActions.createNewOrderFailure({
                    message: '서버 오류로 주문에 실패하였습니다.',
                  });
              }
            })
          )
      )
    )
  );

  afterCreateNewOrderFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          orderActions.createNewOrderComplete,
          orderActions.createNewOrderFailure
        ),
        tap((e) => {
          e.type === orderActions.createNewOrderFailure.type
            ? this.router.navigate(['/order/failure'])
            : this.router.navigate(['/order/complete']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private router: Router
  ) {}
}
