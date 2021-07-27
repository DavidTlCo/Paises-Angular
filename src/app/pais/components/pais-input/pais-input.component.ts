import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  // It's emitted when user press enter after typping a country on input
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // It's emitted when user isn't typping
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  termino: string = '';
  // Observable 
  debouncer: Subject<string> = new Subject();
  
  // ngOnInit is throw only once
  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(500) )
    .subscribe( valor => {
      console.log( valor);
      this.onDebounce.emit( valor );
    });
  }

  buscar(){
    // Send the input text by event onEnter
    this.onEnter.emit( this.termino );
    this.termino = '';
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }
}
