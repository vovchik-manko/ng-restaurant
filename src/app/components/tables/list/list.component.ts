import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TableDto } from '@rest/tables/table.dto';

@Component({
  selector: 'tables-list',
  templateUrl: 'list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablesListComponent {
  @Input() tables: TableDto[] = [];
}
