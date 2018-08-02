import { OrderDto } from './../orders/order.dto';

export class TableDto {
  id: number;
  name: string;
  size: number;
  orders: OrderDto[] = [];
  status: string;

  constructor(d?: TableDto) {
    if(!d) {
      return;
    }

    Object.assign(this, d);
    this.orders = d.orders.map(o => new OrderDto(o));
  }
}
