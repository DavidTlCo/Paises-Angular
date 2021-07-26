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
  termino: string = '';
  hayError: boolean = false;
  ultimo: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.hayError = false;
    this.ultimo = this.termino;
    this.paisService.buscar( this.termino )
    .subscribe( 
      // Suscribe contains "next" which is OK...
    paises => {
      console.log( paises );
      this.paises = paises;
    },
    // It contains a "error" too, both depends reponse
    err => {
      this.hayError = true;
    });
    this.termino = '';
  }

}
