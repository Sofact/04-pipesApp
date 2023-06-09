import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CodigosService } from 'src/app/services/codigos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-clientes',
  templateUrl: './login-clientes.component.html'
})
export class LoginClientesComponent  {


  code:string | null='';
  isValid: boolean= true;
  codCodigo: string | null='';

  miFormulario: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }
  );

constructor( private fb: FormBuilder,
             private authService: AuthService,
             private route: ActivatedRoute,
             private codigoService: CodigosService,
              private router: Router) {

                this.code =this.route.snapshot.paramMap.get('code');
/*
              console.log("Estamos bien");
                if(this.authService.isLogin()){
                  console.log("islogin");
                  this.router.navigate(['/registro/'+this.code]);
                }else{
                  console.log("No login");
                  this.router.navigate(['loginCliente/'+this.code]);

                 
                }
                */
              }
              
login(){

  if(this.code){

      this.authService.login(this.miFormulario.value.email, this.miFormulario.value.password)
      .subscribe(
        
        (resp: any) => {

        
        console.log(resp);
        if(!resp.error && resp){

          console.log("Ingreso al submit::::", resp);

          if(this.code){
                
            this.codCodigo =  (this.code.substring(3));
            console.log("codCodigo::", this.codCodigo);
            
          }

          this.codigoService.validarCodigo(this.codCodigo)
            .subscribe(response => {
              this.isValid = response;
              console.log("isvalid::", response);
              if(this.isValid){
            
                this.router.navigate(['/registro/'+this.code]);
              }else{
                Swal.fire( 'Atención','El codigo escaneado ya fue redimido o es invalido', 'warning');
                this.router.navigate(['/auth/loginCliente']);
              }

            })

            

          

        }else{
          if(resp.error.error == 'Unauthorized'){
            Swal.fire( 'Atención','El correo o contraseña ingresados son incorrectos <br><a href="/auth/restaurar">Olvidaste tu contraseña?</a>', 'warning');
            console.log("unauthorized")
          }
        }
        
          })

  }else{
        this.authService.login(this.miFormulario.value.email, this.miFormulario.value.password)
        .subscribe(
          
          (resp: any) => {

          
          console.log(resp);
          if(!resp.error && resp){
            console.log("Ingreso al submit::::", resp);
            this.router.navigate(['/userDashboard']);

          }else{
            if(resp.error.error == 'Unauthorized'){
              Swal.fire( 'Atención','El correo o contraseña ingresados son incorrectos <br><a href="/auth/restaurar">Olvidaste tu contraseña?</a>', 'warning');
               console.log("unauthorized")
            }
          }
          
        })
  }
  
}



}
