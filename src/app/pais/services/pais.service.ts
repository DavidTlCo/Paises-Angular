import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }
  // This method converts the response to an array of countries and returns it
  buscar( termino: string ): Observable<Country[]>{
    const url = `${ this.baseUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }
}
