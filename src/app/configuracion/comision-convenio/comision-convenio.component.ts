import { Component, Input, OnInit } from '@angular/core';
import { Convenio } from 'src/app/shared/models/convenio';
import { Tipos } from '../comision/tipos';

@Component({
  selector: 'app-comision-convenio',
  templateUrl: './comision-convenio.component.html'
})
export class ComisionConvenioComponent implements OnInit {

  tipos: Tipos[]=[{name:'Copidrogas', code: '1'}, {name:'Ravelo', code: '2'}];
  tipoAjuste: Tipos[]=[{name:'Porcentaje', code: '1'}, {name:'Valor', code: '2'}];
  nombre: string='';
  convenios: Convenio[]=[{nombre:'Copidrogas', codigo:"270.000", estado:'activo', valor: 24, tipo:'%'},
                          {nombre:'Ravelo', codigo:"115.000", estado:'activo', valor: 15000, tipo:'valor'}];
  

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
