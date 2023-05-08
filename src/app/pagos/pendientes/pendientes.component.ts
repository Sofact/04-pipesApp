import { Component, OnInit } from '@angular/core';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ViewComision } from 'src/app/shared/models/ViewComision';
import { ViewPagosgroupedService } from '../../services/view-pagosgrouped.service';
import { ViewPagosGrouped } from '../../shared/models/ViewPagosGrouped';
import { Standar } from 'src/app/shared/models/Standar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

  viewComision!: ViewComision;
  viewComisiones: ViewComision[]=[];



  viewPagosGrouped: ViewPagosGrouped[]=[];
  pagosFiltrados: ViewPagosGrouped[] = [];

  selectedItems: ViewPagosGrouped[] = [];
  precioMinimo: number =0;
  checked:boolean= true;

  seleccionados: Standar[] = []
                       


  usuId: number=0;

  total = 0;



  customer: Customer | undefined;
  customers: Customer[]=[];

  loading: boolean = false;



  constructor(private viewComisionService: ViewComisionService,
              private viewPagosgroupedService:  ViewPagosgroupedService,
              private datePipe: DatePipe 
                ) { }

                items!: any[];

                selectedItem: any;
            
                suggestions!: any[];
                date: Date =  new Date();
                formato: string = 'dd/MM/yyyy';
                formattedDate: any = this.datePipe.transform(this.date, 'yyyy-MM-dd');
            
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

      console.log("fecha::", this.date);

      this.viewPagosgroupedService.getViewPagosGroupedByEstadoFecha(this.formattedDate.toString())
      .subscribe ((respuesta) => {

        this.viewPagosGrouped = respuesta;
        console.log("REsp::", this.date, this.viewPagosGrouped);

        this.seleccionados = this.viewPagosGrouped.map(({ user_id, user_email }) => ({ user_id, user_email }));


        this.pagosFiltrados = this.viewPagosGrouped.filter(item => {
     
          return item.sum >= this.precioMinimo;

        });
       

         
      })


      
  }

  filtrarValor(){
    
    this.formattedDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');


    console.log('Valor a filtrar:', this.formattedDate.toString());

    this.viewPagosgroupedService.getViewPagosGroupedByEstadoFecha(this.formattedDate.toString())
    .subscribe ((respuesta) => {

      this.viewPagosGrouped = respuesta;
      console.log("REsp::", this.date, this.viewPagosGrouped);

      this.seleccionados = this.viewPagosGrouped.map(({ user_id, user_email }) => ({ user_id, user_email }));


      this.pagosFiltrados = this.viewPagosGrouped.filter(item => {
   
        return item.sum >= this.precioMinimo;

      });
     

       
    })
/*
    this.viewPagosgroupedService.getViewPagosGroupedByEstado('pendiente')
      .subscribe ((respuesta) => {

        this.viewPagosGrouped = respuesta

        this.pagosFiltrados = this.viewPagosGrouped.filter(item => {
          console.log(item);
          console.log(this.precioMinimo);
          return Number(item.sum) >= Number(this.precioMinimo);
        });
       

         
      })*/

  }

  pagar(){
  
    console.log("Pagando", this.selectedItems);
  }

  onCheckboxChange() {

    console.log("el change::", this.selectedItems);
    this.selectedItems = this.pagosFiltrados.filter((pagoFiltrado: ViewPagosGrouped) => pagoFiltrado.selected);
    
  }
 

  clear( ) {
      console.log("limpiar");
  }

}
