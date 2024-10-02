import { Component, Input, Output } from '@angular/core';
import { countriesServices } from '../../services/services.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'pages-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

    @Input() public countries: Country[] = [];
    @Output() public placeholder ='Search by Capital';
    @Output() public expression = 'By Capital';


  constructor(private countriesServices: countriesServices){}

  public searchByCapital(value:string):void{

    this.countriesServices.searchByCapital( value )
      .subscribe( countries =>{
          this.countries = countries;
      });

  }
}
