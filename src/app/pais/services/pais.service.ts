import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  // Allow a filter response to the fields
  get httpParams(): HttpParams{
    return new HttpParams().set(
      'fields', 'name;capital;flag;subregion;population;area;alpha2Code'
    )
  }

  constructor( private http: HttpClient ) { }

  // This method search a country and converts the response to array of countries and returns it
  buscarPais( termino: string ): Observable<Country[]>{
    const url = `${ this.baseUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url , { params: this.httpParams } );
  }

  // This method search a capital and converts the response to array of countries and returns it
  buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${ this.baseUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url , { params: this.httpParams } );
  }
  
  // This method search all countries by region and converts the response to array to returns it
  buscarRegion( termino: string ): Observable<Country[]>{
    const url = `${ this.baseUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url , { params: this.httpParams } );
  }

  // This method search a capital and converts the response to array of countries and returns it
  verPais( id: string ): Observable<Country>{
    const url = `${ this.baseUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }
}
