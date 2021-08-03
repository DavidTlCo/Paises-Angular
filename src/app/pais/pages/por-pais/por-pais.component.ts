import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})

export class PorPaisComponent implements OnInit {
  hayError: boolean = false;
  sugerencias: boolean = false;
  tabla: boolean = false;
  ultimo: string = '';
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ): void {
    this.hayError = false;
    this.sugerencias = false;
    this.tabla = true;
    this.ultimo = termino;
    this.paisService.buscarPais( termino )
    .subscribe( 
      // Suscribe contains "next" which is OK...
    paises => {
      // console.log( paises );
      this.paises = paises;
    },
    // It contains a "error" too, both depends reponse
    err => {
      this.hayError = true;
    });
  }

  mostrarSugerencias( termino: string ): void {
    // If termino is not empty
    if (termino.length > 0) {
      this.hayError = false;
      this.sugerencias = true;
      this.tabla = false;
      this.ultimo = termino;
      this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,7),
      err => {
            this.hayError = true;
          });
    } else {
      // No results to not show the error
      this.paisesSugeridos = [];
    }
  }
}
