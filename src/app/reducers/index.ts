import { ActionReducerMap } from "@ngrx/store";
import * as menuReducer from '../modules/menu/reducers/menu.reducer';

export interface State {
  menu: menuReducer.State
}

export const reducers: ActionReducerMap<State> = {
  menu: menuReducer.reducer,
};