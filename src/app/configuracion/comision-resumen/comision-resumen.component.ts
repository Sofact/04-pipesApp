import { Component, OnInit } from '@angular/core';
import { ConvenioService } from 'src/app/services/convenio.service';
import { MapConvenio } from 'src/app/shared/models/MapConvenio';
import { Convenio } from 'src/app/shared/models/convenio';


@Component({
  selector: 'app-comision-resumen',
  templateUrl: './comision-resumen.component.html'
  
})
export class ComisionResumenComponent implements OnInit {

  conv: MapConvenio= {
                 
                  covId: 0,
                  covNombre: '',
                  cov_estado: '',
                 
  };
  convenio: Convenio[]=[];
  convenioText: string='';

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


  crearNuevo(){

    console.log(this.convenioText);

    this.conv.covNombre = this.convenioText;
    this.conv.cov_estado = 'activo';

    console.log("despues ",this.conv.covNombre);

    this.conenioService.SaveConvenio(this.conv)
    .subscribe( (response: any ) => {
    
      console.log(response);
    });

    location.reload();

  }

  delete (covId: number){

    console.log("covId::", covId);
  
    this.conenioService.DeleteConvenio(covId)
    .subscribe((respuesta) => {
      
      console.log(respuesta);
      
    });
    location.reload();
   
  }

}
