import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {  interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent implements OnInit {

  //i18n Select
 nombre: string = 'Julian';
 genero: string = 'masculino';

 invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

//i18n plural

clientes: string[]= ['Maria', 'Pedro', 'Julian', 'Adriana', 'Celeste', 'Violleta'];
clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente espearando',
  'other': 'tenemos # clientes espearando'
}

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiar(){
    this.nombre = 'Adriana';
    this.genero = 'femenino';
  
  }

  quitar(){
   
    this.clientes.pop();
    console.log("poper", this.clientes);
  }

  //key value pipe

  persona ={
    nombre: 'Julian',
    edad: 37,
    direccion : 'Madrid España'
  }

  // async pipe

  miObservable = interval(1000);
  valorPromesa = new Promise(( resolve, reject ) =>{
    
    setTimeout(() =>{
      resolve( 'Tenemos data de promesa');
    }, 3000)
  });

}
