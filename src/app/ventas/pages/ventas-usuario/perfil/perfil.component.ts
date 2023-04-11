import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/models/Usuario';
import { UsuariosService } from '../../../../services/usuarios.service';
import { ComisionService } from '../../../../services/comision.service';
import { ConvenioService } from '../../../../services/convenio.service';
import { Convenio } from 'src/app/shared/models/convenio';
import { ViewPerfil } from 'src/app/shared/models/ViewPerfil';

@Component({
  selector: 'app-perfil_ventas',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  usuId: string | null ='';
  id: number = 0;

  viewPerfil:  ViewPerfil = {

                          usuId: 0,
                          usuNombre: '',
                          usuCorreo: '',
                          covId: 0,
                          munId: 0, 
                          cliBanco: '',
                          cliTipoCuenta: '',
                          cliNumCuenta: '',
                          covNombre: '',
                          munDescripcion: ''

                      };
                      

    conv : number =2;
  celular: string = '3134156712';

  
  constructor( private usuarioService: UsuariosService,
               private convenioService: ConvenioService,
                  private _router: ActivatedRoute
    ) { 
      this.usuId =this._router.snapshot.paramMap.get( 'id' ) ;
      this.id = Number(this.usuId);
    }

  ngOnInit(): void {

    this.convenioService.getConveniobyId(this.id)
    .subscribe( (response) => {
    this.viewPerfil = response;
  });

}

}
