import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import {
  Component,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getOrderItemList, getTotalInfo } from '../../../../reducers';
import * as orderActions from '../../../shared/actions/order.actions';

@Component({
  selector: 'app-ct-order-list',
  templateUrl: './ct-order-list.component.html',
  styleUrls: ['./ct-order-list.component.scss'],
})
export class CtOrderListComponent implements OnInit, OnDestroy {
  orders$ = this.store$.select(getOrderItemList);
  totalInfo$ = this.store$.select(getTotalInfo);

  hasToTop = false;

  scroll$ = (e) => {
    e.target.scrollTop > 50
    ? this.hasToTop = true
    : this.hasToTop = false
    this.cdr.markForCheck();
  }

  ngOnInit(){
    window.addEventListener('scroll', this.scroll$, true);
  }

  ngOnDestroy(){
    window.removeEventListener('scroll', this.scroll$, true);
  }
  
  goToCart(){
    this.router.navigate(['cart']);
  }

  removeItem(productId:string){
    this.store$.dispatch(orderActions.removeCoffee({productId}));
    this.cdr.markForCheck();
  }

  constructor(
    private cdr:ChangeDetectorRef, 
    private router:Router,
    private store$:Store<State>
  ){}
}
