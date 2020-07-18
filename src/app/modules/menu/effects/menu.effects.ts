import { MenuService } from './../services/menu.service';
import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as menuActions from '../actions/menu.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MenuEffects {
  searchMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(menuActions.searchMenu),
      switchMap(({keyword}) => {
        return this.menuService.doSearchResult(keyword).pipe(
          map((res: Product.Coffee[]) => menuActions.searchMenuComplete({ res })),
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private menuService:MenuService
  ){}
}
