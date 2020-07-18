import { createReducer, on, createFeatureSelector } from '@ngrx/store';
import * as menuActions from '../actions/menu.actions';
import { products } from '../../../utils/products';

// State interface 정의
export interface State {
  coffees: Product.Coffee[];
}

// State 초기값 정의
const initialState: State = {
  coffees: [],
};

// reducer 구현 (initialState, ...ons)
const menuReducer = createReducer(
  initialState,
  on(menuActions.loadMenu, (state : State) => ({
    coffees: products,
  })),
  on(menuActions.searchMenuComplete, (state : State, {res}) => ({
      coffees: res,
    })
  )
);

export function reducer(state: State, action: any): State {
  return menuReducer(state, action);
}

// featureSelectorkey
export const selectMenu = createFeatureSelector<State>('menu');
