import { createReducer, createFeatureSelector, on, createSelector } from '@ngrx/store';
import * as orderActions from '../actions/order.actions';

export interface State {
  quantityById: {[key: string]: number };
}

const initialState: State = {
  quantityById: {}
}

const orderReducer = createReducer(
  initialState,
  on(orderActions.addCoffee, (state:State, {productId}) => {
    let nextState = {...state.quantityById};

    nextState[productId]
    ? nextState[productId]++
    : nextState[productId]=1
    return {
      quantityById: nextState
    }
  }),
  on(orderActions.deleteCoffee, (state:State, {productId}) => {
    let nextState = {...state.quantityById};
    nextState[productId]--;

    if (nextState[productId] < 1) {
      delete nextState[productId]
    }

    return {
      quantityById: nextState
    }
  }),
  on(orderActions.removeCoffee, (state:State, {productId}) => {
    let nextState = {...state.quantityById};
    delete nextState[productId];
    return {
      quantityById: nextState
    }
  })
)

export const reducer = (state, action) => {
  return orderReducer(state, action);
}

export const selectOrder = createFeatureSelector<State>('order');

export const getCount = createSelector(
  selectOrder,  
  (state, props) => {
    return state.quantityById[props.id] || 0
  }
)

// export const getCount = (id: string) => createSelector(
//   selectOrder,
//   customers => customers[id]
// );