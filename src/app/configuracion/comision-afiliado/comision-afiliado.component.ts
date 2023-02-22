import { Component, Input, OnInit } from '@angular/core';
import { Convenio } from '../comision-resumen/convenio';
import { Tipos } from '../comision/tipos';

@Component({
  selector: 'app-comision-afiliado',
  templateUrl: './comision-afiliado.component.html'
})
export class ComisionAfiliadoComponent implements OnInit {

  tipos: Tipos[]=[{name:'Violleta', code: '1'}, {name:'Celeste', code: '2'}];
  tipoAjuste: Tipos[]=[{name:'Porcentaje', code: '1'}, {name:'Valor', code: '2'}];
  nombre: string='';
  convenios: Convenio[]=[{nombre:'Violleta', codigo:"270.000", estado:'activo', valor: 24, tipo:'%'},
                          {nombre:'Celeste', codigo:"115.000", estado:'activo', valor: 15000, tipo:'valor'}];
  

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
