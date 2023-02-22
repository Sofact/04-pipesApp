import { Component, OnInit } from '@angular/core';
import { CodigosService } from 'src/app/services/codigos.service';
import { Customer, Representative } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { Codigo } from '../../codificacion/Codigo';
import { Producto } from '../productos/Producto';
import { ProductosService } from '../../../../services/productos.service';

@Component({
  selector: 'app-tableProducto',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  producto!: Producto;
  productos: Producto[]=[];

  codigo: Codigo | undefined;
  codigos: Codigo[]=[];

  customer: Customer | undefined;
  customers: Customer[]=[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private codigosServices: CodigosService,
                private customerService: CustomerService,
                private productosService: ProductosService ) { }

  ngOnInit() {
      this.productosService.getProductos()
      .subscribe ((respuesta) => {
      
        this.productos = respuesta;

      
      }) 
      this.customerService.getCustomersLarge().then((customers) => {
        this.customers = customers;
        this.loading = false;

       
    });


     
  }

  clear( ) {
      console.log("limpiar");
  }

}
