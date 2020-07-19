import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { State, getOrderItemList, getTotalInfo } from '../../../../reducers';
import * as orderActions from '../../../shared/actions/order.actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PwHomeComponent {
  orders$ = this.store$.select(getOrderItemList);
  totalInfo$ = this.store$.select(getTotalInfo);

  removeCoffee (productId) {
    this.store$.dispatch(orderActions.removeCoffee({productId}))
  }

  gotoOrder(){
    this.router.navigate(['order']);
  }
  
  constructor(
    private router:Router,
    private store$:Store<State>
  ) {}
}
