import { Component, OnInit } from '@angular/core';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { Customer, Representative } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ViewComision } from 'src/app/shared/models/ViewComision';


@Component({
  selector: 'app-table-pagado',
  templateUrl: './table-pagado.component.html'
})
export class TablePagadoComponent implements OnInit {

  viewComision!: ViewComision;
  viewComisiones: ViewComision[]=[];

  


  total = 0;



  customer: Customer | undefined;
  customers: Customer[]=[];

  loading: boolean = false;



  constructor(private viewComisionService: ViewComisionService,
                private customerService: CustomerService,
                ) { }

  ngOnInit() {

      this.viewComisionService.getViewComisionEstado('pagado')
      .subscribe ((respuesta) => {
      
        this.viewComisiones = respuesta;
      }) 

      this.viewComisionService.getViewComisionEstadoTotal('pagado')
      .subscribe ((respuesta) => {
      
        this.total = respuesta;
      }) 



     
  }

  clear( ) {
      console.log("limpiar");
  }

}
