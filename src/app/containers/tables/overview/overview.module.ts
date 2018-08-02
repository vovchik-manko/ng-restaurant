import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesListModule } from '@components/tables/list/list.module';
import { TablesRestService } from '@rest/tables/tables-rest.service';

import { TablesOverviewRoutingModule } from './overview-routing.module';

import { TablesOverviewComponent } from './overview.component';

@NgModule({
  imports: [
    CommonModule,

    TablesOverviewRoutingModule,
    TablesListModule
  ],
  declarations: [
    TablesOverviewComponent
  ],
  providers: [
    TablesRestService
  ]
})
export class TablesOverviewModule {}
