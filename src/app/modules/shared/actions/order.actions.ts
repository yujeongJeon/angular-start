import {createAction, props} from '@ngrx/store';

export const addCoffee = createAction('[ORDER] Add Coffee into Cart', props<{productId:string}>());
export const deleteCoffee = createAction('[ORDER] Delete Coffee in Cart', props<{productId:string}>());
export const removeCoffee = createAction('[ORDER] Remove Coffee in Cart', props<{productId:string}>());

export const createNewOrder = createAction('[ORDER] Create New Order', props<{ name: string, requirement: string, payment:number}>());
export const createNewOrderComplete = createAction('[ORDER] Create New Order Complete');
export const createNewOrderFailure = createAction('[ORDER] Create New Order Failure', props<{message: string}>());