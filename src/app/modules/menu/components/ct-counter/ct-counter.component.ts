import { getCount } from './../../../shared/reducers/order.reducer';
import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';
import { State } from './../../../../reducers';
import * as orderActions from '../../../shared/actions/order.actions';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-ct-counter',
  templateUrl: './ct-counter.component.html',
  styleUrls: ['./ct-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtCounterComponent implements OnInit, OnDestroy {
  @Input() id:string;
  count:number=0;
  
  subs:Unsubscribable[]=[];

  ngOnInit() {
    this.subs.push(
      this.store$.select(getCount, {id: this.id}).subscribe(val => this.count = val)
    )
  }

  ngOnDestroy() {
    this.subs.map((sub) => sub.unsubscribe());
  }

  constructor(
    private store$:Store<State>
  ){
  }

  increase(){
    this.store$.dispatch(orderActions.addCoffee({productId: this.id}));
  }

  decrease(){
    this.store$.dispatch(orderActions.deleteCoffee({productId: this.id}));
  }
}