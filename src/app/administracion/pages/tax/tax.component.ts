import { Component, Input, OnInit } from '@angular/core';
import { Tax } from './tax';
import { ParametrosService } from '../../../services/parametros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html'
})
export class TaxComponent implements OnInit {

  tax: Tax={parId:0, parDescripcion: '', parValor: 0};
  taxes: Tax[]=[];

 //@Input()
  nombre: string='';
 //@Input()
  valor: number=0;


  constructor ( private parametroService: ParametrosService,
                private router: Router){
                
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
      
        return false;
      }
    }



  ngOnInit(): void {
    
    this.parametroService.getParametros()
    .subscribe( taxes => this.taxes= taxes );

  }




  agregar(){

    this.tax.parDescripcion = this.nombre;
    this.tax.parValor = this.valor;


    this.parametroService.saveParametros(this.tax)
      .subscribe(response => this.router.navigate(['/parametros']));
    
    
      this.tax={parId:0, parDescripcion: '', parValor: 0};

}
editar(){
}

borrar(id: number){

  console.log("borrando" , id);
  this.parametroService.deleteParametros(id)
  .subscribe(response => this.router.navigate(['/parametros']));


}
}
