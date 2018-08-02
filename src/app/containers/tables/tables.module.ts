import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { TablesOverviewModule } from './overview/overview.module';
import { TablesRoutingModule } from './tables-routing.module';

import { TablesComponent } from './tables.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatTabsModule,

    TablesRoutingModule,
    TablesOverviewModule
  ],
  declarations: [
    TablesComponent
  ]
})
export class TablesModule {}
