import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.httpClient.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.httpClient.get<Country[]>(url);
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.httpClient.get<Country[]>(url);
  }

  buscarPaisCodigo(termino: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.httpClient.get<Country>(url);
  }
}
