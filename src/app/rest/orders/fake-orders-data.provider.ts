import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { StorageService } from './../../containers/shared/storage.service';
import { OrderDto } from './order.dto';

@Injectable({
  providedIn: 'root'
})
export class FakeOrdersDataProvider {
  private order: OrderDto;

  constructor(private service: StorageService) {}

  get(tableId: number) {
    this.order = this.service.getOrder(tableId);
    return of(this.order);
  }

  put(order: OrderDto, tableId: number) {
    this.order = this.service.updateOrder(order, tableId);
    return of(this.order);
  }
}
