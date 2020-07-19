import { OrderItem } from './../modules/shared/classes/order-item';
import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as menuReducer from '../modules/menu/reducers/menu.reducer';
import * as orderReducer from '../modules/shared/reducers/order.reducer';
import { add } from '../utils/util';

export interface State {
  menu: menuReducer.State,
  order: orderReducer.State
}

export const reducers: ActionReducerMap<State> = {
  menu: menuReducer.reducer,
  order: orderReducer.reducer
};

export const getCoffeeById = createSelector(
  menuReducer.selectMenu,
  ({coffees}) => {
    const obj: {[key: string]: Product.Coffee} = {};
    coffees.map(coffee => {
      const {productId} = coffee;
      obj[productId] = coffee;
    })

    return obj;
  }
)

export const getOrderItemList = createSelector(
  getCoffeeById,
  orderReducer.selectOrder,
  (coffees,{quantityById}) => {
    const keys = Object.keys(quantityById);

    const result = keys.map(_productId => {
      const orderItem = new OrderItem(coffees[_productId], quantityById[_productId]);
      return orderItem;
    })

    return result;
  }
)

export const getTotalInfo = createSelector(
  getOrderItemList,
  (orderItems) => {
    const unitPrices = orderItems.map(item => item.unitPrice);
    const counts = orderItems.map(item => item.count);

    return {
      count: add(counts),
      price: add(unitPrices)
    }
  }
)

