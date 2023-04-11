import { Component, OnInit } from '@angular/core';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { ViewPagosService } from 'src/app/services/view-pagos.service';
import { ViewPagosgroupedService } from 'src/app/services/view-pagosgrouped.service';
import { Customer } from 'src/app/shared/customer';
import { ViewComision } from 'src/app/shared/models/ViewComision';
import { ViewPagos } from 'src/app/shared/models/ViewPagos';
import { ViewPagosGrouped } from 'src/app/shared/models/ViewPagosGrouped';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html'
})
export class HistorialComponent implements OnInit {


  viewComision!: ViewComision;
  viewComisiones: ViewComision[]=[];

  ViewPagosGrouped: ViewPagosGrouped[]=[];

  viewPago: ViewPagos[]=[];


  total = 0;



  customer: Customer | undefined;
  customers: Customer[]=[];

  loading: boolean = false;



  constructor(private viewComisionService: ViewComisionService,
              private viewPagosgroupedService:  ViewPagosgroupedService,
              private viewPagosService: ViewPagosService
                ) { }

  ngOnInit() {

      this.viewPagosService.getViewPagos()
        .subscribe( (respuesta)=> {
        
          this.viewPago = respuesta
        })

      this.viewPagosService.getViewPagosTotal()
      .subscribe( (response) => {
      
        this.total = response
      })
      


     
  }

  clear( ) {
      console.log("limpiar");
  }


}
