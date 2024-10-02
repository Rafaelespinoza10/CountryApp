import { Component, Input } from '@angular/core';
import { Country } from '../../../countries/interfaces/country';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
})
export class TableComponent {

  @Input() countries:Country[] = [];

    
}
