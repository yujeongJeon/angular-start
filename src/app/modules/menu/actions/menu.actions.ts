import {createAction, props} from '@ngrx/store';

export const loadMenu = createAction('[MENU] Load Menus');
export const searchMenu = createAction('[MENU] Search Menu', props<{keyword: string}>());
export const searchMenuComplete = createAction('[MENU] Search Menu Complete', props<{res: Product.Coffee[]}>());