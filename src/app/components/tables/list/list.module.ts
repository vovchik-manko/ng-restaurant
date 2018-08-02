import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { TablesListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [
    TablesListComponent
  ],
  exports: [
    TablesListComponent
  ]
})
export class TablesListModule {}
