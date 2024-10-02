import { Component, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country';
import { countriesServices } from '../../services/services.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',

})
export class ByRegionPageComponent {
  @Input() public countries: Country[] = [];
  @Output() public placeholder:string = 'Search by Region';
  @Output() public expression:string = "By Region";


  constructor(
    private countriesServices : countriesServices
  ){}
  public searchByRegion(term:string):void{

    this.countriesServices.searchByRegion(term)
    .subscribe( contries => {this.countries = contries});
  }

}

