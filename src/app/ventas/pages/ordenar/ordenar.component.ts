import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent  {

  enMayusculas: boolean = true;
  orderPor: string = '';
  heroes : Heroe [] = [
      {
        nombre: 'Adriana',
        vuela: true,
        color: Color.azul
    },
    {
      nombre: 'Celeste',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Violleta',
      vuela: false,
      color: Color.verde
    },
    
  ]

  toggle(){
   this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden (valor: string){
    this.orderPor = valor;
    console.log(valor);
  }
}
