import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../../../services/productos.service';
import { Producto } from './Producto';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
  
})
export class ProductosComponent implements OnInit {

  marcas: string[]=['Vitaliah', 'Soy'];
  marcaSelected: string='';
  lineas: string[]=['Pulverizados','Stevia'];
  lineaSelected: string='';
  producto: Producto={proId: 0,
                      proDescripcion: '',
                      proReferencia:'',
                      proValor:0,
                      linId: 0,
                      marId: 0};
  product: Producto[]=[];
  descripcion: string='';
  valor: number=0;
  sku:string='';
  constructor( private productoService: ProductosService,
               private router: Router ) { 
              
                
              }

  ngOnInit(): void {

      this.productoService.getProductos()
      .subscribe( product => this.product = product );
  }


  agregar(){

    console.log(this.sku);
  
    this.producto.proDescripcion=this.descripcion;
    this.producto.proReferencia = this.sku;
    this.producto.proValor = this.valor;
    console.log("El producto::", this.producto);
    this.productoService.SaveProductos(this.producto)


    .subscribe((response: any) => {
      console.log(response);
      
      this.router.navigate(['/parametros'])
      },
      (error: HttpErrorResponse) => {
        console.error('Error en la solicitud:', error);
        let mensaje = 'Ha ocurrido un error en la solicitud.';
  
        if (error.status === 500) {
          mensaje = 'El sku que ingreso ya se encuentra asociado';
        } else if (error.status === 401) {
          mensaje = 'No está autorizado para acceder a estos datos.';
        }else {
          mensaje = 'Error general';
        }
  
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: mensaje
        });
      }

      );
    
  }
}
