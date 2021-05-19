import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onCountry: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }

  buscarTermino() {
    this.onCountry.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
