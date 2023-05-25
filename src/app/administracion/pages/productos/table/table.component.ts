import { Component, OnInit } from '@angular/core';
import { CodigosService } from 'src/app/services/codigos.service';
import { Customer, Representative } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { Codigo } from '../../codificacion/Codigo';
import { Producto } from '../productos/Producto';
import { ProductosService } from '../../../../services/productos.service';
import { Router } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tableProducto',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  productor: Producto[]=[];
  producto!: Producto;
  productos: Producto[]=[];

  codigo: Codigo | undefined;
  codigos: Codigo[]=[];

  customer: Customer | undefined;
  customers: Customer[]=[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  borrado:  number = 0;

  suscription!: Subscription;

  displayModal = false;
  nombre: string= '';
  referencia: string = '';
  valor: number = 0;

  constructor( private router: Router,
                private customerService: CustomerService,
                private productosService: ProductosService ) { 
                
                  
                }

  ngOnInit() {

    this.suscription = this.productosService.refresh$
      .subscribe( () => {
      
        this.productosService.getProductos() 
          .subscribe ((respuesta) => {
      
          this.productos = respuesta.reverse();
  
        
        }) 
      })
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
                
      return false;
    }
      this.productosService.getProductos()
      .subscribe ((respuesta) => {
      
        this.productos = respuesta.reverse();
  

      
      }) 
      this.customerService.getCustomersLarge().then((customers) => {
        this.customers = customers;
        this.loading = false;

       
    });


     
  }

  delete (id: number){
  
    this.productosService.DeleteProductos(id)
    .subscribe((respuesta) => {
      
      this.router.navigate(['/parametros'])
    });

   
  }

  clear( ) {
      console.log("limpiar");
  }

  showModal(id: number){
    this.displayModal = true;

    this.productosService.getProductos()
    .subscribe ((respuesta) => {
    
      console.log(respuesta);

      this.productor = respuesta.filter(item => item.proId === id);
      this.nombre=this.productor[0].proDescripcion;
      this.referencia = this.productor[0].proReferencia;
      this.valor = this.productor[0].proValor;

      

    }) 

    console.log(id);
  }
  hideModal(){


    this.productor[0].proDescripcion= this.nombre;
    this.productor[0].proReferencia= this.referencia;
    this.productor[0].proValor = this.valor;
    this.productosService.UpdateProductos(this.productor[0])
    .subscribe( (respuesta) => {
    
      console.log(respuesta);
    })
    this.displayModal = false;
    console.log("hide", this.productor);
  }

}
