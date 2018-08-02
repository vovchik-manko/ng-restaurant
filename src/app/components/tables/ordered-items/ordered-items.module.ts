import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material';


import { OrderedItemsComponent } from './ordered-items.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatTableModule
  ],
  declarations: [
    OrderedItemsComponent
  ],
  exports: [
    OrderedItemsComponent
  ]
})
export class OrderedItemsModule {}
