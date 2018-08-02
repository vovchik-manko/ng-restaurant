import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { OrderDto } from '@rest/orders/order.dto';
import { OrdersRestService } from '@rest/orders/orders-rest.service';
import { ProductDto } from '@rest/products/product.dto';
import { ProductsRestService } from '@rest/products/products-rest.service';

@Component({
  templateUrl: './details.html'
})
export class TablesDetailsComponent implements OnInit, OnDestroy {
  private sub = new Subscription();

  order = new OrderDto();
  productName: string;
  productPrice: number;
  amount = 0;
  menuItems: ProductDto[] = [];
  amounts = Array.from(new Array(20), (x, i) => i + 1);
  tableId: number;

  constructor(
    private snackBar: MatSnackBar,
    private ordersService: OrdersRestService,
    private productsService: ProductsRestService,
    route: ActivatedRoute
  ) {
    const sub = route.paramMap
      .subscribe(params => {
        this.tableId = +params.get('id');
        this.fetch();
      });

    this.sub.add(sub);
  }

  ngOnInit() {
    this.fetchMenu();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  add(isInvalid: boolean) {
    if(isInvalid) {
      return;
    }

    const p = this.getSelectedProduct(this.menuItems, this.productName);
    const o = this.composeOrderData(p);

    this.ordersService.update(o, this.tableId)
      .subscribe(
        d => {
          this.order = d;
          this.resetProductData();
          this.showMessage('Item is successfully added!');
        },
        () => {
          this.showMessage('Something bad happened!');
        }
      );
  }

  reset() {
    this.order = new OrderDto();
    this.resetProductData();
  }

  private resetProductData() {
    this.productName = null;
    this.productPrice = null;
    this.amount = 0;
  }

  private fetch() {
    const sub = this.ordersService.get(this.tableId)
      .subscribe(o => this.initData(o));

    this.sub.add(sub);
  }

  private fetchMenu() {
    this.productsService.get()
      .subscribe(d => this.menuItems = d);
  }

  private initData(o: OrderDto) {
    this.order = new OrderDto(o);
  }

  private setPrice(productName: string) {
    const p = this.getSelectedProduct(this.menuItems, productName);
    this.productPrice = p ? p.price : null;
  }

  private getSelectedProduct(menuItems = [], productCode: string): ProductDto {
    return menuItems.find(i => i.code === productCode);
  }

  private composeOrderData(p: ProductDto): OrderDto {
    const product = {
      ...p,
      amount: this.amount
    };
    this.order.products = [...this.order.products, product];
    return this.order;
  }

  private showMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000
    });
  }
}
