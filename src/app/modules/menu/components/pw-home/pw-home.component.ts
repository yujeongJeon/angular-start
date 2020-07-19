import { State } from './../../../../reducers';
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { createSelector, Store } from '@ngrx/store';
import * as menuReducer from '../../reducers/menu.reducer';
import * as menuActions from '../../actions/menu.actions';

const menuSelector = {
  coffees: createSelector(menuReducer.selectMenu, state => state.coffees),
};

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PwHomeComponent implements OnInit {
  products$ = this.store$.select(menuSelector.coffees);

  ngOnInit () {
    this.store$.dispatch(menuActions.loadMenu());
  }

  constructor(private store$:Store<State>) {}
}