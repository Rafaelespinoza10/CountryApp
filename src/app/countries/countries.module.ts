import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ByCountriePageComponent } from './pages/by-countrie-page/by-countrie-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountriePageComponent } from './pages/countrie-page/countrie-page.component';
import { CountriesRountingModule } from './countries-routing.module';
import { LeafletModule } from '@bluehalo/ngx-leaflet';




@NgModule({
  declarations: [
    ByCountriePageComponent,
    ByRegionPageComponent,
    ByCapitalPageComponent,
    CountriePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountriesRountingModule,
    LeafletModule,

  ]
})
export class CountriesModule { }
