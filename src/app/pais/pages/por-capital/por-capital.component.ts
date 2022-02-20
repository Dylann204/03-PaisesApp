import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private pasisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.pasisService.searchCapital(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: () => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }
}
