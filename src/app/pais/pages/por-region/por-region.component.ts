import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  hayError: boolean = false;
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( 
    private paisService: PaisService 
  ) { }

  ngOnInit(): void {
  }

  buscar( region: string ): void{
    if( region !== this.regionActiva ){
      this.regionActiva = region
      this.paisService.buscarRegion( region )
      .subscribe( paises =>
          this.paises = paises,
          err => {
            this.hayError = true;
            console.log(err);
      });
    }
  }

  setClass( region: string ): string {
    return  ( region === this.regionActiva ) 
    ? 'btn btn-primary m-1' 
    : 'btn btn-outline-primary m-1';
  }

}
