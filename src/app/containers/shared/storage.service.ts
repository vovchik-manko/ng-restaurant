import { Injectable } from '@angular/core';

import { OrderStatuses } from '@enums/order-status.enum';
import { ProductDto } from '@rest/products/product.dto';
import { OrderDto } from '@rest/orders/order.dto';
import { TableDto } from '@rest/tables/table.dto';

type StoreData = {
  tables?: TableDto[];
  orders?: OrderDto[];
  products?: ProductDto[];
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private data: StoreData = {
    tables: [],
    orders: [],
    products: []
  };

  get() {
    return this.data;
  }

  updateOrder(order: OrderDto, tableId: number) {
    const updatedOrder = this.editOrder(order, tableId);
    return updatedOrder;
  }

  updateTables(tables: TableDto[]) {
    this.data.tables = [...tables].map(t => new TableDto(t));
    return this.data.tables;
  }

  updateProducts(products: ProductDto[]) {
    this.data.products = [...products].map(p => new ProductDto(p));
    return this.data.products;
  }

  getOrder(tableId: number): OrderDto {
    const selectedTable = this.data.tables.find(t => t.id === tableId);
    const order = selectedTable && selectedTable.orders.length ? selectedTable.orders.find(o => o.status === OrderStatuses.PENDING) : this.addOrder(tableId);

    return order;
  }

  private addOrder(tableId: number) {
    const updatedOrder = this.composeNewOrderData(tableId);

    this.data.tables = this.data.tables.map((t: TableDto) => {
      if(t.id === tableId) {
        t.orders = [...t.orders, updatedOrder];
      }
      return t;
    });
    return updatedOrder;
  }

  private editOrder(order: OrderDto, tableId: number) {
    this.data.tables = this.data.tables.map((t: TableDto) => {
      if(t.id === tableId) {
        t.orders = t.orders.map(o => (o.id === order.id) ? order : o);
      }
      return t;
    });
    return order;
  }

  private composeNewOrderData(tableId: number) {
    const o = new OrderDto();
    o.tableId = tableId;
    o.id = new Date().getTime();
    o.status = OrderStatuses.PENDING;
    return o;
  }
}
