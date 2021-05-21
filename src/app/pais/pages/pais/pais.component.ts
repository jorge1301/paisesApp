import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `li {
      cursor: pointer;
    }`
  ]
})
export class PaisComponent implements OnInit {

  termino: string = '';
  existError: boolean = false;
  listaPaises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarTermino(termino: string) {
    this.existError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        this.listaPaises = paises;
      }, (err) => {
        this.existError = true;
        this.listaPaises = [];
      })
  }

  sugerencias(termino: string) {
    this.existError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }
}
