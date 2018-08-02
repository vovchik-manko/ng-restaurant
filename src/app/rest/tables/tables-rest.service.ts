import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { TableDto } from './table.dto';

import { FakeTablesDataProvider } from './fake-tables-data.provider';

@Injectable()
export class TablesRestService {
  constructor(private provider: FakeTablesDataProvider) {}

  get() {
    return this.provider.get()
      .pipe(
        map((d: TableDto[]) => d.map(t => new TableDto(t))),
        catchError(this.handleError)
      );
  }

  getById(id: number) {
    return this.provider.getById(id)
      .pipe(
        map((d: TableDto) => new TableDto(d)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error('Unfortunately something bad happened...');
    return of(err);
  }
}
