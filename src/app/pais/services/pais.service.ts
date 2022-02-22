import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchCountry(termino: string): Observable<Array<Country>> {
    const url = `${this.apiURL}/name/${termino}`;

    return this.http.get<Array<Country>>(url);
  }
  searchCapital(termino: string): Observable<Array<Country>> {
    const url = `${this.apiURL}/capital/${termino}`;

    return this.http.get<Array<Country>>(url);
  }
  getCountryId(id: string): Observable<Array<Country>> {
    const url = `${this.apiURL}/alpha/${id}`;

    return this.http.get<Array<Country>>(url);
  }
}
