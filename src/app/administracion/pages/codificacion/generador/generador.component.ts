import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../../../services/marcas.service';
import { Producto } from '../../productos/productos/Producto';
import { CodigosService } from '../../../../services/codigos.service';
import { Codigo } from '../Codigo';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/shared/models/convenio';
import { ProductosService } from '../../../../services/productos.service';



@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html'
})



export class GeneradorComponent implements OnInit {

  productos!: Producto[];
  codigo: Codigo= { codId: 0,
                    codCodigo: '',
                    codEstado: '',
                    codFecha: new Date(),
                    codUrl: '',
                    proId: 0,
                    usuId: 10};

  selectedProducto!: Producto;
  val!: number;
  userId: number=0;


  constructor( private codigoService: CodigosService,
                private productosService: ProductosService,
                private router: Router
                 ) {
      

  }
  ngOnInit(): void {

    this.userId = JSON.parse(localStorage.getItem("id") ?? '');

    this.productosService.getProductos()
      .subscribe ((respuesta) => {
      
        this.productos = respuesta;      
      }) 


  }

  agregar(){

    console.log(this.selectedProducto.proId);
    console.log('el valor',this.val);
    this.codigo.proId = this.selectedProducto.proId;
    this.codigo.codEstado = 'activo';
    this.codigo.codId = this.val;
    this.codigo.usuId= this.userId;

    console.log("el valor del::.", this.codigo.proId);
    

    this.codigoService.saveCodigo(this.codigo)
    .subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
     
      
      window.open(url);
      location.reload()
    });

   
  }

  refreshPage() {
    this.router.navigate(['/codificacion'], { queryParams: { random: Math.random() } });
  }

  editar(){}
  borrar(){}

}
