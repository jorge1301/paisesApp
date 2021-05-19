import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {
  termino: string = '';
  existError: boolean = false;
  listaPaises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarTermino(termino: string) {
    this.existError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
      .subscribe(paises => {
        this.listaPaises = paises;
      }, (err) => {
        this.existError = true;
        this.listaPaises = [];
      })
  }

  sugerencias(termino: string) {
    this.existError = false;
    this.termino = termino;
  }
}
