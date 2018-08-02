import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { fakeTables } from './fake-data';
import { StorageService } from './../../containers/shared/storage.service';
import { TableDto } from './table.dto';

@Injectable({
  providedIn: 'root'
})
export class FakeTablesDataProvider {
  private tables: TableDto[];

  constructor(private service: StorageService) {}

  get() {
    this.tables = this.tables || this.service.updateTables(fakeTables);
    return of(this.tables);
  }

  getById(id: number) {
    const tables = this.tables || this.service.updateTables(fakeTables);
    const table = tables.find(t => t.id === id);

    return of(table);
  }
}
