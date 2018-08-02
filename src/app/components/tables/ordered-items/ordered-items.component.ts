import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProductDto } from '@rest/products/product.dto';

@Component({
  selector: 'ordered-items',
  templateUrl: 'ordered-items.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderedItemsComponent {
  @Input() items: ProductDto[] = [];

  columns = [
    'name',
    'price',
    'amount',
    'total'
  ];

  calculateTotal(items: ProductDto[] = []) {
    const total = items.reduce((acc: number, curr: ProductDto) => (acc + curr.price * curr.amount), 0);
    return total;
  }
}
