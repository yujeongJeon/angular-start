import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ct-order-list',
  templateUrl: './ct-order-list.component.html',
  styleUrls: ['./ct-order-list.component.scss']
})
export class CtOrderListComponent implements OnInit, OnDestroy {
  @Input() orders;
  hasToTop = false;

  get totalPrice():number {
    return this.orders.reduce((total: number, order: Order.OrderDetail): number => {
      const thisPrice = order.isSale ? order.salePrice : order.price;
      total += thisPrice * order.count;
      return total;
    }, 0);
  }

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

  constructor(private cdr:ChangeDetectorRef){}
}
