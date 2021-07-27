import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  hayError: boolean = false;
  ultimo: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ): void {
    this.hayError = false;
    this.ultimo = termino;
    this.paisService.buscarCapital( termino )
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
    // this.hayError = false;
    
  }
}

