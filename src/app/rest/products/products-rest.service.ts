import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProductDto } from './product.dto';
import { FakeProductsDataProvider } from './fake-products-data.provider';

@Injectable()
export class ProductsRestService {
  constructor(private provider: FakeProductsDataProvider) {}

  get() {
    return this.provider.get()
      .pipe(
        map((d: ProductDto[]) => d.map(p => new ProductDto(p))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error('Unfortunately something bad happened...');
    return of(err);
  }
}
