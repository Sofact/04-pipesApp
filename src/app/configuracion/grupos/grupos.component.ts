import { Component, Input, OnInit } from '@angular/core';
import { Tipos } from '../comision/tipos';
import { Convenio } from 'src/app/shared/models/convenio';
import { ConvenioService } from 'src/app/services/convenio.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html'
})
export class GruposComponent implements OnInit {

  convenio: Convenio[]=[];

  constructor(
              private conenioService: ConvenioService
    ){}

  ngOnInit(): void {

    this.conenioService.getConvenios()
    .subscribe( (response) => {
    this.convenio = response;
    console.log(response);
  });
  }

  guardar(){
  
    console.log("Guardando convenios");
  }
}
