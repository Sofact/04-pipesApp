import { Component, OnInit } from '@angular/core';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ViewComision } from 'src/app/shared/models/ViewComision';
import { ViewPagosgroupedService } from '../../services/view-pagosgrouped.service';
import { ViewPagosGrouped } from '../../shared/models/ViewPagosGrouped';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

  viewComision!: ViewComision;
  viewComisiones: ViewComision[]=[];

  ViewPagosGrouped: ViewPagosGrouped[]=[];

  usuId: number=0;

  total = 0;



  customer: Customer | undefined;
  customers: Customer[]=[];

  loading: boolean = false;



  constructor(private viewComisionService: ViewComisionService,
              private viewPagosgroupedService:  ViewPagosgroupedService
                ) { }

                items!: any[];

                selectedItem: any;
            
                suggestions!: any[];
                date!: Date;
            
                search(event:any) {
                    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
                }

  ngOnInit() {

    this.usuId = Number(JSON.parse(localStorage.getItem("id") ?? ''));


      this.viewComisionService.getViewComisionEstado('pendiente')
      .subscribe ((respuesta) => {
      
        this.viewComisiones = respuesta;
      }) 

      this.viewComisionService.getViewComisionEstadoTotal('pendiente', this.usuId)
      .subscribe ((respuesta) => {
      
        this.total = respuesta;
      }) 

      this.viewPagosgroupedService.getViewPagosGroupedByEstado('pendiente')
      .subscribe ((respuesta) => {

        this.ViewPagosGrouped = respuesta
      })



     
  }

  clear( ) {
      console.log("limpiar");
  }

}
