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

}
