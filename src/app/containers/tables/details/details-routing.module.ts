import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesDetailsComponent } from './details.component';

export const routes: Routes = [
  {
    path: '',
    component: TablesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesDetailsRoutingModule {}
