import { Component, Input, OnInit } from '@angular/core';
import { Convenio } from '../comision-resumen/convenio';
import { Tipos } from '../comision/tipos';

@Component({
  selector: 'app-comision-pagos',
  templateUrl: './comision-pagos.component.html'
})
export class ComisionPagosComponent implements OnInit {

  nombre: string='';
  tipos: Tipos[]=[{name:'Copidrogas', code: '1'}, {name:'Ravelo', code: '2'}];

  convenios: Convenio[]=[{nombre:'Copidrogas', codigo:"270.000", estado:'pagado', valor: 0, tipo:'%'},
                          {nombre:'Ravelo', codigo:"115.000", estado:'pendiente', valor: 0, tipo:'%'}];


  @Input() selectedTipo: string='';
  constructor() { }


  ngOnInit(): void {
  }  
  editar(){
  
    console.log("Editar");
  }
  borrar(){

    console.log("Borrando");
  }

}
