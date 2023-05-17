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

   code: string| null='';
   codCodigo: string | null='';
   id: string | null = '';

  cliSexo: string[]=['Hombre', 'Mujer'];


  miFormulario: FormGroup = this.fb.group(
    {
      cliCorreo: ['info@gmail.com', [Validators.required, Validators.email]],
      cliNombre: [' ', [Validators.required]],
      cliCedula: [' ', [ Validators.minLength(6)]],
      cliCelular: [' ',[ Validators.minLength(10)]],
    //  cliFecha: [' ',[ Validators.required]],
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

                this.code = this.activatedRoute.snapshot.paramMap.get('code');

                this.id = this.authService.getId();
                if(this.code){
                
                  this.codCodigo =  (this.code.substring(3));
                  this.codCodigo = this.codCodigo+"codbearer"+this.id;
                }

                
            }
  registrarCliente(){

    this.cliente  = Object.assign(this.cliente, this.miFormulario.value);
    console.log(this.miFormulario.value);
    console.log('el nombre',this.cliente.cliNombre);
    
    
    this.clienteService.saveCliente(this.cliente)
    .subscribe(response =>{
      
      this.cliente = response;
      console.log("El cliente en angular::",this.cliente);
    //  this.router.navigateByUrl('/userDashboard')
      this.codCodigo = this.codCodigo+"IDTOSPLIT"+this.cliente.cliId
      console.log("la cadena::", this.codCodigo);

      this.codigoService.updateCodigo(this.codCodigo)
      .subscribe(response =>this.router.navigateByUrl('/promocion'));
    });
/*
    console.log("El cliente guardado::", this.cliente);

    this.codCodigo = this.codCodigo+"|ID|"+this.cliente.cliId

    console.log("El cadena codCodigo::", this.codCodigo);
     
    this.codigoService.updateCodigo(this.codCodigo)
    .subscribe(response =>this.router.navigateByUrl('/userDashboard'));
  */



  }


}
