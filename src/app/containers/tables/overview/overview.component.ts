import { Component, OnInit } from '@angular/core';

import { TableDto } from '@rest/tables/table.dto';
import { TablesRestService } from '@rest/tables/tables-rest.service';

@Component({
  templateUrl: './overview.html'
})
export class TablesOverviewComponent implements OnInit {
  items: TableDto[] = [];

  constructor(private tablesService: TablesRestService) {}

  ngOnInit() {
    this.fetch();
  }

  private fetch() {
    this.tablesService.get()
      .subscribe(d => this.items = d);
  }
}
