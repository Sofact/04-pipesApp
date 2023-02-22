import { Component, Input, OnInit } from '@angular/core';
import { Tipos } from '../comision/tipos';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html'
})
export class GruposComponent implements OnInit {

  tipos: Tipos[]=[{name:'Soy', code: '1'}, {name:'Copidrogas', code: '2'}];
  tipoAjuste: Tipos[]=[{name:'Porcentaje', code: '1'}, {name:'Valor', code: '2'}];
  

  @Input() selectedTipo: string='';
  @Input() selectedTipoAjuste: string='';
  @Input() value: number= 0;

  ngOnInit(): void {
  }

  guardar(){
  
    console.log("Guardando convenios");
  }
}
