import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { FakeOrdersDataProvider } from './fake-orders-data.provider';
import { OrderDto } from './order.dto';


@Injectable()
export class OrdersRestService {
  constructor(private provider: FakeOrdersDataProvider) {}

  get(tableId: number) {
    return this.provider.get(tableId)
      .pipe(
        map(d => new OrderDto(d)),
        catchError(this.handleError)
      );
  }

  update(order: OrderDto, tableId: number) {
    return this.provider.put(order, tableId)
      .pipe(
        map(d => new OrderDto(d)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error('Unfortunately something bad happened...');
    return of(err);
  }
}
