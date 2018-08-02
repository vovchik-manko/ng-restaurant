import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesOverviewComponent } from './overview.component';

export const routes: Routes = [
  {
    path: '',
    component: TablesOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesOverviewRoutingModule {}
