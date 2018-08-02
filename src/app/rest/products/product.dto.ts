export class ProductDto {
  code: string;
  name: string;
  price: number;
  amount?: number;

  constructor(d?: ProductDto) {
    if(d) {
      Object.assign(this, d);
    }
  }
}
