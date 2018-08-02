import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesStatisticsRoutingModule } from './statistics-routing.module';

import { TablesStatisticsComponent } from './statistics.component';

@NgModule({
  imports: [
    CommonModule,
    TablesStatisticsRoutingModule
  ],
  declarations: [
    TablesStatisticsComponent
  ]
})
export class TablesStatisticsModule {}
