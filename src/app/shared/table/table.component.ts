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

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  constructor(private codigosServices: CodigosService ) { }

  ngOnInit() {
      this.codigosServices.getCodigos()
      .subscribe ((respuesta) => {
      
        this.codigos = respuesta;

      
      }) 
     

     
  }

  clear( ) {
      console.log("limpiar");
  }
}
