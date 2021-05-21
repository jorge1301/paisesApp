import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  termino: string = '';
  listaPaises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarTermino(termino: string) {
    if(this.termino === termino) {return;};
    this.termino = termino;
    this.paisService.buscarRegion(this.termino)
      .subscribe(paises => {
        this.listaPaises = paises;
      }, (err) => {
        this.listaPaises = [];
      })
  }

  getClaseCSS(region: string): string {
    return (region === this.termino) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
