import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../../../services/marcas.service';
import { Producto } from '../../productos/productos/Producto';
import { CodigosService } from '../../../../services/codigos.service';
import { Codigo } from '../Codigo';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/configuracion/comision-resumen/convenio';



@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html'
})



export class GeneradorComponent  {

  productos!: Producto[];
  codigo: Codigo= { codId: 0,
                    codCodigo: '',
                    codEstado: '',
                    codFecha: new Date('2017-05-03'),
                    codUrl: '',
                    proId: 0,
                    usuId: 10};

  selectedProducto!: Producto;
  val!: number;
  convenios: Convenio[]=[{nombre:'Copidrogas', codigo:"270.000", estado:'activo', valor: 24, tipo:'%'},
                          {nombre:'Ravelo', codigo:"115.000", estado:'activo', valor: 15000, tipo:'valor'}];
  

  constructor( private codigoService: CodigosService,
                private router: Router ) {
      this.productos = [
          {proDescripcion: 'Cofee Colageno', proId: 1, linId: 1, marId: 1, proValor:0, proReferencia:''},
          {proDescripcion: 'Colageno', proId: 2, linId: 1, marId: 1, proValor:0, proReferencia:''},
          {proDescripcion: 'Kids', proId: 3, linId: 1, marId: 1, proValor:0, proReferencia:''},
          {proDescripcion: 'Leche coco', proId: 4, linId: 1, marId: 1, proValor:0, proReferencia:''},
          {proDescripcion: 'monk', proId: 5, linId: 1, marId: 1, proValor:0, proReferencia:''}
      ];

      this.router.routeReuseStrategy.shouldReuseRoute = function(){
      
        return false;
      }
  }

  agregar(){

    console.log(this.selectedProducto.proId);
    console.log('el valor',this.val);
    this.codigo.proId = this.selectedProducto.proId;
    this.codigo.codEstado = 'activo';
    this.codigo.codId = this.val;

    console.log("el valor del::.", this.codigo.proId);
    

    this.codigoService.saveCodigo(this.codigo)
    .subscribe(response => this.router.navigate(['codificacion']));
  }
  editar(){}
  borrar(){}

}
