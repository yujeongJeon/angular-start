import { OrderService } from './../../../shared/services/order.service';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ct-order-list',
  templateUrl: './ct-order-list.component.html',
  styleUrls: ['./ct-order-list.component.scss'],
})
export class CtOrderListComponent implements OnInit, OnDestroy {
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

  constructor(private cdr:ChangeDetectorRef, private orderService:OrderService){}

  get orders () {
    return this.orderService.orderList;
  }

  get totalPrice(){
    return this.orderService.totalPrice;
  }
}
