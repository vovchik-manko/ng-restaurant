import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TablesComponent } from './tables.component';
import { TablesOverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    component: TablesComponent,

    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: TablesOverviewComponent
      },
      {
        path: 'statistics',
        loadChildren: './statistics/statistics.module#TablesStatisticsModule'
      },
      {
        path: ':id',
        loadChildren: './details/details.module#TablesDetailsModule',
        data: {
          preload: true
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
