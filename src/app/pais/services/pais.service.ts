import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscar( termino: string ): Observable<any>{
    const url = `${ this.baseUrl }/name/${ termino }`;
    return this.http.get( url );
  }
}
