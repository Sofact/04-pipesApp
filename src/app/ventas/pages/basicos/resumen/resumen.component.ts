import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/shared/models/convenio';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html'
})
export class ResumenComponent implements OnInit {

  convenios: Convenio[]=[{nombre:'Violleta', codigo:"270.000", estado:'activo', valor: 27000, tipo:'%'},
  {nombre:'Celeste', codigo:"115.000", estado:'activo', valor: 11500, tipo:'valor'}];


    first = 0;

    rows = 10;

    constructor() { }

    ngOnInit() {
        
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.convenios ? this.first === (this.convenios.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.convenios ? this.first === 0 : true;
    }
}
