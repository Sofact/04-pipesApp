import { Component, Input, OnInit } from '@angular/core';
import { Tipos } from './tipos';


@Component({
  selector: 'app-comision',
  templateUrl: './comision.component.html'
})
export class ComisionComponent implements OnInit {

  
  tipos: Tipos[]=[{name:'Porcentaje', code: '1'}, {name:'Valor', code: '2'}];
  valorImput: number= 24;
  

  @Input() selectedTipo!: Tipos;
  @Input() value: number= 0;

  isButtonVisible: boolean =true;
  mostrar: boolean= true;

  constructor() { 
  
   
  }

  ngOnInit(): void {
  }
  cambiar(){
    this.isButtonVisible=false;
    console.log("Cambiando");
  }

  guardar(){
    this.isButtonVisible=true;
    if (this.selectedTipo.name === 'Valor'){
      this.mostrar= false;
    }else {
      this.mostrar = true;
    }
    console.log("Guardando", this.selectedTipo.name);
    
  }

  saveAfiliados(){
    console.log("Guardar afiliados");
  }

  saveProducto(){
    console.log("Guardar comision producto");
  }
}
