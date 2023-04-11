import { Component, Input, OnInit } from '@angular/core';
import { Convenio } from 'src/app/shared/models/convenio';

import { Tipos } from '../comision/tipos';

@Component({
  selector: 'app-comision-marca',
  templateUrl: './comision-marca.component.html'
})
export class ComisionMarcaComponent implements OnInit {

  tipos: Tipos[]=[{name:'Vitaliah', code: '1'}, {name:'Soy', code: '2'}];
  tipoAjuste: Tipos[]=[{name:'Porcentaje', code: '1'}, {name:'Valor', code: '2'}];
  nombre: string='';
  convenios: Convenio[]=[{nombre:'Vitaliah', codigo:"270.000", estado:'activo', valor: 24, tipo:'%'},
                          {nombre:'Soy', codigo:"115.000", estado:'activo', valor: 15000, tipo:'valor'}];
  

  @Input() selectedTipo: string='';
  @Input() selectedTipoAjuste: string='';
  @Input() value: number= 0;

  
  editar(){
  
    console.log("Editar");
  }
  borrar(){

    console.log("Borrando");
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    
    console.log("Comision por afiliado guardado");
  }

}
