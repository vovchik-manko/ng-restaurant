import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesStatisticsComponent } from './statistics.component';

export const routes: Routes = [
  {
    path: '',
    component: TablesStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesStatisticsRoutingModule {}
