import { Component, OnInit } from '@angular/core';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { ViewPagosService } from 'src/app/services/view-pagos.service';
import { ViewPagosgroupedService } from 'src/app/services/view-pagosgrouped.service';
import { Customer, Representative } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ViewComision } from 'src/app/shared/models/ViewComision';
import { ViewPagos } from 'src/app/shared/models/ViewPagos';
import { ViewPagosGrouped } from 'src/app/shared/models/ViewPagosGrouped';


@Component({
  selector: 'app-table-pagado',
  templateUrl: './table-pagado.component.html'
})
export class TablePagadoComponent implements OnInit {


  viewComision!: ViewComision;
  viewComisiones: ViewComision[]=[];
  comisionesFiltradas: ViewPagos[]=[];
  ViewPagosGrouped: ViewPagosGrouped[]=[];

  viewPago: ViewPagos[]=[];
  usuId: number=0;

  total = 0;

  items!: any[];

  selectedItem: any;

  suggestions!: any[];
  date!: Date;

  search(event:any) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }



  customer: Customer | undefined;
  customers: Customer[]=[];

  loading: boolean = false;



  constructor(private viewComisionService: ViewComisionService,
              private viewPagosgroupedService:  ViewPagosgroupedService,
              private viewPagosService: ViewPagosService
                ) { }

  ngOnInit() {

    this.usuId = Number(JSON.parse(localStorage.getItem("id") ?? ''));
      this.viewPagosService.getViewPagos()
        .subscribe( (respuesta)=> {
        
          this.viewPago = respuesta
          this.comisionesFiltradas = this.viewPago.filter(comision=> comision.usuId == this.usuId);
        })

      this.viewPagosService.getViewPagosTotalId(this.usuId)
      .subscribe( (response: any) => {
      
        console.log("el Total",response);
        this.total = response
      })
      


     
  }

  clear( ) {
      console.log("limpiar");
  }


}
