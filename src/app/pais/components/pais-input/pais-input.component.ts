import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent{
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar(){
    // Send the input text by event onEnter
    this.onEnter.emit( this.termino );
    this.termino = '';
  }
}
