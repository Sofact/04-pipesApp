import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/administracion/pages/productos/productos/Producto';
import { ProductosService } from 'src/app/services/productos.service';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { Customer, Representative } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { Cliente } from 'src/app/shared/models/Cliente';
import { Codigo } from 'src/app/shared/models/Codigo';
import { ViewComision } from 'src/app/shared/models/ViewComision';
import { ViewVentas } from 'src/app/shared/models/ViewVentas';
import { ClientesService } from '../../../../services/clientes.service';
import { ViewVentasService } from '../../../../services/view-ventas.service';

@Component({
  selector: 'app-table-clientes',
  templateUrl: './table-clientes.component.html'
})
export class TableClientesComponent implements OnInit {


  total =0;

  todayString : string = new Date().toDateString();
  viewVentas: ViewVentas[]=[];
  viewVenta!: ViewVentas;

  customer: Customer | undefined;
  customers: Customer[]=[];


  loading: boolean = false;


  constructor(  private customerService: CustomerService,
                private viewVentasService: ViewVentasService,
                
                
                ) { }

  ngOnInit() {

      

      this.viewVentasService.getViewVentas()
        .subscribe( (respuesta ) => {
          this.viewVentas = respuesta;
        })

        this.viewVentasService.getViewVentasTotalByUser(1)
        .subscribe ((respuesta) => {
        
          this.total = respuesta;
        }) 
  
      
  }

  clear( ) {
      console.log("limpiar");
  }



}
