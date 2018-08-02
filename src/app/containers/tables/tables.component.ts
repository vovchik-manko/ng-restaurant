import { Component } from '@angular/core';

type NavLink = {
  label: string;
  path: string;
};

@Component({
  templateUrl: './tables.html'
})
export class TablesComponent {
  title = 'Book a table!';
  navLinks: NavLink[] = [
    {
      label: 'Overview',
      path: 'overview'
    },
    {
      label: 'Statistics',
      path: 'statistics'
    }
  ];
}
