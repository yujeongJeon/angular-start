import { MenuService } from './../../services/menu.service';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  switchMap,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-ct-search',
  templateUrl: './ct-search-input.component.html',
  styleUrls: ['./ct-search-input.component.scss'],
  providers: [MenuService]
})
export class CtSearchComponent implements AfterViewInit {
  @ViewChild('input', { static: true })
  input: ElementRef<HTMLInputElement>;

  @Output() setSearchResult = new EventEmitter<Product.Coffee[]>();

  ngAfterViewInit() {
    const input = this.input.nativeElement;

    fromEvent(input, 'keydown')
      .pipe(
        debounceTime(300),
        map((e) => (<HTMLInputElement>e.target).value),
        switchMap((value) => 
          this.menuService.doSearchResult(value)
        )
      )
      .subscribe((result) => this.setSearchResult.emit(result));
  }

  constructor(private menuService:MenuService) {}
}
