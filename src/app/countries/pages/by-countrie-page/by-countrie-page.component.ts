import { Component, Output, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { countriesServices } from '../../services/services.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
 })
export class ByCountriePageComponent {

  @Input() public countries : Country[] = [];
  @Output() public placeholder:string = 'Search by Countries';
  @Output() public expression: string = "By Countries";


  constructor(
    private countriesService : countriesServices
  ){}

  public searchByCountrie(value:string):void{
      this.countriesService.searchByCountrie(value)
        .subscribe(countries =>{
              this.countries = countries
        });
  }

}
