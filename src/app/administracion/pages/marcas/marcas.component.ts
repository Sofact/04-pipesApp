import { Component, Input, OnInit } from '@angular/core';
import { Marca } from './Marcas';
import { MarcasService } from '../../../services/marcas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html'
})
export class MarcasComponent implements OnInit {

  nombre:string= '';
  marca: Marca= {marId:0 , marDescripcion:'', marEstado:''};
  marcas: Marca[]=[];

  constructor( private marcaService: MarcasService,
                private router: Router) {
                  this.router.routeReuseStrategy.shouldReuseRoute = function(){
      
                    return false;
                  }
                }

  ngOnInit(): void {

    this.marcaService.getAll()
      .subscribe(marcas => this.marcas = marcas);

  }

  agregar(){
  
    this.marca.marDescripcion = this.nombre;
    this.marcaService.saveMarca(this.marca)
      .subscribe(response => this.router.navigate(['/parametros']));
    
  }
  editar(){
  }

  borrar(id:number){}

}
