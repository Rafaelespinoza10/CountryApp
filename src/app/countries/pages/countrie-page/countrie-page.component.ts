import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { countriesServices } from '../../services/services.service';
import { Country } from '../../interfaces/country';
import { latLng, Layer, MapOptions, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-countrie-page',
  templateUrl: './countrie-page.component.html',
  styleUrls: ['./countrie.page.component.css'],  // Corregido styleUrls
})
export class CountriePageComponent implements OnInit {

  public options: MapOptions |undefined;
  public layer :any;
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesServices: countriesServices,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit triggered');

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesServices.searchByCountryId(id)),
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        console.log('se vuele a renderizar')
        this.country = country;
        const [lat, lng] = this.country.latlng;
          console.log(lat);
          console.log(lng);

          this.options = {
            layers:[
              tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 10, attribution: '...' })
            ],
            zoom: 2.5,
            center:latLng(lat, lng),

        }
          this.layer = marker([lat, lng]);

        return;
      });
  }


  // Funciones auxiliares para mostrar datos en la UI
  public getLenguagesList(languages: any): string {
    return Object.values(languages).join(', ');
  }

  public getLatLngCountry(lat: any): string {
    return Object.values(lat).join(', ');
  }

  public getBorderCountries(border: any): string {
    return Object.values(border).join(', ');
  }

  public getCurrencies(currencies: any): string {
    return Object.keys(currencies).join(', ');
  }
}
