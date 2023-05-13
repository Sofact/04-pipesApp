import { Component, OnInit } from '@angular/core';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ViewComision } from 'src/app/shared/models/ViewComision';
import { ViewPagosgroupedService } from '../../services/view-pagosgrouped.service';
import { ViewPagosGrouped } from '../../shared/models/ViewPagosGrouped';
import { Standar } from 'src/app/shared/models/Standar';
import { DatePipe } from '@angular/common';
import { ComisionService } from 'src/app/services/comision.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { PagosService } from 'src/app/services/pagos.service';
import { Pagos } from 'src/app/shared/models/Pagos';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

  viewComision!: ViewComision;
  viewComisiones: ViewComision[]=[];

 pagosave: Pagos = {
                    pagId : 0, 
                    pagValor: 0,
                    pagFecha: '',
                    usuId: 0
                    };

  viewPagosGrouped: ViewPagosGrouped[]=[];
  pagosFiltrados: ViewPagosGrouped[] = [];

  selectedOptions: ViewPagosGrouped[] = [];
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
              private comisionService: ComisionService,
              private pagosService: PagosService,
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

      this.viewComisionService.getViewComisionEstadoTotalSolo('pendiente')
      .subscribe ((respuesta) => {
      
        this.total = respuesta;
      }) 

      console.log("fecha::", this.date);

      this.viewPagosgroupedService.getViewPagosGroupedByEstadoFecha(this.formattedDate.toString())
      .subscribe ((respuesta) => {

        this.viewPagosGrouped = respuesta;
        console.log("REsp::", this.date, this.viewPagosGrouped);

        this.seleccionados = this.viewPagosGrouped.map(({ usu_id, user_email }) => ({ usu_id, user_email }));


        this.pagosFiltrados = this.viewPagosGrouped.filter(item => {
     
          return item.sum >= this.precioMinimo;

        });
        this.total =0;
       this.pagosFiltrados.forEach(pagos => {
      
          this.total += pagos.sum;
          console.log(this.total);
      })

         
      })


      
  }

  filtrarValor(){
    
    this.formattedDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');


    console.log('Valor a filtrar:', this.formattedDate.toString());

    this.viewPagosgroupedService.getViewPagosGroupedByEstadoFecha(this.formattedDate.toString())
    .subscribe ((respuesta) => {

      this.viewPagosGrouped = respuesta;
      console.log("REsp::", this.formattedDate, this.viewPagosGrouped);

      this.seleccionados = this.viewPagosGrouped.map(({ usu_id, user_email }) => ({ usu_id, user_email }));


      this.pagosFiltrados = this.viewPagosGrouped.filter(item => {
   
        return item.sum >= this.precioMinimo;

      });
      this.total =0;
      this.pagosFiltrados.forEach(pagos => {
      
        this.total += pagos.sum;
        console.log(this.total);
    })
     

       
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
  
    
    
    this.pagosFiltrados.forEach( pagos => {




    console.log("Pagando ",  this.pagosFiltrados);

    if(pagos.selected){

      const currentDate = new Date();
      this.pagosave.pagFecha = this.datePipe.transform(currentDate, 'yyyy-MM-dd') ; 
      this.pagosave.usuId = pagos.usu_id;
      this.pagosave.pagValor = pagos.sum;

    this.pagosService.savePagos(this.pagosave)
    .subscribe( product => 
        console.log(product)
      );
    
    this.comisionService.updateComision(pagos.user_name, this.datePipe.transform(this.date, 'yyyy-MM-dd'))
    .subscribe( product => 
      
      location.reload()
      );

    }
    })
  
   
    /*
    this.pagosFiltrados.forEach( pagos => {
    
      if(pagos.selected){
        console.log("actualizar ::"+ pagos.user_name+ "fecha"+ this.datePipe.transform(this.date, 'yyyy-MM-dd'));
    //    this.comisionService.updateComision(pagos.user_name, this.datePipe.transform(this.date, 'yyyy-MM-dd'));
        this.comisionService.getCodigos();
      }

    })*/
  }

  getSelectedOptions() {

    return this.pagosFiltrados.filter((option, i) => this.selectedOptions)
      .map(option => option as ViewPagosGrouped);
  }
 
  checker(event: any, val: ViewPagosGrouped){
    val.selected = !val.selected;
    console.log("presionado::"+ event + val.user_email+ val.selected );

    this.pagosFiltrados.forEach( pagos => {
    
      if(pagos.user_email == val.user_email){
      
        pagos.selected = val.selected; 
      }
    })

    this.pagosFiltrados.forEach( pagos=>{
    
      console.log(pagos);
    })
  }

  clear( ) {
      console.log("limpiar");
  }

}
