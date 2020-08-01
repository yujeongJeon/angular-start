import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import * as orderActions from '../../../shared/actions/order.actions';
import * as menuActions from '../../../menu/actions/menu.actions';

@Component({
  selector: 'app-pw-detail',
  templateUrl: './pw-detail.component.html',
  styleUrls: ['./pw-detail.component.scss'],
})
export class PwDetailComponent implements OnInit {
  order$: Order.History;
  constructor(
    private activatedRoute: ActivatedRoute,
    private localService: LocalStorageService,
    private store$: Store<State>
  ) {}

  reorder () {
    const orderItems = this.order$.orderList.map(({menu: {productId}, count}) => ({productId, count}));
    this.store$.dispatch(menuActions.loadMenu());
    this.store$.dispatch(orderActions.addMultipleCoffees({orderItems}));
  }

  ngOnInit() {
    let orderIdx = this.activatedRoute.snapshot.paramMap.get('orderId');
    const orders: Order.History[] = this.localService.get('orders');
    this.order$ = orders[orderIdx];
  }
}
