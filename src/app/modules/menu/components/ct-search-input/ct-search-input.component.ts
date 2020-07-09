import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import { of, fromEvent, from } from 'rxjs';
import { debounceTime, switchMap, map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-ct-search',
  templateUrl: './ct-search-input.component.html',
  styleUrls: ['./ct-search-input.component.scss'],
})
export class CtSearchComponent implements AfterViewInit {
  @Input() data: Product.Coffee[];
  @ViewChild('input', { static: true })
  input: ElementRef<HTMLInputElement>;

  doSearch(val) {
    return of(this.data).pipe(
      map((data) =>
        data
          .map((coffee: Product.Coffee) => coffee.title)
          .filter((title) => !!title.includes(val))
      )
    );
  }

  ngAfterViewInit() {
    const input = this.input.nativeElement;

    fromEvent(input, 'keydown')
      .pipe(
        debounceTime(300),
        map((e) => (<HTMLInputElement>e.target).value),
        switchMap((value) => this.doSearch(value))
      )
      .subscribe(console.log);
  }
}
