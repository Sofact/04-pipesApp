import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvenioService } from 'src/app/services/convenio.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ViewPerfil } from 'src/app/shared/models/ViewPerfil';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {


  usuId: string | null ='';
  id: number = 0;
  miVariable: number = 0;

  viewPerfil:  ViewPerfil = {

                          usuId: 0,
                          usuCorreo: '',
                          usuNombre: '',
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
      this.miVariable = Number(localStorage.getItem('id'));
    }

  ngOnInit(): void {

    this.convenioService.getConveniobyId(this.miVariable)
    .subscribe( (response) => {
    this.viewPerfil = response;
    console.log(response);
  });

}

}