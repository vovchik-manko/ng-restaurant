import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';

import { OrderedItemsModule } from '@components/tables/ordered-items/ordered-items.module';

import { TablesDetailsRoutingModule } from './details-routing.module';

import { TablesDetailsComponent } from './details.component';
import { OrdersRestService } from '@rest/orders/orders-rest.service';
import { ProductsRestService } from '@rest/products/products-rest.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    FlexLayoutModule,

    TablesDetailsRoutingModule,
    OrderedItemsModule,
  ],
  declarations: [
    TablesDetailsComponent
  ],
  providers: [
    OrdersRestService,
    ProductsRestService
  ]
})
export class TablesDetailsModule {}
