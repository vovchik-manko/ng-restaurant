import { ClientDto } from './../tables/client.dto';
import { ProductDto } from './../products/product.dto';

export class OrderDto {
  id: number;
  tableId: number;
  client = new ClientDto();
  products: ProductDto[] = [];
  status: string;

  constructor(d?: OrderDto) {
    if(!d) {
      return;
    }

    this.id = d.id;
    this.tableId = d.tableId;
    this.products = d.products.map(p => new ProductDto(p));
    this.client = new ClientDto(d.client);
    this.status = d.status;
  }
}
