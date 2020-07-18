import { MenuService } from './../../services/menu.service';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import * as menuActions from '../../actions/menu.actions';
import { State } from '../../../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ct-search',
  templateUrl: './ct-search-input.component.html',
  styleUrls: ['./ct-search-input.component.scss'],
  providers: [MenuService],
})
export class CtSearchComponent implements OnInit {
  keyword = new FormControl()
  loader: boolean = false;

  ngOnInit() {
    this.onChangeKeyword();
  }

  onChangeKeyword () {
    this.keyword.valueChanges.pipe(
      distinctUntilChanged(),
      tap(() => (this.loader = true)),
      debounceTime(300),
    ).subscribe((keyword) => {
      this.store$.dispatch(menuActions.searchMenu({keyword}));
      this.loader = false;
    });
  }

  constructor(private store$:Store<State>) {}
}
