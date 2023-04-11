import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/shared/models/convenio';


@Component({
  selector: 'app-comision-resumen',
  templateUrl: './comision-resumen.component.html'
  
})
export class ComisionResumenComponent implements OnInit {


  nombre: string='';
  convenios: Convenio[]=[{nombre:'Copidrogas', codigo:"asdfa45d", estado:'activo', valor: 0, tipo:'%'},
                          {nombre:'Ravelo', codigo:"6as5d4fa", estado:'activo', valor: 0, tipo:'%'}];
  constructor() { }

  ngOnInit(): void {
  }
  editar(){
  
      console.log("Editar");
    }
    borrar(){
  
      console.log("Borrando");
    }
    crearNuevo(){
      console.log('Crear convenio', this.nombre);
      
      this.convenios.push({nombre:this.nombre,  codigo:"asdfa45d", estado:'activo', valor: 0, tipo:'%' })
    }

}
