import { TableDto } from '@rest/tables/table.dto';
import { TableStatuses } from '@enums/table-status.enum';
import { ProductDto } from '@rest/products/product.dto';

export const fakeTables: TableDto[] = [
  {
    id: 1,
    size: 2,
    name: 'for those who like comfort',
    orders: [],
    status: TableStatuses.AVAILABLE
  },
  {
    id: 2,
    size: 4,
    name: 'for non-smokers',
    orders: [],
    status: TableStatuses.AVAILABLE
  },
  {
    id: 3,
    size: 2,
    name: 'for loving silence',
    orders: [],
    status: TableStatuses.AVAILABLE
  },
  {
    id: 4,
    size: 3,
    name: 'for family',
    orders: [],
    status: TableStatuses.AVAILABLE
  },
  {
    id: 5,
    size: 5,
    name: 'for large groups',
    orders: [],
    status: TableStatuses.AVAILABLE
  }
];

export const fakeProducts: ProductDto[] = [
  {
    code: 'pizza',
    name: 'Pizza',
    price: 15
  },
  {
    code: 'milk',
    name: 'Milk',
    price: 4
  },
  {
    code: 'juice',
    name: 'Juice',
    price: 7
  },
  {
    code: 'soup',
    name: 'Soup',
    price: 3
  },
  {
    code: 'ice_cream',
    name: 'Ice Cream',
    price: 8
  },
];
