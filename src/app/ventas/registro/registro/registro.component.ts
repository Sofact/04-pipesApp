import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/Cliente';
import { ClientesService } from '../../../services/clientes.service';
import { CodigosService } from '../../../services/codigos.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  cliente: Cliente = {cliId : 0,
                      cliNombre : '',
                      cliIdentificacion: '',
                      cliCorreo : '',
                      cliCedula : '',
                      cliCelular:'',
                      cliFecha : '',
                      cliSexo: '' };

   code: string='';
   codCodigo: string='';
   id: string | null = '';

  cliSexo: string[]=['Hombre', 'Mujer'];


  miFormulario: FormGroup = this.fb.group(
    {
      cliCorreo: ['info@gmail.com', [Validators.required, Validators.email]],
      cliNombre: [' ', [Validators.required]],
      cliCedula: [' ', [ Validators.minLength(6)]],
      cliCelular: [' ',[ Validators.minLength(10)]],
      cliFecha: [' ',[ Validators.required]],
      cliSexo: ['', [ Validators.required]]
      
    }
  );

constructor(  private clienteService :ClientesService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private codigoService: CodigosService,
              private fb: FormBuilder,
              private router: Router) { }

              ngOnInit() {

                this.id = this.authService.getId();
               
                this.activatedRoute.queryParams.subscribe( (params) => {
                
                  this.code = params['code'];
                  this.codCodigo =  (this.code.substring(3));
                 this.codCodigo = this.codCodigo+"codbearer"+this.id;
                })
            }
  login(){

    this.cliente  = Object.assign(this.cliente, this.miFormulario.value);
    console.log(this.miFormulario.value);
    console.log('el nombre',this.cliente.cliNombre);
    
    
    this.codigoService.updateCodigo(this.codCodigo)
    .subscribe(response =>this.router.navigateByUrl('/userDashboard'));
  


    this.clienteService.saveCliente(this.cliente)
    .subscribe(response =>this.router.navigateByUrl('/userDashboard'));


  }


}
