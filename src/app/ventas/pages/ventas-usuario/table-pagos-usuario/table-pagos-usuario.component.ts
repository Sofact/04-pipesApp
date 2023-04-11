import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagos } from 'src/app/shared/models/Pagos';
import { ViewPagos } from 'src/app/shared/models/ViewPagos';
import { ViewVentas } from 'src/app/shared/models/ViewVentas';
import { PagosService } from '../../../../services/pagos.service';
import { ViewPagosService } from '../../../../services/view-pagos.service';

@Component({
  selector: 'app-table-pagos-usuario',
  templateUrl: './table-pagos-usuario.component.html'
})
export class TablePagosUsuarioComponent implements OnInit {

  todayString : string = new Date().toDateString();

  viewPagos: ViewPagos[] =[];
  viewPago: ViewPagos = {

                              pagId: 0,
                              pagFecha: '',
                              pagValor: '',
                              usuId: 0,
                              usuNombre: '',
                              usuCorreo: '',
                              cliBanco: '', 
                              cliNumCuenta: '',
                              cliTipoCuenta: ''

                          }
  viewVentas: ViewVentas[]=[];
  viewVenta!: ViewVentas;



  pagos: Pagos[]=[];
  
  usuId: string | null ='';
  id: number = 0;

  loading: boolean = false;


  constructor(  private ViewPagosService: ViewPagosService,
                private pagosService: PagosService,
                private _router: ActivatedRoute
                ) {
                  this.usuId =this._router.snapshot.paramMap.get( 'id' ) ;
                  this.id = Number(this.usuId);
                }

  ngOnInit() {

      
      this.ViewPagosService.getViewPagosById(this.id)
        .subscribe( (respuesta) => {
          this.viewPagos = respuesta;
        })
 

      
  }

  clear( ) {
      console.log("limpiar");
  }

}
