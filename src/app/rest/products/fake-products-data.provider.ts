import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { fakeProducts } from './fake-data';
import { StorageService } from './../../containers/shared/storage.service';
import { ProductDto } from './product.dto';

@Injectable({
  providedIn: 'root'
})
export class FakeProductsDataProvider {
  private products: ProductDto[];

  constructor(private service: StorageService) {}

  get() {
    this.products = this.products || this.service.updateProducts(fakeProducts);
    return of(this.products);
  }
}
