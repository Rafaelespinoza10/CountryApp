import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, catchError, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class countriesServices {


  private apiUrl:string = 'https://restcountries.com/v3.1';


  //inyeccion de independencias
  constructor(private httpClient : HttpClient) {}


  public searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${ term }`;
    return this.httpClient.get<Country[]>(url)
          .pipe(
            catchError(error => {
              console.log(error);
              return of([])
            }) //el of en este caso regresa un observable en un arreglo vacio
          );
    ; //observable
  }

  public searchByCountrie(term: string): Observable<Country[]>{
      const url = `${this.apiUrl}/name/${term}`;

      return this.httpClient.get<Country[]>(url)
        .pipe(
          catchError(error =>{
            console.log(error)
            return of([]);
          })
        )
  }


  public searchByRegion(term:string):Observable<Country[] >{
    const url = `${this.apiUrl}/region/${term}`;

    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error =>{
        console.log(error);
        return of([]);
      }))
  }

  public searchByCountryId(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      map(countries => countries.length>0  ? countries[0] : null),
      catchError(()=> of(null))
    );
  }
}
