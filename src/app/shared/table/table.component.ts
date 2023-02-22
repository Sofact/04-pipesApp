import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from '../customer';
import { CustomerService } from '../customer.service';
import { CodigosService } from '../../services/codigos.service';
import { Codigo } from 'src/app/administracion/pages/codificacion/Codigo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  codigo: Codigo | undefined;
  codigos: Codigo[]=[];

  customer: Customer | undefined;
  customers: Customer[]=[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private codigosServices: CodigosService,
                private customerService: CustomerService ) { }

  ngOnInit() {
      this.codigosServices.getCodigos()
      .subscribe ((respuesta) => {
      
        this.codigos = respuesta;

      
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
