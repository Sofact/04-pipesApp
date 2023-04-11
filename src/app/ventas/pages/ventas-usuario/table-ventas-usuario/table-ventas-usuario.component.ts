import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewVentasService } from 'src/app/services/view-ventas.service';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ViewVentas } from 'src/app/shared/models/ViewVentas';

@Component({
  selector: 'app-table-ventas-usuario',
  templateUrl: './table-ventas-usuario.component.html'
})
export class TableVentasUsuarioComponent implements OnInit {


  todayString : string = new Date().toDateString();
  viewVentas: ViewVentas[]=[];
  viewVenta!: ViewVentas;
  total: number = 0;


  usuId: string | null ='';
  id: number = 0;

  loading: boolean = false;


  constructor(  private customerService: CustomerService,
                private viewVentasService: ViewVentasService,   
                private _router: ActivatedRoute
                
                ) {  this.usuId =this._router.snapshot.paramMap.get( 'id' ) ;
                      this.id = Number(this.usuId);
                  }

  ngOnInit() {

      

      this.viewVentasService.getViewVentasByUser(this.id)
        .subscribe( (respuesta ) => {
          this.viewVentas = respuesta;
        })
   
      this.viewVentasService.getViewVentasTotalByUser(this.id)
      .subscribe( (respuesta ) => {
        this.total = respuesta;
      })
  }

  clear( ) {
      console.log("limpiar");
  }


}
