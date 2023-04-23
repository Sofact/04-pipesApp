import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Codigo } from 'src/app/administracion/pages/codificacion/Codigo';
import { Producto } from 'src/app/administracion/pages/productos/productos/Producto';
import { CodigosService } from 'src/app/services/codigos.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Customer, Representative } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ViewComision } from 'src/app/shared/models/ViewComision';
import { ViewComisionService } from '../../../services/view-comision.service';

@Component({
  selector: 'app-table-pendientes',
  templateUrl: './table-pendientes.component.html'
})
export class TablePendientesComponent implements OnInit {

  viewComision!: ViewComision;
  viewComisiones: ViewComision[]=[];
  comisionesFiltradas: ViewComision[]=[];
  producto!: Producto;
  productos: Producto[]=[];
  total: number =0;
  usuId: number=0;

  codigo: Codigo | undefined;
  codigos: Codigo[]=[];

  customer: Customer | undefined;
  customers: Customer[]=[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(  private customerService: CustomerService,
                private productosService: ProductosService, 
                private viewComisionService: ViewComisionService
                ) { }

  ngOnInit() {

    this.usuId = Number(JSON.parse(localStorage.getItem("id") ?? ''));

      this.viewComisionService.getViewComisionEstado('pendiente')
      .subscribe ((respuesta) => {
      
        this.viewComisiones = respuesta.reverse();
        this.comisionesFiltradas = this.viewComisiones.filter(comision=> comision.usuId == this.usuId);
      }) 

      this.viewComisionService.getViewComisionEstadoTotal('pendiente', this.usuId)
      .subscribe ((respuesta) => {
      
        this.total = respuesta;
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
