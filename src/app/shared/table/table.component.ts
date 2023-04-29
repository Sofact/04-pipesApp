import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from '../customer';
import { CustomerService } from '../customer.service';
import { CodigosService } from '../../services/codigos.service';
import { Codigo } from 'src/app/administracion/pages/codificacion/Codigo';
import { ViewCodigos } from '../models/ViewCodigos';
import { ViewCodigosService } from 'src/app/services/view-codigos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  codigo: Codigo | undefined;
  codigos: Codigo[]=[];

  viewCodigo: any
 viewCodigos: ViewCodigos[]=[];
  

  customer: Customer | undefined;
  customers: Customer[]=[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  constructor(private codigosServices: CodigosService, 
              private viewCodigosService: ViewCodigosService) { }

  ngOnInit() {
/*
    this.viewCodigosService.getViewCodigos()
    .subscribe((respuesta)=>{
      console.log("El valor de la respuesta",respuesta);
      this.viewCodigos =respuesta;
    })
   */
      this.codigosServices.getCodigos()
      .subscribe ((respuesta) => {
       //console.log("respuesta", respuesta);
        this.codigos = respuesta.reverse();

      
      }) 
        
  }

  clear( ) {
      console.log("limpiar");
  }
}
