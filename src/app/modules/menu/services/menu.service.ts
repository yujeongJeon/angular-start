import { Injectable } from '@angular/core';
import { products } from '../../../utils/products';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { isEmpty } from '../../../utils/util';

@Injectable()
export class MenuService {
  products$: Product.Coffee[] = products;

  getProducts() {
    return this.products$;
  }

  doSearchResult(value: string): Observable<Product.Coffee[]> {
    return isEmpty(value)
    ? of(this.getProducts())
    : of(this.products$).pipe(
      map((products: Product.Coffee[]) =>
        products.filter((coffee: Product.Coffee) => coffee.title.includes(value))
      )
    );
  }
}
