import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../../../services/marcas.service';
import { Producto } from '../../productos/productos/Producto';
import { CodigosService } from '../../../../services/codigos.service';
import { Codigo } from '../Codigo';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/shared/models/convenio';
import { ProductosService } from '../../../../services/productos.service';



@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html'
})



export class GeneradorComponent implements OnInit {

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


  constructor( private codigoService: CodigosService,
                private productosService: ProductosService,
                private router: Router
                 ) {
      

  }
  ngOnInit(): void {
    this.productosService.getProductos()
      .subscribe ((respuesta) => {
      
        this.productos = respuesta;      
      }) 


  }

  agregar(){

    console.log(this.selectedProducto.proId);
    console.log('el valor',this.val);
    this.codigo.proId = this.selectedProducto.proId;
    this.codigo.codEstado = 'activo';
    this.codigo.codId = this.val;

    console.log("el valor del::.", this.codigo.proId);
    

    this.codigoService.saveCodigo(this.codigo)
    .subscribe(response => this.router.navigate(['/presentacion']));
  }
  editar(){}
  borrar(){}

}
