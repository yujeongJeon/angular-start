import {createAction, props} from '@ngrx/store';

// export const addCoffee = createAction('[ORDER] Add Coffee', props<{coffee:Product.Coffee}>());
// export const deleteCoffee = createAction('[ORDER] Delete Coffee', props<{coffee:Product.Coffee}>());

export const addCoffee = createAction('[ORDER] Add Coffee into Cart', props<{productId:string}>());
export const deleteCoffee = createAction('[ORDER] Delete Coffee in Cart', props<{productId:string}>());
export const removeCoffee = createAction('[ORDER] Remove Coffee in Cart', props<{productId:string}>());